var submitButton = document.querySelector(".submit-button");
var usernameInput = document.querySelector(".username-input");
var passwordInput = document.querySelector(".password-input");
var emailInput = document.querySelector(".email-input");

const submitForm = (event) => {
  event.preventDefault();
  console.log(new User(usernameInput.value, passwordInput.value));
}

const loginUser = async (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;

  const res = await login({ username, password });

  const { auth, access_token, refresh_token } = res;

  setStorage('isAuth', auth);
  setStorage('access_token', access_token);
  setStorage('refresh_token', refresh_token);

  window.location.href = 'home.html';
};

const registerNewUser = (event) => {
  event.preventDefault();
  const username = usernameInput.value;
  const password = passwordInput.value;
  const email = emailInput.value;

  register({
    username,
    email,
    password,
  }).then((res) => {
    window.location.href = '/';
  });
};

const logoutUser = (event) => {
  event.preventDefault();
  logout();
  window.location.href = '/';
};

(() => {
  if (storageHasData()) {
    const isAuth = getStorage('isAuth');
    if (!isAuth) {
      document.getElementById('logout').style.display = 'none';
    } else {
      document.getElementById('logout').style.display = 'block';
    }
  }
})();