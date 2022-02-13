//high priority viewer button functionality 
function highPriorityHandler(event) {
  event.preventDefault();
  document.location.replace('/highest-priority/');
};

document.querySelector('#highestPriority').addEventListener('click', highPriorityHandler);

//recent post viewer button functionality 
function recentPostHandler(event) {
  event.preventDefault();
  document.location.replace('/recent-post/');
};

document.querySelector('#recentPost').addEventListener('click', recentPostHandler);

//most viewed viewer button functionality 
function mostViewedHandler(event) {
  event.preventDefault();
  document.location.replace('/most-viewed/');
};

document.querySelector('#mostViewed').addEventListener('click', mostViewedHandler);