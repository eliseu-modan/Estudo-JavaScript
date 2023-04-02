const peso1 = 1.2
const peso2= Number('2.4')

console.log(peso1,peso2)

console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 1.58752
const avaliacao2 = 5.845451

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 +peso2)

console.log(media.toFixed(2)) //casas decimais
console.log(media.toString(2))