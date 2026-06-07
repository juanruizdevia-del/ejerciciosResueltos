

class Task {
    static tasklist = [];
    constructor(description, category) {
        this.id = Date.now();
        this.description = description;
        this.category = category;
        this.completed = false;
    }
}

const descriptionInput = document.getElementById('description');
const categorySelect = document.getElementById('category');
const sendButton = document.getElementById('send-button');
const totalTasksSpan = document.getElementById('total-tasks');
const completedTasksSpan = document.getElementById('completed-tasks');
const taskListContainer = document.getElementById('task-list');

sendButton.addEventListener('click', () => {
    const descriptionValue = descriptionInput.value.trim();
    const categoryValue = categorySelect.value;

    if (descriptionValue === '' || categoryValue === '') {
        alert('Por favor, escribe una tarea y selecciona una categoría.');
        return;
    }

    const newTask = new Task(descriptionValue, categoryValue);
    Task.tasklist.push(newTask);

    descriptionInput.value = '';
    categorySelect.value = '';

    showTask();
});

function showTask() {
    taskListContainer.innerHTML = '';
    
    Task.tasklist.forEach((task) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task-item');

        taskDiv.innerHTML = `
            <p><strong>[${task.category.toUpperCase()}]</strong> ${task.description}</p>
            <span class="complete-btn">${task.completed ? 'Completada' : 'Marcar completada'}</span>
        `;

        const completeSpan = taskDiv.querySelector('.complete-btn');
        completeSpan.addEventListener('click', () => {
            taskCompleted(task.id);
        });

        taskListContainer.appendChild(taskDiv);
    });

    updateCounters();
}

function taskCompleted(id) {
    const task = Task.tasklist.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        showTask();
    }
}

function updateCounters() {
    totalTasksSpan.textContent = Task.tasklist.length;

    const completedCount = Task.tasklist.filter(task => task.completed).length;
    completedTasksSpan.textContent = completedCount;
}

