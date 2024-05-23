document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('todo-form');
    const input = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      const taskName = input.value.trim();
      if (taskName !== '') {
        addTask(taskName);
        input.value = '';
      }
    });
  
    function addTask(taskName) {
      const li = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      const label = document.createElement('label');
      label.textContent = taskName;
      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
  
      li.appendChild(checkbox);
      li.appendChild(label);
      li.appendChild(deleteButton);
      todoList.appendChild(li);
  
      deleteButton.addEventListener('click', function() {
        li.remove();
      });
  
      checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
          label.classList.add('completed');
          deleteButton.classList.add('completed-button'); // Adiciona a classe ao botão
        } else {
          label.classList.remove('completed');
          deleteButton.classList.remove('completed-button'); // Remove a classe do botão
        }
      });
    }
  });
  