// coleção dinamica de pares chave / valor

//instanciando objeto
const produto = new Object
produto.nome = 'cadeira'
produto['marca do Produto'] = 'Sony'
produto.preco = 220

console.log(produto)

delete produto.preco
delete produto['marca do Produto']
console.log(produto)

const carro = {
    modelo : 'A4',
    valor: 89000,
    proprietario:{
        nome:'Raul',
        idade:56,
        endereco: {
             logradouro :'RUA ABC',
             numero:123
        }
    },
         condutores:[{
            nome:'junior',
            idade: 19
         },{
            nome:'ANA',
            idade:19

         }],
         calcularValorSeguro:function(){

         }
}

carro.proprietario.endereco.numero = 1000
carro['proprietario']['endereco']['logradouro'] = 'av gigante'

console.log(carro)

delete carro.proprietario.endereco
delete carro.calcularValorSeguro
console.log(carro)
console.log(carro.condutores)
console.log(carro.condutores.length)