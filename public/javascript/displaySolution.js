async function selectSolutionHandler(event) {
  event.preventDefault();
  
  const solutionId = event.target.closest('button').getAttribute('id'); 
  const categoryId = event.target.closest('button').getAttribute('data-catId'); 
  let pageViews = event.target.closest('button').getAttribute('data-views');
  let toNumber = pageViews++
  let newView = toNumber+1

<<<<<<< HEAD
<<<<<<< HEAD
if (solutionId === 'deleteBtn'){
return
} 
=======
  // await console.log(newView);
  // await console.log(solutionId, categoryId);
>>>>>>> ad48b1187fe369ea1b9875e83557dc256a0b988e
=======
if (solutionId === 'deleteBtn' || solutionId === 'edit-btn'){
return
} 
>>>>>>> 9fdb59212d7806a294b0347bbd77858c21dfe07c

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
