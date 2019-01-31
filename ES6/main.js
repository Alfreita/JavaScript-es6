const usuario = {
    nome: 'victor',
    idade: 22,
    endereco :{
        cidade: 'campinas',
        estado: 'SP',
    },
};

const {nome,idade,endereco:{cidade}} = usuario;
console.log(nome,idade,cidade);

function mostraNome({nome,idade}) {
    console.log(nome,idade);   
}

mostraNome(usuario);