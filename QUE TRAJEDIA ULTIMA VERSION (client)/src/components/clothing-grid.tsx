import { ClothingItem } from "@shared/schema";
import { Button } from "@/components/ui/button";

interface ClothingGridProps {
  items: ClothingItem[];
  selectedItem: ClothingItem | null;
  onSelectItem: (item: ClothingItem) => void;
  userShoeSize?: string;
}

export default function ClothingGrid({ items, selectedItem, onSelectItem, userShoeSize }: ClothingGridProps) {
  const getSizeIndicator = (item: ClothingItem) => {
    if (item.type === 'shoes' && userShoeSize) {
      const sizes = item.sizes as string[] || [];
      const hasUserSize = sizes.includes(userShoeSize);
      return hasUserSize ? 'size-available' : 'size-unavailable';
    }
    
    // For other clothing types, we'll assume availability based on sizes array
    const sizes = item.sizes as string[] || [];
    if (sizes.length > 5) return 'size-available';
    if (sizes.length > 2) return 'size-limited';
    return 'size-unavailable';
  };

  const getSizeTitle = (item: ClothingItem) => {
    if (item.type === 'shoes' && userShoeSize) {
      const sizes = item.sizes as string[] || [];
      const hasUserSize = sizes.includes(userShoeSize);
      return hasUserSize ? 'Disponible en tu talla' : 'No disponible en tu talla';
    }
    
    const sizes = item.sizes as string[] || [];
    if (sizes.length > 5) return 'Disponible en tu talla';
    if (sizes.length > 2) return 'Pocas unidades disponibles';
    return 'No disponible en tu talla';
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {items.map((item) => (
        <Button
          key={item.id}
          variant="ghost"
          className={`p-3 h-auto flex flex-col items-center space-y-2 border ${
            selectedItem?.id === item.id 
              ? 'border-primary bg-primary/5' 
              : 'border-border hover:border-primary'
          } transition-all duration-200 hover:shadow-md hover:-translate-y-0.5`}
          onClick={() => onSelectItem(item)}
          data-testid={`clothing-item-${item.id}`}
        >
          {item.imageUrl && (
            <img
              src={item.imageUrl}
              alt={item.name}
              className="w-full h-16 object-cover rounded"
            />
          )}
          <div className="text-center">
            <span className="text-xs font-medium">{item.name}</span>
            <div className="flex items-center justify-center mt-1">
              <span className="text-xs text-muted-foreground mr-1">${item.price}</span>
              <span 
                className={`w-2 h-2 rounded-full ${getSizeIndicator(item)}`}
                title={getSizeTitle(item)}
              ></span>
            </div>
          </div>
        </Button>
      ))}
    </div>
  );
}
