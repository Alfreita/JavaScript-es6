"use strict";

//*Aqui é como percorremos o array*//
var arr = [1, 2, 3, 4, 5, 6];
var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); //*Aqui faz a soma dos valores do array

var sum = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum); //*Aqui faz o filtro do array

var filter = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter); //*Aqui faz a busca por um item do array

var find = arr.find(function (item) {
  return item === 4;
});
console.log(find);
/************************************************************************** 
 * 
 * As mesmas funções acima so que com arrow function
 * 
***************************************************************************/

var newArr1 = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr1);
var sum1 = arr.reduce(function (total, next) {
  return total + next;
});
console.log(sum1);
var filter1 = arr.filter(function (item) {
  return item % 2 === 0;
});
console.log(filter1);
var find1 = arr.find(function (item) {
  return item === 4;
});
console.log(find1);
var mult = arr.map(function (item) {
  return item * 2;
});
console.log(mult);

var teste = function teste() {
  return {
    nome: "victor"
  };
};

console.log(teste);
