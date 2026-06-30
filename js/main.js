// Properties Data
const properties = [
    {
        id: 1,
        title: "Marina Shores Premium Apartment",
        type: "apartment",
        location: "Dubai Marina",
        beds: 3,
        baths: 4,
        size: 1850,
        price: 2450000,
        image: "assets/prop-apartment.png",
        purpose: "sale",
        developer: "Emaar",
        description: "Experience the epitome of luxury living in this spacious 3-bedroom apartment located in the prestigious Marina Shores development. Featuring high-end finishes, floor-to-ceiling windows with panoramic Marina views, an open-concept kitchen, and a large private balcony. Residents enjoy exclusive access to world-class amenities including an infinity pool, state-of-the-art gym, and 24/7 concierge service.",
        amenities: ["Swimming Pool", "Equipped Gym", "24/7 Security", "Covered Parking", "Balcony", "Marina View"]
    },
    {
        id: 2,
        title: "Emirates Hills Contemporary Mansion",
        type: "villa",
        location: "Emirates Hills",
        beds: 5,
        baths: 6,
        size: 7200,
        price: 18900000,
        image: "assets/prop-villa.png",
        purpose: "sale",
        developer: "Emaar",
        description: "A architectural masterpiece in the exclusive Emirates Hills community. This luxury custom-built villa features 5 bedrooms, double-height ceilings, a private lift, home cinema, swimming pool, and an beautifully landscaped private garden. Floor-to-ceiling glass offers stunning views of the Address Montgomerie golf course. Crafted with Italian marble and premium smart-home automated systems.",
        amenities: ["Private Pool", "Private Garden", "Home Cinema", "Smart Home Automation", "Golf Course View", "Maids Room"]
    },
    {
        id: 3,
        title: "Downtown Royal Penthouse",
        type: "penthouse",
        location: "Downtown Dubai",
        beds: 4,
        baths: 5,
        size: 4500,
        price: 9800000,
        image: "assets/prop-penthouse.png",
        purpose: "off-plan",
        developer: "Sobha",
        description: "Occupying the entire top floor, this off-plan royal penthouse offers 360-degree views of Downtown Dubai, the Dubai Fountain, and the iconic Burj Khalifa. Designed for those who appreciate grandeur, the property features high ceilings, a private rooftop pool, marble flooring, smart automation, and private elevator access. Scheduled handover in Q4 2027 with an attractive payment plan.",
        amenities: ["Private Pool", "Burj Khalifa View", "Fountain View", "Private Lift", "Smart Home Automation", "Valet Parking"]
    },
    {
        id: 4,
        title: "Business Bay Heights Apartment",
        type: "apartment",
        location: "Business Bay",
        beds: 2,
        baths: 3,
        size: 1300,
        price: 120000,
        image: "assets/prop-apartment.png",
        purpose: "rent",
        developer: "Damac",
        description: "Highly sought-after 2-bedroom rental apartment in Business Bay. Modern design with floor-to-ceiling windows offering canal views. Features a semi-open kitchen, spacious bedrooms with built-in wardrobes, and elegant wooden accents. Ideal for young professionals and families seeking a vibrant city lifestyle.",
        amenities: ["Canal View", "Swimming Pool", "Gym", "Concierge Service", "Covered Parking", "Sauna"]
    },
    {
        id: 5,
        title: "Palm Jumeirah Signature Villa",
        type: "villa",
        location: "Palm Jumeirah",
        beds: 6,
        baths: 7,
        size: 9600,
        price: 32000000,
        image: "assets/prop-villa.png",
        purpose: "sale",
        developer: "Nakheel",
        description: "Direct beachfront access on the Fronds of Palm Jumeirah. This ultra-private 6-bedroom signature villa provides an unmatched beach resort lifestyle. Includes a private pool, infinity edge jacuzzi, sunbathing deck, private cinema, and spacious formal living areas designed for hosting guests. Enjoy sweeping views of the Arabian Gulf and Dubai skyline.",
        amenities: ["Beach Access", "Private Pool", "Jacuzzi", "Sea View", "Private Garden", "Smart Home Automation"]
    },
    {
        id: 6,
        title: "Downtown Vista Residence",
        type: "apartment",
        location: "Downtown Dubai",
        beds: 1,
        baths: 2,
        size: 850,
        price: 85000,
        image: "assets/prop-penthouse.png",
        purpose: "rent",
        developer: "Emaar",
        description: "An elegant, fully-furnished 1-bedroom apartment in the heart of Downtown Dubai, just steps away from Dubai Mall. This high-floor unit features premium contemporary furniture, integrated kitchen appliances, and a balcony overlooking the city skyline. Perfect for city living.",
        amenities: ["Burj Khalifa View", "Walk-in Closet", "Balcony", "Swimming Pool", "24/7 Security", "Central A/C"]
    }
];

