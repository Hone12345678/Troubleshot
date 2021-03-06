async function saveSolutionHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const name = document.querySelector('#name').value.trim();
  const solution = document.querySelector('#solution').value.trim();
  const priority = document.querySelector('#priority').value.trim();
  const category_id = document.querySelector('#category_id').value.trim();

  
const response = await fetch(`/api/solutions/${id}`, {
    method: 'PUT',
    body: JSON.stringify({ 
      name: name,
      solution: solution,
      priority: priority, 
      category_id: category_id
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  },
  );

  if (response.ok) {
    document.location.replace(`/by-solution/${category_id}-${id}`);
  } else {
    alert(response.statusText);
  }
}

async function cancelButton(event) {
  event.preventDefault();

  const byCat = event.target.closest('button').getAttribute('data-catSol');
  document.location.replace(`/by-solution/${byCat}`)
}

document.querySelector('#save-btn').addEventListener('click', saveSolutionHandler);
document.querySelector('#cancel-btn').addEventListener('click', cancelButton);