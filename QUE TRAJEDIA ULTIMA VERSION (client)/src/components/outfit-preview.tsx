import { ClothingItem } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface SelectedOutfit {
  suit: ClothingItem | null;
  shirt: ClothingItem | null;
  tie: ClothingItem | null;
  vest: ClothingItem | null;
  shoes: ClothingItem | null;
}

interface OutfitPreviewProps {
  selectedOutfit: SelectedOutfit;
}

export default function OutfitPreview({ selectedOutfit }: OutfitPreviewProps) {
  const hasAnySelection = Object.values(selectedOutfit).some(item => item !== null);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">Vista Previa del Outfit</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-96 bg-gradient-to-br from-background to-muted rounded-lg overflow-hidden">
          {!hasAnySelection ? (
            <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <i className="fas fa-user-tie text-6xl mb-4"></i>
                <p>Selecciona prendas para ver tu outfit</p>
              </div>
            </div>
          ) : (
            <div className="absolute inset-0" data-testid="outfit-preview">
              {/* Base layer - would be a mannequin/silhouette in a real app */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-80 bg-muted-foreground/20 rounded-full"></div>
              </div>
              
              {/* Clothing layers - in a real app these would be actual clothing images */}
              {selectedOutfit.suit && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {selectedOutfit.suit.imageUrl ? (
                    <img
                      src={selectedOutfit.suit.imageUrl}
                      alt={selectedOutfit.suit.name}
                      className="h-80 object-contain"
                      style={{ zIndex: 2 }}
                    />
                  ) : (
                    <div 
                      className="w-32 h-64 rounded-lg border-2 border-primary bg-primary/10 flex items-center justify-center"
                      style={{ zIndex: 2 }}
                    >
                      <span className="text-xs text-center">{selectedOutfit.suit.name}</span>
                    </div>
                  )}
                </div>
              )}
              
              {selectedOutfit.shirt && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {selectedOutfit.shirt.imageUrl ? (
                    <img
                      src={selectedOutfit.shirt.imageUrl}
                      alt={selectedOutfit.shirt.name}
                      className="h-80 object-contain"
                      style={{ zIndex: 3 }}
                    />
                  ) : (
                    <div 
                      className="w-28 h-48 rounded-lg border border-secondary bg-secondary/20 flex items-center justify-center"
                      style={{ zIndex: 3 }}
                    >
                      <span className="text-xs text-center">{selectedOutfit.shirt.name}</span>
                    </div>
                  )}
                </div>
              )}
              
              {selectedOutfit.vest && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {selectedOutfit.vest.imageUrl ? (
                    <img
                      src={selectedOutfit.vest.imageUrl}
                      alt={selectedOutfit.vest.name}
                      className="h-80 object-contain"
                      style={{ zIndex: 4 }}
                    />
                  ) : (
                    <div 
                      className="w-24 h-40 rounded-lg border border-accent bg-accent/20 flex items-center justify-center"
                      style={{ zIndex: 4 }}
                    >
                      <span className="text-xs text-center">{selectedOutfit.vest.name}</span>
                    </div>
                  )}
                </div>
              )}
              
              {selectedOutfit.tie && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {selectedOutfit.tie.imageUrl ? (
                    <img
                      src={selectedOutfit.tie.imageUrl}
                      alt={selectedOutfit.tie.name}
                      className="h-80 object-contain"
                      style={{ zIndex: 5 }}
                    />
                  ) : (
                    <div 
                      className="w-4 h-32 rounded border border-destructive bg-destructive/20 flex items-center justify-center"
                      style={{ zIndex: 5 }}
                    >
                      <span className="text-xs text-center transform -rotate-90">{selectedOutfit.tie.name}</span>
                    </div>
                  )}
                </div>
              )}
              
              {selectedOutfit.shoes && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                  {selectedOutfit.shoes.imageUrl ? (
                    <img
                      src={selectedOutfit.shoes.imageUrl}
                      alt={selectedOutfit.shoes.name}
                      className="h-16 object-contain"
                      style={{ zIndex: 6 }}
                    />
                  ) : (
                    <div 
                      className="w-16 h-8 rounded border border-muted bg-muted flex items-center justify-center"
                      style={{ zIndex: 6 }}
                    >
                      <span className="text-xs">{selectedOutfit.shoes.name}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
