const valores = [7.7, 8.9, 5.6,5.9]
//conjunto de atributos em uma varivel identificados pelo indice 
//Tomar cuidado com os indices identificar certo a quantidade
//adicionar mais valores ao indice 
//mostrar a quantidade de  posições dos valores 
// push adiciona valores e strings e funcoes misturados
// deletar valores do array através do indice

console.log(valores[0], valores[4])
valores[4] = 10

console.log(valores)
console.log(valores.length)

valores.push({id:3}, false,null,'teste')
console.log(valores)

console.log(valores.pop())
delete valores[0]
console.log(valores)

console.log(typeof valores)

const cliente = ['  Eliseu' ,  25 , 13211646 , 'masculino']

console.log(cliente[0])
cliente[0] = 'Junior'
console.log(cliente)

console.log(valores , cliente)