// Document Ready Setup
document.addEventListener("DOMContentLoaded", () => {
    // Dynamic active navigation link highlighter
    const currentPath = window.location.pathname.split("/").pop() || "index.html";
    const params = new URLSearchParams(window.location.search);
    const purpose = params.get("purpose");

    const navLinks = document.querySelectorAll(".nav-link, .mobile-link");
    navLinks.forEach(link => {
        const hrefAttr = link.getAttribute("href");
        if (!hrefAttr) return;

        const urlParts = hrefAttr.split("?");
        const linkPath = urlParts[0] || "index.html";
        const linkParams = urlParts[1] ? new URLSearchParams(urlParts[1]) : null;
        const linkPurpose = linkParams ? linkParams.get("purpose") : null;

        link.classList.remove("active");

        if (linkPath === currentPath) {
            if (currentPath === "properties.html") {
                if (linkPurpose === purpose || (linkPurpose === "sale" && !purpose)) {
                    link.classList.add("active");
                }
            } else {
                link.classList.add("active");
            }
        }
    });

    // Header scroll background change
    const header = document.querySelector(".header");
    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }
        });
    }

    // Mobile navigation toggle
    const navToggle = document.querySelector(".mobile-nav-toggle");
    const mobileNav = document.querySelector(".mobile-nav");
    const mobileClose = document.querySelector(".mobile-nav-close");
    const overlay = document.querySelector(".overlay");

    if (navToggle && mobileNav && overlay) {
        navToggle.addEventListener("click", () => {
            mobileNav.classList.add("active");
            overlay.classList.add("active");
        });
    }

    if (mobileClose && mobileNav && overlay) {
        mobileClose.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

    if (overlay && mobileNav) {
        overlay.addEventListener("click", () => {
            mobileNav.classList.remove("active");
            overlay.classList.remove("active");
        });
    }

    // Home Page Tab Handling & Search Redirection
    const searchTabs = document.querySelectorAll(".search-tab");
    let searchPurpose = "sale";

    if (searchTabs.length > 0) {
        searchTabs.forEach(tab => {
            tab.addEventListener("click", () => {
                searchTabs.forEach(t => t.classList.remove("active"));
                tab.classList.add("active");
                searchPurpose = tab.dataset.purpose;
            });
        });
    }

    const heroSearchForm = document.getElementById("heroSearchForm");
    if (heroSearchForm) {
        heroSearchForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const location = document.getElementById("searchLocation").value;
            const type = document.getElementById("searchType").value;
            const beds = document.getElementById("searchBeds").value;
            
            // Redirect to properties.html with query parameters
            window.location.href = `properties.html?purpose=${searchPurpose}&location=${encodeURIComponent(location)}&type=${encodeURIComponent(type)}&beds=${beds}`;
        });
    }

    // Initialize Pages
    initHomePage();
    initPropertiesPage();
    initPropertyDetailPage();
    initListPropertyForm();
    initContactPage();
});

// Helper: Format Price
function formatPrice(val, purpose) {
    if (purpose === "rent") {
        return `AED ${val.toLocaleString()} / year`;
    }
    return `AED ${val.toLocaleString()}`;
}

