let categoryId = ''

async function createButtonHandler(event) {
  event.preventDefault();

  categoryId = ''
  const category = event.target.id
  console.log(category);

  if (category === 'categoryBtnNav') {
    return;
  }
  else {
    document.location.replace(`/by-category/${category}`)
  }
}

document.querySelector('#categoryBtnNav').addEventListener('click', createButtonHandler);
