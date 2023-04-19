function uid() {
    return Date.now().toString(16) + Math.random().toString(16).substring(2);
}

let taskData = [
    {
        id: uid(),
        name: 'Digite na barra acima e clique no botão para criar sua primeira tarefa',
        toDo: true,
    },
    {
        id: uid(),
        name: 'Exemplo de task completa',
        toDo: true,
    }
]

const addTaskInput = document.getElementById("task_input");
const addTaskButton = document.getElementsByTagName("button")[0];
const taskList = document.getElementById("task_list");

//create a new task element
function createNewTaskEl(taskName, taskId) {
    //create task li
    let task = document.createElement("li");
    task.classList.add("task");
    task.classList.add("todo");
    task.setAttribute("id", taskId);
    //create .left_content div
    let leftContent = document.createElement("div");
    leftContent.classList.add("left_content");
        //todo icon
    let todoIcon = document.createElement("i");
    todoIcon.classList.add("ph-duotone");
    todoIcon.classList.add("ph-circle-dashed");
    todoIcon.classList.add("check_btn");
    todoIcon.addEventListener("click", completeTask);
        //done icon
    let doneIcon = document.createElement("i");
    doneIcon.classList.add("ph-duotone");
    doneIcon.classList.add("ph-check-circle");
    doneIcon.classList.add("check_btn");
    doneIcon.classList.add("hidden");
    doneIcon.addEventListener("click", pendingTask);
        //task name/p
    let name = document.createElement("p");
    name.innerHTML = taskName;
    //delete icon
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("ph-duotone");
    deleteIcon.classList.add("ph-trash");
    deleteIcon.classList.add("delete_btn");
    deleteIcon.addEventListener("click", deleteTask);
    //append elements
    leftContent.appendChild(todoIcon);
    leftContent.appendChild(doneIcon);
    leftContent.appendChild(name);
    task.appendChild(leftContent);
    task.appendChild(deleteIcon);

    return task;
}

// createNewTaskEl('nomenome', 12345);

//add a new task
function addTask(event) {
    event.preventDefault();
    console.log('Task added');


    const newTaskName = addTaskInput.value;

    const newTask = {
        id: uid(),
        name: newTaskName,
        toDo: true,
    }

    taskData.push(newTask);
    const taskElement = createNewTaskEl(newTask.name, newTask.id);
    taskList.appendChild(taskElement);
}

//update - complete task
function completeTask(event) {
    console.log('Task completed');

    const todoIcon = event.target;
    todoIcon.classList.add("hidden");

    const todoTaskId = todoIcon.parentNode.parentNode.id;
    const todoTask = document.getElementById(todoTaskId);

    todoTask.classList.add("done");
    todoTask.classList.remove("todo");

    const doneIcon = todoIcon.parentNode.childNodes[1];
    doneIcon.classList.remove("hidden");

    taskData.find((item) => {
        if (item.id === todoTaskId) {
            item.toDo = false;
        }
    })
}

//update - pending task
function pendingTask(event) {
    console.log('Task marked as pending');

    const doneIcon = event.target;
    doneIcon.classList.add("hidden");

    const pendingTaskId = doneIcon.parentNode.parentNode.id;
    const pendingTask = document.getElementById(pendingTaskId);

    pendingTask.classList.add("todo");
    pendingTask.classList.remove("done");

    const todoIcon = doneIcon.parentNode.childNodes[0];
    todoIcon.classList.remove("hidden");

    taskData.find((item) => {
        if (item.id === pendingTaskId) {
            item.toDo = true;
        }
    })


}

//delete task
function deleteTask(event) {
    console.log('Task deleted');
}

//sync HTML with taskData
for(let i = 0; i < taskData.length; i++) {
    let currentTask = taskData[i];
    const taskItem = createNewTaskEl(currentTask.name, currentTask.id);
    taskList.appendChild(taskItem);
}

//tasks counter