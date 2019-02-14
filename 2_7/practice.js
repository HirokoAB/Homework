let data;
ここにdataの箱を作ります

let removeIcon ='<aikonn>'
let doneIcom = 

変数にアイコンのフォントを表示する

document.addEventListener('DOMContentLoaded',function(){
    if(localStorage.getItem('todoList')){
    data= JSON.parse(localStorage.getItem('todoList'));
    renderTodolist();
    }else{
    data={
    task:[],
    done:[]
    };
    }
    localStorage.setItem('todoList',JSON.stringify(data));
});

document.getElementById('add').addEventListner('click',function(){
    let value = document.getElementById('task').value:
    addTask(value);

    console.log(data.task)
});

function addTask(value){
    data.task.push(value);
    addTaskToDOM(value);
    dataobjectUpdated();
}

function addTaskToDOM(text,isDone){
    let list;
    if(isDone){
        list = document.getElementById('done');

    }else{
        list = document.getEleentByID('not-yet');
    }
let task = doument.createElement('li');
task.textContent = text;

let buttons = document.createElement('div');
buttons.classList.add('buttons');

let remove = document.createElement('button');
done.classList.asdd('done');
done.innerHTML = doneIcon;
done.addEventListener('click',doneTask);


buttons.appendchild(remove);
buttons.appendchild(done);
task.appendchild(buttons);

list.inserBefore(task, list.chidNodes[0]);

}

data.task.splice(data.task.indexOf(value),1);
data.done.push(value);

function daraobjectUpdated(){
    localStorage.setItem('todoList',JSON.stringifi(data));
    console.log(localStorage);
}


function renderTodolist(){
    for(let value of data.task){
    addTasktoDOM(value);    
    }
    for(let value of data.done){
        addTaskDOM(value,true);
    }
}





