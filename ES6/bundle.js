"use strict";

var usuario = {
  nome: 'victor',
  idade: 22,
  endereco: {
    cidade: 'campinas',
    estado: 'SP'
  }
};
var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome, idade, cidade);

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade;
  console.log(nome, idade);
}

mostraNome(usuario);
