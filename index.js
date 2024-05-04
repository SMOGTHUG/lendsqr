const email = document.querySelector("#email");
const password = document.querySelector("#password");
const button = document.querySelector("#btn");

function logInput(event) {
  event.preventDefault();

  if (
    (email.value === "" && password.value === "") ||
    (email.value !== "" && password.value === "") ||
    (email.value === "" && password.value !== "")
  ) {
    // alert("Enter both fields ❌");
     document.getElementById('alert').innerHTML = "Enter both fields ❌"
  } else {
    const credentials = {
      email: email.value,
    
      password: password.value,
    };
    alert('your input values have been logged to the console ✔')
    console.log(credentials);
  }
}

button.addEventListener("click", logInput);