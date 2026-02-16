/**
 * ============================================================================
 * ARPI'S ATELIER - INTERACTIVE FEATURES
 * Vanilla JavaScript for navigation, hero slider, scroll effects, and auth
 * ============================================================================
 */

// ============================================================================
// 1. HAMBURGER MENU & NAVIGATION
// ============================================================================

const hamburger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

/**
 * Toggle hamburger menu and navbar visibility on mobile
 * Animates hamburger icon to X shape and shows/hides nav menu
 */
hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

/**
 * Auto-close navbar when a nav link is clicked
 */
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
    item.addEventListener('click', function() {
        navbar.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============================================================================
// 2. HERO BACKGROUND SLIDER
// ============================================================================

const hero = document.getElementById('hero');
const heroImages = [
    'imgs/landingPage.jpeg',
    'imgs/hero2.jpg',
    'imgs/hero3.jpeg'
];
let heroImageIndex = 0;

/**
 * Rotate hero background images every 5 seconds
 */
setInterval(() => {
    heroImageIndex = (heroImageIndex + 1) % heroImages.length;
    hero.style.backgroundImage = `url('${heroImages[heroImageIndex]}')`;
}, 5000);

// ============================================================================
// 3. HEADER SCROLL EFFECT
// ============================================================================

const header = document.querySelector('.main-header');

/**
 * Add sticky header behavior with compact styling when scrolled past 100px
 */
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// ============================================================================
// 4. CATEGORY CARD HOVER EFFECTS
// ============================================================================

const categoryCards = document.querySelectorAll('.category-card');

/**
 * Add scale and shadow animations on category cards
 * TODO: Replace click alert with actual navigation to category pages
 */
categoryCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.08) translateY(-8px)';
        this.style.boxShadow = '0 12px 28px rgba(0,0,0,0.15)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
        this.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
    });
    
    card.addEventListener('click', function() {
        const label = this.querySelector('.category-label').textContent;
        alert(`${label} category clicked!`);
    });
});

// ============================================================================
// 5. AUTHENTICATION OVERLAY & CARD FLIP
// ============================================================================

const overlay = document.getElementById('overlay');
const authCard = document.getElementById('authCard');
const loginBtn = document.getElementById('loginBtn');
const registerBtn = document.getElementById('registerBtn');
const closeBtn = document.getElementById('closeBtn');
const toSignup = document.getElementById('toSignup');
const toLogin = document.getElementById('toLogin');

/**
 * Open auth overlay with optional card flip for signup mode
 * @param {boolean} flip - true for signup (flipped), false for login (front)
 */
function openAuth(flip) {
    overlay.style.display = 'flex';
    if (flip) {
        authCard.classList.add('flipped');
    } else {
        authCard.classList.remove('flipped');
    }
}

/**
 * Close auth overlay and reset card state
 */
function closeAuth() {
    overlay.style.display = 'none';
    authCard.classList.remove('flipped');
}

// Open auth overlay
loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openAuth(false);
});

registerBtn.addEventListener('click', (e) => {
    e.preventDefault();
    openAuth(true);
});

// Close via X button
closeBtn.addEventListener('click', closeAuth);

// Flip card between login and signup
toSignup.addEventListener('click', () => authCard.classList.add('flipped'));
toLogin.addEventListener('click', () => authCard.classList.remove('flipped'));

// Close on overlay background click
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
        closeAuth();
    }
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.style.display === 'flex') {
        closeAuth();
    }
});

// Add event listener to the "Sign up" text
toSignup.addEventListener("click", () => {
    authCard.classList.add("show-signup");
});

// Add event listener to the "Design Your Own" button
const designBtn = document.querySelector('.design-btn');

designBtn.addEventListener('click', () => {
    window.location.href = 'design-your-dream-piece.html'; // Redirect to the custom design page
});

// JavaScript for handling step progress in the design studio
// const typeCards = document.querySelectorAll('.type-card');
// const steps = document.querySelectorAll('.step');
// const stepLines = document.querySelectorAll('.step-line');

// // Add click event listener to each type card
// typeCards.forEach((card, index) => {
//     card.addEventListener('click', () => {
//         // Move to step 2
//         steps[1].classList.add('active');
//         stepLines[0].classList.add('active');
//     });
// });

