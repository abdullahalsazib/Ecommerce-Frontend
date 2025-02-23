const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product_id");

if (productId) {
  fetch(`https://ecommerce-backend-4yjb.onrender.com/product/${productId}/`)
    .then((res) => res.json())
    .then((product) => {
      const productDetails = document.getElementById("product-details");
      productDetails.innerHTML = `
        <div class="card shadow-lg p-5">
          <div class="row">
            <div class="col-md-6 text-center">
              <img src="${product.image_url}" alt="${product.name}" class="img-fluid rounded">
            </div>
            <div class="col-md-6">
              <h2 class="fw-bold">${product.name}</h2>
              <p class="text-success fs-4"><strong>Price:</strong> $${product.price}</p>
              <p><strong>Description:</strong> ${product.description}</p>
              <p><strong>Stock:</strong> ${product.stock}</p>
        
              <button class="btn btn-primary btn-sm w-50 add-to-cart" 
                data-id="${product.id}" data-name="${product.name}" 
                data-price="${product.price}" data-stock="${product.stock}">
                <i class="fas fa-shopping-cart"></i> Add to Cart
              </button>
            </div>
          </div>
        </div>
      `;
      let add_to_cart = document.querySelector(".add-to-cart")
      add_to_cart.addEventListener('click', (event)  => {
        
     if (!user_id) {
      Swal.fire({
        title: "Login Required",
        text: "You need to log in first!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login Now",
        cancelButtonText: "Cancel",
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.href = "https://joyful-begonia-6e2001.netlify.app/login.html"; 
        }
      });
      return;
    }
          const product = {
            id: event.target.dataset.id,
            name: event.target.dataset.name,
            price: parseFloat(event.target.dataset.price),
            stock: parseInt(event.target.dataset.stock),
            quantity: 1,
          };
          addToCart(product);
     
          
      })

     
    .catch((error) => console.error("Error fetching product details:", error));
})}

const addToCart = (product) => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const existingProduct = cart.find((item) => item.id === product.id);

  if (existingProduct) {
    if (existingProduct.quantity < product.stock) {
      existingProduct.quantity++;
    } else {
      alert("No more stock available!");
    }
  } else {
    cart.push(product);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(`${product.name} added to cart!`);
}






const urlParam = new URLSearchParams(window.location.search);
const product = urlParams.get("product_id");
// console.log(product);

const user_id = localStorage.getItem("user_id");
// console.log(user_id);

const productReview = (event) => {
  event.preventDefault();
  const star = document.getElementById("star").value;
  const email = document.getElementById("email").value;
  const body = document.getElementById("body").value;
  const data = {
    star: star,
    email: email,
    body: body,
    user: user_id,
    product: product,
  };
  // console.log(data);
  fetch("https://ecommerce-backend-4yjb.onrender.com/review/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      // console.log(data);
      alert("succesfuly send this message");
    })
    .catch((err) => console.log(err));
};
