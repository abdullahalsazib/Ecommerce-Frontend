
const baseURL = "http://127.0.0.1:8000/product/";
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

    li.innerHTML = `
      <div class="card border-0">
        <div class="ratio ratio-1x1">
          <img src="${imageUrl}" class="card-img-top" loading="lazy" alt="${product.name}">
        </div>
        <div class="card-body p-0 pt-2">
          <div class="d-flex">
            <h3 class="flex-grow-1 h5">${product.name}</h3>
            <p class="px-2">${product.price}</p>
          </div>
          <p class="card-text">${product.description}</p>
          <p class="card-text">Stock: ${product.stock}</p>
          <div class="card-footer d-flex justify-content-between bg-light">
            <a href="cart.html?id=${product.id}" class="btn btn-outline-primary w-50 me-2">Details</a>
            <button class="btn btn-primary w-50 add-to-cart" data-id="${product.id}" 
              data-name="${product.name}" 
              data-price="${product.price}" 
              data-stock="${product.stock}">Add To Cart</button>
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
