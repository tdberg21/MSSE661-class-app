var submitButton = document.querySelector('.submit-button');
var usernameInput = document.querySelector('.username-input');
var passwordInput = document.querySelector('.password-input');

class User {
  name;
  password;

  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

submitButton.addEventListener('click', submitForm);

function submitForm(event) {
  event.preventDefault();
  console.log(new User(usernameInput.value, passwordInput.value));
};
