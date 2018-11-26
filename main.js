class List {
    constructor(){
        this.data = [];
    }
    add(data){
        this.data.push(data);
        console.log(this.data);
    }
}

class TodoList extends List{
   constructor(){
       super();
       this.usuario = 'Victor';
   }
   mostaUsuario(){
       console.log(this.usuario);
   }
}

var MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function (){
    MinhaLista.add('Novo todo');
}
MinhaLista.mostaUsuario();


const arr = [1,3,4,5,8,9];
const newArr = arr.map(function(item, index){
     return item + index;
});
console.log(newArr);

const sum = arr.reduce(function(total,next){
    return total + next;
});
console.log(sum);

const filter = arr.filter(function(item){
    return item % 2 ===0 ;
});
console.log(filter);

const find = arr.find(function(item){
    return item ===2 ;
});
console.log(find);