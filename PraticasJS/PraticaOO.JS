//objeto é uma coleção de daods que contem atributos e metodos 

const cliente = new Object
cliente['Cliente 1'] = 
cliente.nome = 'Elise Modanesi Junior'
cliente.idade = 25
cliente.sexo = 'Masculino'
cliente.CPF = '488.080.498-33'

console.log(cliente)

const cliente2 = {
     
    nome: 'Eliseu Modanesi Junior',
    idade:25,
    sexo:"Masculino",
    cpf : "488.080.498-33"
}

console.log('cliente 2 :' , cliente2)

const cliente3 = {}
cliente3.nome = "Eliseu modanesi junior"
cliente3.idade = 25
cliente3.sexo= "masculino"
cliente3.cpf = '488.080.498-33'

console.log(cliente3)


//funcoes construtoras

function serviços (){
    this.mecanico = () =>{
        console.log("Eu sou mecanico ")
    }
    this.soldador = () => {
        console.log("Eu sou soldador")
    }

    return this.soldador() , this.mecanico()

}
serviços()





















function nome(nome , sobrenome , fullname){
    this.nome = nome
    this.sobrenome = sobrenome
    this.fullname = fullname

    return nome ,sobrenome ,fullname
}
const n1 = new nome('First name : eliseu ','last name : modanesi','full name eliseu modanesi junior')
console.log(n1)

function calcularSalario(slrioAtual , pagamento , prcentagem){
    return {
        slrioAtual ,
        pagamento ,
        prcentagem,
        somar() {
          return  slrioAtual + pagamento / prcentagem
        }
    }
}

const cs1 = new calcularSalario(12 , 1700,4)
console.log(cs1)
console.log(cs1.somar())

const create = Object.create(null)
create.nome = 'ola'
console.log(create)

const fromJson = JSON.parse('{"info": "sou um json"}')
console.log(fromJson.info)

const pessoa = { nome:'joao'}
pessoa.nome = 'pedro'
console.log(pessoa)

Object.freeze(pessoa)

pessoa.nome = 'maria'
pessoa.end = 'rua abc'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

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

const pessoa1 = {
    idade: 2,
    nome:'Rebeca',
    peso:13
}
  // retorna os atributos
console.log(Object.keys(pessoa1))
  //retorna somene os valores
 console.log(Object.values(pessoa1))
   //retorn todos os objetos
  console.log(Object.entries(pessoa1))

  Object.entries(pessoa).forEach(([chave , valor])=> {
    console.log(`${chave}: ${valor}`)
  })










   //conceitos de herança acessar atributos pai e filho e object .protype

   // cadeia de prototipos (prototype chain)

Object.prototype.attr0 = '0'

const avo = {attr1 : 'A'}
const pai = {__proto__ : avo , attr2 : 'B' , attr3 :'3'}
const filho = {__proto__: pai , attr3 : 'C'}
console.log(filho.attr0,filho.attr1 , filho.attr2 , filho.attr3)

const carro = {
    velAtual:0,
    velMax: 200,
    acelerarMais(delta){
        if(this.velAtual + delta <= this.velMax){
            this.velAtual += delta
        }else {
            this.velAtual = this.velmax
        }
    },status(){
        return `${this.velAtual} KM/h de ${this.velMax} KM/h`
    }
}

const ferrari = {
    modelo : 'F40',
    velMax: 324 //shadowing

}
const volvo = {
    modelo: 'V40',
    status(){
       return `${this.modelo} : ${super.status()}`
    }
}

Object.setPrototypeOf(ferrari , carro)
Object.setPrototypeOf(volvo ,carro)

console.log(ferrari)
console.log(volvo)

volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())













const pai1 = { nome: 'Pedro' , corCabelo: 'preto'}

const filha1 = Object.create(pai1)
filha1.nome ="ANa"
console.log(filha1.corCabelo)

const filha2 = Object.create(pai1 , {
    nome:{value:"BIA",writable: false , enumerable:true}
})

console.log(filha2.nome)
filha2.nome = 'Carla'
console.log(`${filha2.nome} tem cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))

for(let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por herança: ${key}`)
}

function MeuObjeto() {}
console.log(MeuObjeto.prototype)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ === obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Anônimo'
MeuObjeto.prototype.falar = function() {
    console.log(`Bom dia! Meu nome é ${this.nome}!`)
}

obj1.falar()

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()

// Resumindo a loucura...
console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(MeuObjeto.__proto__ === Function.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)
console.log(Object.prototype.__proto__ === null)









console.log(typeof String)
console.log(typeof Array)
console.log(typeof Object)

String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Escola Cod3r'.reverse())

Array.prototype.first = function() {
    return this[0]
}

console.log([1, 2, 3, 4, 5].first())
console.log(['a', 'b', 'c'].first())

String.prototype.toString = function () {
    return 'Lascou tudo'
}

console.log('Escola Cod3r'.reverse())


function Aula(nome, videoID) {
    this.nome = nome
    this.videoID = videoID
}

const aula1 = new Aula('Bem Vindo', 123)
const aula2 = new Aula('Até Breve', 456)
console.log(aula1, aula2)

// simulando o new
function novo(f, ...params) {
    const obj = {}
    obj.__proto__ = f.prototype
    f.apply(obj, params)
    return obj
}

const aula3 = novo(Aula, 'Bem Vindo', 123)
const aula4 = novo(Aula, 'Até Breve', 456)
console.log(aula3, aula4)








// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preco: 1.99, tag: 'promoção'
})
console.log('Extensível:', Object.isExtensible(produto))

produto.nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tag
console.log(produto)

// Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log(pessoa)

// Object.freeze = selado + valores constantes




const obj = { a: 1, b: 2, c: 3, soma() { return a + b + c } }
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3 }"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3 }"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))