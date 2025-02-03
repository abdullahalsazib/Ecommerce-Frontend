const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("product_id");
console.log(productId);

if (productId) {
  fetch(`https://ecommerce-backend-8o3w.onrender.com/product/${productId}/`)
    .then((res) => res.json())
    .then((product) => {
      const productDetails = document.getElementById("product-details");
      productDetails.innerHTML = `
        <div class="card shadow-lg p-5 ">
          <div class="row">
            <div class="col-md-6 text-cene">
              <img src="${product.image}" alt="${product.name}" class="img-fluid rounded">
            </div>
            <div class="col-md-6">
              <h2 class="fw-bold">${product.name}</h2>
              <p class="text-success fs-4"><strong>Price:</strong> $${product.price}</p>
              <p><strong>Description:</strong> ${product.description}</p>
              <p><strong>Stock:</strong> ${product.stock}</p>
 
              <button class="btn btn-primary btn-sm w-50 add-to-cart" data-id="${product.id}" data-name="${product.name}" data-price="${product.price}" data-stock="${product.stock}">
              <i class="fas fa-shopping-cart"></i> Add To Cart
             </button>
            </div>
          </div>
        </div>
      `;
    })
    .catch((error) => console.error("Error fetching product details:", error));
} else {
  console.error("Product ID is missing in URL.");
}
