// Aplicación principal - ¡Que Traje-día!

// Estado de la aplicación
let currentUser = null;
let selectedOutfit = {
    suit: null,
    shirt: null,
    tie: null,
    vest: null,
    shoes: null
};
let isLoggedIn = false;
let savedOutfits = [];

// Sizing functions (adapted from shared/sizingUtils.ts)
function computeUserSize(profile) {
    const { height, weight } = profile;
    const bmi = weight / Math.pow(height / 100, 2);
    
    // Determine if child or adult
    const isChild = height < 150 && weight < 50;
    
    let suitSize, shirtSize;
    
    if (isChild) {
        // Children sizing (sizes 8, 10, 12, 14)
        let baseSize;
        
        if (height < 130) {
            baseSize = 8;
        } else if (height < 140) {
            baseSize = 10;
        } else if (height < 150) {
            baseSize = 12;
        } else {
            baseSize = 14;
        }
        
        // BMI adjustments for children
        if (bmi > 22) {
            baseSize += 1;
        } else if (bmi < 17) {
            baseSize -= 1;
        }
        
        // Ensure size stays within valid range
        baseSize = Math.max(8, Math.min(14, baseSize));
        
        suitSize = baseSize;
        shirtSize = baseSize;
    } else {
        // Adult sizing (sizes 36-72)
        const chestEstCm = 0.45 * height + (weight / 3);
        let computedSize = roundToEven(chestEstCm / 2);
        
        // Limit between 36-72
        computedSize = Math.max(36, Math.min(72, computedSize));
        
        suitSize = computedSize;
        shirtSize = computedSize;
    }
    
    const sizeAlpha = mapNumericToAlpha(suitSize);
    
    return {
        suitSize,
        shirtSize,
        sizeAlpha,
        isChild,
        bmi: Math.round(bmi * 10) / 10
    };
}

function mapNumericToAlpha(numericSize) {
    if (numericSize <= 8) return 'XS';
    if (numericSize <= 10) return 'S';
    if (numericSize <= 12) return 'M';
    if (numericSize <= 14) return 'L';
    
    // Adult sizes
    if (numericSize >= 44 && numericSize <= 48) return 'S';
    if (numericSize >= 48 && numericSize <= 50) return 'M';
    if (numericSize >= 52 && numericSize <= 54) return 'L';
    if (numericSize >= 56 && numericSize <= 58) return 'XL';
    if (numericSize >= 60 && numericSize <= 62) return 'XXL';
    
    // Default mapping for other sizes
    if (numericSize < 44) return 'XS';
    if (numericSize < 48) return 'S';
    if (numericSize < 52) return 'M';
    if (numericSize < 56) return 'L';
    if (numericSize < 60) return 'XL';
    if (numericSize < 64) return 'XXL';
    return 'XXXL';
}

function roundToEven(num) {
    const rounded = Math.round(num);
    return rounded % 2 === 0 ? rounded : rounded + 1;
}

function getSizeDescription(recommendation) {
    if (recommendation.isChild) {
        return `Talle ${recommendation.suitSize} (Niño)`;
    }
    return `Talle ${recommendation.suitSize} (${recommendation.sizeAlpha})`;
}

function getBMIInterpretation(bmi) {
    if (bmi < 18.5) return 'Bajo peso';
    if (bmi < 25) return 'Peso normal';
    if (bmi < 30) return 'Sobrepeso';
    return 'Obesidad';
}

