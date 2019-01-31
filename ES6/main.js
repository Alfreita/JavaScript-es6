//REST
/**
 * Serve para pegar o resto das propriedades
 */


const usuario = {
    nome: 'victor',
    idade: 22,
    endereco :{
        cidade: 'campinas',
        estado: 'SP',
    },
};

const {nome, ...resto} = usuario;

console.log(nome);
console.log(resto);

//SPREAD

const usuario2 = {...usuario , nome:'João'};
console.log(usuario2);

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1, ...arr2];

console.log(arr3);