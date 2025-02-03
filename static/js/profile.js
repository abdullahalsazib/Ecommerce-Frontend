




const userProfile = () => {
    const user_id = localStorage.getItem("user_id"); // Get the user ID
    console.log("Logged-in User ID:", user_id);
  
    fetch("https://ecommerce-backend-8o3w.onrender.com/account/user/")
      .then((res) => res.json())
      .then((data) => {
        const currentUser = data.find((item) => item.id === parseInt(user_id));
      const parent=document.getElementById("user_profile")
      const div=document.createElement("user-all")
      div.classList.add('user-all')
      div.innerHTML=`
          <div class="col-8 w-100  align-items-center justify-content-center">
            <h1 class="align-items-center justify-content-center mx-auto text-center">User Profile</h1>
            <div class="container d-flex justify-content-center align-items-center min-vh-80">
              <div class="account p-5">
                  <div class="card text-center" style="width:19rem; background-color:#3CB371">
                      <img src="/image/man_5.jpg" class="card-img-top rounded-circle mx-auto mt-3" alt="Profile Picture" style="width: 100px; height: 100px;">
                      <div class="card-body">
                
                          <h5 id="username" class="card-title">Username:${currentUser.username}</h5>
                          <h5 id="first_name" class="card-title">First Name:${currentUser.first_name}</h5>
                          <h5 id="last_name" class="card-title">Last Name:${currentUser.last_name}</h5>
                          <p id="email" class="card-text">${currentUser.email }</p>
                          <a href="#" class="btn btn-primary w-100">Edit Profile</a>
                      </div>
                  </div>
              </div>
          </div>
          </div>
      `
      parent.appendChild(div)
      })
  };
  userProfile();