


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
        fetch("https://ecommerce-backend-4yjb.onrender.com/account/contact/", {
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
            window.location.href = "https://peaceful-pasca-10d022.netlify.app/login.html";
        });
    }
};
