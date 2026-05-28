// =======================
// PRODUCTS DATA
// =======================
const products = [
    {
        name: 'MSI KATANA GAMING',
        price: 85990,
        category: 'laptop',
        description:
            'Intel Core i7-13620H | NVIDIA RTX 4050 | 16GB DDR5 up to 64GB RAM | 512GB-1TB NVMe SSD Storage | 15.6" Full HD(144hz) Display | Battery Capacity 4700mAh | WiFi 6 / HDMI 2.1 / USB-C Thuderbolt',
        img: 'assets/pics/product-images/Msi katana gaming.png',
    },
    {
        name: 'LENOVO LEGION 5',
        price: 87000,
        category: 'laptop',
        description:
            'Intel Core i7-14650HX | NVIDIA RTX 4060 | 16GB DDR5 up to 64GB RAM | 512GB–1TB NVMe SSD Storage | 16" WQXGA (240Hz) Display | Battery Capacity 8000mAh | WiFi 6E / HDMI 2.1 / USB-C Thunderbolt',
        img: 'assets/pics/product-images/Lenovo legion 5.png',
    },
    {
        name: 'PREDATOR HELIOS 16',
        price: 89590,
        category: 'laptop',
        description:
            'Intel Core i7-13700HX | NVIDIA RTX 4060 | 16GB DDR5 up to 32GB RAM | 512GB NVMe SSD Storage | 16" WQXGA (240Hz) Display | Battery Capacity 7800mAh | WiFi 6E / HDMI 2.1 / USB-C Thunderbolt',
        img: 'assets/pics/product-images/Predator helios 16.png',
    },
    {
        name: 'ASUS TUF GAMING A15',
        price: 71990,
        category: 'laptop',
        description:
            'AMD Ryzen 9 7940HS | NVIDIA RTX 4060 | 16GB DDR5 up to 32–64GB RAM | 512GB–1TB NVMe SSD Storage | 15.6" FHD 144Hz / QHD 165Hz Display | Battery Capacity 78000mAh | WiFi 6 / HDMI 2.1 / USB-C',
        img: 'assets/pics/product-images/Asus tuf gaming a15.png',
    },
    {
        name: 'ASUS ROG STRIX G15',
        price: 105990,
        category: 'laptop',
        description:
            'AMD Ryzen 9 7945HX | NVIDIA RTX 4060 | 16GB DDR5 up to 32–64GB RAM | 512GB–1TB NVMe SSD Storage | 15.6" FHD 144Hz / QHD 165Hz Display | Battery Capacity 7800mAh | WiFi 6E / HDMI 2.1 / USB-C',
        img: 'assets/pics/product-images/Asus rog strix g15.png',
    },
    {
        name: 'MSI THIN A15',
        price: 55500,
        category: 'laptop',
        description:
            'AMD Ryzen 7 7735HS | NVIDIA RTX 4060 | 16GB DDR5 up to 32GB RAM | 512GB NVMe SSD Storage | 15.6" FHD (144Hz) Display | Battery Capaciy 4800mAh | WiFi 6 / HDMI 2.1 / USB-C',
        img: 'assets/pics/product-images/Msi thin a15.png',
    },
    {
        name: 'ACER NITRO V15',
        price: 72990,
        category: 'laptop',
        description:
            'Intel Core i7-13620H | NVIDIA RTX 4060 | 16GB DDR5 up to 32GB RAM | 512GB–1TB NVMe SSD Storage | 15.6" FHD (144Hz) Display | Battery Capacity 5000mAh | WiFi 6 / HDMI 2.1 / USB-C',
        img: 'assets/pics/product-images/Acer nitro v15.png ',
    },

    {
        name: 'ASUS ROG 9 PRO',
        price: 45990,
        category: 'phone',
        description:
            'Snapdragon 8 Elite | Adreno 830 GPU | 16GB–24GB LPDDR5X RAM | 512GB–1TB UFS 4.0 Storage | 6.78" FHD+ AMOLED (165Hz–185Hz Gaming) | 5500mAh Battery Capacity | WiFi 7 / IP68 / 65W Fast Charge',
        img: 'assets/pics/product-images/Asus rog 9 pro.png',
    },
    {
        name: 'ASUS ROG 8 PRO',
        price: 38990,
        category: 'phone',
        description:
            'Snapdragon 8 Gen 3 | Adreno 750 GPU | 16GB–24GB LPDDR5X RAM | 512GB–1TB UFS 4.0 Storage | 6.78" FHD+ AMOLED (165Hz) | 5500mAh Battery Capacity | IP68 / AirTriggers / 65W Fast Charge',
        img: 'assets/pics/product-images/Asus rog 8 pro.png',
    },
    {
        name: 'RED MAGIC 9S PRO',
        price: 38990,
        category: 'phone',
        description:
            'Snapdragon 8 Gen 3 | Adreno 750 GPU | 16GB–24GB LPDDR5X RAM | 512GB–1TB UFS 4.0 Storage | 6.8" AMOLED (120Hz–165Hz) | 6500mAh Battery Capacity | Built-in Cooling Fan / No Camera Bump / 80W Fast Charge',
        img: 'assets/pics/product-images/Red magic 9s pro.png',
    },
    {
        name: 'BLACK SHARK 6',
        price: 38990,
        category: 'phone',
        description:
            'Snapdragon 8 Gen 2 | Adreno 740 GPU | 12GB–16GB LPDDR5X RAM | 256GB–512GB UFS 4.0 Storage | 6.67" AMOLED (144Hz) | 5000mAh Battery Capacity | 120W Fast Charge / Gaming Pop Triggers',
        img: 'assets/pics/product-images/Black shark 6.png',
    },

    {
        name: 'MSI G244F E2',
        price: 7000,
        category: 'monitor',
        description:
            'The MSI G244F E2 is a 23.8-inch gaming monitor designed for esports and fast-paced gaming. It features a Rapid IPS panel with Full HD (1920×1080) resolution, a 180Hz refresh rate, and a super-fast 1ms GTG response time for smoother gameplay and reduced motion blur.',
        img: 'assets/pics/product-images/MSI G244F E2.png',
    },
    {
        name: 'ACER NITRO VG240Y M3',
        price: 8990,
        category: 'monitor',
        description:
            'The Acer Nitro VG240Y M3 is a 23.8-inch Full HD (1920×1080) IPS gaming monitor designed for smooth performance and good visuals. It features a 180Hz refresh rate for very fluid gameplay and a 1ms response time to reduce motion blur in fast games, along with 250 nits brightness for clear everyday viewing.',
        img: 'assets/pics/product-images/ACER NITRO VG240Y M3.png',
    },
    {
        name: 'ACER NITRO XV24F',
        price: 6990,
        category: 'monitor',
        description:
            'The Acer Nitro XV24F is a 24-inch Full HD gaming monitor with a very high refresh rate and fast 0.1–1ms response time for ultra-smooth gameplay. It also supports AMD FreeSync, HDR10, and around 400 nits brightness for clear, bright visuals with sharp motion clarity and competitive performance.',
        img: 'assets/pics/product-images/ACER NITRO XV24F.png',
    },

    {
        name: 'LENOVO LEGION K500',
        price: 2000,
        category: 'peripheral',
        description:
            'The Lenovo Legion K500 is a full-size wired mechanical gaming keyboard with RGB backlighting (16.8M colors) and red mechanical switches rated for 50 million keystrokes. It features anti-ghosting, full-key rollover, a detachable palm rest, and a durable braided USB cable for reliable gaming performance.',
        img: 'assets/pics/product-images/Lenovo legion k500.png',
    },
    {
        name: 'ACER CESTUS 355',
        price: 3500,
        category: 'peripheral',
        description:
            'The Acer Predator Cestus 355 is a wired gaming mouse designed for precision and speed, featuring a high-accuracy PixArt sensor, adjustable DPI settings, and RGB lighting for customization. It also includes programmable buttons, ergonomic grip design, and durable switches for long-lasting gaming performance.',
        img: 'assets/pics/product-images/Acer cestus 355.png',
    },
];

