export interface ColorSuggestion {
  shirt: string[];
  tie: string[];
  vest: string[];
  shoes: string[];
  description: string;
}

export const colorSuggestions: Record<string, ColorSuggestion> = {
  'navy': {
    shirt: ['Blanco', 'Celeste', 'Crema', 'Rayada'],
    tie: ['Azul con Puntos', 'Roja de Seda', 'Dorada', 'Borgoña'],
    vest: ['Azul Marino', 'Gris', 'Negro'],
    shoes: ['Oxford Negro', 'Brogue Café', 'Mocasines Negros'],
    description: 'Azul marino es versátil y combina con colores clásicos'
  },
  'charcoal': {
    shirt: ['Blanco', 'Celeste', 'Lavanda', 'Gris'],
    tie: ['Roja de Seda', 'Borgoña', 'Azul con Puntos', 'Verde Rayada'],
    vest: ['Gris', 'Negro', 'Azul Marino'],
    shoes: ['Oxford Negro', 'Brogue Café', 'Mocasines Negros'],
    description: 'Gris carbón es elegante y profesional'
  },
  'black': {
    shirt: ['Blanco', 'Crema'],
    tie: ['Moño Negro', 'Roja de Seda', 'Dorada'],
    vest: ['Negro', 'Gris'],
    shoes: ['Oxford Negro', 'Mocasines Negros'],
    description: 'Negro es formal y sofisticado, ideal para eventos de gala'
  },
  'brown': {
    shirt: ['Blanco', 'Crema', 'Celeste'],
    tie: ['Borgoña', 'Verde Rayada', 'Dorada'],
    vest: ['Café', 'Gris', 'Negro'],
    shoes: ['Brogue Café', 'Oxford Negro'],
    description: 'Café es cálido y elegante, perfecto para eventos casuales'
  },
  'burgundy': {
    shirt: ['Blanco', 'Crema', 'Gris'],
    tie: ['Borgoña', 'Dorada', 'Azul con Puntos'],
    vest: ['Borgoña', 'Gris', 'Negro'],
    shoes: ['Oxford Negro', 'Brogue Café'],
    description: 'Borgoña es rico y sofisticado, ideal para eventos formales'
  },
  'forest': {
    shirt: ['Blanco', 'Crema', 'Celeste'],
    tie: ['Verde Rayada', 'Borgoña', 'Dorada'],
    vest: ['Verde Bosque', 'Gris', 'Negro'],
    shoes: ['Brogue Café', 'Oxford Negro'],
    description: 'Verde bosque es único y elegante, perfecto para eventos especiales'
  }
};
