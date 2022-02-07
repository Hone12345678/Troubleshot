const modal = document.getElementById('addCategory-modal');

async function createCategoryHandler(event) {
  event.preventDefault();

  const category = document.querySelector('#category').value.trim();

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
    document.location.reload();
  } else {
    alert(response.statusText);
  }
}

document.querySelector('#modal-addCategory-btn').addEventListener('submit', createCategoryHandler);

document.querySelector('#addCategory').addEventListener('click', () => {modal.style.display="block"})