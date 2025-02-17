
const navbarLoad = () => {
  const navbar = document.getElementById("navbarElement");
  const user_id = localStorage.getItem("user_id");

  if (user_id) {
    navbar.innerHTML = `
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="home.html">HOME</a></li>
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="service.html">SERVICE</a></li>
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="about.html">ABOUT</a></li>
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="contact.html">CONTACT</a></li>
      <div class="">

        <div class="dropdown ">
        <button class="btn border-0 bg-transparent" data-bs-toggle="dropdown">
          <img src="/image/man_5.jpg" alt="Account" class="rounded-circle" width="40px" height="40px">
        </button>
        <ul class="dropdown-menu text-center">
          <li class="p-2">
            <a class="fw-bold text-decoration-none bg-light text-black p-2 rounded d-block" href="profile.html">Profile</a>
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
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="service.html">SERVICE</a></li>
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="about.html">ABOUT US</a></li>
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="contact.html">CONTACT</a></li>
      
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="registration.html">SIGN UP</a></li>
      <li class="nav-item"><a class="nav-link text-light fw-bold" href="login.html">LOGIN</a></li>
    `;
  }
};

navbarLoad();



