

const contact =(event)=>{
    event.preventDefault();
    const name=document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;
    const data={name,email,message};
    console.log(data);
    fetch("http://127.0.0.1:8000/account/contact/",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.success){
            alert("Message Sent Successfully");
            window.location.href="home.html";
        }
        else{
            alert("Message Not Sent");
        }
    })
    .catch(err=>console.log(err))
}