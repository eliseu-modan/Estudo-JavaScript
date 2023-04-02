//evento de calback no browser

//antes de executar uma ação voce tem uma função que é executado junto ou antes ou depois

document.getElementsByTagName('body')[0].onclick = function (e){
    console.log('o evento ocorreu')
}