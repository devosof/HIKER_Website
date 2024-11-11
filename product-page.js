// Get product ID from URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

// Product data - this would usually come from a database or API
const products = [
    { id: 1, title: "HIKER Women's Shoe 1", price: 89.99, image: "product-images/women1.jpg", description: "Durable, stylish outdoor shoe." },
    { id: 2, title: "HIKER Women's Shoe 2", price: 99.99, image: "product-images/women2.jpg", description: "Lightweight and waterproof." },
    { id: 3, title: "HIKER Women's Shoe 1", price: 89.99, image: "product-images/women3.jpg", description: "Durable, stylish outdoor shoe." },
    { id: 4, title: "HIKER Women's Shoe 2", price: 99.99, image: "product-images/women4.jpg", description: "Lightweight and waterproof." },
    { id: 5, title: "HIKER Women's Shoe 1", price: 89.99, image: "product-images/women5.jpg", description: "Durable, stylish outdoor shoe." },
    { id: 6, title: "HIKER Women's Shoe 2", price: 99.99, image: "product-images/women6.jpg", description: "Lightweight and waterproof." },
    { id: 7, title: "HIKER Women's Shoe 1", price: 89.99, image: "product-images/women7.jpg", description: "Durable, stylish outdoor shoe." },
    { id: 8, title: "HIKER Women's Shoe 2", price: 99.99, image: "product-images/women8.jpg", description: "Lightweight and waterproof." },
    { id: 9, title: "HIKER Women's Shoe 1", price: 89.99, image: "product-images/women9.jpg", description: "Durable, stylish outdoor shoe." },
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
const thumbnails = ["image1.jpg", "image2.jpg"];  // Additional images
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
            <a href="product-page.html?id=${prod.id}">
                <img src="${prod.image}" alt="${prod.title}">
                <p>${prod.title}</p>
                <p class="price">$${prod.price}</p>
            </a>
        `;
        relatedProductsContainer.appendChild(productCard);
    }
});
