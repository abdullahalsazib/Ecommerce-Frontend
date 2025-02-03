
const baseURL = "https://ecommerce-backend-8o3w.onrender.com/product/";
const user_id = localStorage.getItem("user_id");

console.log(user_id); 
const productLoad = () => {
  fetch(baseURL)
    .then((res) => res.json())
    .then((data) => displayProduct(data))
    .catch((error) => console.error("Error fetching data:", error));
};


const displayProduct = (products) => {
  console.log(products);
  const parent = document.getElementById("slider-container");
  parent.innerHTML = ""; 

  products.forEach((product) => {
    const li = document.createElement("li");
    const imageUrl = product.image.startsWith("http") ? product.image : `${baseURL}${product.image}`;

    const descriptionText = (product.description || "").trim();
    const descriptionWords = descriptionText.split(/\s+/).slice(0, 5).join(" ") + "...";

    li.innerHTML = `

  <div class="card border-0 shadow-lg rounded-1 overflow-hidden bg-white">
  <div class="position-relative">
    <img src="${imageUrl}" class="card-img-top img-fluid" loading="lazy" alt="${product.name}">
    <span class="badge bg-success position-absolute top-0 end-0 m-2 px-3 py-2">Stock: ${product.stock}</span>
  </div>
  
  <div class="card-body d-flex flex-column p-4">
    <h5 class="card-title text-dark fw-bold">${product.name}</h5>
    <p class="card-text text-muted small flex-grow-1">${descriptionWords}</p>
    <h6 class="text-primary fw-bold">Price: $${product.price}</h6>

    <div class="d-flex justify-content-between mt-3">

       <a href="cart_details.html?product_id=${product.id}" class="btn btn-outline-primary me-2"><i class="fas fa-info-circle"></i> Details</a>
      
    <button class="btn btn-primary btn-sm w-50 add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-stock="${product.stock}">
    <i class="fas fa-shopping-cart"></i> Add To Cart
     </button>

  </div>
  </div>
</div>
    `;
    parent.appendChild(li);
  });

  // Attach event listeners to "Add to Cart" buttons
  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", (event) => {
      const product = {
        id: event.target.dataset.id,
        name: event.target.dataset.name,
        price: parseFloat(event.target.dataset.price),
        stock: parseInt(event.target.dataset.stock),
        quantity: 1, // Default quantity
      };
      addToCart(product);
    });
  });
};

// Add product to cart

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
};

productLoad();










