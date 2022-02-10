function highPriorityHandler(event) {
  event.preventDefault();
  document.location.replace('/highest-priority/');
};

document.querySelector('#highestPriority').addEventListener('click', highPriorityHandler);


function recentPostHandler(event) {
  event.preventDefault();
  document.location.replace('/recent-post/');
};

document.querySelector('#recentPost').addEventListener('click', recentPostHandler);


function mostViewedHandler(event) {
  event.preventDefault();
  document.location.replace('/most-viewed/');
};

document.querySelector('#mostViewed').addEventListener('click', mostViewedHandler);