const pessoa = {
    nome:'ana',
    idade:23,
    endereco:{
        logradouro:'rua abc',
        numero:1000
    }
}

const {nome ,idade} = pessoa
console.log(nome,idade)

const {nome : n  ,idade : i} = pessoa

console.log(n,i)

