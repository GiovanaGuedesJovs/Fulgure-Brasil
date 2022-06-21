function toggleMenu() {
  var menu = document.getElementById("menu-bar");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}

function validarCampos(event) {
  event.preventDefault();
  var nome = document.forms["cadastro"]["nome"];
  var email = document.forms["cadastro"]["email"];
  var senha = document.forms["cadastro"]["senha"];
  var termos = document.forms["cadastro"]["termos"];
  var mensagem = document.getElementById("mensagem");


  if (nome.value == "") {
    nome.classList.add("erro");
    mensagem.innerHTML = "Preencha o nome.";
    return false;
  } else if (email.value == "") {
    email.classList.add("erro");
    mensagem.innerHTML = "Preencha o email.";
    return false;
  } else if (senha.value == "") {
    senha.classList.add("erro");
    mensagem.innerHTML = "A senha deve ser preenchida.";
    return false;
  } else if (termos.checked != true) {
    mensagem.innerHTML = "É necessário aceitar os termos de uso para prosseguir.";
    return false;
  } else {
    nome.classList.remove("erro");
    email.classList.remove("erro");
    senha.classList.remove("erro");
  }
  window.location.href = "./questao.html";
}