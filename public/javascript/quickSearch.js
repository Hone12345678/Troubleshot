
//generalsearch
async function searchButtonHandler(event) {
    event.preventDefault();

  const searchVal = document.querySelector('#search').value.trim();
    
      document.location.replace(`/search-category/${searchVal}`)
    }
  
  document.querySelector('#submitBtn').addEventListener('click', searchButtonHandler);

