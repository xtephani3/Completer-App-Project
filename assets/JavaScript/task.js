

function getTasks() {
    return getDatabase(TASKS_DB_NAME, []);
}

function updateTaskDatabase(taskList) {
    updateDatabase(TASKS_DB_NAME, taskList);
}

let taskList = getTasks();

const addTaskButton = document.getElementById("add-task-button");
const createTaskForm = document.getElementById("create-task-form");
const createTaskFormContainer = document.getElementById("create-task-form-container")
const blurFormContainer = document.getElementById("blur-form-container");
const createTaskFormCloseX = document.getElementById("create-task-form-close-x");
const createTaskFormCancelButton = document.getElementById("create-task-form_cancel-button");
const createTaskFormInput = document.getElementById("create-task-form_input");
const createTaskFormTextarea = document.getElementById("create-task-form_textarea");
const createTaskFormOptions = document.getElementById("create-task-form_options");
const createTaskFormDateInput = document.getElementById("create-task-form_date-input");
const createTaskButton = document.getElementById("create-task-form_create-task-button");
const taskListDisplayActiveContainer = document.getElementById("tasks-display-active-container");
const activeTaskCounter = document.getElementById("active-tasks-counter");

const getTaskInputValue = () => createTaskFormInput.value;
const getTaskTextareaValue = () => createTaskFormTextarea.value;
const getTaskPriorityValue = () => createTaskFormOptions.value;
const getTaskDateValue = () => createTaskFormDateInput.value;

function displayCreateTaskForm() {
    createTaskFormContainer.style.display = "block";
    createTaskForm.style.display = "block";
    blurFormContainer.style.display = "block";
}

blurFormContainer.addEventListener("click", () => {
    clearCreateTaskForm()
})

createTaskFormCloseX.addEventListener("click", () => {
    clearCreateTaskForm()
})

createTaskFormCancelButton.addEventListener("click", () => {
    clearCreateTaskForm()
})

createTaskForm.addEventListener("click", (e) => {
    e.preventDefault()
});

const TaskListItem = ({ id, title, description, priority, date }) => {
    return `
    <div class="tasks-display-active">
        <input class="tasks-display-radio" type="radio"/>
        <div class="tasks-display-active_description-wrap">
            <b class="tasks-display-active_title"> ${title} </b>
            <span class="tasks-display-active_description">${description} </span>
            <small class="tasks-display-active_date">${date}</small>
        </div>
        <div class="tasks-display-active_icon-wrap">
            <span class="tasks-display-active_priority-stats">${priority}</span>
            <div class="delete-task-icon-wrap">
            <img onclick="deleteTask('${id}')" class="delete-task-icon" src="/assets/images/svg/delete.svg"/>
            </div>
        </div>
    </div>
    `
}

const TaskListEmptyItem = () => {
    return `
    <div class="tasks-display-default">
        <img src="/assets/images/svg/taskDefaultCircle.svg"/>
        <p class="tasks-display-description1">No tasks yet</p>
        <p class="tasks-display-description2" >Click "Add Task" to create your first task</p>
    </div>
    `
}

const printTasks = () => {
    if (taskList.length > 0) {
        let taskListItems = "";
        
        taskList.forEach((item) => {
            taskListItems += TaskListItem(item);
        });

        taskListDisplayActiveContainer.innerHTML = taskListItems;
    } else {
        taskListDisplayActiveContainer.innerHTML = TaskListEmptyItem();
    }

    activeTaskCounter.innerHTML = taskList.length
}

function clearCreateTaskForm() {
    createTaskFormContainer.style.display = "none";
    createTaskForm.style.display = "none";
    blurFormContainer.style.display = "none";
}

const addTask = () => {
    let taskTitle = getTaskInputValue();
    let taskDescription = getTaskTextareaValue();
    let taskPriority = getTaskPriorityValue();
    let taskDate = getTaskDateValue();
    let taskId = `task-${taskList.length + 1}`;

    const newTask = {
        id: taskId,
        title: taskTitle,
        description: taskDescription,
        priority: taskPriority,
        date: taskDate,
    }

    taskList.push(newTask);
    updateTaskDatabase(taskList);
    printTasks();
    createTaskForm.reset();
}

function deleteTask(taskId) {
    taskList = taskList.filter(item => item.id !== taskId);
    updateTaskDatabase(taskList);
    printTasks();
}

const assignAddTaskAction = () => {
    createTaskButton.addEventListener("click", () => {
        addTask();
        clearCreateTaskForm();
    })
}

printTasks();
assignAddTaskAction();