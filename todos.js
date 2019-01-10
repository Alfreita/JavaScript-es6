var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var inputButton = document.querySelector('#app button');

var todos = [
    'Fazer cafe',
    'Estudar javaScript',
    'Acessar a comunidade da RocketSeat'
];

function renderTodos() {
    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);
        todoElement.appendChild(todoText);
        listElement.appendChild(todoElement);
    }
}

renderTodos();