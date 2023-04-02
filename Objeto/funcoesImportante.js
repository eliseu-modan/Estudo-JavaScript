const pessoa = {
    idade: 2,
    nome:'Rebeca',
    peso:13
}
  // retorna os atributos
console.log(Object.keys(pessoa))
  //retorna somene os valores
 console.log(Object.values(pessoa))
   //retorn todos os objetos
  console.log(Object.entries(pessoa))

  Object.entries(pessoa).forEach(([chave , valor])=> {
    console.log(`${chave}: ${valor}`)
  })

  Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)

Object.freeze(obj)
obj.c = 1234
console.log(obj)
