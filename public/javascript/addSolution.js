async function createSolutionHandler(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const solution = document.getElementById('solution').value.trim();
  const priority = document.querySelector('#priority').value.trim();
  const category_id = document.querySelector('#category_id').value.trim();
  const user_id = document.querySelector('#categoryBtnNav button').getAttribute('data-');
  
const response = await fetch(`/api/solutions`, {
    method: 'POST',
    body: JSON.stringify({ 
      name: name,
      solution: `${solution}`,
      priority: priority,
      category_id: category_id,
      user_id: user_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  },
  );

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#modal-addSolution-btn').addEventListener('click', createSolutionHandler);