// Generate Property Card HTML
function createPropertyCard(prop) {
    const badgeText = prop.purpose === "sale" ? "For Sale" : prop.purpose === "rent" ? "For Rent" : "Off-Plan";
    const badgeClass = prop.purpose;
    return `
        <div class="property-card" data-id="${prop.id}">
            <div class="property-img">
                <img src="${prop.image}" alt="${prop.title}">
                <span class="property-badge ${badgeClass}">${badgeText}</span>
                <span class="property-price">${formatPrice(prop.price, prop.purpose)}</span>
            </div>
            <div class="property-info">
                <div class="property-type">${prop.type} • By ${prop.developer}</div>
                <h3 class="property-title"><a href="property-detail.html?id=${prop.id}">${prop.title}</a></h3>
                <div class="property-location">
                    <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z" stroke="#4B7095" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7 17C10 13 13 10.2 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.2 4 13 7 17Z" stroke="#4B7095" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    ${prop.location}
                </div>
                <div class="property-specs">
                    <span class="spec-item"><i class="fas fa-bed"></i> ${prop.beds} Beds</span>
                    <span class="spec-item"><i class="fas fa-bath"></i> ${prop.baths} Baths</span>
                    <span class="spec-item"><i class="fas fa-expand"></i> ${prop.size} sqft</span>
                </div>
            </div>
        </div>
    `;
}

// 1. Home Page Initialization
function initHomePage() {
    const homeFeaturedContainer = document.getElementById("homeFeaturedGrid");
    if (!homeFeaturedContainer) return;

    // Load top 3 properties for homepage features
    const featuredList = properties.slice(0, 3);
    homeFeaturedContainer.innerHTML = featuredList.map(prop => createPropertyCard(prop)).join("");
}

// 2. Properties Catalog Page Initialization
function initPropertiesPage() {
    const catalogContainer = document.getElementById("propertiesCatalogGrid");
    if (!catalogContainer) return;

    // Parse URL Query parameters for initial state
    const params = new URLSearchParams(window.location.search);
    const initialPurpose = params.get("purpose") || "all";
    const initialLocation = params.get("location") || "";
    const initialType = params.get("type") || "";
    const initialBeds = params.get("beds") || "";

    // Set Sidebar Filters to match URL parameters
    const sidebarPurpose = document.getElementById("filterPurpose");
    const sidebarLocation = document.getElementById("filterLocation");
    const sidebarType = document.getElementById("filterType");
    const sidebarBeds = document.getElementById("filterBeds");

    if (sidebarPurpose && initialPurpose !== "all") sidebarPurpose.value = initialPurpose;
    if (sidebarLocation && initialLocation) sidebarLocation.value = initialLocation;
    if (sidebarType && initialType) sidebarType.value = initialType;
    if (sidebarBeds && initialBeds) sidebarBeds.value = initialBeds;

    // Filter properties function
    const applyFilters = () => {
        const purpose = document.getElementById("filterPurpose")?.value || "all";
        const location = document.getElementById("filterLocation")?.value || "";
        const type = document.getElementById("filterType")?.value || "";
        const beds = document.getElementById("filterBeds")?.value || "";
        const minPrice = parseInt(document.getElementById("filterMinPrice")?.value) || 0;
        const maxPrice = parseInt(document.getElementById("filterMaxPrice")?.value) || Infinity;
        const searchInput = document.getElementById("catalogSearchInput")?.value.toLowerCase() || "";

        let filtered = properties;

        if (purpose !== "all") {
            filtered = filtered.filter(p => p.purpose === purpose);
        }
        if (location) {
            filtered = filtered.filter(p => p.location === location);
        }
        if (type) {
            filtered = filtered.filter(p => p.type === type);
        }
        if (beds) {
            filtered = filtered.filter(p => p.beds >= parseInt(beds));
        }
        if (minPrice > 0) {
            filtered = filtered.filter(p => p.price >= minPrice);
        }
        if (maxPrice < Infinity && maxPrice > 0) {
            filtered = filtered.filter(p => p.price <= maxPrice);
        }
        if (searchInput) {
            filtered = filtered.filter(p => p.title.toLowerCase().includes(searchInput) || p.description.toLowerCase().includes(searchInput));
        }

        // Show properties count
        const resultsCountElement = document.getElementById("resultsCount");
        if (resultsCountElement) {
            resultsCountElement.textContent = `${filtered.length} Properties Found`;
        }

        if (filtered.length === 0) {
            catalogContainer.innerHTML = `<div class="no-results" style="grid-column: span 3; text-align: center; padding: 40px; color: var(--text-muted);">
                <h3>No Properties Match Your Criteria</h3>
                <p>Try resetting the filters or broadening your search.</p>
            </div>`;
        } else {
            catalogContainer.innerHTML = filtered.map(prop => createPropertyCard(prop)).join("");
        }
    };

    // Attach filter listeners
    const filters = ["filterPurpose", "filterLocation", "filterType", "filterBeds", "filterMinPrice", "filterMaxPrice", "catalogSearchInput"];
    filters.forEach(fid => {
        const el = document.getElementById(fid);
        if (el) {
            el.addEventListener("input", applyFilters);
            el.addEventListener("change", applyFilters);
        }
    });

    // Reset filters button
    const resetBtn = document.getElementById("resetFiltersBtn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            document.getElementById("filterPurpose").value = "all";
            document.getElementById("filterLocation").value = "";
            document.getElementById("filterType").value = "";
            document.getElementById("filterBeds").value = "";
            document.getElementById("filterMinPrice").value = "";
            document.getElementById("filterMaxPrice").value = "";
            if (document.getElementById("catalogSearchInput")) document.getElementById("catalogSearchInput").value = "";
            applyFilters();
        });
    }

    // Initial Filter Apply
    applyFilters();
}

