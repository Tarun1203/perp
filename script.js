// Product data with GitHub image URLs
const products = [
    {
        "id": "tv-24n",
        "title": "24\" LED TV (Normal)",
        "category": "Televisions",
        "size": 24,
        "os": "—",
        "series": "LED TV",
        "price": "₹12,999",
        "originalPrice": "₹15,999",
        "tags": ["Full HD 1080p", "60cm", "Low Power"],
        "specs": ["16.7M Colors"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MK24.jpg",
        "description": "Compact Full HD LED TV, ideal for bedrooms and small living spaces.",
        "highlights": ["Energy efficient for lower electricity bills", "Vivid color reproduction", "Sturdy build quality"],
        "warranty": "1 Year Onsite Warranty",
        "certifications": ["BIS Certified", "MakWell Registered Product"],
        "labels": ["2025 Model", "Energy Star", "Budget Friendly", "Compact Design"]
    },
    {
        "id": "tv-32s",
        "title": "32\" Smart LED TV",
        "category": "Televisions",
        "size": 32,
        "os": "Android 11",
        "series": "Android",
        "price": "₹18,999",
        "originalPrice": "₹22,999",
        "tags": ["HD Ready", "Low Power"],
        "specs": ["1GB RAM", "8GB ROM"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MK32S.jpg",
        "description": "Android Smart TV for immersive entertainment at home.",
        "highlights": ["Pre-installed streaming apps", "Voice remote and screen mirroring", "Slim bezel design"],
        "warranty": "2 Years Panel Warranty",
        "certifications": ["Google Certified", "MakWell Registered Product"],
        "labels": ["New 2025 Launch", "Smart TV", "Best Seller", "Android 11"]
    },
    {
        "id": "tv-40s",
        "title": "40\" Smart TV",
        "category": "Televisions",
        "size": 40,
        "os": "Android",
        "series": "Android",
        "price": "₹24,999",
        "originalPrice": "₹28,999",
        "tags": ["Full HD", "Voice Keypad"],
        "specs": ["1GB RAM", "8GB ROM"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MK40S.jpg",
        "description": "Full HD Smart TV with voice-assisted browsing.",
        "highlights": ["Crystal clear HD visuals", "Smart remote with voice control", "Wall-mount and tabletop options"],
        "warranty": "2 Years Warranty",
        "certifications": ["Energy Star", "MakWell Registered Product"],
        "labels": ["2025 Model", "Voice Control", "Customer Choice", "Full HD"]
    },
    {
        "id": "tv-43s",
        "title": "43\" Smart TV",
        "category": "Televisions",
        "size": 43,
        "os": "Android",
        "series": "Android",
        "price": "₹26,999",
        "originalPrice": "₹29,999",
        "tags": ["Full HD", "Voice Keypad"],
        "specs": ["1GB RAM", "8GB ROM"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MK43S.jpg",
        "description": "Experience true home cinema with next-gen smart features.",
        "highlights": ["Dolby audio support", "Multi-device connectivity", "Stunning edge-to-edge display"],
        "warranty": "2 Years Warranty",
        "certifications": ["BIS Certified", "MakWell Registered Product"],
        "labels": ["Latest 2025", "Home Cinema", "Trending Now", "Premium Audio"]
    },
    {
        "id": "tv-43w",
        "title": "43\" webOS TV",
        "category": "Televisions",
        "size": 43,
        "os": "webOS",
        "series": "webOS",
        "price": "₹27,999",
        "originalPrice": "₹31,999",
        "tags": ["Full HD", "Voice Keypad"],
        "specs": ["1GB RAM", "8GB ROM"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MK43Web.jpg",
        "description": "webOS Smart TV with seamless app navigation and live channels.",
        "highlights": ["Smooth interface, quick app switching", "Voice search and universal remote", "Supports OTT and gaming"],
        "warranty": "2 Years Panel Warranty",
        "certifications": ["webOS Certified", "MakWell Registered Product"],
        "labels": ["2025 Edition", "webOS Smart", "Gaming Ready", "Ultra Smooth"]
    },
    {
        "id": "tv-50g",
        "title": "50\" Google TV",
        "category": "Televisions",
        "size": 50,
        "os": "Google TV",
        "series": "Google",
        "price": "₹32,999",
        "originalPrice": "₹36,999",
        "tags": ["Full HD", "Voice Keypad"],
        "specs": ["1GB RAM", "8GB ROM"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MK50G.jpg",
        "description": "Google TV for unlimited entertainment, movies, and smart controls.",
        "highlights": ["Google Assistant onboard", "High dynamic range (HDR) support", "Personalized recommendations"],
        "warranty": "2 Years Panel Warranty",
        "certifications": ["Google TV Certified", "MakWell Registered Product"],
        "labels": ["New 2025 Launch", "Google Certified", "AI Enabled", "HDR Support"]
    },
    {
        "id": "tv-55web",
        "title": "55\" WebOS TV",
        "category": "Televisions",
        "size": 55,
        "os": "webOS",
        "series": "webOS",
        "price": "₹38,999",
        "originalPrice": "₹42,999",
        "tags": ["Full HD", "Voice Keypad"],
        "specs": ["1GB RAM", "8GB ROM"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MK55G.jpg",
        "description": "Large-screen webOS Smart TV for an immersive viewing experience.",
        "highlights": ["Cinema mode visuals", "One-touch casting", "Ultra thin bezel"],
        "warranty": "2 Years Panel Warranty",
        "certifications": ["webOS Certified", "MakWell Registered Product"],
        "labels": ["Premium 2025", "Large Screen", "Cinema Mode", "Best Value"]
    },
    {
        "id": "tv-65web",
        "title": "65\" WebOS TV",
        "category": "Televisions",
        "size": 65,
        "os": "webOS",
        "series": "webOS",
        "price": "₹48,999",
        "originalPrice": "₹54,999",
        "tags": ["Full HD", "Voice Keypad"],
        "specs": ["1GB RAM", "8GB ROM"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MK65G.jpg",
        "description": "Ultra large webOS TV for home theater and presentations.",
        "highlights": ["Smart split-screen mode", "Bluetooth audio support", "Intelligent ambient sensor"],
        "warranty": "3 Years Panel Warranty",
        "certifications": ["Smart TV Certified", "MakWell Registered Product"],
        "labels": ["Flagship 2025", "Ultra Large", "Home Theater", "Professional Grade"]
    },
    {
        "id": "wm-7",
        "title": "Semi Auto Washing Machine – 7.0 kg",
        "category": "Washing Machines",
        "size": 7,
        "series": "SAWM",
        "price": "₹8,999",
        "originalPrice": "₹10,999",
        "specs": ["135W Motor", "2 Programs", "Heavy Pulsator", "Lint Filter", "Diamond Steel Drum", "Buzzer"],
        "tags": ["Toughened Glass", "ABS Body"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MKSSAWM7.jpg",
        "description": "Durable semi-automatic washer for small families.",
        "highlights": ["Shock-resistant glass lid", "Quick wash modes", "Anti-tangle drum design"],
        "warranty": "2 Years Motor Warranty",
        "certifications": ["ISI Certified", "MakWell Registered Product"],
        "labels": ["2025 Model", "Family Size", "Eco Friendly", "Durable Build"]
    },
    {
        "id": "wm-9",
        "title": "Semi Auto Washing Machine – 9.0 kg",
        "category": "Washing Machines",
        "size": 9,
        "series": "SAWM",
        "price": "₹10,999",
        "originalPrice": "₹12,999",
        "specs": ["185W Motor", "2 Programs", "Heavy Pulsator", "Lint Filter", "Diamond Steel Drum", "Buzzer"],
        "tags": ["Toughened Glass", "ABS Body"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MKSSAWM9.jpg",
        "description": "High capacity washer for medium-large households.",
        "highlights": ["Energy-efficient operation", "Water level selector", "Robust build for heavy cycles"],
        "warranty": "2 Years Motor Warranty",
        "certifications": ["ISI Certified", "MakWell Registered Product"],
        "labels": ["Latest 2025", "High Capacity", "Energy Star", "Best Seller"]
    },
    {
        "id": "wm-11",
        "title": "Semi Auto Washing Machine – 11.0 kg",
        "category": "Washing Machines",
        "size": 11,
        "series": "SAWM",
        "price": "₹12,999",
        "originalPrice": "₹15,999",
        "specs": ["200W Motor", "2 Programs", "Heavy Pulsator", "Lint Filter", "Diamond Steel Drum", "Buzzer"],
        "tags": ["Toughened Glass", "ABS Body"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MKSSAWM11.jpg",
        "description": "Largest capacity for joint families and commercial use.",
        "highlights": ["Quick dry turbo function", "Rust-free body design", "Silent motor technology"],
        "warranty": "2 Years Motor Warranty",
        "certifications": ["ISI Certified", "MakWell Registered Product"],
        "labels": ["Premium 2025", "Extra Large", "Commercial Grade", "Silent Operation"]
    },
    {
        "id": "stab-fridge",
        "title": "Refrigerator Stabilizer (up to 365L)",
        "category": "Stabilizers",
        "size": 365,
        "series": "Stabilizer",
        "price": "₹2,999",
        "originalPrice": "₹3,499",
        "tags": ["500 VA", "5 Year Warranty"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MKSTBZREF.jpg",
        "description": "Specially designed for refrigerator safety in Indian homes.",
        "highlights": ["Auto-correction for voltage fluctuations", "Long durability", "Compact wall-mountable body"],
        "certifications": ["ISI Mark", "MakWell Registered Product"],
        "labels": ["2025 Edition", "Fridge Safe", "5 Year Warranty", "Indian Homes"]
    },
    {
        "id": "stab-led-plus",
        "title": "Smart Plus Stabilizer (up to 75 Inch LED TV)",
        "category": "Stabilizers",
        "size": 75,
        "series": "Stabilizer",
        "price": "₹3,499",
        "originalPrice": "₹3,999",
        "tags": ["LED TV", "5 Year Warranty"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MKSTBZSMT.jpg",
        "description": "Smart stabilizer for large screen HD LED TVs.",
        "highlights": ["Microprocessor-based control", "LED indication system", "Noiseless operation"],
        "certifications": ["ISI Mark", "MakWell Registered Product"],
        "labels": ["Smart 2025", "Large TV Ready", "Microprocessor", "Silent Tech"]
    },
    {
        "id": "stab-led-mini",
        "title": "MINI Stabilizer (up to 43 Inch LED TV)",
        "category": "Stabilizers",
        "size": 43,
        "series": "Stabilizer",
        "price": "₹1,999",
        "originalPrice": "₹2,499",
        "tags": ["LED TV", "5 Year Warranty"],
        "image": "https://raw.githubusercontent.com/Tarun1203/perp/f92ba597abb06a223ea8f43202664060d866f839/assets/MKSTBZMINI.jpg",
        "description": "Compact safety stabilizer for small size LED TVs.",
        "highlights": ["Surge & spike protection", "Digital display", "Portable and lightweight"],
        "certifications": ["ISI Mark", "MakWell Registered Product"],
        "labels": ["Compact 2025", "Mini Size", "Digital Display", "Portable"]
    }
];

// Global variables
let currentFilter = 'all';
let filteredProducts = [...products];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// Initialize the application
function initializeApp() {
    setupMobileMenu();
    setupFilterTabs();
    loadProducts();
    loadFeaturedProducts();
    setupForms();
    setupModals();
    setupAnimations();
}

// Mobile menu functionality
function setupMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');

    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }
}

// Filter tabs functionality
function setupFilterTabs() {
    const filterTabs = document.querySelectorAll('.filter-tab');
    
    filterTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            filterTabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Get selected category
            const category = tab.getAttribute('data-category');
            currentFilter = category;
            
            // Filter and display products
            filterProducts(category);
        });
    });
}

// Filter products by category
function filterProducts(category) {
    if (category === 'all') {
        filteredProducts = [...products];
    } else {
        filteredProducts = products.filter(product => product.category === category);
    }
    
    displayProducts(filteredProducts);
}

// Display products in grid
function displayProducts(productsToShow) {
    const productsGrid = document.getElementById('products-grid');
    
    if (!productsGrid) return;
    
    if (productsToShow.length === 0) {
        productsGrid.innerHTML = '<p class="text-center">No products found.</p>';
        return;
    }
    
    productsGrid.innerHTML = productsToShow.map(product => createProductCard(product)).join('');
    
    // Add fade-in animation
    const productCards = productsGrid.querySelectorAll('.product-card');
    productCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
}

// Load featured products for homepage
function loadFeaturedProducts() {
    const featuredGrid = document.getElementById('featured-products');
    
    if (!featuredGrid) return;
    
    // Show first 6 products as featured
    const featuredProducts = products.slice(0, 6);
    featuredGrid.innerHTML = featuredProducts.map(product => createProductCard(product)).join('');
}

// Load all products for products page
function loadProducts() {
    displayProducts(products);
}

// Create product card HTML
function createProductCard(product) {
    const labelsHtml = product.labels.map(label => 
        `<span class="label ${getLabelClass(label)}">${label}</span>`
    ).join('');
    
    const highlightsHtml = product.highlights.map(highlight => 
        `<li>${highlight}</li>`
    ).join('');

    return `
        <div class="product-card">
            <div class="product-image-container">
                <div class="product-labels">
                    ${labelsHtml}
                </div>
                <img src="${product.image}" alt="${product.title}" class="product-image" 
                     onerror="this.src='https://via.placeholder.com/300x200?text=${encodeURIComponent(product.title)}'">
            </div>
            <div class="product-content">
                <div class="product-category">${product.category}</div>
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-highlights">
                    <div class="highlights-title">Key Features:</div>
                    <ul class="highlights-list">
                        ${highlightsHtml}
                    </ul>
                </div>
            </div>
            <div class="product-footer">
                <div class="product-price">
                    <span class="current-price">${product.price}</span>
                    ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ''}
                </div>
                <span class="warranty-info">${product.warranty || 'Warranty Available'}</span>
                <button class="view-details-btn" onclick="viewProduct('${product.id}')">
                    View Details
                </button>
            </div>
        </div>
    `;
}

// Generate CSS class for label
function getLabelClass(labelText) {
    const classMap = {
        '2025 Model': 'label-2025',
        'New 2025 Launch': 'label-new',
        'Latest 2025': 'label-latest',
        'Premium 2025': 'label-premium',
        'Flagship 2025': 'label-flagship',
        'Smart 2025': 'label-smart',
        'Compact 2025': 'label-compact',
        'Best Seller': 'label-bestseller',
        'Smart TV': 'label-smart',
        'Android 11': 'label-android',
        'Voice Control': 'label-voice',
        'AI Enabled': 'label-ai',
        'Energy Star': 'label-energy',
        'Eco Friendly': 'label-eco',
        'Digital Display': 'label-digital',
        'Professional Grade': 'label-professional',
        'Commercial Grade': 'label-commercial',
        'Large Screen': 'label-large',
        'Ultra Large': 'label-ultra',
        'Compact Design': 'label-compact',
        'Mini Size': 'label-mini',
        'Trending Now': 'label-trending',
        'Customer Choice': 'label-choice',
        '5 Year Warranty': 'label-warranty'
    };
    
    return classMap[labelText] || 'label-default';
}

// Handle product view
function viewProduct(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // For now, just log the product. Later you can create a detailed product page
        console.log('Viewing product:', product);
        alert(`Viewing ${product.title}\n\n${product.description}\n\nPrice: ${product.price}\nWarranty: ${product.warranty}`);
    }
}

// Setup form handlers
function setupForms() {
    setupContactForm();
    setupNewsletterForm();
    setupRegistrationForm();
}

// Contact form handler
function setupContactForm() {
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.innerHTML = '<span class="loading"></span> Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission
            setTimeout(() => {
                alert('Thank you for your message! We will get back to you within 24 hours.');
                contactForm.reset();
                submitBtn.textContent = originalText;
                submitBtn.disabled = false;
            }, 2000);
        });
    }
}

// Newsletter form handler
function setupNewsletterForm() {
    const newsletterForm = document.querySelector('.newsletter-form');
    
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = newsletterForm.querySelector('input[type="email"]').value;
            
            if (email) {
                alert(`Thank you for subscribing with email: ${email}`);
                newsletterForm.reset();
            }
        });
    }
}

