var endereco ={
    rua :"rua dos pinheiros",
    numero :"1293",
    bairro : "centro",
    cidade:"São Paulo",
    uf:"Sp" 
}

function exibeMesagem (endereco){
    return ("o usuario mora em "+endereco.cidade+ "/"+endereco.uf+" no bairro "+endereco.bairro+ " na "
    + endereco.rua+" com numero "+endereco.numero);
}

console .log(exibeMesagem(endereco));