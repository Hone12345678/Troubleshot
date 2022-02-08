async function createButtonHandler(event) {
  event.preventDefault();

  const category = event.target.id

  if (category === 'categoryBtnNav') {
    return;
  }
  else {
    document.location.replace(`/by-category/${category}`)
  }
}

document.querySelector('#categoryBtnNav').addEventListener('click', createButtonHandler);
