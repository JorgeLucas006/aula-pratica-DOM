/*
2) Criar página HTML e JS para que o usuário digite nome e idade em um formulário:

a) Usar o evento onchange para transformar o nome digitado em maiúsculo.
b) Exibir o nome em maiúsculo na tela.
c) Usar o evento onchange para somar a idade com 10.
d) Exibir a mensagem Daqui a 10 anos você terá ___ anos na tela.
Obs.: Onde tem ____ , você deverá colocar o valor da idade mais 10.
*/

function handleInput(){
  const name = document.getElementById("name")
  name.value = name.value.toUpperCase()
}

function idade(){
  const number = parseInt(document.getElementById("number").value)
  let afterNumber = number + 10
  console.log(afterNumber)
  return window.alert("Daqui a 10 anos você terá "+afterNumber+" anos")
}