document.addEventListener('DOMContentLoaded', function() {
    const container1 = document.getElementById('container1');
    const container2 = document.getElementById('container2');
    const resetButton = document.getElementById('resetButton');
  
    let draggedItem = null;
  
    // Event listener for dragging started
    container1.addEventListener('dragstart', function(event) {
      draggedItem = event.target;
      event.dataTransfer.setData('text/plain', draggedItem.textContent);
      event.target.style.opacity = '0.5';
    });
  
    // Event listener for dragging over
    container2.addEventListener('dragover', function(event) {
      event.preventDefault();
    });
  
    // Event listener for dropping
    container2.addEventListener('drop', function(event) {
      event.preventDefault();
      const data = event.dataTransfer.getData('text/plain');
      const droppedItem = document.createElement('div');
      droppedItem.textContent = data;
      container2.appendChild(droppedItem);
      draggedItem.style.opacity = '1';
      draggedItem = null;
    });
  
    // Event listener for reset button click
    resetButton.addEventListener('click', function() {
      container2.innerHTML = '';
    });
  });
  