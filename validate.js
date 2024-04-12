//Seu JavaScript de validação aqui
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoAssunto = document.getElementById("assunto");
const campoMensagem = document.getElementById("mensagem");

const expressions = {
  nome: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
  email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
  assunto: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
  mensagem: /^[a-zA-ZÀ-ÿ\s]{1,300}$/
}

campoNome.addEventListener("input", () => {
  var expression = /[a-zA-Z]/;
  

  if(!expression.test(campoNome.value)){
    event.preventDefault();
    return false
  }
})