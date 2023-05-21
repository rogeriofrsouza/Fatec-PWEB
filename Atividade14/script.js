/* 
  Criar uma função validar no evento onsubmit do Form.
  -Nome não pode ter menos que 10 caracteres.
  -Email deve ter os caracteres @ e .
  -Comentário deve ter no mínimo 20 caracteres.

  -Pesquisa (obrigatório). 
  Se não:  Retornar : "Que bom que você voltou a visitar esta página!", caso
  contrário: "Volte sempre à está página!". Utilize mesmo atributo name nos radios.
  -Utilizar document.nomeform.elements[] na função – pelo menos em algum caso
*/
let nome = document.getElementById("nome");
let email = document.getElementById("email");
let comentario = document.getElementById("comentario");
let sim = document.getElementById("sim");

function validar() {
  if (nome.value.length < 10) {
    console.log("Nome não pode ter menos que 10 caracteres");
    nome.focus();
  }

  if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1) {
    console.log("Email deve ter os caracteres @ e .");
    email.focus();
  }

  if (comentario.value.length < 20) {
    console.log("Comentário deve ter no mínimo 20 caracteres");
    comentario.focus();
  }

  if (sim.checked) {
    console.log("Volte sempre à está página!");
  } else {
    console.log("Que bom que você voltou a visitar esta página!");
  }
}

function limpar() {
  document.forms[0].reset();
  nome.focus();
}
