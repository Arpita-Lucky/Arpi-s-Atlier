# System Architecture Diagram

## 🏗️ Overall Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    ARPI'S ATELIER WEBSITE                       │
│              (Single Page Application - SPA)                    │
└─────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│  HEADER / NAVIGATION BAR                                        │
│  [Home] [All Products*] [Custom] [Collections] [About] [Design] │
│                    * New SPA Link                              │
└─────────────────────────────────────────────────────────────────┘

                              │
                    Click "All Products"
                              │
                              ▼

    ┌────────────────────────────────────────────────┐
    │    SPA LOGIC - CONTENT SWAPPING                │
    │  showAllProducts()                             │
    │  ├─ Hide: Collections section                  │
    │  ├─ Hide: Featured pieces section              │
    │  ├─ Hide: Why Atelier section                  │
    │  └─ Show: All-products section                 │
    └────────────────────────────────────────────────┘

                              │
                              ▼

┌────────────────────────────────────────────────────────────────┐
│             ALL PRODUCTS PAGE (SPA Content)                    │
│                                                                │
│  ┌──────────────────┐  ┌──────────────────────────────────┐  │
│  │  FILTER SIDEBAR  │  │    PRODUCTS MAIN AREA            │  │
│  │                  │  │                                  │  │
│  │ ┌──────────────┐ │  │ Our Collection      Sort: [v]    │  │
│  │ │   Category   │ │  │ 12 pieces found                  │  │
│  │ │ ☐ Necklaces  │ │  │                                  │  │
│  │ │ ☐ Earrings   │ │  │ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ │  │
│  │ │ ☐ Bracelets  │ │  │ │ P1  │ │ P2  │ │ P3  │ │ P4  │ │  │
│  │ │ ☐ Rings      │ │  │ │[IMG]│ │[IMG]│ │[IMG]│ │[IMG]│ │  │
│  │ │ ☐ Sets       │ │  │ │[Btn]│ │[Btn]│ │[Btn]│ │[Btn]│ │  │
│  │ └──────────────┘ │  │ └─────┘ └─────┘ └─────┘ └─────┘ │  │
│  │                  │  │                                  │  │
│  │ ┌──────────────┐ │  │ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ │  │
│  │ │   Material   │ │  │ │ P5  │ │ P6  │ │ P7  │ │ P8  │ │  │
│  │ │ ☐ Silver     │ │  │ │[IMG]│ │[IMG]│ │[IMG]│ │[IMG]│ │  │
│  │ │ ☐ Gold       │ │  │ │[Btn]│ │[Btn]│ │[Btn]│ │[Btn]│ │  │
│  │ │ ☐ Rose Gold  │ │  │ └─────┘ └─────┘ └─────┘ └─────┘ │  │
│  │ │ ☐ Brass      │ │  │                                  │  │
│  │ └──────────────┘ │  │ ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐ │  │
│  │                  │  │ │ P9  │ │P10  │ │P11  │ │P12  │ │  │
│  │ ┌──────────────┐ │  │ │[IMG]│ │[IMG]│ │[IMG]│ │[IMG]│ │  │
│  │ │    Price     │ │  │ │[Btn]│ │[Btn]│ │[Btn]│ │[Btn]│ │  │
│  │ │ ☐ <$60       │ │  │ └─────┘ └─────┘ └─────┘ └─────┘ │  │
│  │ │ ☐ $60-$90    │ │  │                                  │  │
│  │ │ ☐ $90-$150   │ │  │                                  │  │
│  │ │ ☐ >$150      │ │  │                                  │  │
│  │ └──────────────┘ │  │                                  │  │
│  │                  │  │                                  │  │
│  │ [Clear All]      │  │                                  │  │
│  └──────────────────┘  └──────────────────────────────────┘  │
│                                                                │
│  (Sidebar is sticky - stays on screen when scrolling)         │
└────────────────────────────────────────────────────────────────┘

                              │
                    User checks filters
                              │
                              ▼

    ┌────────────────────────────────────────────────┐
    │  FILTER EVENT LISTENERS                        │
    │  (on checkboxes)                               │
    │                                                │
    │  checkboxes.addEventListener('change', () => {│
    │    activeFilters array updates                 │
    │    filterProducts()                            │
    │  })                                            │
    └────────────────────────────────────────────────┘

                              │
                              ▼

    ┌────────────────────────────────────────────────┐
    │  FILTER LOGIC - filterProducts()               │
    │                                                │
    │  1. Get all 12 products from database          │
    │  2. Filter by selected categories              │
    │  3. Filter by selected materials               │
    │  4. Filter by selected price ranges            │
    │  5. Sort by selected option                    │
    │  6. Return filtered array                      │
    └────────────────────────────────────────────────┘

                              │
                              ▼

    ┌────────────────────────────────────────────────┐
    │  RENDER FUNCTION - renderProducts(filtered)    │
    │                                                │
    │  1. Loop through filtered products             │
    │  2. Create HTML for each product               │
    │  3. Add event listeners to buttons             │
    │  4. Update product count                       │
    │  5. Insert into DOM                            │
    └────────────────────────────────────────────────┘

                              │
                              ▼

    ┌────────────────────────────────────────────────┐
    │  PAGE UPDATES INSTANTLY                        │
    │  • Product grid shows filtered results         │
    │  • Product count updates                       │
    │  • No page reload needed!                      │
    │  • Happens in milliseconds                     │
    └────────────────────────────────────────────────┘
