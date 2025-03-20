let initButton = document.querySelector('#initButton');
let taskContainer = document.querySelector('#task-container');
let addTaskButton = document.querySelector('#addTaskbutton');
let taskInput = document.querySelector('#task-name');
let taskDate = document.querySelector('#task-date');
let addTaskContainer = document.querySelector('#addTask-container');
let container = document.querySelector('#add-tasks')

let todos = []

initButton.addEventListener('click', ()=> {
taskContainer.classList.remove('hidden');
});



function renderTasks(){
    addTaskContainer.innerHTML = "";
    let newStatusclass = ""

    todos.forEach((todo,index)=> {
        if(todo.status === 'done'){
            newStatusclass = 'bg-green-100'
        }else if(todo.status === 'undone'){
            newStatusclass = "";
        }
        let div = document.createElement('div');
         div.innerHTML = `  <div class="w-[360px] mx-auto border-1 mt-5 px-4 py-3 border-neutral-200 rounded-lg ${newStatusclass}" id="add-tasks">
        <p class="font-semibold">${todo.taskName}</p>
        <p class="text-sm">${todo.taskDate}</p>
       <div class="flex justify-between mt-3">
        <button class="text-sm hover:text-green-300 flex gap-1" data-id="${index}" id="task-completed"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-circle" viewBox="0 0 16 16">
          <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0"/>
          <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
        </svg>Mark as done</button>
         <button class="text-sm hover:text-blue-300 flex gap-1" data-id="${index}" id="task-incompleted"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square-fill" viewBox="0 0 16 16">
         <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm3.354 4.646L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 1 1 .708-.708"/>
          </svg>not done</button>

        <button class="text-sm hover:text-red-600 flex gap-1" data-id="${index}" id="delete-task"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5"/>
        </svg>Delete</button>
       </div>
       </div>`
       addTaskContainer.appendChild(div);
    
       });

let taskCompleted = document.querySelectorAll('#task-completed');
let deleteTask = document.querySelectorAll('#delete-task');
let taskIncomplete = document.querySelectorAll('#task-incompleted')

taskCompleted.forEach((task) => {
 task.addEventListener('click', (e) => {
     let index = e.target.getAttribute('data-id');
     let todo = todos[index];
     todo.status = "done";
     console.log(todo,"todo");
     renderTasks();

 });
});

taskIncomplete.forEach((task) => {
    task.addEventListener('click', (e)=> {
        let index = e.target.getAttribute('data-id');
        let todo = todos[index];
        todo.status = "undone";
        console.log(todo,"todo");
        renderTasks();
        
    })
})

deleteTask.forEach((task) => {
    task.addEventListener('click', (e)=> {
        let index = e.target.getAttribute('data-id');
        console.log(todos,"todos");
        console.log(index)
        todos.splice(index,1);
        renderTasks();
    })
});
      


}

addTaskButton.addEventListener('click', ()=> {
    let tasks = {
        taskName: taskInput.value,
        taskDate: taskDate.value
    };
   addTaskContainer.innerHTML = "";
   taskInput.value = "";
    todos.push(tasks);
  renderTasks();
    console.log(todos,"todos");
})

var el = document.getElementById('addTask-container');
var sortable = Sortable.create(el);