const notas = [6.2,5.2,8.2,6.6]

for(i in notas ){
    console.log(i,notas[i])
}

const pessoa =  {
   nome :'ana ',
   sobrenome:'silva',
   idade: 25,
   peso:75
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}
