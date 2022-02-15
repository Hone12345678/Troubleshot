//allows for previously created solutions to be edited
async function editButtonHandler(event) {
  event.preventDefault();

  const splitId = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];

  const id = splitId.split("-")[1];

  document.location.replace(`/api/solutions/edit/${id}`);
}

document.querySelector('#edit-btn').addEventListener('click', editButtonHandler);

