var submitButton = document.querySelector(".submit-button");
var usernameInput = document.querySelector(".username-input");
var passwordInput = document.querySelector(".password-input");
var emailInput = document.querySelector(".email-input");

class User {
  name;
  password;

  constructor(name, password) {
    this.name = name;
    this.password = password;
  }
}

const registerNewUser = function(event) {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  const email = emailInput.value;
  console.log('register')

  register({
    username: username,
    email: email,
    password: password
  }).then(function(res) {
    window.location.href = 'home.html';
  });
}

const loginUser = function (event) {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  console.log(username, password);

  login({
    username: username,
    password: password
  }).then(function(res) {
    window.location.href = 'home.html';
  })
};

const logoutUser = function (event) {
  event.preventDefault();
  console.log('logged out!');
};


function submitForm(event) {
  event.preventDefault();
  console.log(new User(usernameInput.value, passwordInput.value));
}