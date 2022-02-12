async function saveSolutionHandler(event) {
  event.preventDefault();

  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const name = document.querySelector('#name').value.trim();
  const solution = document.querySelector('#solution').value.trim();
  const priority = document.querySelector('#priority').value.trim();
  const category_id = document.querySelector('#category_id').value.trim();

  console.log("id:", category_id);
  
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
    document.location.assign(`http://localhost:3001/by-solution/${category_id}-${id}`);
  } else {
    alert(response.statusText);
  }
}

async function editButtonHandler(event) {
  event.preventDefault();

  const splitId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const id = splitId.split("-")[1];

  console.log(id);

  document.location.assign(`http://localhost:3001/api/solutions/edit/${id}`);
}

document.querySelector('#edit-btn').addEventListener('click', editButtonHandler);

document.querySelector('#save-btn').addEventListener('click', saveSolutionHandler);