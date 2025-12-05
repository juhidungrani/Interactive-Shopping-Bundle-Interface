
const state = {
    selectedPair: 2, 
    items: [
        { size: 'S', color: 'colour' },
        { size: 'S', color: 'colour' }
    ],
    pricing: {
        1: { price: 195.00, discount: '50%' },
        2: { price: 345.00, original: 195.00, discount: '40%' },
        3: { price: 528.00, discount: '60%' }
    }
};

let radioButtons;
let optionContainers;
let totalPriceElement;
let sizeSelects;
let colorSelects;
let addToCartButton;

function init() {
    radioButtons = document.querySelectorAll('input[type="radio"][name="pair"]');
    optionContainers = document.querySelectorAll('.option');
    totalPriceElement = document.querySelector('.total-price strong');
    sizeSelects = document.querySelectorAll('.size-select');
    colorSelects = document.querySelectorAll('.color-select');
    addToCartButton = document.getElementById('add-to-cart');

    setupRadioButtons();
    setupDropdowns();
    setupAddToCart();

    updateTotalPrice();
    
    console.log('Bundle & Save pricing card initialized successfully');
}

function setupRadioButtons() {
    radioButtons.forEach(radio => {
        radio.addEventListener('change', handleRadioChange);
    });
}

function handleRadioChange(event) {
    const selectedValue = parseInt(event.target.value);
    state.selectedPair = selectedValue;
    
    updateOptionStyles();
    
    updateTotalPrice();
    
    console.log(`Selected pair: ${selectedValue}`);
}

function updateOptionStyles() {
    optionContainers.forEach(container => {
        const radio = container.querySelector('input[type="radio"]');
        
        if (radio.checked) {
            container.classList.add('option--selected');
        } else {
            container.classList.remove('option--selected');
        }
    });
}

function setupDropdowns() {
    sizeSelects.forEach((select, index) => {
        select.addEventListener('change', (e) => handleSizeChange(e, index));
    });

    colorSelects.forEach((select, index) => {
        select.addEventListener('change', (e) => handleColorChange(e, index));
    });
}

function handleSizeChange(event, itemIndex) {
    const newSize = event.target.value;
    state.items[itemIndex].size = newSize;
    
    console.log(`Item #${itemIndex + 1} size changed to: ${newSize}`);
    console.log('Current items:', state.items);
}

function handleColorChange(event, itemIndex) {
    const newColor = event.target.value;
    state.items[itemIndex].color = newColor;
    
    console.log(`Item #${itemIndex + 1} color changed to: ${newColor}`);
    console.log('Current items:', state.items);
}

function updateTotalPrice() {
    const pricing = state.pricing[state.selectedPair];
    
    if (pricing && totalPriceElement) {
        totalPriceElement.textContent = `DKK ${pricing.price.toFixed(2)}`;
    }
}

function setupAddToCart() {
    if (addToCartButton) {
        addToCartButton.addEventListener('click', handleAddToCart);
    }
}

function handleAddToCart() {
    const cartData = {
        selectedPair: state.selectedPair,
        pricing: state.pricing[state.selectedPair],
        items: state.selectedPair === 2 ? state.items : null
    };

    console.log('=== ADD TO CART ===');
    console.log('Pair selection:', cartData.selectedPair);
    console.log('Price:', `DKK ${cartData.pricing.price.toFixed(2)}`);
    console.log('Discount:', cartData.pricing.discount);
    
    if (cartData.items) {
        console.log('Items:');
        cartData.items.forEach((item, index) => {
            console.log(`  #${index + 1}: Size ${item.size}, Color ${item.color}`);
        });
    }
    
    showAddToCartFeedback();
}

function showAddToCartFeedback() {
    const button = addToCartButton;
    const originalText = button.innerHTML;
    const originalColor = button.style.backgroundColor;
    
    button.innerHTML = '<span class="btn-icon">✓</span><span class="btn-text">Added to Cart!</span>';
    button.style.backgroundColor = '#10B981';
    button.disabled = true;
    
    setTimeout(() => {
        button.innerHTML = originalText;
        button.style.backgroundColor = originalColor;
        button.disabled = false;
    }, 2000);
}

function validateSelections() {
    if (state.selectedPair === 2) {
        const allSelected = state.items.every(item => item.size && item.color);
        return allSelected;
    }
    return true;
}

function getSelectedData() {
    return {
        pair: state.selectedPair,
        items: state.items,
        total: state.pricing[state.selectedPair].price
    };
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

window.BundleAndSave = {
    getState: () => state,
    getSelectedData,
    validateSelections
};