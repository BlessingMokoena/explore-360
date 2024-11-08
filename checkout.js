let cart = [];

// Load cart from localStorage when the script runs
window.onload = function() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    displayCart();
};

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

// Handle form submission
document.getElementById('checkout-form').onsubmit = function(event) {
    event.preventDefault(); // Prevent the default form submission

    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const zip = document.getElementById('zip').value;

    // Here you would typically send this data to your server
    alert(`Thank you for your order, ${name}! Your items will be shipped to ${address}, ${city}, ${zip}.`);

    // Clear the cart after checkout
    clearCart();
};

// Function to clear the cart
function clearCart() {
    cart = [];
    localStorage.removeItem('cart'); // Clear from localStorage
    displayCart(); // Update the display
}