```

---

## 📊 Data Flow Diagram

```
PRODUCT DATABASE (12 items)
│
├─ ID: 1, Name: Celestial Moon Pendant, Category: necklaces, Material: Sterling Silver, Price: 89
├─ ID: 2, Name: Garden Fairy Earrings, Category: earrings, Material: 14K Gold, Price: 65
├─ ID: 3, Name: Stardust Bracelet, Category: bracelets, Material: Rose Gold, Price: 78
├─ ID: 4, Name: Orbit Ring, Category: rings, Material: Recycled Silver, Price: 55
├─ ID: 5, Name: Petal Drop Necklace, Category: necklaces, Material: 14K Gold, Price: 112
├─ ID: 6, Name: Midnight Stars Bracelet, Category: bracelets, Material: Sterling Silver, Price: 72
├─ ID: 7, Name: Rose Garden Ring Set, Category: rings, Material: Rose Gold, Price: 135
├─ ID: 8, Name: Luna Earring Collection, Category: earrings, Material: Brass, Price: 48
├─ ID: 9, Name: Golden Bliss Necklace, Category: necklaces, Material: 14K Gold, Price: 165
├─ ID: 10, Name: Cosmic Vibes Set, Category: sets, Material: Sterling Silver, Price: 145
├─ ID: 11, Name: Enchanted Forest Ring, Category: rings, Material: Recycled Silver, Price: 92
└─ ID: 12, Name: Sunset Gold Bracelet, Category: bracelets, Material: 14K Gold, Price: 128

                                    │
                                    ▼

FILTER STATE OBJECT
{
  categories: ["necklaces", "earrings"],  // Selected categories
  materials: ["Sterling Silver", "14K Gold"],  // Selected materials
  prices: ["60-90", "90-150"]  // Selected price ranges
}

                                    │
                                    ▼

FILTERING ALGORITHM
1. Start with all 12 products
2. Keep only items where category matches selected categories
3. Keep only items where material matches selected materials
4. Keep only items where price falls in selected ranges
5. Result: Filtered array [P1, P3, P5, P9]

                                    │
                                    ▼

SORTING ALGORITHM
• Newest: Sort by ID (desc) - newest first
• Price Low-High: Sort by price (asc)
• Price High-Low: Sort by price (desc)
• Popular: Sort by (rating × reviews) (desc)

                                    │
                                    ▼

RENDER TO DOM
Product Grid Container
├─ Product Card 1
│  ├─ Image
│  ├─ Title
│  ├─ Price
│  ├─ Quick View Button → quickView(id)
│  └─ Add to Cart Button → addToCart(id)
├─ Product Card 2
│  └─ ...
├─ Product Card 3
│  └─ ...
└─ Product Card 4
   └─ ...
