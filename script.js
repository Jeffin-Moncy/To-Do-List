document.addEventListener('DOMContentLoaded', () => {
    const addButton = document.getElementById('add-btn');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    const addTask = () => {
      const taskText = todoInput.value.trim();
  
      if (taskText) {
        const listItem = document.createElement('li');
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
  
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => listItem.remove());
  
        listItem.appendChild(taskSpan);
        listItem.appendChild(deleteButton);
        todoList.appendChild(listItem);
  
        todoInput.value = '';
      } else {
        alert('Please enter a task!');
      }
    };
  
    addButton.addEventListener('click', addTask);
  
    todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTask();
      }
    });
  });
  