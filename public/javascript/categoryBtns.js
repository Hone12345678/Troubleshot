async function createButtonHandler(event) {
  event.preventDefault();

  const category = event.target.closest('button').id

    document.location.replace(`/by-category/${category}`)
}

document.querySelector('#categoryBtnNav').addEventListener('click', createButtonHandler);
