//Closures é o escopo criado quando uma funcao é declarada
// esse escopo permite a função acessar e manipular variaveis externas a  função

//contexto lexico

const x = 'Global'

function fora(){
    const x ='Local'
    function dentro(){
        return x
    }
    return dentro
}

const minhafuncao = fora()
console.log(minhafuncao())