// Registration form handler
function setupRegistrationForm() {
    const registrationForm = document.getElementById('registration-form');
    
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(registrationForm);
            const data = Object.fromEntries(formData);
            
            alert(`Product registered successfully!\n\nName: ${data.name}\nProduct: ${data['product-model']}\nSerial: ${data['serial-number']}`);
            registrationForm.reset();
            closeModal('registration-modal');
        });
    }
}

// Modal functionality
function setupModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        const closeBtn = modal.querySelector('.close');
        
        if (closeBtn) {
            closeBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
        }
        
        // Close modal when clicking outside
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
}

// Open modal functions
function openRegistrationForm() {
    const modal = document.getElementById('registration-modal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function openServiceForm() {
    alert('Service form functionality will be available soon. Please call +91 98765 43210 for immediate service.');
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = 'none';
    }
}

// Animation setup
function setupAnimations() {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe elements for animation
    const elementsToAnimate = document.querySelectorAll('.feature-card, .highlight-card, .testimonial-card');
    elementsToAnimate.forEach(el => observer.observe(el));
}

// Utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Handle page visibility changes
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = 'Come back to MakWell!';
    } else {
        document.title = 'MakWell Electronics - Smart Home Appliances';
    }
});

// Console welcome message
console.log('%c🚀 MakWell Electronics Website', 'color: #1e40af; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with modern web technologies and blue theme', 'color: #3b82f6; font-size: 14px;');
console.log('%cAll product images loaded from GitHub', 'color: #0ea5e9; font-size: 12px;');
