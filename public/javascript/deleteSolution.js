const deleteModal = document.getElementById('deleteConfirm');
const delBtn = document.querySelector('#deleteBtn');
let id = '';

// allows user to target a specific solution to delete
async function deleteButtonHandler() {
  const response = await fetch(`/api/solutions/${id}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

//toggle modal visibility
function toggleModal() {
  deleteModal.classList.toggle('hidden')
}

// confirm-delete
document.querySelector('#confirm-delete').addEventListener('click', deleteButtonHandler);

// cancel-delete
document.querySelector('#cancel-delete').addEventListener('click', toggleModal);

//toggle modal on clicking delete button
delBtn.addEventListener('click', (event)=> {
  event.preventDefault();
  id = event.target.getAttribute('data-delId');
  console.log(id)
  toggleModal();
  return id;
});

window.onclick = function(event) {
  if (event.target === deleteModal) {
    deleteModal.classList.toggle('hidden')
  }
}