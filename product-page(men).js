// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Product data - this would usually come from a database or API
const products = [
    { id: 1, title: "HIKER Men's Shoe 1", price: 109.99, image: "product-images/men1.jpg", description: "Comfortable and stylish men's hiking shoe." },
    { id: 2, title: "HIKER Men's Shoe 2", price: 119.99, image: "product-images/men2.jpg", description: "Durable waterproof hiking boots for men." },
    { id: 3, title: "HIKER Men's Shoe 3", price: 129.99, image: "product-images/men3.jpg", description: "Outdoor-ready shoes with superior grip." },
    { id: 4, title: "HIKER Men's Shoe 4", price: 139.99, image: "product-images/men4.jpg", description: "Lightweight and breathable hiking shoes for men." },
    { id: 5, title: "HIKER Men's Shoe 5", price: 149.99, image: "product-images/men5.jpg", description: "All-terrain shoes designed for comfort." },
    { id: 6, title: "HIKER Men's Shoe 6", price: 159.99, image: "product-images/men6.jpg", description: "High-performance shoes for extreme conditions." },
    { id: 7, title: "HIKER Men's Shoe 7", price: 169.99, image: "product-images/men8.jpg", description: "All-season shoes with extra durability." },
    { id: 8, title: "HIKER Men's Shoe 8", price: 179.99, image: "product-images/men9.jpg", description: "Premium hiking boots for serious outdoor enthusiasts." },
    { id: 9, title: "HIKER Men's Shoe 9", price: 189.99, image: "product-images/men10.jpg", description: "Robust and versatile shoes for any adventure." },
];

// Find product details based on ID
const product = products.find(p => p.id == productId);

if (product) {
    document.getElementById("productTitle").innerText = product.title;
    document.getElementById("productPrice").innerText = `$${product.price}`;
    document.getElementById("shortDescription").innerText = product.description;
    document.getElementById("mainImage").src = product.image;
}

// Thumbnail and Image Switch
const thumbnails = [];  // Additional images
const thumbnailContainer = document.getElementById("thumbnailContainer");
thumbnails.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    img.addEventListener("click", () => {
        document.getElementById("mainImage").src = src;
    });
    thumbnailContainer.appendChild(img);
});

// Quantity Adjust
function increaseQuantity() {
    let quantity = document.getElementById("quantity").value;
    document.getElementById("quantity").value = ++quantity;
}

function decreaseQuantity() {
    let quantity = document.getElementById("quantity").value;
    if (quantity > 1) document.getElementById("quantity").value = --quantity;
}

// Related Products
const relatedProductsContainer = document.getElementById("relatedProductsContainer");
products.forEach(prod => {
    if (prod.id !== productId) {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.innerHTML = `
            <a href="product-page(men).html?id=${prod.id}">
                <img src="${prod.image}" alt="${prod.title}">
                <p>${prod.title}</p>
                <p class="price">$${prod.price}</p>
            </a>
        `;
        relatedProductsContainer.appendChild(productCard);
    }
});
