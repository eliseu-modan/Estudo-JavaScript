const pessoa = {
    saudacao : "Bom dia ",
    falar(){
        console.log("ola",this.saudacao)
    }
}

pessoa.falar()

const falar = pessoa.falar

falar()

const pessoaFalar = pessoa.falar.bind(pessoa)
pessoaFalar()