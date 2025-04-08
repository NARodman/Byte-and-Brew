document.addEventListener("DOMContentLoaded", () => {
    const cart = [];
    const cartModal = document.getElementById("cart-modal");
    const viewCartBtn = document.getElementById("view-cart");
    const closeCartBtn = document.getElementById("close-cart");
    const cartItemsEl = document.getElementById("cart-items");
    const cartTotalEl = document.getElementById("cart-total");
    const checkoutBtn = document.getElementById("checkout-btn");
    const checkoutModal = document.getElementById("checkout-modal");
    const confirmationModal = document.getElementById("confirmation-modal");
    const checkoutForm = document.getElementById("checkout-form");

    // 1. Add to Cart
    document.querySelectorAll(".add-to-cart-btn").forEach(button => {
        button.addEventListener("click", () => {
            const name = button.getAttribute("data-name");
            const price = parseFloat(button.getAttribute("data-price"));

            const existingItem = cart.find(item => item.name === name);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ name, price, quantity: 1 });
            }

            animateCartIcon();
            updateCart();
        });
    });

    // 2. Animate cart icon
    function animateCartIcon() {
        viewCartBtn.classList.add("cart-bounce");
        setTimeout(() => {
            viewCartBtn.classList.remove("cart-bounce");
        }, 500);
    }

    // 3. Update Cart Modal
    function updateCart() {
        cartItemsEl.innerHTML = "";
        let total = 0;

        if (cart.length === 0) {
            cartItemsEl.innerHTML = "<li>Your cart is empty.</li>";
            cartTotalEl.textContent = "";
            return;
        }

        cart.forEach((item, index) => {
            const li = document.createElement("li");
            li.innerHTML = `
                ${item.name} x${item.quantity}
                <span>$${(item.price * item.quantity).toFixed(2)}</span>
                <button class="remove-btn" data-index="${index}">×</button>
            `;
            cartItemsEl.appendChild(li);
            total += item.price * item.quantity;
        });

        cartTotalEl.textContent = `Total: $${total.toFixed(2)}`;

        // Enable remove buttons
        document.querySelectorAll(".remove-btn").forEach(btn => {
            btn.addEventListener("click", () => {
                const index = btn.getAttribute("data-index");
                cart.splice(index, 1);
                updateCart();
            });
        });
    }

    // 4. Show Cart Modal
    viewCartBtn.addEventListener("click", () => {
        cartModal.classList.add("show");
    });

    closeCartBtn.addEventListener("click", () => {
        cartModal.classList.remove("show");
    });

    // 5. Go to Checkout
    checkoutBtn.addEventListener("click", () => {
        cartModal.classList.remove("show");
        setTimeout(() => {
            checkoutModal.classList.add("show");
        }, 300);
    });

    // 6. Submit Checkout
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // You could validate inputs here if you want

        checkoutModal.classList.remove("show");

        setTimeout(() => {
            confirmationModal.classList.add("show");
        }, 500);

        // Clear cart and form
        cart.length = 0;
        updateCart();
        checkoutForm.reset();
    });

    // 7. Back to Homepage
    document.querySelector(".back-home-btn").addEventListener("click", () => {
        confirmationModal.classList.remove("show");
        window.location.href = "index.html"; // Change to your homepage filename
    });
});
