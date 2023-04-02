// //selecionando 1 elemento
// document.getElementById('Dom').classList.add('cor1')


// //selecionando varios elementos com div

// const divs = document.getElementsByTagName('div')
// Array.from(divs).forEach(e => e.classList.remove('cor2'))
// //formna diferente de armazenar array 
// const divArrays = [...divs]
// divArrays.forEach(e => e.classList.add('cor1'))
 

//  //selecionando elementos com classe 
// const ultimosElementos = document.getElementsByClassName('ultimo')
// for(let e of ultimosElementos){
//     e.classList.add('cor2')
// }

//trabalhar com as funções de array em um array de elementos é preciso transformar o htmlcollections 
//para um array

//selecionando elementos com jquery

//espera seletor

document.querySelector('#Dom').classList.add('cor2')

const selecionar = seletor =>
document.querySelectorAll(seletor).forEach(e => e.classList.add('cor2'))

selecionar('div')

const deselecionar = seletor =>
document.querySelectorAll(seletor).forEach(e => e.classList.remove('cor2'))

deselecionar('*')

selecionar('.ultimo')

deselecionar('.ultimo')

selecionar(':not(#Dom')
deselecionar('#dom2')

selecionar(':nth-child(1)')
deselecionar('*')

selecionar('[selec]')

function log(){
    console.log(this)
}

HTMLAllCollection.prototype.log = log
HTMLElement.prototype.log = log
NodeList.prototype.log = log
Node.prototype.log = log    

const lista = document.querySelector('div ul')
lista.parentNode.log()
lista.childNodes.log()

const primeiro = lista.firstChild
primeiro.log()
primeiro.nextSibling.log()

const ultimo = lista.lastChild
ultimo.log()
ultimo.previousSibling.log()
lista.firstElementChild.log()
lista.parentNode.previousElementSibling.log()

document.querySelectorAll('div ul li').log()

const body = document.querySelector('body')

        const div1 = document.createElement('div')
        div1.classList.add('cor1')
        div1.innerHTML = 'Primeiro'

        const div2 = document.createElement('div')
        div2.setAttribute('selec', 'cor2')
        div2.innerHTML = 'Segundo'

        const p = document.createElement('p')
        p.innerHTML = 'Terceiro'
        const div3 = document.createElement('div')
        div3.appendChild(p)

        body.appendChild(div1)
        body.appendChild(div2)
        body.appendChild(div3)

        const texto = document.createTextNode('Antes...')
        div3.insertBefore(texto, div3.childNodes[0])

        const div4 = div3.cloneNode(true)
        body.appendChild(div4)
        body.removeChild(div3)

        const div = document.querySelector('div')
        div.innerHTML = 'Texto Alterado'
        // div.outerHTML = 'Texto Alterado'
        div.insertAdjacentHTML('beforebegin', '<p>Antes Início</p>')
        div.insertAdjacentHTML('afterbegin', '<p>Depois Início</p>')
        div.insertAdjacentHTML('beforeend', '<p>Antes Fim</p>')
        div.insertAdjacentHTML('afterend', '<p>Depois Fim</p>')

        // somente texto (sem tags)
        console.log(div.innerText)

        //padaro observer 

        //interceptar link

        function Navegarem5s(e){
            e.preventDefault()
            console.log('saindo em 5s')
            setTimeout(() =>{
                const link = e.target
                window.location.href = link.href
            },5000)
        }


 