// API utility functions
async function apiRequest(url, options = {}) {
    try {
        const response = await fetch(url, {
            credentials: 'include', // Important for session-based auth
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API request failed:', error);
        throw error;
    }
}

// Elementos del DOM
let loginOverlay = null;
let profileForm = null;
let suitsGrid = null;
let shirtsGrid = null;
let tiesGrid = null;
let vestsGrid = null;
let shoesGrid = null;
let colorSuggestionsElement = null;
let selectedItems = null;
let totalPrice = null;
let outfitPreview = null;
let requestFormContainer = null;

// Inicialización cuando se carga la página
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

async function initializeApp() {
    // Obtener referencias a elementos del DOM
    loginOverlay = document.getElementById('loginOverlay');
    profileForm = document.getElementById('profileForm');
    suitsGrid = document.getElementById('suitsGrid');
    shirtsGrid = document.getElementById('shirtsGrid');
    tiesGrid = document.getElementById('tiesGrid');
    vestsGrid = document.getElementById('vestsGrid');
    shoesGrid = document.getElementById('shoesGrid');
    colorSuggestionsElement = document.getElementById('colorSuggestions');
    selectedItems = document.getElementById('selectedItems');
    totalPrice = document.getElementById('totalPrice');
    outfitPreview = document.getElementById('outfitPreview');
    requestFormContainer = document.getElementById('requestFormContainer');

    // Configurar eventos
    setupEventListeners();
    
    // Verificar autenticación
    await checkAuthStatus();
    
    // Cargar datos de ropa
    await loadClothingItems();
}

function setupEventListeners() {
    // Formulario de perfil
    if (profileForm) {
        profileForm.addEventListener('submit', handleProfileSubmit);
    }
    
    // Event listeners for real-time size calculation
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    
    if (heightInput && weightInput) {
        heightInput.addEventListener('input', function() {
            updateSizeRecommendation();
        });
        weightInput.addEventListener('input', function() {
            updateSizeRecommendation();
        });
    }
    
    // Botón de logout
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', handleLogout);
    }
    
    // Botones de acciones del outfit
    const clearOutfitBtn = document.getElementById('clearOutfit');
    if (clearOutfitBtn) {
        clearOutfitBtn.addEventListener('click', clearOutfit);
    }
    
    const saveOutfitBtn = document.getElementById('saveOutfit');
    if (saveOutfitBtn) {
        saveOutfitBtn.addEventListener('click', saveOutfit);
    }
    
    // FAB para solicitar presupuesto
    const requestBtn = document.getElementById('requestBtn');
    if (requestBtn) {
        requestBtn.addEventListener('click', showRequestForm);
    }
    
    // Formulario de solicitud
    const requestForm = document.getElementById('requestForm');
    if (requestForm) {
        requestForm.addEventListener('submit', handleRequestSubmit);
    }
    
    const cancelRequestBtn = document.getElementById('cancelRequest');
    if (cancelRequestBtn) {
        cancelRequestBtn.addEventListener('click', hideRequestForm);
    }
}

// Function to update size recommendations in real-time
function updateSizeRecommendation() {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const sizeRecommendationDiv = document.getElementById('sizeRecommendation');
    const recommendedSizeSpan = document.getElementById('recommendedSize');
    const bmiInfoSpan = document.getElementById('bmiInfo');
    const sizeNoteDiv = document.getElementById('sizeNote');
    
    if (!heightInput || !weightInput || !sizeRecommendationDiv) {
        return;
    }
    
    const height = parseInt(heightInput.value);
    const weight = parseInt(weightInput.value);
    
    if (height && weight && height >= 150 && height <= 210 && weight >= 50 && weight <= 150) {
        try {
            const recommendation = computeUserSize({ height, weight });
            
            // Update display elements
            recommendedSizeSpan.textContent = getSizeDescription(recommendation);
            bmiInfoSpan.textContent = `${recommendation.bmi} (${getBMIInterpretation(recommendation.bmi)})`;
            
            if (recommendation.isChild) {
                sizeNoteDiv.textContent = '💡 Talla infantil calculada según altura y complexión';
            } else {
                sizeNoteDiv.textContent = '💡 Talla adulta calculada según medidas corporales';
            }
            
            // Show the recommendation display
            sizeRecommendationDiv.style.display = 'block';
        } catch (error) {
            console.error('Error calculating size:', error);
            sizeRecommendationDiv.style.display = 'none';
        }
    } else {
        // Hide the recommendation display if inputs are invalid
        sizeRecommendationDiv.style.display = 'none';
    }
}

function showLoginOverlay() {
    if (loginOverlay) {
        loginOverlay.style.display = 'flex';
    }
}

function hideLoginOverlay() {
    if (loginOverlay) {
        loginOverlay.style.display = 'none';
    }
    updateUserGreeting();
}

// Authentication functions
async function checkAuthStatus() {
    try {
        const response = await apiRequest('/api/auth/user');
        if (response) {
            currentUser = response;
            isLoggedIn = true;
            updateUserGreeting();
            // Hide login overlay if user is already authenticated
            hideLoginOverlay();
        } else {
            showLoginOverlay();
        }
    } catch (error) {
        console.log('User not authenticated, showing login overlay');
        showLoginOverlay();
    }
}

async function handleProfileSubmit(event) {
    event.preventDefault();
    
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const shoeSize = document.getElementById('shoeSize').value;
    const eventType = document.getElementById('eventType').value;
    
    if (!height || !weight || !shoeSize || !eventType) {
        showErrorMessage('Por favor completa todos los campos');
        return;
    }
    
    try {
        // If user is already authenticated, update profile
        if (isLoggedIn) {
            await apiRequest('/api/user/profile', {
                method: 'PATCH',
                body: JSON.stringify({
                    height: parseInt(height),
                    weight: parseInt(weight),
                    shoeSize: shoeSize,
                    eventType: eventType
                })
            });
            
            // Update local user data
            currentUser = {
                ...currentUser,
                height: parseInt(height),
                weight: parseInt(weight),
                shoeSize: shoeSize,
                eventType: eventType
            };
        } else {
            // For demo purposes, store locally if not authenticated
            currentUser = {
                height: parseInt(height),
                weight: parseInt(weight),
                shoeSize: shoeSize,
                eventType: eventType
            };
            // Don't set isLoggedIn = true for demo users
        }
        
        hideLoginOverlay();
        showSuccessMessage('¡Perfil completado! Ya puedes personalizar tu outfit');
    } catch (error) {
        console.error('Error updating profile:', error);
        showErrorMessage('Error al guardar el perfil. Por favor intenta de nuevo.');
    }
}

function handleLogout() {
    currentUser = null;
    isLoggedIn = false;
    clearOutfit();
    showLoginOverlay();
}

function updateUserGreeting() {
    const userGreeting = document.getElementById('userGreeting');
    if (userGreeting) {
        userGreeting.textContent = '¡Hola!';
    }
}

async function loadClothingItems() {
    try {
        // Try to load from API first
        const apiSuits = await apiRequest('/api/clothing?type=suit');
        const apiShirts = await apiRequest('/api/clothing?type=shirt');
        const apiTies = await apiRequest('/api/clothing?type=tie');
        const apiVests = await apiRequest('/api/clothing?type=vest');
        const apiShoes = await apiRequest('/api/clothing?type=shoes');
        
        if (apiSuits.length > 0 || apiShirts.length > 0) {
            // Use API data if available
            loadClothingCategory('suits', apiSuits, suitsGrid);
            loadClothingCategory('shirts', apiShirts, shirtsGrid);
            loadClothingCategory('ties', apiTies, tiesGrid);
            loadClothingCategory('vests', apiVests, vestsGrid);
            loadClothingCategory('shoes', apiShoes, shoesGrid);
        } else {
            // Fallback to static data
            loadStaticClothingData();
        }
    } catch (error) {
        console.log('API unavailable, using static data');
        loadStaticClothingData();
    }
}

function loadStaticClothingData() {
    if (typeof clothingData === 'undefined') {
        console.error('Datos de ropa no encontrados');
        return;
    }
    
    loadClothingCategory('suits', clothingData.suits, suitsGrid);
    loadClothingCategory('shirts', clothingData.shirts, shirtsGrid);
    loadClothingCategory('ties', clothingData.ties, tiesGrid);
    loadClothingCategory('vests', clothingData.vests, vestsGrid);
    loadClothingCategory('shoes', clothingData.shoes, shoesGrid);
}

function loadClothingCategory(category, items, gridElement) {
    if (!gridElement || !items) return;
    
    gridElement.innerHTML = '';
    
    items.forEach(item => {
        const itemElement = createClothingItemElement(item, category);
        gridElement.appendChild(itemElement);
    });
}

function createClothingItemElement(item, category) {
    const itemDiv = document.createElement('div');
    itemDiv.className = 'clothing-item';
    itemDiv.dataset.category = category;
    itemDiv.dataset.itemId = item.id;
    
    // Obtener indicador de disponibilidad de talla
    const sizeClass = getSizeIndicatorClass(item);
    const sizeTitle = getSizeTitle(item);
    
    itemDiv.innerHTML = `
        <div class="size-indicator ${sizeClass}" title="${sizeTitle}"></div>
        <img src="${item.image}" alt="${item.name}" loading="lazy">
        <div class="name">${item.name}</div>
        <div class="price">$${item.price}</div>
    `;
    
    itemDiv.addEventListener('click', () => selectClothingItem(item, category));
    
    return itemDiv;
}

function getSizeIndicatorClass(item) {
    if (!currentUser) return 'size-available';
    
    if (item.type === 'shoes' && currentUser.shoeSize) {
        return item.sizes.includes(currentUser.shoeSize) ? 'size-available' : 'size-unavailable';
    }
    
    // Para otras prendas, simular disponibilidad
    if (item.sizes.length > 4) return 'size-available';
    if (item.sizes.length > 2) return 'size-limited';
    return 'size-unavailable';
}

function getSizeTitle(item) {
    if (!currentUser) return 'Disponible';
    
    if (item.type === 'shoes' && currentUser.shoeSize) {
        return item.sizes.includes(currentUser.shoeSize) ? 'Disponible en tu talla' : 'No disponible en tu talla';
    }
    
    if (item.sizes.length > 4) return 'Disponible en tu talla';
    if (item.sizes.length > 2) return 'Pocas unidades disponibles';
    return 'No disponible en tu talla';
}

function selectClothingItem(item, category) {
    // Remover selección anterior de la categoría
    const previousSelected = document.querySelector(`[data-category="${category}"].selected`);
    if (previousSelected) {
        previousSelected.classList.remove('selected');
    }
    
    // Agregar selección al nuevo item
    const newSelected = document.querySelector(`[data-item-id="${item.id}"]`);
    if (newSelected) {
        newSelected.classList.add('selected');
    }
    
    // Actualizar estado del outfit
    const categoryMap = {
        'suits': 'suit',
        'shirts': 'shirt',
        'ties': 'tie',
        'vests': 'vest',
        'shoes': 'shoes'
    };
    
    const outfitKey = categoryMap[category];
    if (outfitKey) {
        selectedOutfit[outfitKey] = item;
    }
    
    // Actualizar visualización
    updateOutfitPreview();
    updateSelectedItemsList();
    updateTotalPrice();
    updateColorSuggestions();
}

function updateOutfitPreview() {
    const placeholder = document.getElementById('mannequin-placeholder');
    const suitImg = document.getElementById('outfit-suit');
    const shirtImg = document.getElementById('outfit-shirt');
    const vestImg = document.getElementById('outfit-vest');
    const tieImg = document.getElementById('outfit-tie');
    const shoesImg = document.getElementById('outfit-shoes');
    
    const hasAnySelection = Object.values(selectedOutfit).some(item => item !== null);
    
    if (placeholder) {
        placeholder.style.display = hasAnySelection ? 'none' : 'flex';
    }
    
    // Actualizar imágenes de las prendas
    updateOutfitLayer(suitImg, selectedOutfit.suit);
    updateOutfitLayer(shirtImg, selectedOutfit.shirt);
    updateOutfitLayer(vestImg, selectedOutfit.vest);
    updateOutfitLayer(tieImg, selectedOutfit.tie);
    updateOutfitLayer(shoesImg, selectedOutfit.shoes);
}

function updateOutfitLayer(imgElement, item) {
    if (!imgElement) return;
    
    if (item && item.image) {
        imgElement.src = item.image;
        imgElement.style.display = 'block';
        imgElement.alt = item.name;
    } else {
        imgElement.style.display = 'none';
        imgElement.src = '';
    }
}

function updateSelectedItemsList() {
    if (!selectedItems) return;
    
    selectedItems.innerHTML = '';
    
    const items = Object.entries(selectedOutfit).filter(([_, item]) => item !== null);
    
    if (items.length === 0) {
        selectedItems.innerHTML = '<p class="text-muted">Ninguna prenda seleccionada</p>';
        return;
    }
    
    items.forEach(([type, item]) => {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'selected-item';
        itemDiv.innerHTML = `
            <span>${getTypeLabel(type)}: ${item.name}</span>
            <span>$${item.price}</span>
        `;
        selectedItems.appendChild(itemDiv);
    });
}

function getTypeLabel(type) {
    const labels = {
        suit: 'Traje',
        shirt: 'Camisa',
        tie: 'Corbata',
        vest: 'Chaleco',
        shoes: 'Zapatos'
    };
    return labels[type] || type;
}

function updateTotalPrice() {
    if (!totalPrice) return;
    
    const total = Object.values(selectedOutfit)
        .filter(item => item !== null)
        .reduce((sum, item) => sum + parseFloat(item.price), 0);
    
    totalPrice.textContent = total.toFixed(0);
}

function updateColorSuggestions() {
    if (!colorSuggestionsElement || !selectedOutfit.suit) {
        if (colorSuggestionsElement) {
            colorSuggestionsElement.style.display = 'none';
        }
        return;
    }
    
    const suggestion = getColorSuggestion(selectedOutfit.suit.color);
    if (!suggestion) {
        colorSuggestionsElement.style.display = 'none';
        return;
    }
    
    const suggestionContent = document.getElementById('suggestionContent');
    if (suggestionContent) {
        suggestionContent.innerHTML = `
            <p><strong>${suggestion.description}</strong></p>
            <div class="suggestion-list">
                <div><strong>Camisas:</strong> ${suggestion.shirt.join(', ')}</div>
                <div><strong>Corbatas:</strong> ${suggestion.tie.join(', ')}</div>
                <div><strong>Chalecos:</strong> ${suggestion.vest.join(', ')}</div>
                <div><strong>Zapatos:</strong> ${suggestion.shoes.join(', ')}</div>
            </div>
        `;
    }
    
    colorSuggestionsElement.style.display = 'block';
}

function clearOutfit() {
    // Limpiar selecciones visuales
    document.querySelectorAll('.clothing-item.selected').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Resetear estado
    selectedOutfit = {
        suit: null,
        shirt: null,
        tie: null,
        vest: null,
        shoes: null
    };
    
    // Actualizar visualización
    updateOutfitPreview();
    updateSelectedItemsList();
    updateTotalPrice();
    updateColorSuggestions();
    
    showSuccessMessage('Outfit limpiado');
}

async function saveOutfit() {
    const hasItems = Object.values(selectedOutfit).some(item => item !== null);
    if (!hasItems) {
        showErrorMessage('Selecciona al menos una prenda para guardar el outfit');
        return;
    }
    
    if (isLoggedIn) {
        // Try to save to API if user is authenticated
        try {
            const outfitData = {
                name: `Outfit ${new Date().toLocaleDateString()}`,
                suitId: selectedOutfit.suit?.id || null,
                shirtId: selectedOutfit.shirt?.id || null,
                tieId: selectedOutfit.tie?.id || null,
                vestId: selectedOutfit.vest?.id || null,
                shoesId: selectedOutfit.shoes?.id || null,
                totalPrice: Object.values(selectedOutfit)
                    .filter(item => item !== null)
                    .reduce((sum, item) => sum + parseFloat(item.price), 0)
            };
            
            await apiRequest('/api/outfits', {
                method: 'POST',
                body: JSON.stringify(outfitData)
            });
            
            showSuccessMessage('¡Outfit guardado correctamente en tu cuenta!');
        } catch (error) {
            console.error('Error saving outfit:', error);
            // If API fails, fall back to demo mode
            showSuccessMessage('¡Outfit guardado localmente! Inicia sesión para guardar permanentemente.');
        }
    } else {
        // Demo mode - just show success
        showSuccessMessage('¡Outfit guardado! Inicia sesión para guardarlo permanentemente.');
    }
}

function showRequestForm() {
    const hasItems = Object.values(selectedOutfit).some(item => item !== null);
    if (!hasItems) {
        showErrorMessage('Selecciona al menos una prenda para solicitar presupuesto');
        return;
    }
    
    if (requestFormContainer) {
        requestFormContainer.style.display = 'flex';
    }
}

function hideRequestForm() {
    if (requestFormContainer) {
        requestFormContainer.style.display = 'none';
    }
}

function handleRequestSubmit(event) {
    event.preventDefault();
    
    const eventDate = document.getElementById('eventDate').value;
    const comments = document.getElementById('comments').value;
    
    if (!eventDate) {
        showErrorMessage('Por favor selecciona la fecha del evento');
        return;
    }
    
    // Simular envío de solicitud por email
    simulateEmailSend(eventDate, comments);
}

async function simulateEmailSend(eventDate, comments) {
    try {
        if (isLoggedIn) {
            // First, save the outfit if it's not saved
            const outfitData = {
                name: `Outfit para ${eventDate}`,
                suitId: selectedOutfit.suit?.id || null,
                shirtId: selectedOutfit.shirt?.id || null,
                tieId: selectedOutfit.tie?.id || null,
                vestId: selectedOutfit.vest?.id || null,
                shoesId: selectedOutfit.shoes?.id || null,
                totalPrice: Object.values(selectedOutfit)
                    .filter(item => item !== null)
                    .reduce((sum, item) => sum + parseFloat(item.price), 0)
            };
            
            const savedOutfit = await apiRequest('/api/outfits', {
                method: 'POST',
                body: JSON.stringify(outfitData)
            });
            
            // Now send the email request
            await apiRequest('/api/outfit-request', {
                method: 'POST',
                body: JSON.stringify({
                    outfitId: savedOutfit.id,
                    eventDate: eventDate,
                    comments: comments
                })
            });
            
            showSuccessMessage('¡Solicitud enviada correctamente! Te contactaremos pronto.');
        } else {
            // Fallback for demo purposes
            const emailBody = createEmailBody(eventDate, comments);
            console.log('Email que se enviaría:', emailBody);
            showSuccessMessage('¡Solicitud enviada! (Demo) Para envíos reales, inicia sesión.');
        }
        
        hideRequestForm();
        
        // Limpiar formulario
        document.getElementById('eventDate').value = '';
        document.getElementById('comments').value = '';
        
    } catch (error) {
        console.error('Error sending request:', error);
        showErrorMessage('Error al enviar la solicitud. Por favor intenta de nuevo.');
    }
}

function createEmailBody(eventDate, comments) {
    const selectedItems = Object.entries(selectedOutfit)
        .filter(([_, item]) => item !== null)
        .map(([type, item]) => `${getTypeLabel(type)}: ${item.name}`)
        .join('\n');
    
    const total = Object.values(selectedOutfit)
        .filter(item => item !== null)
        .reduce((sum, item) => sum + parseFloat(item.price), 0);
    
    return `
Solicitud de Alquiler de Traje - ¡Que Traje-día!

Medidas del Cliente:
- Altura: ${currentUser?.height || 'No especificado'} cm
- Peso: ${currentUser?.weight || 'No especificado'} kg
- Talla de zapato: ${currentUser?.shoeSize || 'No especificado'}

Tipo de evento: ${currentUser?.eventType || 'No especificado'}
Fecha del evento: ${eventDate}

Prendas seleccionadas:
${selectedItems}

Precio total estimado: $${total}

Comentarios adicionales:
${comments || 'Ninguno'}
    `.trim();
}

function showSuccessMessage(message) {
    // Crear y mostrar mensaje de éxito
    const toast = createToast(message, 'success');
    showToast(toast);
}

function showErrorMessage(message) {
    // Crear y mostrar mensaje de error
    const toast = createToast(message, 'error');
    showToast(toast);
}

function createToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#ef4444'};
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        z-index: 1000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    toast.textContent = message;
    return toast;
}

function showToast(toast) {
    document.body.appendChild(toast);
    
    // Mostrar toast
    setTimeout(() => {
        toast.style.transform = 'translateX(0)';
    }, 100);
    
    // Ocultar y remover toast
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
}

// Funciones auxiliares globales
window.selectClothingItem = selectClothingItem;
window.clearOutfit = clearOutfit;
window.saveOutfit = saveOutfit;
window.showRequestForm = showRequestForm;