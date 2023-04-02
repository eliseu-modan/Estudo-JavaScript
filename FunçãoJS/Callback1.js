const fabricantes = ["BMW","AUDI","CHEVOLET"]

function calback (nome , indice){
    console.log(`${indice +1}.${nome} `)
}

fabricantes.forEach(calback)
fabricantes.forEach(fabricante => console.log(fabricante))