```

---

## 🎯 State Management

```
┌──────────────────────────────────────┐
│     ACTIVE FILTERS STATE OBJECT      │
├──────────────────────────────────────┤
│ activeFilters = {                    │
│   categories: [],                    │
│   materials: [],                     │
│   prices: []                         │
│ }                                    │
└──────────────────────────────────────┘
        │         │         │
        ▼         ▼         ▼
    Categories  Materials  Prices
        │         │         │
    necklaces  Sterling    60-90
    earrings   Silver      90-150
    bracelets  14K Gold
    rings      Rose Gold
    sets       Recycled
              Silver
              Brass


USER INTERACTIONS ──────► UPDATE FILTERS ──────► CALL filterProducts()
  
  ☑ Necklaces                 activeFilters
  ☑ Earrings         →        .categories.push
  ☐ Bracelets                 ('necklaces')
  ☐ Rings                     .push('earrings')
  ☐ Sets                          │
                                  ▼
                            filterProducts()
                                  │
                                  ▼
                            renderProducts(filtered)
                                  │
                                  ▼
                            DOM UPDATES
                            New product grid displayed
```

---

## 🔄 Event Flow

```
┌─ INITIALIZATION
│  └─ Page loads
│     └─ Product database created in memory
│     └─ Filter state initialized
│     └─ Event listeners attached to:
│        ├─ Category checkboxes
│        ├─ Material checkboxes
│        ├─ Price checkboxes
│        ├─ Sort dropdown
│        ├─ Clear filters button
│        ├─ Quick view buttons
│        ├─ Add to cart buttons
│        └─ All products link

┌─ USER CLICKS "ALL PRODUCTS"
│  ├─ allProductsLink.addEventListener('click')
│  ├─ e.preventDefault() ← Stops page navigation
│  ├─ showAllProducts() ← Hide other sections
│  │  ├─ allProductsSection.style.display = 'block'
│  │  ├─ collectionsSection.style.display = 'none'
│  │  ├─ featuredSection.style.display = 'none'
│  │  ├─ whyAtelier.style.display = 'none'
│  │  └─ Smooth scroll to products
│  └─ renderProducts(productDatabase) ← Show all 12 products

┌─ USER CHECKS "NECKLACES" FILTER
│  ├─ categoryFilter.addEventListener('change')
│  ├─ if (checked) ← Item checked
│  │  └─ activeFilters.categories.push('necklaces')
│  ├─ else ← Item unchecked
│  │  └─ activeFilters.categories.filter(...)
│  └─ filterProducts() ← Apply filter immediately

┌─ FILTERING HAPPENS
│  ├─ let filtered = productDatabase
│  ├─ filtered = filtered.filter(p => activeFilters.categories.includes(p.category))
│  ├─ (apply other filters...)
│  ├─ (apply sorting...)
│  └─ renderProducts(filtered) ← Show results

┌─ RENDERING HAPPENS
│  ├─ productCount.textContent = filtered.length ← Update count
│  ├─ productsGrid.innerHTML = mapped HTML ← Insert cards
│  └─ Products visible on screen instantly

┌─ USER CLICKS "QUICK VIEW"
│  ├─ quickView(productId) function called
│  ├─ productDatabase.find(p => p.id === productId)
│  └─ alert(product details) ← Show popup

┌─ USER CLICKS "ADD TO CART"
│  ├─ addToCart(productId) function called
│  ├─ productDatabase.find(p => p.id === productId)
│  ├─ cartCount.textContent++ ← Increment counter
│  └─ alert(product added) ← Show confirmation

┌─ USER CLICKS "CLEAR ALL"
│  ├─ clearFiltersBtn.addEventListener('click')
│  ├─ All checkboxes.checked = false
│  ├─ activeFilters reset to empty
│  └─ filterProducts() ← Show all products again

