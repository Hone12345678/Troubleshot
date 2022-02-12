
async function searchButtonHandler(event) {
    event.preventDefault();
    
      document.location.replace(`/`)
    }
  
  document.querySelector('#clearBtn').addEventListener('click', searchButtonHandler);
