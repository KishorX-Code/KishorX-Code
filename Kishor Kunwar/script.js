document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartMessage = document.getElementById('cart-message');
    const cartBadge = document.getElementById('cart-badge');

    function updateCartBadge() {
        // Retrieve cart items and update badge count
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartBadge.textContent = cartItems.length;

        // Show badge if there are items in the cart, hide it if empty
        cartBadge.style.display = cartItems.length > 0 ? 'inline-block' : 'none';
    }

    function addToCart(item) {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
        cartItems.push(item);
        localStorage.setItem('cartItems', JSON.stringify(cartItems));

        // Show confirmation message
        cartMessage.textContent = `${item.name} has been added to the cart!`;
        setTimeout(() => cartMessage.textContent = '', 2000);

        // Update the cart badge count
        updateCartBadge();
    }

    addToCartButtons.forEach((button) => {
        button.addEventListener('click', function() {
            const box = button.parentElement;
            const itemName = box.querySelector('.box-text').textContent;
            const itemPrice = parseFloat(box.querySelector('.box-price').textContent.replace('Price: Rs.', ''));
            const itemImage = box.querySelector('.box-image').src;

            const item = {
                name: itemName,
                price: itemPrice,
                image: itemImage
            };

            addToCart(item);
        });
    });

    // Initial call to update badge count when the page loads
    updateCartBadge();
});
