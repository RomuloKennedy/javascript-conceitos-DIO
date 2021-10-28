/*

        Strings 

function validaNumero(num){
    if (!num) return "Envie um número válido!";
  
    return num;
}

console.log(validaNumero());

var a = 1;
let b = 2;

if(a === 1 ){
     a = 11;
    let b = 22;
    console.log(a);
    console.log(b);
    
}
console.log(a);
console.log(b);

let frase = "olá, tudo bem?";
console.log(frase.split(" "));
console.log(frase.split(""));

console.log(frase.startsWith("o"));
console.log(frase.endsWith("?"));
console.log(frase.replace(",","?")); 
*/

/*

        Inteiros

let frase="olá mundo";
let num = 100;
console.log(num%2);// 

let num2 = 1.3;
console.log(Math.ceil(num2));// arredonda o número pra cima.
console.log(Math.floor(num2));// arredonda o número pra baixo.

let numS= num2.toString();//converte para string.
console.log(numS);
let fraseU= frase.toUpperCase();//converte todo o texto para maiusculo.
console.log(fraseU);
*/

/*

        boleano

let validation = 3 === 3;
console.log(validation);
validation = 1 === 0;
console.log(validation);
*/

/*

        array

let array = [];
console.log(array);
array.push("teste");//adiciona o elemento no final do array.
array.push(2);
array.push("olá mundo");
array.pop();//retira o elemento do final do array.
array.push("olá mundo");
array.shift();//retira o primeiro elemento do array.
array.unshift("eita");//adiciona o elemento no começo da lista
console.log(array.includes("eita"));//vai retornar verdadeiro ou falso para caso haja ou não o parametro passado no array.
console.log(array.every(item => item === "eita"));//vai retornar verdadeiro ou falso caso todos os elementos seja igual ao passado no parametro.
console.log(array.some(item => item === "eita"));//vai retornar verdadeiro ou falso caso tenha algum elemento igual o passado pelo parametro.

console.log(array);
console.log(array.reverse());//inverte o array.
*/
/*

        objeto, ou comumente conhecido como dicionário.

let objeto = {};
objeto.name = "romulo";//declarando uma chave e valor do objeto.
objeto.age = "20";//declarando uma segunda chave e valor do objeto.
console.log(objeto);
console.log(Object.values(objeto));//retorna os valores do objeto.
console.log(Object.keys(objeto));//retorna as chaves do objeto.

let person = {
    name:"romulo",
    age:20,
    adress:"Natal"
}
console.log(person);
console.log(person.name);//serve para acessar o valor da chave no objeto.
console.log(person["name"]);//serve para acessar do mesmo jeito do exemplo anterior, apenas com uma sintaxe diferente.
person["adress"] = "rua 2";// serve para reatribuir um valor a chave do objeto, pode ser declarao também dessa forma > person.adress = "rua 2";
person["city"] = "Natal";
console.log(person);
*/

/*

        exercicio 1, verificando se a string é um palindromo.

let string="ana";
    console.log(string.split("").reverse().join());
if( string.split("").reverse().join() === string.split("").join()  ){
    console.log(true);
}else{
    console.log(false);
}

let array = ["ana", "joão", "pedro"];
console.log(array.join(" "));

*/



/*

         Atividade 2 solução 1

function substituirArray(array){
        let array2 = [];
        if(array){
        for(i = 0; i < array.length ; i++ ){
        
                if(array[i] %2 === 0 ){
                        array2.push(0)
                }else{
                        array2.push(array[i])
                }
        }
        }
        if(array == null || array == undefined || array == ""){
                return "-1";
        }else{
        return array2;
        }
}
console.log(substituirArray([0,1,2,3,4,5,6,7,8,9,10]));
*/
/*

        Atividade 2 Solução 2 (melhorada);

function substituirArray(array){
        if(array != null && array != undefined && array != ""){
                console.log(`Resultado inicial:\n${array}`)
                for(i=0; i < array.length; i++){
                        if(array[i] === 0){
                                console.log("você já é zero, não será trocado!");
                        }
                        else if(array[i] % 2 === 0){
                                console.log(`O número ${array[i]} foi trocado por 0!`);
                                array[i] = 0;
                        }
                }
                return `Resultado final: \n${array}` ;
        }
        else{
                return "-1"
        }
}
console.log(substituirArray([0,1,2,3,4,5,6,7,8,9,10]));

*/
/*

        //Função anomima
        //Função autoinvocavel

//função dentro de uma variavel ->

const soma =function(a,b){
        return a+b;
}
console.log(soma(32,32));

//função autoinvocavel ->

(
        function(a,b){
        var teste = a+b;
        return teste;
}
)(1,2);

//função autoinvocavel dentro de uma variavel ->

const soma2 = (
        function(a,b){
        var teste = a+b;
        return teste;
}
)(1,2);

console.log(soma2);
*/
/*

         //Função callbacks (uma função dentro de outra);

const calc=function(num){
        if(num%2==0){
                return "o número é par!";
        }else{
                return "o número é impar!";
        }
}
const numero=function(a,b){
        return a+b;
}
console.log(calc(numero(3,4)));

*/
/*
        //Objeto " arguments "

    function findMax(){
        let max=-Infinity;// o -infinity é igual ao maior número infinito negativo. não utilizei apenas deixei declarado para exemplo

        for(i=0; i<arguments.length;i++){
                console.log(arguments[i]);
        }
}       
console.log(findMax(1,2,3,4,5));
*/

