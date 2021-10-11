/*
2) Criar página HTML e JS  para que quando o usuário entrar na página:

a) Exibir na tela a tabuada de 9.
b) Criar função e usar o evento onload.
*/
function tabuada(num){
  const txt = document.getElementById('tab')
  for(var i = 1; i <= 10; i++){  
    txt.innerHTML += num+" x "+i+" = "+(num*i)+"\n"
  }
  txt.innerHTML = txt.textContent.replace(/\n/g, '<br>')
}