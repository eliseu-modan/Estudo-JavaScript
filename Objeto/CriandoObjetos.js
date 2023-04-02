// usando a notação literal

const obj1 = {}
console.log(obj1)

//object em js
console.log(typeof Object,typeof new Object)
const obj2 = new Object
console.log(obj2)

//funções construtoras

function produto(nome,preco,desc){
    this.nome = nome
    this.getPrecoComDesconto = () => {
    return preco * (1 - desc)
    }
}

const p1 = new produto('caneta',7.99, 0.45)
const p2 = new produto('notebook', 4.88,0.10)
console.log(p1.getPrecoComDesconto(),p2.getPrecoComDesconto())

console.log(p1)

//função factory

function criarFuncionario(nome,salarioBase,faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return (salarioBase / 30)*(30 - faltas)        
    }
}
}

const f1 = criarFuncionario('joao',7890,4)
const f2 = criarFuncionario('maria',11400,4)
console.log(f1.getSalario(),f2.getSalario())


//object.create

const filha = Object.create(null)
filha.nome = 'ana'
console.log(filha)

//uma função famosa que retorna objeto

const fromJson = JSON.parse('{"info": "sou um json"}')
console.log(fromJson.info)