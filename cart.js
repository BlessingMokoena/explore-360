let cart = [];

// Load cart from localStorage when the script runs
window.onload = function() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayCart();
};

// Function to view an item and add it to the cart
function viewItem(id, name, price) {
    const item = { id, name, price };
    cart.push(item);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save to localStorage
    alert(`${name} has been added to your cart!`);
    
    // Redirect to the cart page
    window.location.href = 'cart.html';
}

// Function to display cart items
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Clear previous items
    let total = 0;

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('gear-item'); // Add class for styling
        itemDiv.innerHTML = `
            <img src="img/${item.name.toLowerCase().replace(/ /g, '')}.jpg" alt="${item.name}" />
            <h3>${item.name}</h3>
            <p>Price: R${item.price}</p>
        `;
        cartItemsDiv.appendChild(itemDiv);
        total += item.price;
    });

    document.getElementById('total-price').innerText = `Total Price: R${total}`;
}

// Function to proceed to checkout
function checkout() {
    alert('Proceeding to checkout...');
    // Implement checkout functionality here
}

// Function to clear the cart
function clearCart() {
    cart = [];
    localStorage.removeItem('cart'); // Clear from localStorage
    displayCart();
}