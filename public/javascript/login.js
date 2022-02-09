// const modal = document.getElementById('login-modal');

async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

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

async function signupFormHandler(event) {
  event.preventDefault();
  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  console.log(username, email, password);

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