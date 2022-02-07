function highPriorityHandler(event) {
  event.preventDefault();
  document.location.replace('/highest-priority/');
};

document.querySelector('#highestPriority').addEventListener('click', highPriorityHandler);