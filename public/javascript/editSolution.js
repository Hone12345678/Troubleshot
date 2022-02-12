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
