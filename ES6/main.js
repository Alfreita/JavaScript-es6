class List{
    constructor(){
        this.data= [];

    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class ToDoList extends List{
    constructor(){
        super();
        this.usuario = 'victor';
    }
   
    mostraUsuario(){
        console.log(this.usuario);
    }
}

const MinhaLista = new ToDoList();

document.getElementById('novoTodo').onclick = function(){
    MinhaLista.add('ebebbee todo');
}

MinhaLista.mostraUsuario();