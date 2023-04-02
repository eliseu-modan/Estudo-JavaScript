const pessoa =  {
    nome:'eliseu',
    sobrenome:'modanesi',
    idade:25,
    peso:70
}

for(let Patributo in pessoa){
    console.log(`${Patributo} = ${pessoa[Patributo]} `)
}

const idade = [1,2,3,4,5,6,7,8,9,20,25]

for(Cidade in idade){
    if(Cidade == 7){
        break
    }
    console.log(`Usando break = ${Cidade}`)
}

for(Cidade in idade){
    if(Cidade == 7){
        continue
    }
    console.log(`usando continue =${Cidade} `)
}
 
 percorrer = [4.5,4.8,8.6]
for(let i = 0; i < percorrer.length; i++){
    console.log(`${percorrer[i]}`)
}

const imprimirResultado = function(nota){
    switch (Math.floor(nota)){
        case 10 :
        case 9:
            console.log('Quadro de Honra')
            break
            case 8: case 7:
                console.log('Aprovado')
                break
                case 6: case 5 : case 4:
                    console.log('Recuperação')
                    break
                    case 3: case 2 : case 1: case 0:
                        console.log('Reprovado')
                        break
                        default :
                        console.log('Numero Invalido')
    }
}

imprimirResultado(8)