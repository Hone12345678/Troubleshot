//generalsearch
async function searchButtonHandler(event) {
    event.preventDefault();

  const searchVal = document.querySelector('#search').value.trim();
    
    if (searchVal) {
      document.location.replace(`/search-category/${searchVal}`)
    } else {
      document.location.replace('/')
    }
  }
  
  document.querySelector('#submitBtn').addEventListener('click', searchButtonHandler);

