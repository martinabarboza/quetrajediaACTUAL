import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { isUnauthorizedError } from "@/lib/authUtils";
import { computeUserSize, getSizeDescription, getBMIInterpretation } from "@shared/sizingUtils";

export default function ProfileSetup() {
  const { user, isLoading } = useAuth();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    shoeSize: "",
    eventType: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sizeRecommendation, setSizeRecommendation] = useState<any>(null);

  useEffect(() => {
    if (!isLoading && !user) {
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

    if (user && user.isProfileComplete) {
      window.location.href = "/";
    }
  }, [user, isLoading, toast]);

  // Calculate size recommendations when height or weight changes
  useEffect(() => {
    if (formData.height && formData.weight) {
      const height = parseInt(formData.height);
      const weight = parseInt(formData.weight);
      
      if (height >= 150 && height <= 210 && weight >= 50 && weight <= 150) {
        const recommendation = computeUserSize({ height, weight });
        setSizeRecommendation(recommendation);
      } else {
        setSizeRecommendation(null);
      }
    } else {
      setSizeRecommendation(null);
    }
  }, [formData.height, formData.weight]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.height || !formData.weight || !formData.shoeSize || !formData.eventType) {
      toast({
        title: "Error",
        description: "Por favor completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      await apiRequest("PATCH", "/api/user/profile", {
        height: parseInt(formData.height),
        weight: parseInt(formData.weight),
        shoeSize: formData.shoeSize,
        eventType: formData.eventType,
        isProfileComplete: true,
      });
      
      toast({
        title: "¡Perfil completado!",
        description: "Ya puedes comenzar a personalizar tu outfit",
      });
      
      window.location.href = "/";
    } catch (error) {
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
        description: "No se pudo guardar el perfil. Inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Configuración de Perfil</CardTitle>
          <p className="text-center text-muted-foreground">
            Necesitamos algunos datos para personalizar tu experiencia
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="height">Altura (cm)</Label>
                <Input
                  id="height"
                  type="number"
                  placeholder="175"
                  min="150"
                  max="210"
                  value={formData.height}
                  onChange={(e) => setFormData({ ...formData, height: e.target.value })}
                  data-testid="input-height"
                />
              </div>
              <div>
                <Label htmlFor="weight">Peso (kg)</Label>
                <Input
                  id="weight"
                  type="number"
                  placeholder="70"
                  min="50"
                  max="150"
                  value={formData.weight}
                  onChange={(e) => setFormData({ ...formData, weight: e.target.value })}
                  data-testid="input-weight"
                />
              </div>
            </div>
            
            {/* Size Recommendation Display */}
            {sizeRecommendation && (
              <div className="p-4 bg-blue-50 dark:bg-blue-950 rounded-lg border border-blue-200 dark:border-blue-800">
                <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
                  🎯 Tallas Recomendadas
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-blue-700 dark:text-blue-300">Talle general:</span>
                    <span className="font-medium text-blue-900 dark:text-blue-100">
                      {getSizeDescription(sizeRecommendation)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-blue-700 dark:text-blue-300">BMI:</span>
                    <span className="font-medium text-blue-900 dark:text-blue-100">
                      {sizeRecommendation.bmi} ({getBMIInterpretation(sizeRecommendation.bmi)})
                    </span>
                  </div>
                  {sizeRecommendation.isChild && (
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                      💡 Talla infantil calculada según altura y complexión
                    </div>
                  )}
                  {!sizeRecommendation.isChild && (
                    <div className="text-xs text-blue-600 dark:text-blue-400 mt-2">
                      💡 Talla adulta calculada según medidas corporales
                    </div>
                  )}
                </div>
              </div>
            )}
            
            <div>
              <Label htmlFor="shoeSize">Talla de Zapato</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, shoeSize: value })}>
                <SelectTrigger data-testid="select-shoe-size">
                  <SelectValue placeholder="Seleccionar talla" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="38">38</SelectItem>
                  <SelectItem value="39">39</SelectItem>
                  <SelectItem value="40">40</SelectItem>
                  <SelectItem value="41">41</SelectItem>
                  <SelectItem value="42">42</SelectItem>
                  <SelectItem value="43">43</SelectItem>
                  <SelectItem value="44">44</SelectItem>
                  <SelectItem value="45">45</SelectItem>
                  <SelectItem value="46">46</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div>
              <Label htmlFor="eventType">Tipo de Evento</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, eventType: value })}>
                <SelectTrigger data-testid="select-event-type">
                  <SelectValue placeholder="Seleccionar evento" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="formal">Formal (Bodas, Galas, Negocios)</SelectItem>
                  <SelectItem value="casual">Casual (Fiestas, Cenas, Social)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <Button 
              type="submit" 
              className="w-full" 
              disabled={isSubmitting}
              data-testid="button-save-profile"
            >
              {isSubmitting ? "Guardando..." : "Guardar y Continuar"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