// DOM ELEMENT
const product_container = document.querySelector('.products-grid');
const cartContainer = document.querySelector('.cart-items');

// CART HELPERS
function getCart() {
    return JSON.parse(localStorage.getItem('cart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// CREATE PRODUCT CARD
function createCard(product) {
    const card = document.createElement('div');
    card.classList.add('product-card');

    card.innerHTML = `
        <img class="product-img" src="${product.img}" alt="${product.name}" />

        <div class="card-body">
            <h3 class="product-name">${product.name}</h3>
            <p class="price">₱${product.price.toLocaleString()}</p>
        </div>

        <div class="buy-btn-container">
            <button class="add-btn">Add Cart</button>
            <button class="buy-btn">Buy Now</button>
        </div>
    `;

    // attach product object
    card.querySelector('.add-btn').product = product;
    card.querySelector('.buy-btn').product = product;

    // =========================
    // IMAGE CLICK MODAL
    // =========================
    card.querySelector('.product-img').addEventListener('click', () => {
        Swal.fire({
            title: product.name,
            html: `
                <p style="color: var(--price-color)"><strong>Price:</strong> ₱${product.price.toLocaleString()}</p>
                <p style="margin-top:10px;">${product.description}</p>
            `,
            imageUrl: product.img,
            imageWidth: 220,
            imageHeight: 200,
            imageAlt: product.name,
            confirmButtonText: 'Close',
            customClass: {
                popup: 'product-modal',
                confirmButton: 'close-modal',
            },
        });
    });

    return card;
}

// RENDER PRODUCTS
const noProductsMessage = document.querySelector('.no-products-message');

function renderProducts(list) {
    if (!product_container) return;
    product_container.innerHTML = '';
    // toggle empty message
    if (list.length == 0) {
        noProductsMessage.style.display = 'block';
    } else {
        noProductsMessage.style.display = 'none';
    }
    list.forEach((product) => {
        product_container.appendChild(createCard(product));
    });
}

renderProducts(products);

// =======================
// SEARCH FUNCTION
// =======================
const searchInput = document.querySelector('#search-bar');
const searchBtn = document.querySelector('#search-btn');

function searchProducts() {
    const searchValue = searchInput.value.toLowerCase().trim();

    // if empty, show all products
    if (searchValue === '') {
        renderProducts(products);
        return;
    }

    // filter products by name
    const filteredProducts = products.filter((product) => product.name.toLowerCase().includes(searchValue));

    renderProducts(filteredProducts);
}

// search button click
searchBtn.addEventListener('click', searchProducts);

// search while typing
searchInput.addEventListener('input', searchProducts);

// CATEGORY FILTER
document.querySelectorAll('.category-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.category-btn').forEach((b) => b.classList.remove('active'));

        btn.classList.add('active');

        const category = btn.textContent.trim().toLowerCase();
        const filtered = category === 'all' ? products : products.filter((p) => p.category === category);

        renderProducts(filtered);
    });
});

