const pessoa = { nome:'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'maria'
pessoa.end = 'rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)


const pessoaConstante = Object.freeze({ nome: 'Joao' })
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)