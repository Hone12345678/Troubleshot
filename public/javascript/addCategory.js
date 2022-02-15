//allows user to create new categories 
const modal = document.getElementById('addCategory-modal');
const addCat = document.querySelector('#addCategory')

function toggleCatAddModal() {
  modal.classList.toggle('hidden')
}

async function createCategoryHandler(event) {
  event.preventDefault();

const category = document.querySelector('#category').value.trim();

if (!category) {
  alert('You must enter a category name!')
  return;
}

const response = await fetch(`/api/categories`, {
    method: 'POST',
    body: JSON.stringify({ 
      category_name: category
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  },
  );

  if (response.ok) {
    document.location.reload("/");
  } else {
    alert(response.statusText);
  }
}

// cancel-delete
document.querySelector('#cancelCat-add').addEventListener('click', toggleCatAddModal);
document.querySelector('#modal-addCategory-btn').addEventListener('click', createCategoryHandler);

addCat.addEventListener('click', () => {modal.classList.toggle('hidden')});

window.onclick = function(event) {
  if (event.target === modal) {
    modal.classList.add('hidden')
  }
}