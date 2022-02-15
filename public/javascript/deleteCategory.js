const deleteCatModal = document.getElementById('deleteCatConfirm');
const delCatBtn = document.querySelector('#deleteCatBtn');
const confirmDtlBtn = document.querySelector('#confirmCat-delete');
let categoryIdToDelete = '';

// allows user to target a specific solution to delete
async function deleteCatButtonHandler() {
  const response = await fetch(`/api/categories/${categoryIdToDelete}`, {
    method: 'DELETE'
  });

  if (response.ok) {
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
}

//toggle modal visibility
function toggleCatModal() {
  deleteCatModal.classList.toggle('hidden')
}

// confirm-delete
confirmDtlBtn.addEventListener('click', deleteCatButtonHandler);

// cancel-delete
document.querySelector('#cancelCat-delete').addEventListener('click', toggleCatModal);

//toggle modal on clicking delete button
delCatBtn.addEventListener('click', (event)=> {
  event.preventDefault();
  categoryIdToDelete = event.target.closest('button').getAttribute('data-delId');
  toggleCatModal();
  return categoryIdToDelete;
});

window.onclick = function(event) {
  if (event.target === deleteCatModal) {
    deleteCatModal.classList.toggle('hidden')
  }
}