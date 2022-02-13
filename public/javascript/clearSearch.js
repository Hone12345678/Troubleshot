
//allows user to clear search bar and redirect to homepage
async function searchButtonHandler(event) {
    event.preventDefault();
    
      document.location.replace(`/`)
    }
  
  document.querySelector('#clearBtn').addEventListener('click', searchButtonHandler);
