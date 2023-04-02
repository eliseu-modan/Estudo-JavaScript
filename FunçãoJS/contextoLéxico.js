let valor = 'Global'

function minhaFuncao(){
    console.log(valor)
}

function exec(){
    valor = 'Local'
    minhaFuncao()
}
exec()