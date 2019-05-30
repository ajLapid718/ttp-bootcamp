document
  .getElementById("im-right-btn")
  .addEventListener("click", function(event) {
    document.getElementById("im-right-text").innerHTML = "I'm right";
    document.getElementById("no-im-right-text").innerHTML = "";
  });

document
  .getElementById("no-im-right-btn")
  .addEventListener("click", function(event) {
    document.getElementById("no-im-right-text").innerHTML = "No, I'm right";
    document.getElementById("im-right-text").innerHTML = "";
  });

document
  .getElementById("hoverArea")
  .addEventListener("mouseover", function(event) {
    alert("Hey, I told you not to hover over me");
  });

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

let sphere__form__radius = document.getElementById("sphere__form__radius");

sphere__form__submit.addEventListener("click", function(event) {
  let sphere__volume = 0;
  if (sphere__form__radius) {
    sphere__volume =
      (4 / 3) * Math.PI * Math.pow(sphere__form__radius.value, 3);
  }

  document.getElementById("sphere__form__answer__h1").innerHTML =
    sphere__volume + " units<sup>3</sup>";
});
