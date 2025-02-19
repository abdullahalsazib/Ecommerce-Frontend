
// const user_id = localStorage.getItem("user_id");
// console.log(user_id);

// const contact =(event)=>{
//     event.preventDefault();
//     const names=document.getElementById("name").value;
//     const email=document.getElementById("email").value;
//     const message=document.getElementById("message").value;

//     if (!name) {
//         alert("Please enter your name!");
//         return;
//       }
//       if (!email) {
//         alert("Please enter your email!");
//         return;
//       }
//       if (!message) {
//         alert("Please write your message!");
//         return;
//       }

//     const data={
//         "name":names,
//         "email":email,
//         "message":message,
//         "user":user_id,
//     }
//     console.log(data);


//     if(user_id)
//     {
//         fetch("http://127.0.0.1:8000/account/contact/",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json"
//             },
//             body:JSON.stringify(data)
//         })
//         .then(res=>res.json())
//         .then(data=>{
//             console.log(data);
//             alert("succesfuly send this message")
//         })      
//     }
  
//     else{
//         Swal.fire({
//             title: 'Error!',
//             text: 'Login Your Account',
//             icon: 'error',
//             confirmButtonText: 'Cool'
          
//             }).then(()=>{
//                 window.location.href = "http://127.0.0.1:5501/login.html";
//             })
//         }
// }



const user_id = localStorage.getItem("user_id");
console.log(user_id);

const contact = (event) => {
    event.preventDefault();

    const names = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!names) {
        alert("Please enter your name!");
        return;
    }
    if (!email) {
        alert("Please enter your email!");
        return;
    }
    if (!message) {
        alert("Please write your message!");
        return;
    }

    const data = {
        "name": names,
        "email": email,
        "message": message,
        "user": user_id,
    };

    console.log("Sending data:", data);

    if (user_id) {
        fetch("http://127.0.0.1:8000/account/contact/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(response => {
            console.log("Server Response:", response);
            alert("Successfully sent the message!");

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
        })
        .catch(error => {
            console.error("Error sending message:", error);
            alert("Failed to send message. Try again!");
        });
    } else {
        Swal.fire({
            title: 'Error!',
            text: 'Login to your account first!',
            icon: 'error',
            confirmButtonText: 'OK'
        }).then(() => {
            window.location.href = "http://127.0.0.1:5501/login.html";
        });
    }
};
