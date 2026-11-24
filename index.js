
// PRODUCT DETAILS

let products = [
    {
        id: 1,
        name: "Pink Hoodie",
        category: "Clothing",
        price: 999,
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500"
    },
    {
        id: 2,
        name: "Black T-Shirt",
        category: "Clothing",
        price: 599,
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500"
    },
    {
        id: 3,
        name: "White Sneakers",
        category: "Shoes",
        price: 1499,
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
    },
    {
        id: 4,
        name: "Casual Shoes",
        category: "Shoes",
        price: 1299,
        image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=500"
    },
    {
        id: 5,
        name: "Smart Watch",
        category: "Watches",
        price: 1999,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
    },
    {
        id: 6,
        name: "Classic Watch",
        category: "Watches",
        price: 1599,
        image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500"
    },
    {
        id: 7,
        name: "Stylish Bag",
        category: "Accessories",
        price: 899,
        image: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500"
    },
    {
        id: 8,
        name: "Sunglasses",
        category: "Accessories",
        price: 499,
        image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=500"
    },
    {
    id: 9,
    name: "Blue Jeans",
    category: "Clothing",
    price: 1199,
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500"
},
{
    id: 10,
    name: "Pink Handbag",
    category: "Accessories",
    price: 799,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=500"
}

];


// SHOPPING CART

let cart = [];


// DISPLAY PRODUCTS

function displayProducts(items) {

    let productList = document.getElementById("product-list");

    productList.innerHTML = "";

    if (items.length === 0) {
        productList.innerHTML = "<p>No products found!</p>";
        return;
    }

    items.forEach(function(product) {

        productList.innerHTML += `
            <div class="product-card">

                <img src="${product.image}" alt="${product.name}">

                <h3>${product.name}</h3>

                <p>₹${product.price}</p>

                <button onclick="addToCart(${product.id})">
                    Add to Cart
                </button>

            </div>
        `;

    });

}


// ADD TO CART

function addToCart(id) {

    let product = products.find(function(item) {
        return item.id === id;
    });

    cart.push(product);

    updateCart();

    alert(product.name + " added to cart!");
}


// UPDATE CART

function updateCart() {

    let cartItems = document.getElementById("cart-items");

    let cartCount = document.getElementById("cart-count");

    let totalPrice = document.getElementById("total-price");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(function(item, index) {

        total = total + item.price;

        cartItems.innerHTML += `
            <div class="cart-item">

                ${item.name} - ₹${item.price}

                <button class="remove-btn"
                    onclick="removeFromCart(${index})">
                    Remove
                </button>

            </div>
        `;

    });

    if (cart.length === 0) {
        cartItems.innerHTML = "Your cart is empty!";
    }

    cartCount.innerHTML = cart.length;

    totalPrice.innerHTML = total;

}


// REMOVE FROM CART

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();

}


// FILTER PRODUCTS

function filterProducts(category) {

    if (category === "All") {

        displayProducts(products);

    } else {

        let filteredProducts = products.filter(function(product) {
            return product.category === category;
        });

        displayProducts(filteredProducts);

    }

}


// SEARCH PRODUCTS

function searchProducts() {

    let searchValue = document.getElementById("search").value.toLowerCase();

    let searchedProducts = products.filter(function(product) {

        return product.name.toLowerCase().includes(searchValue);

    });

    displayProducts(searchedProducts);

}


// SHOW CART

function showCart() {

    document.getElementById("cart-section").scrollIntoView({
        behavior: "smooth"
    });

}


// CHECKOUT

function checkout() {

    if (cart.length === 0) {

        alert("Your cart is empty!");

    } else {

        alert("Thank you for shopping at GEN-Z STORE! Your order has been placed.");

        cart = [];

        updateCart();

    }

}


// SHOW PRODUCTS WHEN WEBSITE OPENS

displayProducts(products);

// SHOW LOGIN FORM

function showLogin() {

    document.getElementById("form-title").innerHTML = "Login";

    document.getElementById("username").style.display = "none";

    document.getElementById("login-btn").innerHTML = "Login";

    document.getElementById("login-message").innerHTML = "";

    document.getElementById("login-section").scrollIntoView({
        behavior: "smooth"
    });

}


// SHOW SIGNUP FORM

function showSignup() {

    document.getElementById("form-title").innerHTML = "Create Account";

    document.getElementById("username").style.display = "block";

    document.getElementById("login-btn").innerHTML = "Sign Up";

    document.getElementById("login-message").innerHTML = "";

    document.getElementById("login-section").scrollIntoView({
        behavior: "smooth"
    });

}


// LOGIN AND SIGNUP

function loginUser() {

    let name = document.getElementById("username").value;

    let email = document.getElementById("email").value;

    let password = document.getElementById("password").value;

    let title = document.getElementById("form-title").innerHTML;

    if (email === "" || password === "") {

        alert("Please fill all details!");

    } else if (title === "Create Account" && name === "") {

        alert("Please enter your name!");

    } else {

        if (title === "Create Account") {

            alert("Account created successfully!");

        } else {

            alert("Demo login successful!");

        }

    }

}