// // Show material selection when a type card is clicked
// typeCards.forEach((card) => {
//     card.addEventListener('click', () => {
//         // Show the material selection section
//         const materialSelection = document.getElementById('material-selection');
//         materialSelection.style.display = 'block';
//     });
// });
document.addEventListener('DOMContentLoaded', () => {
    const typeCards = document.querySelectorAll('.type-card');
    const typeSelection = document.querySelector('.type-grid');
    const typeTitle = document.querySelector('.selection-title');
    const materialSection = document.getElementById('material-selection');
    const steps = document.querySelectorAll('.step');

    typeCards.forEach(card => {
        card.addEventListener('click', () => {
            // 1. Hide Step 1 UI
            typeSelection.style.display = 'none';
            typeTitle.style.display = 'none';

            // 2. Show Step 2 UI
            materialSection.style.display = 'block';

            // 3. Update Progress Tracker
            steps[1].classList.add('active'); // Highlights the "2" circle
        });
    });
});

// ============================================================================
// 6. PRODUCT DATABASE & SPA LOGIC
// ============================================================================

/**
 * Sample product database
 * In a real application, this would come from an API/backend
 */
const productDatabase = [
    {
        id: 1,
        title: 'simple black beaded bracelet',
        category: 'bracelets',
        material: 'Wired',
        price: 200,
        image: 'imgs/simple-black-beaded-bracelets.jpeg',
        description: 'Handcrafted simple black beaded bracelet, per bracelet 200',
        rating: 4.9,
        reviews: 47,
        badge: 'Bestseller'
    },
    {
        id: 2,
        title: 'simple everyday Earrings',
        category: 'earrings',
        material: 'Wired',
        price: 200,
        image: 'imgs/simple-everyday-earrings.jpeg',
        description: 'Lightweight and versatile earrings perfect for daily wear',
        rating: 4.8,
        reviews: 32,
        badge: 'New'
    },
    {
        id: 3,
        title: 'twin Bracelets with butterfly charm',
        category: 'bracelets',
        material: 'elastic',
        price: 300,
        image: 'imgs/twin-bracelets-butterfly-charm.jpeg',
        description: 'Matching twin bracelets with delicate butterfly charm, perfect for best friends',
        rating: 4.7,
        reviews: 28,
        badge: 'Bestseller'
    },
    
    {
        id: 5,
        title: 'blue and white Necklace',
        category: 'necklaces',
        material: 'Elastic',
        price: 400,
        image: 'imgs/blue-white-necklace.jpeg',
        description: 'Elegant blue and white beads perfect for daily wear',
        rating: 5,
        reviews: 19,
        badge: 'Bestseller'
    },
    {
        id: 6,
        title: 'BOHO theme painting',
        category: 'paintings',
        material: 'Canvas',
        price: 700,
        image: 'imgs/boho-theme-painting.jpeg',
        description: 'Delicate canvas painting with boho-inspired design',
        rating: 4.6,
        reviews: 41,
        badge: null
    },
    {
        id: 7,
        title: 'Abstract theme paintings',
        category: 'paintings',
        material: 'Canvas',
        price: 700,
        image: 'imgs/abstract-paintings.jpeg',
        description: ' canvas paintings with abstract designs, perfect for adding a pop of color to any space',
        rating: 4.8,
        reviews: 25,
        badge: null
    },
    {
        id: 8,
        title: 'Flower Earring',
        category: 'earrings',
        material: 'wired',
        price: 48,
        image: 'imgs/flower-earring.jpeg',
        description: 'Lightweight flower dangling earrings',
        rating: 4.7,
        reviews: 63,
        badge: null
    },
    {
        id: 9,
        title: 'matching bracelets with magnetic heart',
        category: 'matching-bracelets',
        material: 'wired',
        price: 500,
        image: 'imgs/matching-bracelets-magnetic-heart.jpeg',
        description: 'Elegant matching bracelets with magnetic heart charm, perfect for couples',
        rating: 4.9,
        reviews: 88,
        badge: 'Bestseller'
    },
    {
        id: 10,
        title: 'Cosmic Vibes bracelet',
        category: 'bracelets',
        material: 'Wired',
        price: 300,
        image: 'imgs/cosmic-vibes-bracelet.jpeg',
        description: 'Elegant wired bracelet with cosmic charms',
        rating: 4.8,
        reviews: 34,
        badge: 'New'
    },
    {
        id: 11,
        title: 'purple and white Bracelet',
        category: 'matching-bracelets',
        material: 'Beads',
        price: 400,
        image: 'imgs/purple-white-bracelet.jpeg',
        description: 'Elegant purple and white beads perfect for daily wear',
        rating: 4.6,
        reviews: 22,
        badge: null
    },
    {
        id: 12,
        title: 'Black and Brown Bracelet',
        category: 'matching-bracelets',
        material: 'Beads',
        price: 400,
        image: 'imgs/black-brown-bracelet.jpeg',
        description: 'Warm black and brown beads perfect for daily wear',
        rating: 4.9,
        reviews: 56,
        badge: null
    }
];

