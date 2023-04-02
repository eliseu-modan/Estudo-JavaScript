const sequencia = {
    _valor:15,
    get valor  ()  {return this._valor++},

    set valor(valor){
        if(valor > this ._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor,sequencia.valor,sequencia.valor)
sequencia.valor = 10
console.log(sequencia.valor,sequencia.valor)
sequencia.valor=900
console.log(sequencia.valor,sequencia.valor)