// EVENTS (DELEGATION)
if (product_container) {
    product_container.addEventListener('click', (e) => {
        const button = e.target;
        const product = button.product;

        if (!product) return;

        let cart = getCart();
        if (button.classList.contains('add-btn')) {
            cart.push(product);
            saveCart(cart);
            Swal.fire({
                title: 'Added to Cart!',
                text: `Product has been added.`,
                icon: 'success',
                timer: 1500,
                showConfirmButton: false,
            });
        }

        if (button.classList.contains('buy-btn')) {
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            Swal.fire({
                title: 'Proceeding to Checkout',
                text: `You selected ${product.name}`,
                icon: 'success',
                confirmButtonText: 'Continue',
            }).then((result) => {
                if (result.isConfirmed) {
                    // Redirect to the checkout html page hihi muuwah
                    window.location.href = 'checkout.html';
                }
            });
        }
    });
}

// CART PAGE RENDER
const empty_message = document.querySelector('.empty-message');

function showCart() {
    if (!cartContainer) return;

    let cart = getCart();
    cartContainer.innerHTML = '';

    if (cart.length === 0) {
        empty_message.textContent = 'Your cart is empty';
        return;
    }

    cart.forEach((item, index) => {
        const card = document.createElement('div');
        card.classList.add('cart-card');

        card.innerHTML = `
            <div class="cart-image">
                <img src="${item.img}" alt="" />
            </div>

            <div class="cart-body">
                <h3 class="cart-name">${item.name}</h3>
                <p class="cart-price">₱${item.price.toLocaleString()}</p>

                <div class="cart-button-container">
                    <button class="remove-btn" data-index="${index}">
                        Remove
                    </button>

                    <button class="cart-buy-btn">
                        Check Out
                    </button>
                </div>
            </div>
        `;
        card.querySelector('.cart-buy-btn').product = item;
        cartContainer.appendChild(card);
    });
}

showCart();

if (cartContainer) {
    cartContainer.addEventListener('click', (e) => {
        const button = e.target;

        let cart = getCart();

        // REMOVE BUTTON (SweetAlert2)
        if (button.classList.contains('remove-btn')) {
            const index = button.dataset.index;

            const swalWithBootstrapButtons = Swal.mixin({
                customClass: {
                    confirmButton: 'btn btn-success',
                    cancelButton: 'btn btn-danger',
                },
                buttonsStyling: false,
            });

            swalWithBootstrapButtons
                .fire({
                    title: 'Are you sure?',
                    text: 'This item will be removed from cart!',
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes',
                    cancelButtonText: 'No',
                    reverseButtons: true,

                    customClass: {
                        confirmButton: 'confirm-btn',
                        cancelButton: 'cancel-btn',
                    },
                })
                .then((result) => {
                    if (result.isConfirmed) {
                        cart.splice(index, 1);
                        saveCart(cart);
                        showCart();

                        swalWithBootstrapButtons.fire({
                            title: 'Deleted!',
                            text: 'Item removed from cart.',
                            icon: 'success',
                            customClass: {
                                confirmButton: 'confirm-btn',
                            },
                        });
                    } else if (result.dismiss === Swal.DismissReason.cancel) {
                        swalWithBootstrapButtons.fire({
                            title: 'Cancelled',
                            text: 'Item is not remove.',
                            icon: 'error',
                            customClass: {
                                confirmButton: 'confirm-btn',
                            },
                        });
                    }
                });
        }

        // CHECKOUT BUTTON (SIMPLE)
        if (button.classList.contains('cart-buy-btn')) {
            const product = button.product;
            // save selected product then redirect to checkout
            localStorage.setItem('selectedProduct', JSON.stringify(product));
            Swal.fire({
                title: 'Checkout',
                text: 'Please proceed to check out page.',
                icon: 'success',
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.href = 'checkout.html';
                }
            });
        }
    });
}

// Contact
const form = document.querySelector('.contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        Swal.fire({
            title: 'Thank You!',
            text: 'Message sent successfully.',
            icon: 'success',
        });
    });
}
