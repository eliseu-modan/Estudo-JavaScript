const notas = [4.5,8.6,4.3,8.9,1.5,7.1]

//sem calback 
const notasBaixas1 = []
for(let i in notas){
    if(notas[i] < 7 ){

        notasBaixas1.push(notas[i])
    }
}
console.log(`Notas Baixas do Array  :${notasBaixas1}`)

//com calback 
// quando tem uma logica de condição e essa condição é realizada por uma função 

const notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)

const notasMenorque7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorque7)
console.log(notasBaixas3)