//allows user to click category buttons and view all solutions withing the category
async function createButtonHandler(event) {
  event.preventDefault();

  const category = event.target.closest('button').id

    document.location.replace(`/by-category/${category}`)
}

document.querySelector('#categoryBtnNav').addEventListener('click', createButtonHandler);
