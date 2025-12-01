const addTaskButton = document.getElementById("add-task-button");
const createTaskForm = document.getElementById("create-task-form");
const createTaskFormContainer = document.getElementById("create-task-form-container")
const blurFormContainer = document.getElementById("blur-form-container");
const createTaskFormCloseX = document.getElementById("create-task-form-close-x")
const createTaskFormCancelButton = document.getElementById("create-task-form_cancel-button")

function displayCreateTaskForm(){
    createTaskFormContainer.style.display = "block";
    createTaskForm.style.display = "block";
    blurFormContainer.style.display = "block";
}


 blurFormContainer.addEventListener( "click", ()=>{
     clearCreateTaskForm()

 })


 createTaskFormCloseX.addEventListener( "click", ()=>{
     clearCreateTaskForm()

 })

 createTaskFormCancelButton.addEventListener( "click" , ()=>{
    clearCreateTaskForm()
 })

 createTaskForm.addEventListener("click", (e)=>{
     e.preventDefault()
 }
)


function clearCreateTaskForm(){
    createTaskFormContainer.style.display = "none";
    createTaskForm.style.display = "none";
    blurFormContainer.style.display = "none";
}