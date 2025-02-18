const userProfile = () => {
  const user_id = localStorage.getItem("user_id"); // Get the user ID
  console.log("Logged-in User ID:", user_id);

  fetch("http://127.0.0.1:8000/account/user/")
    .then((res) => res.json())
    .then((data) => {
      const currentUser = data.find((item) => item.id === parseInt(user_id));
      const parent = document.getElementById("user_profile");
      const div = document.createElement("user-all");
      div.classList.add("user-all");

      div.innerHTML = `
  <div class="d-flex justify-content-center align-items-center min-vh-75">
    <div class="col-md-3">
      <h1 class="text-center mb-4">User Profile</h1>
      <div class="card text-center shadow p-3">
        <img src="/image/man_5.jpg" class="card-img-top rounded-circle mx-auto mt-3 border" 
             alt="Profile Picture" style="width: 100px; height: 100px;">
        <div class="card-body">
          <h5 id="username" class="card-title"><strong>Username:</strong> ${currentUser.username}</h5>
          <h5 id="first_name" class="card-title"><strong>First Name:</strong> ${currentUser.first_name}</h5>
          <h5 id="last_name" class="card-title"><strong>Last Name:</strong> ${currentUser.last_name}</h5>
          <p id="email" class="card-text"><strong>Email:</strong> ${currentUser.email}</p>
          <a href="#" class="btn btn-primary w-100">Edit Profile</a>
        </div>
      </div>
    </div>
  </div>
`;

      parent.appendChild(div);
    });
};
userProfile();
