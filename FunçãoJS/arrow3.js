    let comparaComThis = function(param){
        console.log(this === param)
    }
     // this é extritamente igual ao global com function 
    comparaComThis(global)

     // objeto associado com o bind é extritamente igual ao this 
    const obj ={}
    comparaComThis = comparaComThis.bind(obj)
    comparaComThis(global)
    comparaComThis(obj)

      //funções arrow global não é extritamente igual ao this pelo modulo do node 
   let comparaComThisArrow = param =>console.log(this === param)
   comparaComThisArrow(global)
   comparaComThisArrow(module.exports)