// State management for filtering
let activeFilters = {
    categories: [],
    materials: [],
    prices: []
};

// ============================================================================
// 7. SPA - HANDLE "ALL PRODUCTS" NAVIGATION
// ============================================================================

const allProductsLink = document.querySelector('.all-products-link');
const allProductsSection = document.getElementById('all-products-section');
const collectionsSection = document.getElementById('collections-section');
const featuredSection = document.getElementById('featured-pieces-section');
const whyAtelier = document.getElementById('why-atelier-section');
const heroSection = document.getElementById('hero');

/**
 * Show All Products page and hide other sections
 */
function showAllProducts() {
    allProductsSection.style.display = 'block';
    collectionsSection.style.display = 'none';
    featuredSection.style.display = 'none';
    whyAtelier.style.display = 'none';
    
    // Scroll to products section
    setTimeout(() => {
        allProductsSection.scrollIntoView({ behavior: 'smooth' });
    }, 100);
}

/**
 * Show home page and hide products section
 */
function showHome() {
    allProductsSection.style.display = 'none';
    collectionsSection.style.display = 'block';
    featuredSection.style.display = 'block';
    whyAtelier.style.display = 'block';
}

// Handle All Products link click
allProductsLink.addEventListener('click', (e) => {
    e.preventDefault();
    showAllProducts();
    renderProducts(productDatabase);
});

