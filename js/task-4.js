const userForm = document.querySelector(".login-form");

userForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const formElements = event.target.elements;
  const info = {
    email: formElements.email.value.trim(),
    password: formElements.password.value.trim(),
  };
  if (info.email === "" || info.password === "") {
    alert("All form fields must be filled in");
    return;
  }
  console.log(info);
  event.target.reset();
}
