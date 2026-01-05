// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger-menu');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
});

// Header Scroll Effect
const header = document.querySelector('.main-header');
let lastScrollTop = 0;

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// Category card hover effects
const cards = document.querySelectorAll('.category-card');

cards.forEach(card => {
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
