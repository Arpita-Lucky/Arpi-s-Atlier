
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
    'imgs/hero2.png',
    'imgs/hero3.png'
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
    authCard.style.animation = 'dropDown 0.6s ease-out, swing 3s ease-in-out infinite 0.6s';
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





