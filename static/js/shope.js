

// const baseURL = "http://127.0.0.1:8000/product/";
// const user_id = localStorage.getItem("user_id");

// console.log(user_id); 
// const productLoad = () => {
//   fetch(baseURL)
//     .then((res) => res.json())
//     .then((data) => displayProduct(data))
//     .catch((error) => console.error("Error fetching data:", error));
// };


// const displayProduct = (products) => {
//   console.log(products);
//   const parent = document.getElementById("shop-container");
//   parent.innerHTML = ""; 

//   products.forEach((product) => {
//     const li = document.createElement("li");
//     const imageUrl = product.image.startsWith("http") ? product.image : `${baseURL}${product.image}`;

//     li.innerHTML = `
//    <div class="card border-0 shadow-lg rounded-4 overflow-hidden bg-white">
//   <div class="position-relative">
//     <img src="${imageUrl}" class="card-img-top img-fluid" loading="lazy" alt="${product.name}">
//     <span class="badge bg-success position-absolute top-0 end-0 m-2 px-3 py-2">Stock: ${product.stock}</span>
//   </div>
  
//   <div class="card-body d-flex flex-column p-4">
//     <h5 class="card-title text-dark fw-bold">${product.name}</h5>
//     <p class="card-text text-muted small flex-grow-1">${product.description}</p>
//     <h6 class="text-primary fw-bold">Price: $${product.price}</h6>

//     <div class="d-flex justify-content-between mt-3">
//       <a href="cart.html?id=${product.id}" class="btn btn-outline-primary w-50 me-2">
//         <i class="fas fa-info-circle"></i> Details
//       </a>
//       <button class="btn btn-primary w-50 add-to-cart" data-id="${product.id}" 
//         data-name="${product.name}" 
//         data-price="${product.price}" 
//         data-stock="${product.stock}">
//         <i class="fas fa-shopping-cart"></i> Add To Cart
//       </button>
//     </div>
//   </div>
// </div>

//     `;
//     parent.appendChild(li);
//   });
// }

// productLoad();





// const review =(event)=>{
//     event.preventDefault();
//     const name=document.getElementById("name").value;
//     const email=document.getElementById("email").value;
//     const message=document.getElementById("message").value;
//     const data={name,email,message};
//     console.log(data);
//     fetch("http://" + window.location.host + "/account/contact/",{
//         method:"POST",
//         headers:{
//             "Content-Type":"application/json"
//         },
//         body:JSON.stringify(data)
//     })
//     .then(res=>res.json())
//     .then(data=>{
//         console.log(data);
//         if(data.success){
//             alert("Message Sent Successfully");
//             window.location.href="home.html";
//         }
//         else{
//             alert("Message Not Sent");
//         }
//     })
// }





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
}
productLoad();