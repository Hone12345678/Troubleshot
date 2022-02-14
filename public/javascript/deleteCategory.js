const deleteCatModal = document.getElementById('deleteCatConfirm');
const delCatBtn = document.querySelector('#deleteCatBtn');
const confirmDtlBtn = document.querySelector('#confirmCat-delete')
let catId = '';

// allows user to target a specific solution to delete
async function deleteCatButtonHandler() {
  console.log('delete', catId);
  const response = await fetch(`/api/categories/${catId}`, {
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
  deleteCatModal.classList.toggle('hidden')
}

// confirm-delete
confirmDtlBtn.addEventListener('click', deleteCatButtonHandler);

// cancel-delete
document.querySelector('#cancelCat-delete').addEventListener('click', toggleModal);

//toggle modal on clicking delete button
delCatBtn.addEventListener('click', (event)=> {
  event.preventDefault();
  catId = event.target.getAttribute('data-delId');
  console.log(catId)
  toggleModal();
  return catId;
});

window.onclick = function(event) {
    console.log(event)
  if (event.target === deleteCatModal) {
    deleteCatModal.classList.toggle('hidden')
  }
}