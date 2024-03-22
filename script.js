document.addEventListener('DOMContentLoaded', function () {
    const addButton = document.getElementById('add-button');
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function () {
        const todoText = todoInput.value.trim();
        if (todoText !== '') {
            createTodoItem(todoText);
            todoInput.value = '';
        }
    });

    function createTodoItem(todoText) {
        const li = document.createElement('li');
        li.innerHTML = `
            <input type="checkbox">
            <span>${todoText}</span>
            <button class="delete-button">Delete</button>
        `;
        todoList.appendChild(li);

        const checkbox = li.querySelector('input[type="checkbox"]');
        checkbox.addEventListener('change', function () {
            if (checkbox.checked) {
                li.classList.add('completed');
                todoList.appendChild(li);
            } else {
                li.classList.remove('completed');
                todoList.prepend(li);
            }
        });

        const deleteButton = li.querySelector('.delete-button');
        deleteButton.addEventListener('click', function () {
            li.remove();
        });
    }
});
