import { ClothingItem } from "@shared/schema";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { colorSuggestions } from "@/lib/colorCoordination";

interface SelectedOutfit {
  suit: ClothingItem | null;
  shirt: ClothingItem | null;
  tie: ClothingItem | null;
  vest: ClothingItem | null;
  shoes: ClothingItem | null;
}

interface ColorSuggestionsProps {
  selectedOutfit: SelectedOutfit;
}

export default function ColorSuggestions({ selectedOutfit }: ColorSuggestionsProps) {
  const getSuggestions = () => {
    if (selectedOutfit.suit) {
      const suggestions = colorSuggestions[selectedOutfit.suit.color];
      if (suggestions) {
        return suggestions;
      }
    }
    return null;
  };

  const suggestions = getSuggestions();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Sugerencias de Combinación</CardTitle>
      </CardHeader>
      <CardContent>
        {suggestions ? (
          <div className="bg-gradient-to-r from-accent/20 to-accent/10 rounded-lg p-4 animate-pulse">
            <h5 className="font-medium mb-2 text-accent-foreground">Combinaciones Recomendadas</h5>
            <p className="text-sm mb-3 text-accent-foreground/80">{suggestions.description}</p>
            <div className="space-y-2 text-sm">
              <div>
                <strong>Camisas:</strong> {suggestions.shirt.join(', ')}
              </div>
              <div>
                <strong>Corbatas:</strong> {suggestions.tie.join(', ')}
              </div>
              <div>
                <strong>Chalecos:</strong> {suggestions.vest.join(', ')}
              </div>
              <div>
                <strong>Zapatos:</strong> {suggestions.shoes.join(', ')}
              </div>
            </div>
          </div>
        ) : (
          <p className="text-sm text-muted-foreground">
            Selecciona un traje para ver sugerencias de colores que combinen bien.
          </p>
        )}
      </CardContent>
    </Card>
  );
}
