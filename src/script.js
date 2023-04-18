let taskData = [
    {
        id: 1,
        name: 'Estudar JavaScript',
        toDo: true,
    },
    {
        id: 2,
        name: 'Estudar React',
        toDo: false,
    }
]

const addTaskInput = document.getElementById("task_input");
const addTaskButton = document.getElementsByTagName("button")[0];
const taskList = document.getElementById("task_list");

//add a new task
function addTask(event) {
    event.preventDefault();
    console.log('Task added');
}

//update - complete task
function completeTask(event) {
    console.log('Task completed');
}

//update - pending task
function pendingTask(event) {
    console.log('Task marked as pending');
}

//delete task
function deleteTask(event) {
    console.log('Task deleted');
}

//sync HTML with taskData

//tasks counter