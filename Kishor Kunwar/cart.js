document.addEventListener('DOMContentLoaded', function() {
    const cartItemsDisplay = document.getElementById('cart-items');
    let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    console.log('Cart items loaded:', cartItems);  
    function displayCartItems() {
        cartItemsDisplay.innerHTML = ''; 
        let totalPrice = 0;

        if (cartItems.length > 0) {
            cartItems.forEach((item, index) => {
                const itemDiv = document.createElement('div');
                itemDiv.classList.add('cart-item');

                itemDiv.innerHTML = `
                    <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                    <p class="cart-item-text">${item.name}</p>
                    <p class="cart-item-text">Price: Rs.${item.price.toFixed(2)}</p>
                    <button class="remove-button" data-index="${index}">Remove</button>
                `;

                totalPrice += item.price;
                cartItemsDisplay.appendChild(itemDiv);
            });

            const totalPriceDiv = document.createElement('div');
            totalPriceDiv.classList.add('total-price');
            totalPriceDiv.innerHTML = `<strong>Total: Rs.${totalPrice.toFixed(2)}</strong>`;
            cartItemsDisplay.appendChild(totalPriceDiv);
        } else {
            cartItemsDisplay.textContent = 'Your cart is empty!';
        }
    }

    displayCartItems();

    cartItemsDisplay.addEventListener('click', function(event) {
        if (event.target.classList.contains('remove-button')) {
            const index = event.target.getAttribute('data-index');
            cartItems.splice(index, 1); 
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
            displayCartItems(); 
        }
    });
});
