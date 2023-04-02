const [a,b,c,d] = [3,5,1,23]

//formas de Trabalhar os simbolos matematicos aritméticos

const soma = a + b + c + d 
console.log(soma)
const subtracao = d - b
const multiplicacao = a * b
const divisao = a / d
const modulo = a % 2

console.log(soma , subtracao,multiplicacao,divisao,modulo)

// Trabalhando com numneros 

const [horario1 , horario2 , horario3 ,horario4] = [8.00 , 9.00 , 10.00 ,24.00]

const ChegadMaximadestino = horario1 + horario2 + horario3 + horario4
console.log(ChegadMaximadestino)

const chegadamédia = ChegadMaximadestino / 2
console.log(chegadamédia)

const chegadaminima = chegadamédia -horario1 - horario4
console.log(chegadaminima)

const chegadamultiplicada = ChegadMaximadestino - chegadaminima * chegadamédia
console.log(chegadamultiplicada)

console.log(typeof([horario1 , horario2]))

