import { useState, useEffect } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";
import { useAuth } from "@/hooks/useAuth";
import { apiRequest } from "@/lib/queryClient";
import { ClothingItem } from "@shared/schema";
import ClothingGrid from "./clothing-grid";
import OutfitPreview from "./outfit-preview";
import ColorSuggestions from "./color-suggestions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { isUnauthorizedError } from "@/lib/authUtils";

interface SelectedOutfit {
  suit: ClothingItem | null;
  shirt: ClothingItem | null;
  tie: ClothingItem | null;
  vest: ClothingItem | null;
  shoes: ClothingItem | null;
}

const clothingTypes = [
  { id: 'suits', label: 'Trajes', type: 'suit' },
  { id: 'shirts', label: 'Camisas', type: 'shirt' },
  { id: 'ties', label: 'Corbatas y Moños', type: 'tie' },
  { id: 'vests', label: 'Chalecos', type: 'vest' },
  { id: 'shoes', label: 'Zapatos', type: 'shoes' },
];

export default function OutfitCustomizer() {
  const { user } = useAuth();
  const { toast } = useToast();
  const queryClient = useQueryClient();
  
  const [selectedOutfit, setSelectedOutfit] = useState<SelectedOutfit>({
    suit: null,
    shirt: null,
    tie: null,
    vest: null,
    shoes: null,
  });
  
  const [openCategories, setOpenCategories] = useState<string[]>(['suits']);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [eventDate, setEventDate] = useState("");
  const [comments, setComments] = useState("");

  // Fetch clothing items
  const { data: clothingItems = [], isLoading } = useQuery({
    queryKey: ['/api/clothing'],
    enabled: !!user,
  });

  // Create outfit mutation
  const createOutfitMutation = useMutation({
    mutationFn: async (outfitData: any) => {
      const response = await apiRequest("POST", "/api/outfits", outfitData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "¡Outfit guardado!",
        description: "Tu outfit se ha guardado correctamente",
      });
      queryClient.invalidateQueries({ queryKey: ['/api/outfits'] });
    },
    onError: (error) => {
      if (isUnauthorizedError(error as Error)) {
        toast({
          title: "No autorizado",
          description: "Redirigiendo al inicio de sesión...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "No se pudo guardar el outfit",
        variant: "destructive",
      });
    },
  });

  // Send outfit request mutation
  const sendRequestMutation = useMutation({
    mutationFn: async (requestData: any) => {
      const response = await apiRequest("POST", "/api/outfit-request", requestData);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "¡Solicitud enviada!",
        description: "Tu solicitud de alquiler ha sido enviada correctamente",
      });
      // Clear the form
      setEventDate("");
      setComments("");
    },
    onError: (error) => {
      if (isUnauthorizedError(error as Error)) {
        toast({
          title: "No autorizado",
          description: "Redirigiendo al inicio de sesión...",
          variant: "destructive",
        });
        setTimeout(() => {
          window.location.href = "/api/login";
        }, 500);
        return;
      }
      toast({
        title: "Error",
        description: "No se pudo enviar la solicitud",
        variant: "destructive",
      });
    },
  });

  const toggleCategory = (categoryId: string) => {
    setOpenCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const selectClothing = (item: ClothingItem) => {
    setSelectedOutfit(prev => ({
      ...prev,
      [item.type]: item,
    }));
  };

  const clearOutfit = () => {
    setSelectedOutfit({
      suit: null,
      shirt: null,
      tie: null,
      vest: null,
      shoes: null,
    });
  };

  const saveOutfit = async () => {
    const hasItems = Object.values(selectedOutfit).some(item => item !== null);
    if (!hasItems) {
      toast({
        title: "Error",
        description: "Selecciona al menos una prenda para guardar el outfit",
        variant: "destructive",
      });
      return;
    }

    const totalPrice = Object.values(selectedOutfit)
      .filter(item => item !== null)
      .reduce((sum, item) => sum + parseFloat(item!.price), 0);

    await createOutfitMutation.mutateAsync({
      suitId: selectedOutfit.suit?.id || null,
      shirtId: selectedOutfit.shirt?.id || null,
      tieId: selectedOutfit.tie?.id || null,
      vestId: selectedOutfit.vest?.id || null,
      shoesId: selectedOutfit.shoes?.id || null,
      totalPrice: totalPrice.toString(),
      status: 'draft',
    });
  };

  const sendOutfitRequest = async () => {
    const hasItems = Object.values(selectedOutfit).some(item => item !== null);
    if (!hasItems) {
      toast({
        title: "Error",
        description: "Selecciona al menos una prenda para enviar la solicitud",
        variant: "destructive",
      });
      return;
    }

    if (!eventDate) {
      toast({
        title: "Error",
        description: "Por favor selecciona la fecha del evento",
        variant: "destructive",
      });
      return;
    }

    // First save the outfit
    const totalPrice = Object.values(selectedOutfit)
      .filter(item => item !== null)
      .reduce((sum, item) => sum + parseFloat(item!.price), 0);

    const outfit = await createOutfitMutation.mutateAsync({
      suitId: selectedOutfit.suit?.id || null,
      shirtId: selectedOutfit.shirt?.id || null,
      tieId: selectedOutfit.tie?.id || null,
      vestId: selectedOutfit.vest?.id || null,
      shoesId: selectedOutfit.shoes?.id || null,
      totalPrice: totalPrice.toString(),
      status: 'draft',
    });

    // Then send the request
    await sendRequestMutation.mutateAsync({
      outfitId: outfit.id,
      eventDate,
      comments,
    });
  };

  const getSelectedItems = () => {
    return Object.entries(selectedOutfit)
      .filter(([_, item]) => item !== null)
      .map(([type, item]) => ({ type, item: item! }));
  };

  const getTotalPrice = () => {
    return Object.values(selectedOutfit)
      .filter(item => item !== null)
      .reduce((sum, item) => sum + parseFloat(item!.price), 0);
  };

  const getTypeLabel = (type: string) => {
    const labels: Record<string, string> = {
      suit: 'Traje',
      shirt: 'Camisa',
      tie: 'Corbata',
      vest: 'Chaleco',
      shoes: 'Zapatos'
    };
    return labels[type] || type;
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-primary"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Sidebar */}
        <div className={`lg:w-1/3 bg-card border border-border rounded-lg p-4 ${
          isMobileSidebarOpen ? 'fixed inset-0 z-40 lg:relative' : 'hidden lg:block'
        }`}>
          <div className="flex items-center justify-between mb-4 lg:hidden">
            <h3 className="font-semibold">Categorías</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileSidebarOpen(false)}
              data-testid="button-close-sidebar"
            >
              <i className="fas fa-times"></i>
            </Button>
          </div>
          
          <div className="space-y-4">
            {clothingTypes.map(({ id, label, type }) => (
              <Collapsible
                key={id}
                open={openCategories.includes(id)}
                onOpenChange={() => toggleCategory(id)}
              >
                <CollapsibleTrigger asChild>
                  <Button
                    variant="secondary"
                    className="w-full justify-between"
                    data-testid={`button-toggle-${id}`}
                  >
                    <span className="font-medium">{label}</span>
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      openCategories.includes(id) ? 'rotate-180' : ''
                    }`} />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent className="mt-2">
                  <ClothingGrid
                    items={clothingItems.filter((item: ClothingItem) => item.type === type)}
                    selectedItem={selectedOutfit[type as keyof SelectedOutfit]}
                    onSelectItem={selectClothing}
                    userShoeSize={user?.shoeSize}
                  />
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </div>

        {/* Center - Outfit Preview */}
        <div className="lg:w-1/3">
          <OutfitPreview selectedOutfit={selectedOutfit} />
          
          <div className="mt-4 space-y-3">
            <Button
              variant="secondary"
              className="w-full"
              onClick={clearOutfit}
              data-testid="button-clear-outfit"
            >
              <i className="fas fa-trash mr-2"></i>
              Limpiar Outfit
            </Button>
            <Button
              variant="outline"
              className="w-full"
              onClick={saveOutfit}
              disabled={createOutfitMutation.isPending}
              data-testid="button-save-outfit"
            >
              <i className="fas fa-save mr-2"></i>
              {createOutfitMutation.isPending ? "Guardando..." : "Guardar Outfit"}
            </Button>
          </div>

          {/* Mobile Sidebar Toggle */}
          <Button
            className="lg:hidden fixed bottom-4 left-4 z-30 rounded-full p-3"
            onClick={() => setIsMobileSidebarOpen(true)}
            data-testid="button-open-sidebar"
          >
            <i className="fas fa-tshirt"></i>
          </Button>
        </div>

        {/* Right Panel - Suggestions and Actions */}
        <div className="lg:w-1/3 space-y-4">
          {/* Color Suggestions */}
          <ColorSuggestions selectedOutfit={selectedOutfit} />

          {/* Selected Items Summary */}
          <Card>
            <CardHeader>
              <CardTitle>Prendas Seleccionadas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2" data-testid="selected-items-list">
                {getSelectedItems().length === 0 ? (
                  <p className="text-sm text-muted-foreground">Ninguna prenda seleccionada</p>
                ) : (
                  getSelectedItems().map(({ type, item }) => (
                    <div key={type} className="text-sm">
                      {getTypeLabel(type)}: {item.name}
                    </div>
                  ))
                )}
              </div>
              
              <div className="mt-4 pt-4 border-t border-border">
                <div className="text-sm text-muted-foreground mb-2">Total Estimado:</div>
                <div className="text-lg font-bold text-primary" data-testid="text-total-price">
                  ${getTotalPrice()}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Final Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Solicitar Presupuesto</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label htmlFor="eventDate">Fecha del Evento</Label>
                <Input
                  id="eventDate"
                  type="date"
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  data-testid="input-event-date"
                />
              </div>
              <div>
                <Label htmlFor="comments">Comentarios Adicionales</Label>
                <Textarea
                  id="comments"
                  rows={3}
                  placeholder="Cualquier información adicional..."
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  data-testid="textarea-comments"
                />
              </div>
              <Button
                className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                onClick={sendOutfitRequest}
                disabled={sendRequestMutation.isPending}
                data-testid="button-send-request"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                {sendRequestMutation.isPending ? "Enviando..." : "Enviar Solicitud de Alquiler"}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
