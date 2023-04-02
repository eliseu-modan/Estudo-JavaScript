//literal

function dadosDoBanco(){
    let nome= "eliseu";
    let idade = "\n25";
   return nome, idade
}
//armazenar em array

const dadosDoBanco2 = [dadosDoBanco(), "teste function"]
console.log(dadosDoBanco2[0])

//armazenar em atributo de um objeto

const dadosdoCliente = {}

dadosdoCliente.nome = function(){return "eliseu"}

console.log(dadosdoCliente.nome())

 //gerando valores padrao
function padrao(a , b ,c){
    a = a || 1
    b = b || 1
    c = c || 1
    return a + b + c
}
console.log(padrao(1,2,1))

//ecmas15

function somar(a = 1,b=2 ,c=3) {
    console.log(a+b+c)
}
somar();

function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i]
    }
    return soma
}

console.log(soma(1.1,5.6,8.2,"\nteste"))

// function carro(){
//     this.roda = 4

//     setInterval(() =>{
//         this.roda++
//      console.log(this.roda)
//           }
// )}

// carro()

const fabricantes = ["BMW","AUDI","CHEVOLET"]

function calback (nome , indice){
    console.log(`${indice +1}.${nome} `)
}

fabricantes.forEach(calback)

let pessoa = nome =>{
    console.log(`${nome} "oii`)
}
pessoa(nome = "oi")


 // FUNCOES TIPOS DE DECLARAÇÕES
function getPreco(imposto = 0, moeda = '$'){
    return `${moeda}  ${this.preco *(1 - this.desc) * (1 + imposto)}`
}

const produto ={
    nome : 'Notebook',
    preco : 4587,
    desc: 0.12,
    getPreco
}

global.preco = 24
global.desc = 0.1
console.log(getPreco())
console.log(produto.getPreco())

const carro = { preco: 49990, desc: 0.20 }

console.log(getPreco.call(carro))
console.log(getPreco.apply(carro))

console.log(getPreco.call(carro, 0.17, '$'))
console.log(getPreco.apply(global, [0.17, '$']))

function criarProduto(nome , preco){
    return {
        nome,
        preco,
        desconto:0.1
    }
}

console.log(criarProduto('notebook', 2199.48))
console.log(criarProduto('ipad',1554.54))



 // FUNCOES CONSTRUTORAS
function Carro(velocidadeMaxima = 200 , delta = 5){
    //atributo privado

    let velocidadeAtual = 0

    //metodo publico

    this.acelerar = function(){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        }else{
            velocidadeAtual = velocidadeMaxima
        }
    }
       //metodo publico

this.getVelocidadeAtual = function () {
    return velocidadeAtual
}

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeAtual())

const ferrari = new Carro(350 , 20)
ferrari.acelerar()
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getVelocidadeAtual())

console.log(typeof Carro)
console.log(typeof ferrari)

//IIFE -> IMMEDIATELY INVOKED FUNCTION EXPRESSION

(function (){
    console.log('sera executado na hora!')
    console.log('foge do escopo mais abrangente')
})()