/*
         //Spread = uma forma de lidar separadamente com os elementos do array.
function sum(w,x,y,z){
        return w+x+y+z;
}
const numeros=[1,2,3,4];
console.log(sum(...numeros));//botar os 3 pontos antes de um array torna cada elemento dele independente.

const NUMBERS = [1,2,3];
console.log(...NUMBERS);

         //Rest = combina os argumentos de uma função em um array.

function confere(...args){//os 3 pontos aqui vai transformar os parametros passados em array.
        return args;
}
console.log(confere(1,2,3,4,5));
*/

/*
         //Object Destructuring
const user={
        id : 1,
        displayName:"rk",
        fullName:{
                firstName:"Rômulo",
                lastName:"Medeiros"
        }
};

function ler({id}){
        return `${id}`;
}
function lerNome({fullName:{firstName:first,lastName:last } }){
        return `${first} ${last}`;
}
console.log(ler(user));
console.log(lerNome(user));

*/
/*
         //Switch case 

const X = 0;

        switch(X){
                case 1:
                        console.log("olá mundo"); break
                case 2:
                        console.log("Hello World"); break
                default:
                        console.log("Good Bye Mundo"); break
        }

function getId(id){
        switch(id){

        case 1: 
        return "cão";
        
        case 2:
        return "gato";
        
        case 3:
        return "leão";
        
        default:
        return "peixe";
        }
}
console.log(getId(3));
*/

/*
         // For each para objeto (dicionários);
function forInExemplo(obj){
        for(prop in obj){
                console.log(prop); // Retornara a chave do objeto
                console.log(obj[prop]);// Retornara o valor do objeto
        }
        return true;
}

let objeto = {
        name:"Rômulo",
        age:20,
        city:"Natal"
};
console.log(forInExemplo(objeto));

         // For each para arrays ou strings;

function forOfExemplo(array){
        for(valor of array){
                console.log(valor)
        }
        return true;
}
var array = [1,2,3,4,5];
console.log(forOfExemplo(array));
console.log(forOfExemplo("Olá Mundo"));
*/

/*
         //This

const PESSOA = {
        firstName: "Rômulo",
        lastName: "Medeiros",
        age : 20,
        city: "Natal",
        fullName : function(){
                return this.firstName + " " + this.lastName
        }
}        

console.log(PESSOA.fullName());

        //CALL
const ANIMAL = {
        firstName : "Murphy"
}
function getName(){
        return this.firstName;
}
console.log(getName.call(ANIMAL));// o call aqui vai direcionar para quem o nosso this está se referindo.

const MYOBJ = {
        num1:1,
        num2:2
}
function soma(a,b){
        return (this.num1+this.num2+a+b);
}
console.log(soma.call(MYOBJ,3,4));
         //APPLY , o APPLY é igual ao call porém na hora de passar os argumentos da função se passa dentro de um array.
console.log(soma.apply(MYOBJ,[4,5]));

         //Bind , vai Clonar a função transformando a variável na função exemplo ->

function retornaNome(){
        return this.nome;
}

const DADOS ={
        nome:"Rômulo",
        age:20,
        city:"Natal"
};
const VAR = retornaNome.bind(DADOS);

console.log(VAR());
*/

/*
         //ARROW FUNCTION
         //obs arrow functions: o metódo this usado anteriormente não funciona na AF, não existe o objeto arguments na AF, o construtor não funciona na AF.

const helloworld = (a,b) => {
        return a+b;
}
const helloworld2 = (a,b) => a+b; // caso a função seja muito pequena e tenha somente uma linha não precisa ter um return

console.log(helloworld(1,2));
console.log(helloworld2(2,3));
*/

/*
//Atividade 1 opção 1
function funcao(array,media){
        let aprovados =[];
        for(i=0; i < array.length; i++){
                if(array[i]["nota"] >= media){
                        aprovados.push(array[i]);
                }
        }
        return aprovados;
}

//Atividade 1 opção 2
function funcao2(array,media){
        let aprovados =[];
        for(i=0; i < array.length; i++){
                
                const {nota} = array[i];//usando object destructuring

                if(nota >= media){
                       aprovados.push(array[i]);
                }
        }
        return aprovados;
}
var array = [{
        nome:"Rômulo",
        nota:7,
        turma:"A"
},{
        nome:"Lucas",
        nota:8,
        turma:"A"
},{
        nome:"Rogerio",
        nota:6,
        turma:"A"
}];
console.log(funcao(array,7));
console.log(funcao2(array,7))


//Atividade 2

function calcularIdade(anos){
        return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}
const obj1 = {
        nome:"Rômulo",
        idade:20
}
const obj2 ={
        nome:"Lucas",
        idade:21
}

console.log(calcularIdade.call(obj1,2));
console.log(calcularIdade.apply(obj2,[5]));
*/

/*
// map são uma coleção de arrays no formato chave, valor. pode ser iterado por um loop of.
const myMap = new Map();

myMap.set('apple','fruit');

console.log(myMap);

for(map of myMap){
        console.log(map);
}

//set são estruturas que armazenam apenas valores únicos.

const set = new Set();

set.add(1);
set.add(2);
set.add(3);

console.log(set.has(2));// vai retornar se há o elemento na estrutura
set.delete(2);
console.log(set.has(2));
console.log(set);
*/

//atividade 1 MAP.

function getAdmins(map){
        
        const admins =[];
        for([key,valor] of map){
                if(valor === "admin"){
                        admins.push({key,valor});
                }
        }
        return admins;
}
const usuarios = new Map();

usuarios.set('luiz','admin');
usuarios.set('lucas','admin');
usuarios.set('luiza','user');
usuarios.set('luan','admin');

console.log(getAdmins(usuarios));

//atividade 2 SET.

function setArray(array){
        const nArray = new Set(array);
        return [...nArray];
}
const array = [30,30,40,5,223,2049,3034,5]

console.log(setArray(array));