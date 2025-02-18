document.addEventListener("DOMContentLoaded", () => {
  const cartTableBody = document.getElementById("cartTableBody");
  const cartTotal = document.getElementById("cartTotal");
  const checkoutButton = document.getElementById("checkoutButton");

  const loadCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log("ATOOJABT", cart);

    displayCart(cart);
  };

  const displayCart = (cart) => {
    cartTableBody.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
      cartTableBody.innerHTML = `
        <tr>
          <td colspan="5" class="text-center">Your cart is empty.</td>
        </tr>
      `;
      cartTotal.textContent = "0 TK";
      return;
    }

    cart.forEach((product) => {
      const subtotal = product.quantity * product.price;
      total += subtotal;

      const row = document.createElement("tr");
      row.innerHTML = `
        <td> 
          <div class="d-flex align-items-center">

            <span class="ms-3">${product.name}</span>
          </div>
        </td>
        <td>${product.price} TK</td>
        <td>
          <button class="btn btn-success btn-sm increase-qty" data-id="${product.id}">+</button>
          <input type="number" class="form-control w-50 cart-quantity d-inline" value="${product.quantity}" data-id="${product.id}" min="1">
          <button class="btn btn-danger btn-sm decrease-qty" data-id="${product.id}">-</button>
        </td>
        <td>${subtotal} TK</td>
        <td>
          <button class="btn btn-warning btn-sm remove-cart-item" data-id="${product.id}">Delete</button>
        </td>
      `;
      cartTableBody.appendChild(row);
    });

    cartTotal.textContent = `${total} TK`;

    attachCartListeners();
  };

  const attachCartListeners = () => {
    document.querySelectorAll(".increase-qty").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.target.getAttribute("data-id");
        updateCartQuantity(productId, 1);
      });
    });

    document.querySelectorAll(".decrease-qty").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.target.getAttribute("data-id");
        updateCartQuantity(productId, -1);
      });
    });

    document.querySelectorAll(".cart-quantity").forEach((input) => {
      input.addEventListener("change", (e) => {
        const productId = e.target.getAttribute("data-id");
        let newQuantity = parseInt(e.target.value);
        if (newQuantity < 1) {
          e.target.value = 1;
          alert("Quantity must be at least 1.");
          return;
        }
        setCartQuantity(productId, newQuantity);
      });
    });

    document.querySelectorAll(".remove-cart-item").forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.target.getAttribute("data-id");
        removeCartItem(productId);
      });
    });
  };

  if (checkoutButton) {
    checkoutButton.addEventListener("click", (e) => {
      e.preventDefault();
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      if (cart.length === 0) {
        alert(
          "Your cart is empty. Add some products before proceeding to checkout."
        );
      } else {
        window.location.href = "checkout.html";
      }
    });
  }

  const updateCartQuantity = (productId, change) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = cart.find((item) => item.id === productId);

    if (product) {
      product.quantity += change;
      if (product.quantity < 1) {
        removeCartItem(productId);
      } else {
        localStorage.setItem("cart", JSON.stringify(cart));
        displayCart(cart);
      }
    }
  };

  const setCartQuantity = (productId, newQuantity) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let product = cart.find((item) => item.id === productId);

    if (product) {
      product.quantity = newQuantity;
      localStorage.setItem("cart", JSON.stringify(cart));
      displayCart(cart);
    }
  };

  const removeCartItem = (productId) => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart = cart.filter((item) => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    displayCart(cart);
  };

  loadCart();
});







  // const removeCart = () => {
  //   localStorage.removeItem("cart");
  //   console.log("🔹 কার্ট মুছে ফেলা হয়েছে");
  // };

  // removeCart();






// const postCart = () => {
//   const cart = JSON.parse(localStorage.getItem("cart")) || [];
//   let totalAmount = 0;

//   cart.forEach(item => totalAmount += item.price * item.quantity); // calculate total

//   fetch('http://127.0.0.1:8000/cart/', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'Authorization': `Bearer ${localStorage.getItem("auth_token")}`,  // Assuming token is stored
//       'X-CSRFToken': getCookie('csrftoken') // CSRF token for security
//     },
//     body: JSON.stringify({
//       cart: cart.map(item => ({
//         product_id: item.id,  // Include product ID
//         quantity: item.quantity
//       })),
//       total_amount: totalAmount
//     })
//   })
//   .then(response => response.json())
//   .then(data => console.log('Cart posted successfully:', data))
//   .catch(error => console.error('Error posting cart:', error));
// };

// postCart();