┌─ USER SELECTS SORT OPTION
│  ├─ sortSelect.addEventListener('change')
│  └─ filterProducts() ← Re-render with new sort order
```

---

## 🎨 Component Structure

```
ALL-PRODUCTS SECTION
│
├─ products-container
│  │
│  ├─ filter-sidebar (sticky)
│  │  ├─ filter-header
│  │  │  ├─ h3 (Filter By)
│  │  │  └─ button (Clear All)
│  │  │
│  │  ├─ filter-group (Category)
│  │  │  ├─ filter-title
│  │  │  └─ filter-options
│  │  │     ├─ filter-checkbox (Necklaces)
│  │  │     ├─ filter-checkbox (Earrings)
│  │  │     ├─ filter-checkbox (Bracelets)
│  │  │     ├─ filter-checkbox (Rings)
│  │  │     └─ filter-checkbox (Sets)
│  │  │
│  │  ├─ filter-group (Material)
│  │  │  ├─ filter-title
│  │  │  └─ filter-options
│  │  │     ├─ filter-checkbox (Sterling Silver)
│  │  │     ├─ filter-checkbox (14K Gold)
│  │  │     ├─ filter-checkbox (Rose Gold)
│  │  │     ├─ filter-checkbox (Recycled Silver)
│  │  │     └─ filter-checkbox (Brass)
│  │  │
│  │  └─ filter-group (Price)
│  │     ├─ filter-title
│  │     └─ filter-options
│  │        ├─ filter-checkbox (Under $60)
│  │        ├─ filter-checkbox ($60-$90)
│  │        ├─ filter-checkbox ($90-$150)
│  │        └─ filter-checkbox (Over $150)
│  │
│  └─ products-main
│     │
│     ├─ products-header
│     │  ├─ results-info
│     │  │  ├─ h2 (Our Collection)
│     │  │  └─ p (X pieces found)
│     │  └─ sort-container
│     │     ├─ label (Sort by:)
│     │     └─ select (Newest/Price/Popular)
│     │
│     └─ products-grid (CSS Grid: 4 cols)
│        ├─ product-card
│        │  ├─ product-image-wrapper
│        │  │  ├─ product-badge (if exists)
│        │  │  └─ img (product-image)
│        │  └─ product-info
│        │     ├─ p (product-material)
│        │     ├─ h3 (product-title)
│        │     ├─ p (product-description)
│        │     ├─ div (product-footer)
│        │     │  ├─ span (product-price)
│        │     │  └─ span (product-rating)
│        │     └─ div (product-actions)
│        │        ├─ button (quick-view-btn)
│        │        └─ button (product-add-to-cart)
│        │
│        ├─ product-card (x11 more)
│        │  └─ ...
│        │
│        └─ empty-products (shown if no results)
│           ├─ h3 (No products found)
│           └─ p (Try adjusting filters)
```

---

## 📱 Responsive Breakpoints

```
DESKTOP (> 768px)
┌─────────────────────────────────────────────────┐
│ Filter Sidebar (280px) │ Products Grid (4 cols) │
│ (sticky on scroll)     │                        │
└─────────────────────────────────────────────────┘

TABLET (< 768px)
┌─────────────────────────┐
│ Filter Sidebar (100%)   │
│ Products Grid (3 cols)  │
└─────────────────────────┘

MOBILE (< 480px)
┌──────────────┐
│ Filter Sidebar│
│ Products     │
│ Grid (2 cols)│
└──────────────┘
```

---

## ⚡ Performance Considerations

```
OPTIMIZATION STRATEGIES:

1. State Management
   └─ activeFilters object updated in memory
   └─ No localStorage/API calls needed

2. DOM Updates
   └─ Entire grid re-rendered (acceptable for 12 items)
   └─ Could optimize with targeted updates for larger datasets

3. Event Delegation
   └─ Individual listeners on checkboxes (acceptable for small count)
   └─ Could use event delegation for hundreds of filters

4. CSS Performance
   └─ Uses CSS Grid (hardware accelerated)
   └─ Sticky positioning (efficient)
   └─ Transform animations (GPU optimized)

5. JavaScript Performance
   └─ Array.filter() and .map() (native, optimized)
   └─ No external dependencies
   └─ Vanilla JS (no overhead)

RESULT: Fast, snappy filtering with instant updates
```

