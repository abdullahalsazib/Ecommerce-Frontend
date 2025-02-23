

const payButton = (event) => {
    event.preventDefault();

    const user_id = localStorage.getItem("user_id");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const cartTotalText = document.getElementById("cartTotal").textContent;
    const total_amount = parseInt(cartTotalText.split(" TK")[0]);
    // console.log(total_amount);

    // console.log(user_id, name, email, total_amount);

    fetch("https://ecommerce-backend-4yjb.onrender.com/order/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${localStorage.getItem("auth_token")}` 
        },
        body: JSON.stringify({
            user_id: user_id,
            total_amount: total_amount
        })
    })
    .then(response => response.json())
    .then(orderData => {
        if (orderData.id) { 

            fetch("https://ecommerce-backend-4yjb.onrender.com/payment/create_payment/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    user: user_id,
                    name: name,
                    email: email,
                    total_amount: total_amount,
                    order_id: orderData.id ,
                })
            })
            .then(paymentResponse => paymentResponse.json())
            .then(paymentData => {
                if (paymentData.payment_url) {
                    window.location.href = paymentData.payment_url;
                } else {
                    alert("Payment session creation failed.");
                }
            });
        } else {
            alert("Order creation failed: " + orderData.detail); 
        }
    })
    .catch(error => {
        console.error('Error creating order:', error);
    });
};








const fetchOrders = () => {
    fetch('https://ecommerce-backend-4yjb.onrender.com/order/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem("auth_token")}` 
        }
    })
    .then(response => response.json())
    .then(data => {
        const orderTableBody = document.getElementById('order-table-body');
        orderTableBody.innerHTML = ''; 


        data.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${order.id}</td>
                <td>${order.total_amount} TK</td>
                <td>${order.is_paid ? 'Complete' : 'Payment Failed'}</td>
            `;
            orderTableBody.appendChild(row);
        });
        
    })
    .catch(error => {
        console.error('Error fetching orders:', error);
   
    });
};


fetchOrders();
