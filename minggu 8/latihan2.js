function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (name === "" || email === "" || password === "") {
    return false;
  }

  return true;
}

document.getElementById("registerForm").addEventListener("submit", function (event) {
  event.preventDefault();

  if (validateForm()) {
    document.getElementById("alert").classList.remove("d-none");
  }
});
