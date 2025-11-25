import { ClothingItem } from "@shared/schema";

// This would typically come from your database via API
// For development purposes, you can use this to seed your database
export const clothingData: Omit<ClothingItem, 'id' | 'createdAt'>[] = [
  // Suits (20 items)
  {
    type: 'suit',
    name: 'Traje Azul Marino Clásico',
    color: 'navy',
    description: 'Traje elegante de corte clásico en azul marino',
    price: '250.00',
    imageUrl: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    eventTypes: ['formal', 'casual'],
    isAvailable: true,
  },
  {
    type: 'suit',
    name: 'Traje Gris Carbón',
    color: 'charcoal',
    description: 'Traje moderno en gris carbón, perfecto para negocios',
    price: '275.00',
    imageUrl: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=300&h=400&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    eventTypes: ['formal'],
    isAvailable: true,
  },
  {
    type: 'suit',
    name: 'Esmoquin Negro',
    color: 'black',
    description: 'Esmoquin clásico para eventos de gala',
    price: '350.00',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
    sizes: ['M', 'L', 'XL'],
    eventTypes: ['formal'],
    isAvailable: true,
  },
  // Add more suits...
  
  // Shirts (20 items)
  {
    type: 'shirt',
    name: 'Camisa Blanca Clásica',
    color: 'white',
    description: 'Camisa blanca de algodón egipcio',
    price: '75.00',
    imageUrl: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop',
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    eventTypes: ['formal', 'casual'],
    isAvailable: true,
  },
  {
    type: 'shirt',
    name: 'Camisa Celeste',
    color: 'light-blue',
    description: 'Camisa celeste de corte moderno',
    price: '80.00',
    imageUrl: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=400&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    eventTypes: ['formal', 'casual'],
    isAvailable: true,
  },
  // Add more shirts...
  
  // Ties (50 items)
  {
    type: 'tie',
    name: 'Corbata Azul con Puntos',
    color: 'navy-dots',
    description: 'Corbata azul marino con puntos blancos',
    price: '45.00',
    imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
    sizes: ['Regular'],
    eventTypes: ['formal', 'casual'],
    isAvailable: true,
  },
  {
    type: 'tie',
    name: 'Corbata Roja de Seda',
    color: 'red-silk',
    description: 'Corbata roja de seda italiana',
    price: '60.00',
    imageUrl: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
    sizes: ['Regular'],
    eventTypes: ['formal'],
    isAvailable: true,
  },
  // Add more ties...
  
  // Vests (20 items)
  {
    type: 'vest',
    name: 'Chaleco Azul Marino',
    color: 'navy',
    description: 'Chaleco azul marino de tres piezas',
    price: '120.00',
    imageUrl: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=300&h=400&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    eventTypes: ['formal'],
    isAvailable: true,
  },
  {
    type: 'vest',
    name: 'Chaleco Gris',
    color: 'gray',
    description: 'Chaleco gris elegante',
    price: '110.00',
    imageUrl: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&h=400&fit=crop',
    sizes: ['S', 'M', 'L', 'XL'],
    eventTypes: ['formal', 'casual'],
    isAvailable: true,
  },
  // Add more vests...
  
  // Shoes (10 items)
  {
    type: 'shoes',
    name: 'Oxford Negro Clásico',
    color: 'black-oxford',
    description: 'Zapatos Oxford negros de cuero',
    price: '150.00',
    imageUrl: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=400&fit=crop',
    sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
    eventTypes: ['formal'],
    isAvailable: true,
  },
  {
    type: 'shoes',
    name: 'Brogue Café',
    color: 'brown-brogue',
    description: 'Zapatos brogue café de cuero italiano',
    price: '175.00',
    imageUrl: 'https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?w=300&h=400&fit=crop',
    sizes: ['39', '40', '41', '42', '43', '44'],
    eventTypes: ['formal', 'casual'],
    isAvailable: true,
  },
  // Add more shoes...
];
