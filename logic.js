// Create an input element
const inputTask = document.createElement('input');
inputTask.setAttribute('type', 'text');
inputTask.setAttribute('placeholder', 'Enter your task');

// Create a button element
const addTaskButton = document.createElement('button');
addTaskButton.textContent = 'Add Task';

// Append elements to the document body
document.body.appendChild(inputTask);
document.body.appendChild(addTaskButton);
document.body.appendChild(taskList);

// Add event listener to the button
addTaskButton.addEventListener('click', () => {
    if (inputTask.value.trim() === '') {
        alert('Task cannot be empty!');
        return;
    }

    // Create a new list item
    const newLine = document.createElement('li');

    // Create a checkbox
    const checkBox = document.createElement('input');
    checkBox.setAttribute('type', 'checkbox');

    // Create a delete button
    const deleteLineButton = document.createElement('button');
    deleteLineButton.textContent = 'Delete';

    // Append the checkbox, task text, and delete button to the list item
    newLine.appendChild(checkBox);
    newLine.appendChild(document.createTextNode(` ${inputTask.value} `)); // Add task text with spacing
    newLine.appendChild(deleteLineButton);

    // Append the list item to the task list
    taskList.appendChild(newLine);

         // Clear the input field
        inputTask.value = '';

        // Add functionality to delete the list item
        deleteLineButton.addEventListener('click', () => {
            taskList.removeChild(newLine);
        });
});

// Create the "Delete All Tasks" button
const deletAllTasksButton = document.createElement('button');
deletAllTasksButton.textContent = 'Delet All Tasks';
document.body.appendChild(deletAllTasksButton);

// Add event listener to clear all tasks
deletAllTasksButton.addEventListener('click', () => {
    // Clear all child elements of the task list
    while (taskList.firstChild) {
        taskList.removeChild(taskList.firstChild);
    }
});