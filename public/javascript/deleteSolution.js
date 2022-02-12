async function deleteButtonHandler(event) {
    event.preventDefault();

    
        const id = event.target.getAttribute('data-delId');
        
    await console.log(id)

    const response = await fetch(`/api/solutions/${id}`, {
        method: 'DELETE'
    });
    console.log(response)
    
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
   

document.querySelector('#deleteBtn').addEventListener('click', deleteButtonHandler);
