const notas = [1,2,3,4,5,6,7,8,9,10]

for(x in notas){
    if( x == 5){
        break
    }
    console.log(`notas = ${x} = ${notas[x]}`)
}

 for(x in notas){
    if(x == 5){
        continue
    }
    console.log(`${x} = ${notas[x]}`)
 }

