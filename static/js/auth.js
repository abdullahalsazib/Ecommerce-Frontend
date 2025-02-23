
const handleRegistration = (event) => {
    event.preventDefault();
    const username = getValue("username").value;
    const first_name = getValue("first_name").value;
    const last_name = getValue("last_name").value;
    const email = getValue("email").value;
    const password = getValue("password").value;
    const confirm_password = getValue("confirm_password").value;
    const info = {
      username,
      first_name,
      last_name,
      email,
      password,
      confirm_password,
    };
    console.log(info);
  
    if (password === confirm_password) {
      if (
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/.test(
          password
        )
      )
       {
  
        fetch("https://ecommerce-backend-4yjb.onrender.com/account/register/", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(info),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            Swal.fire({
              title: 'Email Confirmed!',
               text: 'Your email has been verified successfully. Please log in to continue.',
              icon: 'success',
              confirmButtonText: 'OK'
            }).then(()=>{
               window.location.href="login.html";
            })


          });
          
      }
    } 
    
    else 
    {

      document.getElementById("error").innerText =
        "password and confirm password do not match";
      alert("password and confirm password do not match");
    }
  };




 const handleLogin=(event)=>{
    event.preventDefault(event)
    const username=getValue("login-username").value;
    const password=getValue("login-password").value;
    const admin_user = "arman";
    const admin_pass = "123";
   

  // Hardcoded credential check for admin
  if (username === admin_user && password === admin_pass) {
    window.location.href = "admin_panel.html";
    return;
  }
  else{
    console.log(username,password);
    
    if((username,password)){
      fetch("https://ecommerce-backend-4yjb.onrender.com/account/login/",{
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username, password }),
        })
        
        .then((res) => res.json())
        .then((data) => {
        console.log(data);
         localStorage.setItem("token",data.token);
         localStorage.setItem("user_id",data.user_id);
         if(data.token && data.user_id){
          localStorage.setItem("token",data.token);
          localStorage.setItem("user_id",data.user_id);
          
          Swal.fire({
            title: 'Success!',
            text: 'Your Account Successfully Login.',
            icon: 'success',
            confirmButtonText: 'OK'
          }).then(()=>{
             window.location.href="home.html";
          })
         }

        
        });
    }    
      
  }


  }
  const getValue = (id) => {
    const value=document.getElementById(id);
    return value;
  };

const showModal = (modalId, message) => {
    const modal = new bootstrap.Modal(document.getElementById(modalId));
    const modalBody = document.querySelector(`#${modalId} .modal-body`);
    if (modalBody) {
      modalBody.textContent = message;
    }
    modal.show();
  };


const handleLogout = (event) => {
  event.preventDefault();

    console.log("Logging out...");
    const token = localStorage.getItem("token");
    console.log(token);
    fetch("https://ecommerce-backend-4yjb.onrender.com/account/logout/", {
      method: "GET",
      headers: {
        Authorization: `Token ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Logout successful", data);
        localStorage.removeItem("token");
        localStorage.removeItem("user_id");


        Swal.fire({
          title: 'Success!',
          text: 'Your account has been successfully logged out.',
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(()=>{
           window.location.href="home.html";
        })
        
      })
    
  };
  
  






