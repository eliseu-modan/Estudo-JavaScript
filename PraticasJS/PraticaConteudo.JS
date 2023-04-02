console.log("Bem vindo ao sistema de banco ");
console.log("Vamos realizar seu cadastro");


function CadastrarCliente(){
for(var i = 0 ; i < 4 ; i++){
var cliente = [];


 

cliente[0] = {
    
    nome: 'Eliseu modanesi',
    idade: 25,
    endereço: 'Rua emygdio folgosi',
    Cpf : '488.458.256-45' ,
    RG:`131314531412-2`,
    cep:'154148151',
    contato : '11 998024852' ,
    Email : 'eliseuservice12@gmail.com'
  
}

    const dados = `
    dados do cliente 0 = 
    `
    
      
}

               console.log(cliente[0])
}

   
     function cadastrarConta(){
        
    console.log("cadastrar Uma Conta")

    var numeroDaConta ;
    var numeroDoCartao ;
    var senhaDeSeisDigitos ;
    var dadosDoUsuario ;
    var extratoDaConta;
    var saldoDaConta ;


    const dadosDaConta = {
        numeroDaConta: "192.258.45.65",
        numeroDoCartao: "458,587,586,58",
        senhaDeSeisDigitos:"744176",
      }
      

      
       console.log("\nnumero da Conta :"+dadosDaConta.numeroDaConta+"\nnumero do Cartão :"+dadosDaConta.numeroDoCartao+"\nSenha de Seis Digitos : "+ dadosDaConta.senhaDeSeisDigitos)
    }
      

CadastrarCliente()
    
 function extratoDoCliente(){
    
      var recebido = 450;
      var sair = 451;
      var saldo ;
      
        for(let i = 0 ; i< recebido ; i++){
          console.log("pix recebido")
             break
             
        }
      if(sair > recebido){
        console.log("\nsaldo negativo ")
      
      }

      saldo =  recebido - sair 
      console.log("Extrato o que entrou " , recebido)
      console.log("Extrato o que saiu",sair)
      console.log("saldo atual do cliente ",saldo)
       
 }

        
cadastrarConta();
extratoDoCliente();





