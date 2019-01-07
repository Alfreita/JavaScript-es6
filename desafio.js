
/* Desafio 01*/ 

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
//******************************************************************************************************************************* */
/* Desafio 2 */

function pares (x,y){
 
    for (var i =x; i<y; i++){
        if (i%2===0){
            console.log(i);
        } 
    }
}

pares(32,321);
/********************************************************************************************************************************** */
/* Desafio 3 */

function temHabilidade(skills){

    return skills.indexOf("JavaScript") !== -1; 
}

var skills= ["javaScript","ReactJS","ReactNativeJS"];
temHabilidade(skills);
/********************************************************************************************************************************** */
/* Desafio 4 */

function experiencia(anos){
    if (anos <=1)
        return ("Iniciante");
    else if (anos <=3)
        return ("Intermediario");
    else if (anos <=6)
        return ("avançado");
    else 
        return ("Jedi Master");
}

var anosDeExperiencia = 7;
experiencia(anosDeExperiencia);
/********************************************************************************************************************************* */
/* Desafio 5 */
function exibeHabilidade(usuarios){
    for (usuario of usuarios) {
        console.log(
          "O " +
            usuario.nome +
            " possui as habilidades: " +
            usuario.habilidades.join(", ")
        );
      }
}
var usuarios =[
{
    nome:"Diego",
    habilidades:["JavaScript","ReactJs","Redux"]
},
{
    nome:"Gabriel",
    habilidades:["VueJS","Ruby on Rails","Elixir"]
}
];

exibeHabilidade(usuarios);