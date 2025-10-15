// Replace your existing products data with this:
const products = [
    {
        "id": "tv-24n",
        "title": "24\" LED TV (Normal)",
        "category": "Televisions",
        "price": "₹12,999",
        "originalPrice": "₹15,999",
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MK24.jpg",
        "description": "Compact Full HD LED TV, ideal for bedrooms and small living spaces.",
        "highlights": ["Energy efficient for lower electricity bills", "Vivid color reproduction", "Sturdy build quality"],
        "warranty": "1 Year Onsite Warranty",
        "labels": ["2025 Model", "Energy Star", "Budget Friendly", "Compact Design"]
    },
    {
        "id": "tv-32s",
        "title": "32\" Smart LED TV",
        "category": "Televisions",
        "price": "₹18,999",
        "originalPrice": "₹22,999",
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MK32S.jpg",
        "description": "Android Smart TV for immersive entertainment at home.",
        "highlights": ["Pre-installed streaming apps", "Voice remote and screen mirroring", "Slim bezel design"],
        "warranty": "2 Years Panel Warranty",
        "labels": ["New 2025 Launch", "Smart TV", "Best Seller", "Android 11"]
    },
    {
        "id": "tv-40s",
        "title": "40\" Smart TV",
        "category": "Televisions",
        "price": "₹24,999",
        "originalPrice": "₹28,999",
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MK40S.jpg",
        "description": "Full HD Smart TV with voice-assisted browsing.",
        "highlights": ["Crystal clear HD visuals", "Smart remote with voice control", "Wall-mount and tabletop options"],
        "warranty": "2 Years Warranty",
        "labels": ["2025 Model", "Voice Control", "Customer Choice", "Full HD"]
    },
    {
        "id": "wm-7",
        "title": "Semi Auto Washing Machine – 7.0 kg",
        "category": "Washing Machines",
        "price": "₹8,999",
        "originalPrice": "₹10,999",
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MKSSAWM7.jpg",
        "description": "Durable semi-automatic washer for small families.",
        "highlights": ["Shock-resistant glass lid", "Quick wash modes", "Anti-tangle drum design"],
        "warranty": "2 Years Motor Warranty",
        "labels": ["2025 Model", "Family Size", "Eco Friendly", "Durable Build"]
    },
    {
        "id": "wm-9",
        "title": "Semi Auto Washing Machine – 9.0 kg",
        "category": "Washing Machines",
        "price": "₹10,999",
        "originalPrice": "₹12,999",
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MKSSAWM9.jpg",
        "description": "High capacity washer for medium-large households.",
        "highlights": ["Energy-efficient operation", "Water level selector", "Robust build for heavy cycles"],
        "warranty": "2 Years Motor Warranty",
        "labels": ["Latest 2025", "High Capacity", "Energy Star", "Best Seller"]
    },
    {
        "id": "stab-fridge",
        "title": "Refrigerator Stabilizer (up to 365L)",
        "category": "Stabilizers",
        "price": "₹2,999",
        "originalPrice": "₹3,499",
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MKSTBZREF.jpg",
        "description": "Specially designed for refrigerator safety in Indian homes.",
        "highlights": ["Auto-correction for voltage fluctuations", "Long durability", "Compact wall-mountable body"],
        "warranty": "5 Year Warranty",
        "labels": ["2025 Edition", "Fridge Safe", "5 Year Warranty", "Indian Homes"]
    }
];

// Add this function to display products
function displayProducts() {
    const productGrid = document.getElementById('products-grid');
    if (!productGrid) return;
    
    productGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.title}" class="product-image" 
                 onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(product.title)}'">
            <div class="product-info">
                <h3>${product.title}</h3>
                <p class="product-price">${product.price}</p>
                <p class="product-description">${product.description}</p>
                <div class="product-labels">
                    ${product.labels.map(label => `<span class="label">${label}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// Load products when page loads
document.addEventListener('DOMContentLoaded', displayProducts);
