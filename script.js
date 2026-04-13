document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let phone = document.getElementById("phone").value.trim();
let message = document.getElementById("message").value.trim();

let formMessage = document.getElementById("formMessage");

/* VALIDATION */

if(name === "" || email === "" || phone === "" || message === ""){
formMessage.innerText = "Please fill all fields";
formMessage.style.color = "red";
return;
}

/* EMAIL CHECK */

let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!email.match(emailPattern)){
formMessage.innerText = "Enter a valid email";
formMessage.style.color = "red";
return;
}

/* PHONE CHECK */

if(phone.length < 10){
formMessage.innerText = "Enter valid phone number";
formMessage.style.color = "red";
return;
}

/* SUCCESS */

formMessage.innerText = "Data is submitted";
formMessage.style.color = "green";

});