// Handle Home link click
document.querySelectorAll('.nav-item').forEach(item => {
    if (item.textContent.trim() === 'Home') {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            showHome();
            heroSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
});

// ============================================================================
// 8. RENDER PRODUCTS
// ============================================================================

/**
 * Render product cards to the products grid
 * @param {Array} products - Array of product objects to render
 */
function renderProducts(products) {
    const productsGrid = document.getElementById('products-grid');
    const productCount = document.getElementById('product-count');
    
    // Update product count
    productCount.textContent = products.length;
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="empty-products" style="grid-column: 1 / -1;">
                <h3>No products found</h3>
                <p>Try adjusting your filters</p>
            </div>
        `;
        return;
    }
    
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image-wrapper">
                ${product.badge ? `<div class="product-badge ${product.badge.toLowerCase()}">${product.badge}</div>` : ''}
                <img src="${product.image}" alt="${product.title}" class="product-image">
            </div>
            <div class="product-info">
                <p class="product-material">${product.material}</p>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">Rs ${product.price}</span>
                    <span class="product-rating">⭐ ${product.rating} (${product.reviews})</span>
                </div>
                <div class="product-actions">
                    <button class="quick-view-btn" onclick="quickView(${product.id})">Quick View</button>
                    <button class="product-add-to-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

/**
 * Quick View functionality (placeholder)
 */
function quickView(productId) {
    const product = productDatabase.find(p => p.id === productId);
    alert(`Quick View: ${product.title}\n\nPrice: Rs ${product.price}\nMaterial: ${product.material}`);
}

/**
 * Add to Cart functionality with cart storage
 */
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productId, quantity = 1) {
    const product = productDatabase.find(p => p.id === productId);
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push({
            id: product.id,
            title: product.title,
            price: product.price,
            image: product.image,
            material: product.material,
            quantity: quantity
        });
    }
    
    // Save cart to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Update cart count
    updateCartCount();
    
    // Show success message
    showCartNotification(`${product.title} added to cart!`);
}

function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

function showCartNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 15px 20px;
        border-radius: 4px;
        z-index: 1000;
        font-weight: bold;
        box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    // Remove after 2 seconds
    setTimeout(() => notification.remove(), 2000);
}

// Initialize cart count on page load
window.addEventListener('load', updateCartCount);

// ============================================================================
// 9. FILTER LOGIC
// ============================================================================

/**
 * Filter products based on active filters
 */
function filterProducts() {
    let filtered = productDatabase;
    
    // Filter by category
    if (activeFilters.categories.length > 0) {
        filtered = filtered.filter(p => activeFilters.categories.includes(p.category));
    }
    
    // Filter by material
    if (activeFilters.materials.length > 0) {
        filtered = filtered.filter(p => activeFilters.materials.includes(p.material));
    }
    
    // Filter by price
    if (activeFilters.prices.length > 0) {
        filtered = filtered.filter(p => {
            return activeFilters.prices.some(priceRange => {
                if (priceRange === '0-60') return p.price < 60;
                if (priceRange === '60-90') return p.price >= 60 && p.price < 90;
                if (priceRange === '90-150') return p.price >= 90 && p.price < 150;
                if (priceRange === '150+') return p.price >= 150;
                return false;
            });
        });
    }
    
    // Sort products
    const sortValue = document.getElementById('sort-select').value;
    if (sortValue === 'price-low') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sortValue === 'price-high') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sortValue === 'popular') {
        filtered.sort((a, b) => (b.rating * b.reviews) - (a.rating * a.reviews));
    } else if (sortValue === 'newest') {
        filtered.sort((a, b) => b.id - a.id);
    }
    
    renderProducts(filtered);
}

// Add event listeners to category filters
document.querySelectorAll('.category-filter').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            activeFilters.categories.push(e.target.value);
        } else {
            activeFilters.categories = activeFilters.categories.filter(c => c !== e.target.value);
        }
        filterProducts();
    });
});

// Add event listeners to material filters
document.querySelectorAll('.material-filter').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            activeFilters.materials.push(e.target.value);
        } else {
            activeFilters.materials = activeFilters.materials.filter(m => m !== e.target.value);
        }
        filterProducts();
    });
});

// Add event listeners to price filters
document.querySelectorAll('.price-filter').forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            activeFilters.prices.push(e.target.value);
        } else {
            activeFilters.prices = activeFilters.prices.filter(p => p !== e.target.value);
        }
        filterProducts();
    });
});

// Sort functionality
const sortSelect = document.getElementById('sort-select');
if (sortSelect) {
    sortSelect.addEventListener('change', filterProducts);
}

// Clear filters button
const clearFiltersBtn = document.querySelector('.clear-filters');
if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
        // Clear all checkboxes
        document.querySelectorAll('input[type="checkbox"]').forEach(checkbox => {
            checkbox.checked = false;
        });
        
        // Reset filters
        activeFilters = {
            categories: [],
            materials: [],
            prices: []
        };
        
        // Re-render all products
        filterProducts();
    });
}

// ============================================================================
// 10. CART MODAL FUNCTIONALITY
// ============================================================================

const cartModal = document.getElementById('cartModal');
const cartModalOverlay = document.getElementById('cartModalOverlay');
const cartSection = document.querySelector('.cart-section');

/**
 * Display cart modal with items and total
 */
function displayCart() {
    const cartItemsContainer = document.getElementById('cartItemsContainer');
    const totalPrice = document.querySelector('.total-price');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty</p>
            </div>
        `;
        totalPrice.textContent = 'Rs 0';
        return;
    }
    
    let total = 0;
    cartItemsContainer.innerHTML = cart.map(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="cart-item-details">
                    <h4>${item.title}</h4>
                    <p class="cart-item-material">${item.material}</p>
                    <p class="cart-item-price">Rs ${item.price}</p>
                </div>
                <div class="cart-item-quantity">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)">-</button>
                    <input type="number" value="${item.quantity}" readonly class="qty-input">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
                </div>
                <div class="cart-item-total">
                    <p>Rs ${itemTotal}</p>
                </div>
                <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
            </div>
        `;
    }).join('');
    
    totalPrice.textContent = `Rs ${total}`;
}

/**
 * Open cart modal
 */
function openCart() {
    displayCart();
    cartModal.style.display = 'block';
    cartModalOverlay.style.display = 'block';
}

/**
 * Close cart modal
 */
function closeCart() {
    cartModal.style.display = 'none';
    cartModalOverlay.style.display = 'none';
}

/**
 * Remove item from cart
 */
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    displayCart();
}

/**
 * Update quantity of item in cart
 */
function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            updateCartCount();
            displayCart();
        }
    }
}

// Add click listener to cart section
cartSection.addEventListener('click', (e) => {
    e.preventDefault();
    openCart();
});





