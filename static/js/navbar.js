
const navbarLoad=()=>{
    const navbar=document.getElementById("navbarElement")
    const user_id = localStorage.getItem("user_id"); 
    console.log(user_id);

    if(user_id ){
        navbar.innerHTML=`

   <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="home.html">HOME</a></li>
        <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="service.html">SHOPE</a></li>
        <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="about.html">ABOUT</a></li>
        <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="contact.html">CONTACT</a></li>
        <li class="p-2">
          <form id="logout" onsubmit="handleLogout(event)" class="m-0">
            <div class="text-center">
              <button
                type="submit"
                class="btn btn-danger px-4 py-2 rounded"
                aria-label="Logout"
              >
                Logout
              </button>
            </div>
          </form>
        </li>     
        <div class="col-4 align-items-center  d-flex px-5">
           <a href="./cart.html"><img src="./image/cart_img.jpg" alt="" style="height: 40px;"></a>
        </div>
          
    `
     }
    else{
        navbar.innerHTML=`
        <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="home.html">HOME</a></li>
        <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="service.html">SHOPE</a></li>
        <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="about.html">ABOUT US</a></li>
        <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="contact.html">CONTACT</a></li>
        <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="registration.html">SIGN UP</a></li>
        <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="login.html">LOGIN</a></li>
        <div class="col-4 align-items-center  d-flex px-5">
        <a href="./cart.html"><img src="./image/cart_img.jpg" alt="" style="height: 40px;"></a>
        </div>
            `
    }
}
navbarLoad();


