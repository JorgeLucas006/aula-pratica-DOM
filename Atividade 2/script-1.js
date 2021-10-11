/*
1) Criar página HTML e JS para ter:

a) 2 campos de texto (input). Esses campos só podem aceitar números, elas devem ter rótulos (label).
b) Sempre que o usuário digitar um valor, deverá validar se o valor é maior que o valor mínimo que é 2 ou menor que o valor máximo 10.
c) A página HTML deverá ter um botão que deve somar os dois valores digitados.
d) Exibir em uma div a informação da soma dos valores.
*/

function verify() {
  const n1 = document.getElementById("num1").value;
  const n2 = document.getElementById("num2").value;
  const w1 = document.getElementById("warning-1");
  const w2 = document.getElementById("warning-2");

  if (n1 < 2 || n1 > 10) {
    w1.innerHTML = "Valor invalido";
  } else {
    w1.innerHTML = "";
  }

  if (n2 < 2 || n2 > 10) {
    w2.innerHTML = "Valor invalido";
  } else {
    w2.innerHTML = "";
  }
  return;
}

function somar() {
  const n1 = parseInt(document.getElementById("num1").value);
  const n2 = parseInt(document.getElementById("num2").value);
  const w1 = document.getElementById("warning-1").textContent;
  const w2 = document.getElementById("warning-2").textContent;

  if (w1 === "" && w2 === "") {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = n1 + n2;
  }else {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "Digite um valor valido!";
  }
}
