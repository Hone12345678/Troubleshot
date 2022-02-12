async function selectSolutionHandler(event) {
  event.preventDefault();
  
  const solutionId = event.target.closest('button').getAttribute('id'); 
  const categoryId = event.target.closest('button').getAttribute('data-'); 


  console.log(solutionId, categoryId); 
  document.location.replace(`/solutions/${categoryId}-${solutionId}`)

}

document.querySelector('#solutionCont').addEventListener('click', selectSolutionHandler)