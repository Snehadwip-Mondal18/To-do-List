let todoList = [
    // {
    //     item: 'milk',
    //     dueDate: '21/07/24'
    // },
    // {
    //     item: 'dfawdaaecfacf',
    //     dueDate: '21/07/24'
    // }
];

displayItems();

function addTodo(){
    let inputElement = document.querySelector('#todo-input');
    
    let dateElement = document.querySelector('#todo-date');

    let todoItem = inputElement.value;
    let todoDate = dateElement.value;
    todoList.push({item: todoItem, dueDate: todoDate});
    inputElement.value = '';
    dateElement.value = '';

    displayItems();
}

function displayItems(){
    let containerElement = document.querySelector('.todo-container');

    // let newHtml = '';
    let newHtml = '';

    for(let i=0; i<todoList.length; i++){

        let item = todoList[i].item;
        let todoDate = todoList[i].dueDate;
        //let {item, todoDate} = todoList[i];
        
        newHtml += `
        <span>${item}</span>
        <span>${todoDate}</span>
        <button class="btn-delete" onclick="todoList.splice(${i}, 1);
        displayItems();">Delete</button>
        `;
    }
    containerElement.innerHTML = newHtml;
}