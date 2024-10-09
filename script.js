document.getElementById("signUpForm").addEventListener("click", function () {
  // Zatrzymanie domyślnego działania submit

  // Pobierz pola input
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (firstName.value.trim() === "") {
    dispalyError(firstName);
  } else {
    document.getElementById("firstNameError").style.display = "none";
  }

  if (lastName.value.trim() === "") {
    dispalyError(lastName);
  } else {
    document.getElementById("lastNameError").style.display = "none";
  }

  if (email.value.trim() === "") {
    dispalyError(email);
  } else if(!emailPattern.test(email.value.trim())){
    email.classList.add("error-picture");
    document.getElementById("emailError").innerText = "Looks like this is not an email";
    document.getElementById("emailError").style.display = "flex";
    email.style.color = "hsl(0, 100%, 74%)"; 
  }

  if (password.value.trim() === "") {
    dispalyError(password);
  } else {
    document.getElementById("passwordError").style.display = "none";
  }
});

function dispalyError(element) {
  const span = element.parentElement;
  span.querySelector("span").style.display = "flex";
  element.classList.add("error-picture");
  element.placeholder = "";
}
