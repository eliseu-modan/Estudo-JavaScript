
    /*EM UMA CLINICA MÉDICA EU PRECISO CADASTRAR USUARIOS (PACIENTES)
    COMO NOME IDADE SEXO CIDADE SOMAR PACIENTES DE ACORDO COM CADA TURNO  */

function exibirpacientes () {

  
  let nomePaciente ;
  let idadePaciente ;
  let sexoPacienteMasculino ;
  let sexoPacienteFeminino ;
  let cidadePaciente ;
  let numeroPaciente = 1 ;
  var turno1 = 1;
  var turno2 = 2; 
  
  

     nomePaciente = 'Elia aiore santos'
     idadePaciente = 68
     sexoPacienteFeminino='Feminino'
     cidadePaciente = 'jundiai-sp'
     numeroPaciente = numeroPaciente++;

  let paciente1 = ['nome ' + nomePaciente +  ' \nidade : ' + idadePaciente + ' \n Sexo Paciente : ' + sexoPacienteFeminino + '\n cidade do paciente :'
  + cidadePaciente + '  \nnumeroPaciente ' + numeroPaciente++ + '\nTurno de entrada : ' + turno1]
  
  nomePaciente = 'julia santos elios'
  idadePaciente = 24
  sexoPacienteFeminino='Feminino'
  cidadePaciente = 'jundiai-sp'
  numeroPaciente = numeroPaciente++;

let paciente2 = ['nome ' + nomePaciente +  ' \nidade : ' + idadePaciente + ' \n Sexo Paciente : ' + sexoPacienteFeminino + '\n cidade do paciente :'
+ cidadePaciente + ' \nnumero do Paciente ' + numeroPaciente++ + '\nTurno de entrada' + turno2]
  

 console.log('\nPaciente1 : '+  paciente1)
 console.log('\n Pacientes2:' + paciente2);
     

     
    }
    
    function qTurno (turno1 , turno2){
      if(turno1){
        console.log(turno1++)
      }
    }      
    

      function dadosMedicos(){
        
        
        let nomeMedico ;
        let idadeMedico;
        let funcaodoMedico;
        let credencialMedico;
        let turnodeTrabalho1 =1;
        let turnodeTrabalho2 = 2;
        let numerodeMedicos=1;
         let compareceu = true;
         let naocompareceu = false;
        
         
         nomeMedico ='Alan souza'
         idadeMedico = 32;
         funcaodoMedico = 'otalmologista'
         credencialMedico = 12345351;
         turnodeTrabalho = 1;
    
         
         
         let medico1 = ['nome do médico :' + nomeMedico + '\n idade do médico :' + idadeMedico + '\n função do médico :' + funcaodoMedico
      + '\n Credencial do médico :' + credencialMedico + '\n turno de trabalho : ' + turnodeTrabalho1 + '\nnumero de medicos'+ numerodeMedicos++ + '\n\ncomparecimento:' + compareceu]
         
      
      let medico2 = ['nome do médico :' + nomeMedico + '\n idade do médico :' + idadeMedico + '\n função do médico :' + funcaodoMedico
      + '\n Credencial do médico :' + credencialMedico + '\n turno de trabalho : ' + turnodeTrabalho2 + '\nnumero de medicos'+ numerodeMedicos++ + '\n\ncomparecimento' + naocompareceu]
      console.log('medicos ' + medico1 + '\n\n'+ medico2);
      
      
      
      
      
      
    } 
       function comparecer(compareceu , naocompareceu){

       
    if(compareceu){
       console.log('medico comparecido ')
    }else  if(naocompareceu){
         console.log('medico não comparecido')
    }

  }

      
    exibirpacientes();
    qTurno();
    dadosMedicos();
    comparecer();
    