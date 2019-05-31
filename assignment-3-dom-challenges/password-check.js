let form__username = document.getElementById("form__username");
let form__email = document.getElementById("form__email");
let form__password = document.getElementById("form__password");
let form__submit = document.getElementById("form__submit");

form__submit.addEventListener("click", function(event) {
  let form__username__value = "";
  if (form__username) {
    form__username__value = form__username.value;
  }

  let form__email__value = "";
  if (form__email) {
    form__email__value = form__email.value;
  }

  let form__password__value = "";
  if (form__password) {
    form__password__value = form__password.value;
  }

  if (form__password.value.match(/\b12345678\b/)) {
    document.getElementById("form__check__h1").innerHTML =
      "Username: " +
      form__username__value +
      "<br>Email: " +
      form__email__value +
      "<br>Password: " +
      form__password__value;
  } else {
    alert("Password is NOT correct!");
  }
});

<<<<<<< HEAD
let test;
=======
let test = 41;
>>>>>>> hw3-separate-files
