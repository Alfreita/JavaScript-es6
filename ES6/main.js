//*Aqui é como percorremos o array*//
const arr=[1,2,3,4,5,6];

const newArr = arr.map(function(item, index){
    return item + index;
});
console.log(newArr);

//*Aqui faz a soma dos valores do array
const sum = arr.reduce(function(total,next){
    return total+next;
});
console.log(sum);

//*Aqui faz o filtro do array
const filter = arr.filter(function(item){
    return item %  2 === 0;
});
console.log(filter);

//*Aqui faz a busca por um item do array
const find = arr.find(function(item){
    return item === 4;
});
console.log(find);