// 3. Property Detail Page Initialization
function initPropertyDetailPage() {
    const detailContainer = document.getElementById("propertyDetailContainer");
    if (!detailContainer) return;

    // Get Property ID from URL
    const params = new URLSearchParams(window.location.search);
    const id = parseInt(params.get("id")) || 1;

    const prop = properties.find(p => p.id === id);
    if (!prop) {
        detailContainer.innerHTML = `<h2>Property Not Found</h2><p><a href="properties.html">Return to all properties</a></p>`;
        return;
    }

    // Dynamically inject details
    document.title = `${prop.title} | ARC Global Properties`;
    
    // Set banner title
    const bannerTitle = document.getElementById("detailBannerTitle");
    if (bannerTitle) bannerTitle.textContent = prop.title;

    // Build the details layout
    const badgeText = prop.purpose === "sale" ? "For Sale" : prop.purpose === "rent" ? "For Rent" : "Off-Plan";
    const badgeClass = prop.purpose;

    detailContainer.innerHTML = `
        <div class="detail-grid">
            <div class="detail-left">
                <!-- Gallery -->
                <div class="gallery-grid">
                    <div class="gallery-main">
                        <img src="${prop.image}" alt="${prop.title}" class="lightbox-trigger">
                    </div>
                    <div class="gallery-sub">
                        <img src="assets/hero-bg.png" alt="Property interior view" class="lightbox-trigger">
                    </div>
                    <div class="gallery-sub">
                        <img src="assets/prop-villa.png" alt="Property alternative view" class="lightbox-trigger">
                    </div>
                </div>

                <!-- Info Header -->
                <div class="detail-header">
                    <div class="detail-title-area">
                        <span class="property-badge ${badgeClass}" style="position:static; display:inline-block; margin-bottom:12px;">${badgeText}</span>
                        <h2>${prop.title}</h2>
                        <div class="property-location" style="margin-bottom:0;">
                            <svg width="14" height="18" viewBox="0 0 14 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7 9C8.10457 9 9 8.10457 9 7C9 5.89543 8.10457 5 7 5C5.89543 5 5 5.89543 5 7C5 8.10457 5.89543 9 7 9Z" stroke="#4B7095" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7 17C10 13 13 10.2 13 7C13 3.68629 10.3137 1 7 1C3.68629 1 1 3.68629 1 7C1 10.2 4 13 7 17Z" stroke="#4B7095" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            ${prop.location}, UAE
                        </div>
                    </div>
                    <div class="detail-price">
                        ${formatPrice(prop.price, prop.purpose)}
                    </div>
                </div>

                <!-- Specifications List -->
                <div class="specs-list">
                    <div class="detail-spec-item">
                        <i class="fas fa-bed"></i>
                        <span>Bedrooms</span>
                        <strong>${prop.beds}</strong>
                    </div>
                    <div class="detail-spec-item">
                        <i class="fas fa-bath"></i>
                        <span>Bathrooms</span>
                        <strong>${prop.baths}</strong>
                    </div>
                    <div class="detail-spec-item">
                        <i class="fas fa-expand"></i>
                        <span>Size</span>
                        <strong>${prop.size} sqft</strong>
                    </div>
                    <div class="detail-spec-item">
                        <i class="fas fa-building"></i>
                        <span>Developer</span>
                        <strong>${prop.developer}</strong>
                    </div>
                </div>

                <!-- Description -->
                <div class="detail-section">
                    <h3>Overview</h3>
                    <p>${prop.description}</p>
                </div>

                <!-- Amenities -->
                <div class="detail-section">
                    <h3>Premium Amenities</h3>
                    <div class="amenities-grid">
                        ${prop.amenities.map(am => `
                            <div class="amenity-item">
                                <i class="fas fa-check-circle"></i>
                                <span>${am}</span>
                            </div>
                        `).join("")}
                    </div>
                </div>
            </div>

            <!-- Agent Contact Form Sidebar -->
            <div class="detail-right">
                <div class="agent-card">
                    <div class="agent-profile">
                        <div class="agent-avatar">
                            <div style="background-color: var(--steel-blue); color:white; width:100%; height:100%; display:flex; align-items:center; justify-content:center; font-weight:700; font-size:1.5rem;">
                                SK
                            </div>
                        </div>
                        <div class="agent-info">
                            <h4>Sameer Khan</h4>
                            <p>Senior Luxury Consultant</p>
                        </div>
                    </div>

                    <form class="agent-contact-form" id="detailAgentForm">
                        <input type="text" placeholder="Your Name" required>
                        <input type="email" placeholder="Your Email" required>
                        <input type="tel" placeholder="Your Phone Number" required>
                        <textarea placeholder="I'm interested in this property. Please contact me with more information." rows="4" required></textarea>
                        <button class="btn btn-secondary" type="submit" style="width:100%;">Inquire Now</button>
                    </form>

                    <div class="agent-buttons">
                        <a href="tel:+97144542588" class="btn btn-outline" style="font-size:0.8rem; padding: 10px 0;"><i class="fas fa-phone-alt"></i> Call</a>
                        <a href="https://wa.me/971500000000?text=Interested%20in%20property%20ID%20${prop.id}" target="_blank" class="btn btn-outline" style="font-size:0.8rem; padding: 10px 0; border-color:#25D366; color:#25D366;"><i class="fab fa-whatsapp"></i> WhatsApp</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    // Setup Gallery Lightbox Trigger
    const triggers = document.querySelectorAll(".lightbox-trigger");
    const lightbox = document.getElementById("lightboxModal");
    const lightboxImg = document.getElementById("lightboxImage");
    const lightboxClose = document.querySelector(".lightbox-close");

    if (triggers && lightbox && lightboxImg) {
        triggers.forEach(tr => {
            tr.addEventListener("click", () => {
                lightboxImg.src = tr.src;
                lightbox.style.display = "flex";
            });
        });
    }

    if (lightboxClose && lightbox) {
        lightboxClose.addEventListener("click", () => {
            lightbox.style.display = "none";
        });
        // Click outside image closes lightbox
        lightbox.addEventListener("click", (e) => {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        });
    }

    // Agent contact form submission
    const agentForm = document.getElementById("detailAgentForm");
    if (agentForm) {
        agentForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showSuccessModal("Inquiry Submitted", "Your inquiry for this property has been received. Our senior consultant will contact you shortly.");
            agentForm.reset();
        });
    }
}

// 4. List Your Property Step-Form Wizard
function initListPropertyForm() {
    const listForm = document.getElementById("listPropertyForm");
    if (!listForm) return;

    const steps = document.querySelectorAll(".form-step-content");
    const indicators = document.querySelectorAll(".step-indicator");
    const nextBtns = document.querySelectorAll(".next-step-btn");
    const prevBtns = document.querySelectorAll(".prev-step-btn");
    let currentStep = 0;

    const updateWizard = () => {
        steps.forEach((step, idx) => {
            if (idx === currentStep) {
                step.classList.add("active");
            } else {
                step.classList.remove("active");
            }
        });

        indicators.forEach((ind, idx) => {
            if (idx === currentStep) {
                ind.classList.add("active");
                ind.classList.remove("completed");
            } else if (idx < currentStep) {
                ind.classList.add("completed");
                ind.classList.remove("active");
            } else {
                ind.classList.remove("active", "completed");
            }
        });
    };

    if (nextBtns.length > 0) {
        nextBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                // Perform validation on current step inputs
                const currentInputs = steps[currentStep].querySelectorAll("input, select, textarea");
                let isValid = true;
                currentInputs.forEach(input => {
                    if (input.hasAttribute("required") && !input.value) {
                        input.style.borderColor = "red";
                        isValid = false;
                    } else {
                        input.style.borderColor = "";
                    }
                });

                if (isValid) {
                    currentStep++;
                    updateWizard();
                }
            });
        });
    }

    if (prevBtns.length > 0) {
        prevBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                currentStep--;
                updateWizard();
            });
        });
    }

    listForm.addEventListener("submit", (e) => {
        e.preventDefault();
        showSuccessModal("Listing Request Received", "Thank you for listing your property with ARC. Our valuation team will call you to arrange an inspection.");
        listForm.reset();
        currentStep = 0;
        updateWizard();
    });

    updateWizard();
}

// 5. Contact Us Page Location Tabs & Map setup
function initContactPage() {
    const officeTabBtns = document.querySelectorAll(".office-tab-btn");
    const mapPlaceholder = document.getElementById("officeMapPlaceholder");

    if (officeTabBtns.length > 0 && mapPlaceholder) {
        const locations = {
            dubai: {
                title: "Business Bay Dubai Office",
                coords: "25.1852° N, 55.2713° E",
                desc: "Office 102-106, Building 02, Business Bay, Dubai, UAE"
            },
            abudhabi: {
                title: "Reem Island Abu Dhabi Office",
                coords: "24.4942° N, 54.4069° E",
                desc: "Office 149 & 150, Wafra Square, Reem Island, Abu Dhabi, UAE"
            }
        };

        const updateMapPlaceholder = (locKey) => {
            const loc = locations[locKey];
            mapPlaceholder.innerHTML = `
                <div style="padding: 24px; text-align: center; z-index: 2; position:relative; background-color: rgba(255, 255, 255, 0.9); border-radius: var(--radius-md); max-width: 80%;">
                    <h3 style="font-size: 1.15rem; margin-bottom: 8px;">${loc.title}</h3>
                    <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 12px;">${loc.desc}</p>
                    <span style="font-size: 0.8rem; font-weight:700; color: var(--gold); border: 1px solid var(--gold); padding: 4px 10px; border-radius: 4px;">GPS: ${loc.coords}</span>
                </div>
            `;
            // Subtle styling update to mimic loaded maps
            mapPlaceholder.style.backgroundImage = `linear-gradient(rgba(10, 29, 55, 0.2), rgba(10, 29, 55, 0.3)), url('assets/hero-bg.png')`;
        };

        officeTabBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                officeTabBtns.forEach(b => b.classList.remove("active"));
                btn.classList.add("active");
                updateMapPlaceholder(btn.dataset.office);
            });
        });

        // Initialize with Dubai
        updateMapPlaceholder("dubai");
    }

    const contactForm = document.getElementById("generalContactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            showSuccessModal("Message Sent Successfully", "We have received your message and will get back to you within 24 hours.");
            contactForm.reset();
        });
    }
}

// Global helper: Show Success Modal
function showSuccessModal(title, message) {
    const modal = document.getElementById("successModal");
    const modalTitle = document.getElementById("successModalTitle");
    const modalMsg = document.getElementById("successModalMessage");
    const modalClose = document.getElementById("successModalClose");

    if (modal && modalTitle && modalMsg) {
        modalTitle.textContent = title;
        modalMsg.textContent = message;
        modal.style.display = "flex";
    }

    if (modalClose && modal) {
        modalClose.addEventListener("click", () => {
            modal.style.display = "none";
        });
        modal.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });
    }
}



