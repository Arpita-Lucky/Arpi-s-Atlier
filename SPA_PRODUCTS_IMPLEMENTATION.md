# Single Page Application (SPA) - Products & Filtering System

## Overview
A complete Single Page Application (SPA) implementation for Arpi's Atelier that allows users to browse, filter, and sort products without page reloads. The experience stays on the same page but swaps content instantly for a faster, more modern feel.

---

## Features Implemented

### 1. **SPA Navigation**
- Click "All Products" in the navbar to view the products page
- Click "Home" to return to the main page
- All navigation happens **without page reloads** - just content swapping
- Smooth scroll to relevant sections

### 2. **Filter Menu (Faceted Navigation)**
Located in the left sidebar with three main categories:

#### **Category Filter**
- Necklaces
- Earrings
- Bracelets
- Rings
- Sets

#### **Material Filter**
- Sterling Silver
- 14K Gold
- Rose Gold
- Recycled Silver
- Brass

#### **Price Filter**
- Under $60
- $60 - $90
- $90 - $150
- Over $150

### 3. **Product Display**
Each product card includes:
- **Product Image** with hover zoom effect
- **Badge** (Bestseller/New label)
- **Material Info** (Sterling Silver, 14K Gold, etc.)
- **Product Title**
- **Description**
- **Price**
- **Rating & Review Count**
- **Quick View Button** - Shows product details in an alert
- **Add to Cart Button** - Adds item to cart and increments cart counter

### 4. **Sorting Options**
Users can sort products by:
- **Newest** (default)
- **Price: Low to High**
- **Price: High to Low**
- **Most Popular** (based on rating × review count)

### 5. **Real-time Filtering**
- Filters update instantly as checkboxes are checked/unchecked
- Multiple filters work together (AND logic)
- Product count updates dynamically
- **Clear All** button to reset all filters

### 6. **Product Database**
12 sample products included with full details:
- Celestial Moon Pendant
- Garden Fairy Earrings
- Stardust Bracelet
- Orbit Ring
- Petal Drop Necklace
- Midnight Stars Bracelet
- Rose Garden Ring Set
- Luna Earring Collection
- Golden Bliss Necklace
- Cosmic Vibes Set
- Enchanted Forest Ring
- Sunset Gold Bracelet

---

## Technical Architecture

### **HTML Structure** (`index.html`)
```html
<section class="all-products" id="all-products-section">
  <div class="products-container">
    <!-- Filter Sidebar -->
    <aside class="filter-sidebar">
      <!-- Category, Material, Price filters -->
    </aside>
    
    <!-- Products Grid -->
    <div class="products-main">
      <div class="products-header">
        <!-- Sort dropdown and results info -->
      </div>
      <div class="products-grid" id="products-grid">
        <!-- Product cards inserted by JavaScript -->
      </div>
    </div>
  </div>
</section>
```

### **CSS Features** (`styles.css`)
- **Sticky Sidebar**: Filter menu stays visible while scrolling
- **Responsive Grid**: Auto-adjusts from 4 columns on desktop to 2 on mobile
- **Hover Effects**: Product cards lift up with enhanced shadow
- **Image Zoom**: Product images zoom on hover
- **Mobile Responsive**: Full layout adaptation for screens under 768px

### **JavaScript Logic** (`script.js`)

#### **SPA State Management**
```javascript
allProductsLink.addEventListener('click', (e) => {
  e.preventDefault();
  showAllProducts();  // Hide other sections
  renderProducts(productDatabase);  // Show products
});
```

#### **Dynamic Filtering**
```javascript
function filterProducts() {
  // Filter by category, material, price
  // Apply sorting
  // Render filtered results
}
```

#### **Product Rendering**
Products are dynamically generated from the database and inserted into the DOM:
```javascript
function renderProducts(products) {
  // Creates HTML for each product card
  // Attaches event listeners for Quick View & Add to Cart
}
```

---

## User Experience Flow

1. **User clicks "All Products"** in navbar
   - Current page content hides
   - Products section appears with full filter menu
   - Smooth scroll to products section

2. **User selects filters**
   - Checks Category, Material, and/or Price boxes
   - Products instantly update (no page reload)
   - Product count refreshes

3. **User sorts products**
   - Select sort option from dropdown
   - Products rearrange instantly

4. **User interacts with products**
   - **Quick View**: See product details in popup
   - **Add to Cart**: Item added to cart (counter updates)

5. **User clears filters**
   - Click "Clear All" to reset all selections
   - All products display again

6. **User returns home**
   - Click "Home" in navbar
   - Products section hides
   - Main page sections reappear

---

## File Changes Summary

### **Modified Files**
1. **index.html**
   - Added "All Products" section with filter sidebar and grid
   - Updated navbar link to use `all-products-link` class
   - Section hidden by default with `style="display: none;"`

2. **styles.css**
   - Added 350+ lines of CSS for:
     - Filter sidebar styling
     - Product card layout and animations
     - Responsive grid system
     - Hover effects
     - Mobile responsive design

3. **script.js**
   - Added 400+ lines of JavaScript for:
     - SPA navigation logic
     - Product database (12 items)
     - Filter state management
     - Real-time filtering function
     - Product rendering engine
     - Sort functionality
     - Add to Cart & Quick View handlers

---

## How It Works

### **No Page Reloads**
The "All Products" link uses `e.preventDefault()` to stop default navigation, then uses JavaScript to:
1. Hide other sections (`display: none`)
2. Show the products section (`display: block`)
3. Render product cards dynamically
4. Attach filter event listeners

### **Instant Filtering**
When a user checks a filter:
1. Active filters array updates
2. `filterProducts()` function runs
3. Products array filters based on criteria
4. `renderProducts()` creates new HTML
5. DOM updates instantly (no page reload)

### **Performance**
- All data stored in JavaScript (no API calls)
- CSS handles animations (smooth, performant)
- DOM updates are batched (fast rendering)
- Sticky sidebar prevents layout jank

---

## Future Enhancements

- [ ] Connect to backend API for real product data
- [ ] Persistent cart with local storage
- [ ] Product detail modal for Quick View
- [ ] Filter persistence in URL parameters
- [ ] Search functionality
- [ ] Wishlist/Favorites
- [ ] Product reviews display
- [ ] Image galleries per product

---

## Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- CSS Grid & Flexbox support
- ES6 JavaScript features

