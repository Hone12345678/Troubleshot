//generalsearch
async function searchButtonHandler(event) {
    event.preventDefault();

  const searchVal = document.querySelector('#search').value.trim();


//if the user has entered text into the search bar they are routed to the specified category 
    if (searchVal) {
      document.location.replace(`/search-category/${searchVal}`)
//when an empty search is submitted the user is just routed back to the main page
    } else {
      document.location.replace('/')
    }
  }
  
  document.querySelector('#submitBtn').addEventListener('click', searchButtonHandler);

