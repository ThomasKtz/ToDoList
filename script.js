let addTaskButton = document.getElementById('addTask');
let addedTasks = document.getElementById('added_tasks');
let newTask = document.getElementById('new_task');

addTaskButton.onclick = function(){
    if(newTask.value != ""){
        var paragraphe = document.createElement('p')
    }
    paragraphe.innerText = newTask.value;

    paragraphe.classList.add('paragraphe_style');

    addedTasks.appendChild(paragraphe);

    newTask.value='';
    
    paragraphe.addEventListener('click', function(){
        paragraphe.classList.add('paragraphe_click');
    })

    paragraphe.addEventListener('dblclick', function(){
        addedTasks.removeChild(paragraphe);
    })
}
