

const cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartBody = document.getElementById("cart-body");
const totalAmountElement = document.getElementById("total-amount");

let totalAmount = 0;

if (cart.length > 0) {
    cart.forEach(item => {
        const itemTotal = item.quantity * item.price; 
        totalAmount += itemTotal; 

        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.name}</td>
            <td class="text-success fw-bold">$${item.price}</td>
            <td>${item.quantity}</td>
            <td class="text-danger fw-bold">$${itemTotal}</td>
        `;
        cartBody.appendChild(row);
    });


    totalAmountElement.textContent = `Total: $${totalAmount}`;
} else {

    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="4" class="text-center text-danger fw-bold">Cart is empty</td>`;
    cartBody.appendChild(row);

    totalAmountElement.textContent = "Total: $0";
}





const payButton = () => {
  const user_id = localStorage.getItem("user_id");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const cartTotalText = document.getElementById("cartTotal").textContent;
  const total_amount = parseInt(cartTotalText.split(" TK")[0]);  

  console.log(user_id, name, email, total_amount);

  fetch("http://127.0.0.1:8000/payment/create_payment/", {
      method: "POST",
      headers: {
          "Content-Type": "application/json"
      },
      body: JSON.stringify({
          user: user_id,
          name: name,
          email: email,
          total_amount: total_amount
      })
  })
  .then(response => response.json())
  .then(data => {
      if (data.payment_url) {
          window.location.href = data.payment_url;  
      } else {
          alert("Payment session creation failed.");
      }
  })
};
