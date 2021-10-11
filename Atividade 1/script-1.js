/*
1) Criar página HTML e JS para que quando o usuário entrar na página:

a) Exibir na tela os nomes de 5 capitais da região Nordeste do Brasil em letras maiúsculas.
b) Criar função e usar o evento onload.
*/
function maisculo(){
  const cap = document.getElementsByTagName('li')
  for (var i = 0; i < cap.length; i++){
     cap[i].innerHTML = cap[i].textContent.toUpperCase()
  }
}