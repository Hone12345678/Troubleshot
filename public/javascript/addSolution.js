const modal = document.getElementById('addSolution-modal');

async function newFormHandler(event) {
  event.preventDefault();

  const category = document.querySelector('#category').value.trim();
  const name = document.querySelector('#name').value.trim();
  const solution = document.querySelector('#solution').value.trim();
  const priority = document.querySelector('#priority').value.trim();
  const tag = document.querySelector('#tag').value.trim();


const response = await fetch(`/api/solution`, {
    method: 'POST',
    body: JSON.stringify({ 
      category,
      name,
      solution,
      priority,
      tag
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#modal-addSolution-btn').addEventListener('submit', newFormHandler);

document.querySelector('#addSolution').addEventListener('click', () => {modal.style.display="block"})