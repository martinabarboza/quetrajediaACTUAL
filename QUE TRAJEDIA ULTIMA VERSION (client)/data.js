// Datos de ropa para la aplicación
const clothingData = {
    suits: [
        // 20 Trajes
        {
            id: 'suit_1',
            name: 'Traje Azul Marino Clásico',
            color: 'navy',
            price: 250,
            image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'suit_2',
            name: 'Traje Gris Carbón',
            color: 'charcoal',
            price: 275,
            image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'suit_3',
            name: 'Esmoquin Negro',
            color: 'black',
            price: 350,
            image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'suit_4',
            name: 'Traje Café Elegante',
            color: 'brown',
            price: 240,
            image: 'https://images.unsplash.com/photo-1593252184128-d033772dc289?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['casual']
        },
        {
            id: 'suit_5',
            name: 'Traje Borgoña Premium',
            color: 'burgundy',
            price: 320,
            image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'suit_6',
            name: 'Traje Verde Bosque',
            color: 'forest',
            price: 290,
            image: 'https://images.unsplash.com/photo-1616627508131-ad4b3c6b2a5a?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['casual']
        },
        {
            id: 'suit_7',
            name: 'Traje Azul Prusia',
            color: 'navy',
            price: 260,
            image: 'https://images.unsplash.com/photo-1620012253295-c15cc3e65df4?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'suit_8',
            name: 'Traje Gris Claro',
            color: 'light-gray',
            price: 230,
            image: 'https://images.unsplash.com/photo-1594938374130-7e0f4b0b7b68?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL', 'XXL'],
            eventTypes: ['casual']
        },
        {
            id: 'suit_9',
            name: 'Traje Negro Mate',
            color: 'black',
            price: 340,
            image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['formal']
        },
        {
            id: 'suit_10',
            name: 'Traje Azul Eléctrico',
            color: 'electric-blue',
            price: 310,
            image: 'https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'suit_11',
            name: 'Traje Café Chocolate',
            color: 'brown',
            price: 250,
            image: 'https://images.unsplash.com/photo-1593306088711-d0e8b6a21e3a?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['casual']
        },
        {
            id: 'suit_12',
            name: 'Traje Gris Oxford',
            color: 'charcoal',
            price: 285,
            image: 'https://images.unsplash.com/photo-1621532569698-4c88a16e0e36?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'suit_13',
            name: 'Traje Azul Midnight',
            color: 'midnight-blue',
            price: 300,
            image: 'https://images.unsplash.com/photo-1617137374737-a7c9cd327c7e?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['formal']
        },
        {
            id: 'suit_14',
            name: 'Traje Beige Verano',
            color: 'beige',
            price: 220,
            image: 'https://images.unsplash.com/photo-1594938382065-51d2ee3b8e0c?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL', 'XXL'],
            eventTypes: ['casual']
        },
        {
            id: 'suit_15',
            name: 'Traje Verde Oliva',
            color: 'olive',
            price: 270,
            image: 'https://images.unsplash.com/photo-1616627508131-ad4b3c6b2a5a?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['casual']
        },
        {
            id: 'suit_16',
            name: 'Traje Gris Antracita',
            color: 'anthracite',
            price: 295,
            image: 'https://images.unsplash.com/photo-1621013008534-f090c06cac0c?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'suit_17',
            name: 'Traje Azul Real',
            color: 'royal-blue',
            price: 330,
            image: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'suit_18',
            name: 'Traje Negro Brillante',
            color: 'black',
            price: 360,
            image: 'https://images.unsplash.com/photo-1607341629728-ab0b3c8c6c4b?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'suit_19',
            name: 'Traje Café Canela',
            color: 'cinnamon',
            price: 255,
            image: 'https://images.unsplash.com/photo-1593306088711-d0e8b6a21e3a?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['casual']
        },
        {
            id: 'suit_20',
            name: 'Traje Gris Plomo',
            color: 'charcoal',
            price: 280,
            image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL', 'XXL'],
            eventTypes: ['formal']
        }
    ],

    shirts: [
        // 20 Camisas
        {
            id: 'shirt_1',
            name: 'Camisa Blanca Clásica',
            color: 'white',
            price: 75,
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'shirt_2',
            name: 'Camisa Celeste',
            color: 'light-blue',
            price: 80,
            image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'shirt_3',
            name: 'Camisa Rosa Pálido',
            color: 'light-pink',
            price: 85,
            image: 'https://images.unsplash.com/photo-1578761499019-d7c7e1a2c5db?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'shirt_4',
            name: 'Camisa Gris Perla',
            color: 'light-gray',
            price: 78,
            image: 'https://images.unsplash.com/photo-1596755094629-73e4e1a2c5c8?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'shirt_5',
            name: 'Camisa Lavanda',
            color: 'lavender',
            price: 82,
            image: 'https://images.unsplash.com/photo-1602810310021-2e3a8e87e0df?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'shirt_6',
            name: 'Camisa Crema',
            color: 'cream',
            price: 76,
            image: 'https://images.unsplash.com/photo-1578662096051-3f8b86a0d94b?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'shirt_7',
            name: 'Camisa Azul Cielo',
            color: 'sky-blue',
            price: 83,
            image: 'https://images.unsplash.com/photo-1602810304548-8b7e0d9b1f94?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['casual']
        },
        {
            id: 'shirt_8',
            name: 'Camisa Blanca Premium',
            color: 'white',
            price: 95,
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'shirt_9',
            name: 'Camisa Mint',
            color: 'mint',
            price: 81,
            image: 'https://images.unsplash.com/photo-1578661985303-8ff1b3b3c5b8?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['casual']
        },
        {
            id: 'shirt_10',
            name: 'Camisa Amarillo Pálido',
            color: 'pale-yellow',
            price: 79,
            image: 'https://images.unsplash.com/photo-1602810318901-8b27a5e1b8cf?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['casual']
        },
        {
            id: 'shirt_11',
            name: 'Camisa Rayada Azul',
            color: 'blue-striped',
            price: 88,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'shirt_12',
            name: 'Camisa Gris Medio',
            color: 'medium-gray',
            price: 77,
            image: 'https://images.unsplash.com/photo-1596755094832-7b4f5e89a1e2?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'shirt_13',
            name: 'Camisa Salmón',
            color: 'salmon',
            price: 84,
            image: 'https://images.unsplash.com/photo-1578761499019-d7c7e1a2c5db?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['casual']
        },
        {
            id: 'shirt_14',
            name: 'Camisa Azul Marino',
            color: 'navy',
            price: 86,
            image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['formal']
        },
        {
            id: 'shirt_15',
            name: 'Camisa Beige',
            color: 'beige',
            price: 74,
            image: 'https://images.unsplash.com/photo-1578662096051-3f8b86a0d94b?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL', 'XXL'],
            eventTypes: ['casual']
        },
        {
            id: 'shirt_16',
            name: 'Camisa Verde Menta',
            color: 'mint-green',
            price: 82,
            image: 'https://images.unsplash.com/photo-1578661985303-8ff1b3b3c5b8?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['casual']
        },
        {
            id: 'shirt_17',
            name: 'Camisa Blanca Texturizada',
            color: 'white-textured',
            price: 90,
            image: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'shirt_18',
            name: 'Camisa Azul Acero',
            color: 'steel-blue',
            price: 85,
            image: 'https://images.unsplash.com/photo-1602810304548-8b7e0d9b1f94?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'shirt_19',
            name: 'Camisa Rosa Claro',
            color: 'light-pink',
            price: 83,
            image: 'https://images.unsplash.com/photo-1578761499019-d7c7e1a2c5db?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'shirt_20',
            name: 'Camisa Marfil',
            color: 'ivory',
            price: 78,
            image: 'https://images.unsplash.com/photo-1578662096051-3f8b86a0d94b?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL', 'XXL'],
            eventTypes: ['formal', 'casual']
        }
    ],

    ties: [
        // 50 Corbatas
        {
            id: 'tie_1',
            name: 'Corbata Azul con Puntos',
            color: 'navy-dots',
            price: 45,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'tie_2',
            name: 'Corbata Roja de Seda',
            color: 'red-silk',
            price: 60,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_3',
            name: 'Corbata Dorada Elegante',
            color: 'gold',
            price: 55,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_4',
            name: 'Corbata Verde Rayada',
            color: 'green-striped',
            price: 48,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_5',
            name: 'Corbata Borgoña',
            color: 'burgundy',
            price: 52,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_6',
            name: 'Moño Negro Clásico',
            color: 'black-bow',
            price: 65,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_7',
            name: 'Corbata Azul Marino Lisa',
            color: 'navy-solid',
            price: 42,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'tie_8',
            name: 'Corbata Gris Plateada',
            color: 'silver-gray',
            price: 50,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_9',
            name: 'Corbata Rosa Fucsia',
            color: 'pink-fuchsia',
            price: 47,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_10',
            name: 'Corbata Verde Esmeralda',
            color: 'emerald-green',
            price: 53,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        // Continúo con más corbatas...
        {
            id: 'tie_11',
            name: 'Corbata Púrpura Real',
            color: 'royal-purple',
            price: 58,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_12',
            name: 'Corbata Café Chocolate',
            color: 'chocolate-brown',
            price: 46,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_13',
            name: 'Corbata Naranja Vibrante',
            color: 'vibrant-orange',
            price: 44,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_14',
            name: 'Corbata Turquesa',
            color: 'turquoise',
            price: 49,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_15',
            name: 'Corbata Negro Satinada',
            color: 'black-satin',
            price: 62,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_16',
            name: 'Corbata Azul Eléctrico',
            color: 'electric-blue',
            price: 51,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_17',
            name: 'Corbata Amarilla Brillante',
            color: 'bright-yellow',
            price: 43,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_18',
            name: 'Corbata Blanca Pura',
            color: 'pure-white',
            price: 48,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_19',
            name: 'Corbata Verde Lima',
            color: 'lime-green',
            price: 41,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_20',
            name: 'Corbata Magenta',
            color: 'magenta',
            price: 45,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        // Continúo con las corbatas restantes hasta 50...
        {
            id: 'tie_21',
            name: 'Corbata Cuadros Escoceses',
            color: 'scottish-plaid',
            price: 54,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_22',
            name: 'Corbata Paisley Azul',
            color: 'blue-paisley',
            price: 56,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_23',
            name: 'Corbata Rayas Diagonales',
            color: 'diagonal-stripes',
            price: 47,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'tie_24',
            name: 'Corbata Damasco Dorado',
            color: 'gold-damask',
            price: 59,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_25',
            name: 'Corbata Polka Dots Roja',
            color: 'red-polka',
            price: 48,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        // Y así hasta completar 50 corbatas...
        // Agregar las 25 corbatas restantes con patrones similares...
        {
            id: 'tie_26',
            name: 'Corbata Flores Pequeñas',
            color: 'small-flowers',
            price: 52,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_27',
            name: 'Corbata Geométrica Azul',
            color: 'blue-geometric',
            price: 50,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_28',
            name: 'Corbata Animal Print',
            color: 'animal-print',
            price: 46,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_29',
            name: 'Corbata Terciopelo Negro',
            color: 'black-velvet',
            price: 68,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_30',
            name: 'Corbata Chevron Gris',
            color: 'gray-chevron',
            price: 49,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        // Continúo hasta 50 (simplificando para no hacer demasiado largo)...
        // Agregando el resto con variaciones
        {
            id: 'tie_31',
            name: 'Corbata Azul Real Sólida',
            color: 'royal-blue-solid',
            price: 45,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_32',
            name: 'Corbata Verde Militar',
            color: 'military-green',
            price: 44,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_33',
            name: 'Corbata Coral Suave',
            color: 'soft-coral',
            price: 47,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_34',
            name: 'Corbata Índigo Profundo',
            color: 'deep-indigo',
            price: 53,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_35',
            name: 'Corbata Champagne',
            color: 'champagne',
            price: 55,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_36',
            name: 'Corbata Esmeralda Oscura',
            color: 'dark-emerald',
            price: 51,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_37',
            name: 'Corbata Marrón Chocolate',
            color: 'chocolate-brown',
            price: 46,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_38',
            name: 'Corbata Plata Metalizada',
            color: 'metallic-silver',
            price: 58,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_39',
            name: 'Corbata Lavanda Claro',
            color: 'light-lavender',
            price: 48,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_40',
            name: 'Corbata Azul Pavo Real',
            color: 'peacock-blue',
            price: 54,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_41',
            name: 'Corbata Escarlata',
            color: 'scarlet',
            price: 49,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_42',
            name: 'Corbata Oliva Claro',
            color: 'light-olive',
            price: 45,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_43',
            name: 'Corbata Cobre Brillante',
            color: 'bright-copper',
            price: 52,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_44',
            name: 'Corbata Azul Cobalto',
            color: 'cobalt-blue',
            price: 50,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_45',
            name: 'Corbata Beige Clásico',
            color: 'classic-beige',
            price: 43,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_46',
            name: 'Corbata Violeta Imperial',
            color: 'imperial-violet',
            price: 57,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_47',
            name: 'Corbata Granate Oscuro',
            color: 'dark-garnet',
            price: 54,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_48',
            name: 'Corbata Teal Vibrante',
            color: 'vibrant-teal',
            price: 48,
            image: 'https://images.unsplash.com/photo-1583864697112-a2e0b8b7b5a5?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['casual']
        },
        {
            id: 'tie_49',
            name: 'Corbata Carmesí',
            color: 'crimson',
            price: 51,
            image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        },
        {
            id: 'tie_50',
            name: 'Corbata Oro Rosa',
            color: 'rose-gold',
            price: 62,
            image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop',
            sizes: ['Regular'],
            eventTypes: ['formal']
        }
    ],

    vests: [
        // 20 Chalecos
        {
            id: 'vest_1',
            name: 'Chaleco Azul Marino',
            color: 'navy',
            price: 120,
            image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'vest_2',
            name: 'Chaleco Gris Elegante',
            color: 'gray',
            price: 110,
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'vest_3',
            name: 'Chaleco Negro Clásico',
            color: 'black',
            price: 125,
            image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'vest_4',
            name: 'Chaleco Café Vintage',
            color: 'brown',
            price: 115,
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['casual']
        },
        {
            id: 'vest_5',
            name: 'Chaleco Borgoña Premium',
            color: 'burgundy',
            price: 135,
            image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'vest_6',
            name: 'Chaleco Verde Bosque',
            color: 'forest-green',
            price: 118,
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['casual']
        },
        {
            id: 'vest_7',
            name: 'Chaleco Gris Carbón',
            color: 'charcoal',
            price: 122,
            image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'vest_8',
            name: 'Chaleco Azul Real',
            color: 'royal-blue',
            price: 128,
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'vest_9',
            name: 'Chaleco Beige Claro',
            color: 'light-beige',
            price: 105,
            image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['casual']
        },
        {
            id: 'vest_10',
            name: 'Chaleco Negro Mate',
            color: 'matte-black',
            price: 130,
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['formal']
        },
        {
            id: 'vest_11',
            name: 'Chaleco Azul Acero',
            color: 'steel-blue',
            price: 120,
            image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'vest_12',
            name: 'Chaleco Café Chocolate',
            color: 'chocolate',
            price: 112,
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['casual']
        },
        {
            id: 'vest_13',
            name: 'Chaleco Gris Plata',
            color: 'silver-gray',
            price: 125,
            image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'vest_14',
            name: 'Chaleco Verde Oliva',
            color: 'olive-green',
            price: 115,
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['casual']
        },
        {
            id: 'vest_15',
            name: 'Chaleco Azul Midnight',
            color: 'midnight-blue',
            price: 132,
            image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'vest_16',
            name: 'Chaleco Crema Vintage',
            color: 'vintage-cream',
            price: 108,
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['casual']
        },
        {
            id: 'vest_17',
            name: 'Chaleco Negro Brillante',
            color: 'shiny-black',
            price: 138,
            image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['formal']
        },
        {
            id: 'vest_18',
            name: 'Chaleco Gris Antracita',
            color: 'anthracite',
            price: 127,
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L'],
            eventTypes: ['formal']
        },
        {
            id: 'vest_19',
            name: 'Chaleco Café Canela',
            color: 'cinnamon',
            price: 113,
            image: 'https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=300&h=400&fit=crop',
            sizes: ['M', 'L', 'XL'],
            eventTypes: ['casual']
        },
        {
            id: 'vest_20',
            name: 'Chaleco Azul Profundo',
            color: 'deep-blue',
            price: 124,
            image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=300&h=400&fit=crop',
            sizes: ['S', 'M', 'L', 'XL'],
            eventTypes: ['formal']
        }
    ],

    shoes: [
        // 10 Zapatos
        {
            id: 'shoes_1',
            name: 'Oxford Negro Clásico',
            color: 'black-oxford',
            price: 150,
            image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=400&fit=crop',
            sizes: ['38', '39', '40', '41', '42', '43', '44', '45'],
            eventTypes: ['formal']
        },
        {
            id: 'shoes_2',
            name: 'Brogue Café Italiano',
            color: 'brown-brogue',
            price: 175,
            image: 'https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?w=300&h=400&fit=crop',
            sizes: ['39', '40', '41', '42', '43', '44'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'shoes_3',
            name: 'Mocasines Negros Elegantes',
            color: 'black-loafers',
            price: 130,
            image: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?w=300&h=400&fit=crop',
            sizes: ['38', '39', '40', '41', '42', '43'],
            eventTypes: ['casual']
        },
        {
            id: 'shoes_4',
            name: 'Derby Café Claro',
            color: 'light-brown-derby',
            price: 160,
            image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=400&fit=crop',
            sizes: ['40', '41', '42', '43', '44', '45'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'shoes_5',
            name: 'Oxford Café Oscuro',
            color: 'dark-brown-oxford',
            price: 165,
            image: 'https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?w=300&h=400&fit=crop',
            sizes: ['39', '40', '41', '42', '43', '44'],
            eventTypes: ['formal']
        },
        {
            id: 'shoes_6',
            name: 'Zapatos Monk Negros',
            color: 'black-monk',
            price: 180,
            image: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?w=300&h=400&fit=crop',
            sizes: ['38', '39', '40', '41', '42'],
            eventTypes: ['formal']
        },
        {
            id: 'shoes_7',
            name: 'Brogue Gris Elegante',
            color: 'gray-brogue',
            price: 170,
            image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=400&fit=crop',
            sizes: ['40', '41', '42', '43', '44'],
            eventTypes: ['formal', 'casual']
        },
        {
            id: 'shoes_8',
            name: 'Mocasines Café Suave',
            color: 'tan-loafers',
            price: 140,
            image: 'https://images.unsplash.com/photo-1581101767113-1677fc2beaa8?w=300&h=400&fit=crop',
            sizes: ['39', '40', '41', '42', '43'],
            eventTypes: ['casual']
        },
        {
            id: 'shoes_9',
            name: 'Oxford Borgoña',
            color: 'burgundy-oxford',
            price: 155,
            image: 'https://images.unsplash.com/photo-1584999734482-0361aecad844?w=300&h=400&fit=crop',
            sizes: ['38', '39', '40', '41', '42', '43', '44'],
            eventTypes: ['formal']
        },
        {
            id: 'shoes_10',
            name: 'Chelsea Boots Negros',
            color: 'black-chelsea',
            price: 190,
            image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&h=400&fit=crop',
            sizes: ['40', '41', '42', '43', '44', '45'],
            eventTypes: ['casual']
        }
    ]
};

// Sugerencias de combinación de colores
const colorSuggestions = {
    'navy': {
        shirt: ['Blanco', 'Celeste', 'Crema', 'Gris Perla'],
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

// Funciones auxiliares
function getSizeAvailability(item, userShoeSize = null) {
    if (item.type === 'shoes' && userShoeSize) {
        return item.sizes.includes(userShoeSize) ? 'available' : 'unavailable';
    }
    
    // Para otras prendas, simulamos disponibilidad basada en cantidad de tallas
    if (item.sizes.length > 4) return 'available';
    if (item.sizes.length > 2) return 'limited';
    return 'unavailable';
}

function getColorSuggestion(suitColor) {
    return colorSuggestions[suitColor] || null;
}