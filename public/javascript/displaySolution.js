async function selectSolutionHandler(event) {
  event.preventDefault();
  
  const solutionId = event.target.closest('button').getAttribute('id'); 
  const categoryId = event.target.closest('button').getAttribute('data-catId'); 
  let pageViews = event.target.closest('button').getAttribute('data-views');
  let toNumber = pageViews++
  let newView = toNumber+1

  // await console.log(newView);
  // await console.log(solutionId, categoryId);

  const response = await fetch(`/api/solutions/${solutionId}`, {
    method: 'PUT',
    body: JSON.stringify({
      page_views: newView
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  if (response.ok) {
    document.location.replace(`/by-solution/${categoryId}-${solutionId}`)
  } else {
    alert(response.statusText);
  }

}

document.querySelector('#solutionCont').addEventListener('click', selectSolutionHandler)
