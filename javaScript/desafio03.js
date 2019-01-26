function checaIdade(idade){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            return idade >= 18 ? resolve : reject();
        },2000)
    });
}



checaIdade(15)
    .then(function(){
        console.log('maior que 18');
    })
    .then(function(){
        console.log('menor que 18');
    });