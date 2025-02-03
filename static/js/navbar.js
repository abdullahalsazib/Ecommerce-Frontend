
// const navbarLoad=()=>{
//     const navbar=document.getElementById("navbarElement")
//     const user_id = localStorage.getItem("user_id"); 
//     if(user_id ){
//         navbar.innerHTML=`

//       <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3 " href="home.html">HOME</a></li>
//         <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="shope.html">SHOPE</a></li>
//         <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="about.html">ABOUT</a></li>
//         <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="contact.html">CONTACT</a></li>
//         <div class="dropdown">
//       <button class="btn dropdown border-0 bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false d-flex">   
//         <img src="/image/man_5.jpg" alt="Account" class="rounded-circle" width="40" height="40"/>
//       </button>
//         <ul class="dropdown-menu text-center ">
//        <li class="p-2">
//           <a
//           class="fw-bold text-decoration-none bg-light text-black d-block m-auto p-2 rounded"
//            href="profile.html"
//             aria-label="Go to Dashboard"
//              >
//              Dashboard
//            </a>
//          </li>

  
//   <li class="p-2">
//     <a
//       class="fw-bold text-decoration-none bg-light text-black d-block m-auto p-2 rounded"
//       href="deposite.html"
//       aria-label="Go to Deposite"
//     >
//       Deposite
//     </a>
//   </li>
//   <li class="p-2">
//     <form id="logout" onsubmit="handleLogout(event)" class="m-0">
//       <div class="text-center">
//         <button type="submit" class="btn btn-light text-danger fw-bold px-4 py-2 rounded" aria-label="Logout">
//           Logout
//         </button>
//     </div>
//     </form>
//   </li>
// </ul>
// </div>
// <div class="col-4 align-items-center  d-flex px-5">
// <a href="./cart.html"><img src="./image/cart_img.jpg" alt="" style="height: 40px;"></a>
// </div>
          
//     `
//      }
//     else{
//         navbar.innerHTML=`
//         <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="home.html">HOME</a></li>
//         <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="shope.html">SHOPE</a></li>
//         <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="about.html">ABOUT US</a></li>
//         <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="contact.html">CONTACT</a></li>
     
//         <div class=" align-items-center bg-info  d-flex px-5">
//         <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="registration.html">SIGN UP</a></li>
//         <li class="nav-item"><a class="nav-link text-light fw-bold px-3 mx-3" href="login.html">LOGIN</a></li>
//         <a href="./cart.html">
//         <img src="./image/cart_img.jpg" alt="" style="height: 40px;">
//         </a>
//         </div>
//             `
//     }
// }
// navbarLoad();





const navbarLoad = () => {
  const navbar = document.getElementById("navbarElement");
  const user_id = localStorage.getItem("user_id");

  if (user_id) {
    navbar.innerHTML = `
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="home.html">HOME</a></li>
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="shope.html">SHOPE</a></li>
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="about.html">ABOUT</a></li>
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="contact.html">CONTACT</a></li>
      <div class="">

        <div class="dropdown ">
        <button class="btn border-0 bg-transparent" data-bs-toggle="dropdown">
          <img src="/image/man_5.jpg" alt="Account" class="rounded-circle" width="40px" height="40px">
        </button>
        <ul class="dropdown-menu text-center">
          <li class="p-2">
            <a class="fw-bold text-decoration-none bg-light text-black p-2 rounded d-block" href="profile.html">Dashboard</a>
          </li>
          <li class="p-2">
            <a class="fw-bold text-decoration-none bg-light text-black p-2 rounded d-block" href="deposite.html">Deposite</a>
          </li>
          <li class="p-2">
            <form id="logout" onsubmit="handleLogout(event)">
              <button type="submit" class="btn btn-light text-danger fw-bold px-4 py-2 rounded">Logout</button>
            </form>
          </li>
        </ul>
      </div>
      
      </div>
    `;
  } else {
    navbar.innerHTML = `
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="home.html">HOME</a></li>
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="shope.html">SHOPE</a></li>
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="about.html">ABOUT US</a></li>
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="contact.html">CONTACT</a></li>
      
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="registration.html">SIGN UP</a></li>
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="login.html">LOGIN</a></li>
    `;
  }
};

navbarLoad();

