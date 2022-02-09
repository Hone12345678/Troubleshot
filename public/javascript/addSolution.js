async function createSolutionHandler(event) {
  event.preventDefault();

  const name = document.querySelector('#name').value.trim();
  const solution = document.querySelector('#solution').value.trim();
  const priority = document.querySelector('#priority').value.trim();
  const category_id = document.querySelector('#category_id').value.trim();
  
  console.log(this.session);
  console.log('------testing--------');

const response = await fetch(`/api/categories`, {
    method: 'POST',
    body: JSON.stringify({ 
      name: name,
      solution: solution,
      priority: priority,
      category_id: category_id,
      user_id: 4
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  },
  );

  if (response.ok) {
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

// document.querySelector('#modal-addSolution-btn').addEventListener('click', createSolutionHandler);

// document.querySelector('#createSolution').addEventListener('click', createSolutionHandler)