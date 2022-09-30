
const form = document.getElementById("form");
let nome = document.getElementById('nome');
let senha=document.getElementById('senha');
let senhaConfirma=document.getElementById('confirmarSenha');
let email=document.getElementById('email');
let numero=document.getElementById('telefone');
let endereco=document.getElementById('endereco');
let radio1=document.getElementById('masculino');
let radio2=document.getElementById('feminino');
let radio3=document.getElementById('outros');
let escolha=document.getElementById('escolha');
let select1=document.getElementById('contatoEmail');
let select2=document.getElementById('contatoTelefone');
let select=document.getElementById('select');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    validarNome();
});


function validarNome() {
    let valorCampoName = nome.value;
    let valorSenha=senha.value;
    let valorSenhaConfirmar=confirmarSenha.value;
    let valorEmail=email.value;
    let valorNumero=telefone.value;
    let valorEndreco=endereco.value;

    if (valorCampoName === "") {
        erro(nome)

    } else {

        safe(nome);
    }
    let total=8;

    if(valorSenha==="" ){
        erroSenha(senha);
    }else{
        safe(senha);
    }

    if(valorSenhaConfirmar!=valorSenha || valorSenhaConfirmar===""){
        erroSenhaConfirmar(confirmarSenha);
    }else{
        safe(confirmarSenha);
    }

   
    var rest=false;
    
    if(valorEmail===""){
        erroEmail(email);
        
    }else{
        rest = validarEmail(valorEmail);

        if(rest==true){
        safe(email);
         
          rest=false;

        }else{
            erroEmail(email);
    
        }
       
    }
    
    if(valorNumero===""){
        
        erroNumero(telefone);
    }else{
        safe(telefone);
    }

   
    //alert(endereco);
    if(valorEndreco===""){
        erroNumero(endereco);
    }else{

        safe(endereco);
    }

    if(radio1.checked==false && radio2.checked==false && radio3.checked==false ){
      erroRadio(escolha);
    }else{
        safe(escolha);
    }
    if(select1.checked==false && select2.checked==false){
        erroselect(select);
    }else{
safe(select);
    }

}

//CAMPOS INVALIDOS///////////////////////////////////////////////////////////////

function erroselect(input) {
    const control = input.parentElement;
    const small = control.querySelector('small');

    small.innerText = "Escolha uma forma de contato";
    control.className = "classErroName";
}
function erroRadio(input) {
    const control = input.parentElement;
    const small = control.querySelector('small');

    small.innerText = "selecione um gênero";
    control.className = "classErroName";
}

function erro(input) {
    const control = input.parentElement;
    const small = control.querySelector('small');

    small.innerText = "Informe um nome";
    control.className = "classErroName";
}

function erroSenha(input){
    const control = input.parentElement;
    const small = control.querySelector('small');

    small.innerText = "Informe uma Senha";
    control.className = "classErroName";
}

function erroSenha(input){
    const control = input.parentElement;
    const small = control.querySelector('small');
    
    small.innerText = "Informe uma Senha";
    control.className = "classErroName";
}

function erroSenhaConfirmar(input){
    const control = input.parentElement;
    const small = control.querySelector('small');
    
    small.innerText = "As senhas tem que ser igual";
    control.className = "classErroName";
}


function erroEmail(input){
    const control = input.parentElement;
    const small = control.querySelector('small');
    
    small.innerText = "Insira um e-mail válido";
    control.className = "classErroName";
}

function erroNumero(telefone){

    const control = telefone.parentElement;
    const small = control.querySelector('small');
    
    small.innerText = "Insira um numero";
    control.className = "classErroName";
}

function erroNumero(endereco){

    const control = endereco.parentElement;
    const small = control.querySelector('small');
    
    small.innerText = "preencha o endereço";
    control.className = "classErroNameEndereco";

}

//CAMPOS VALIDOS///////////////////////////////////////////////////////////////////

function safe(input) {
    const control = input.parentElement;
    const small = control.querySelector('small');

    small.innerText = "";
    control.className = "classSafe";
}

function validarEmail(input){
    let re = /\S+@\S+\.\S+/;
    return re.test(input);
  };
