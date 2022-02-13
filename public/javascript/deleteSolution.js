// allows user to target a specific solution to delete
async function deleteButtonHandler(event) {
    event.preventDefault();

    const id = event.target.getAttribute('data-delId');   
    const response = await fetch(`/api/solutions/${id}`, {
        method: 'DELETE'
    });
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
   
document.querySelector('#deleteBtn').addEventListener('click', deleteButtonHandler);
