//allows user to log into existing account
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  //on sign in the users credentials are verified
  //the password and email entered by the user match the values stored for the user
  //if successful the user will be directed to the home page and there content will be displayed
  if (email && password) {
  fetch('/api/users/login/', {
      method: 'post', 
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(()=> {
      setTimeout(()=> {
        window.location.href = '/'
      }, 100)

    })
    .catch(err => {
      alert(err.message)
    })
  }
};

//allows user to create a new account 
async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  //collects the nessesary information for the user to create a new account
  if (username && email && password) {
    fetch('/api/users/', {
      method: 'post', 
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    })
    .then(()=> {
      setTimeout(()=> {
        window.location.href = '/'
      }, 100)

    })
    .catch(err => {
      alert(err.message)
    })
  }
};

document.querySelector('#login-btn').addEventListener('click', loginFormHandler);
document.querySelector('#signup-btn').addEventListener('click', signupFormHandler);

// document.querySelector('#login').addEventListener('click', () => {modal.style.display="block"})
// document.querySelector('#signup').addEventListener('click', () => {modal.style.display="block"})