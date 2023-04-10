/* 
  Empate.
  Pedra quebra tesoura.
  Tesoura corta papel.
  Papel cobre a pedra.

  Fases:
  a. O usuário faz uma escolha
  b. O computador faz uma escolha (método random – ponto flutuante aleatórios [0, 1) , 0 (inclusivo) até, mas não incluindo, 1 (exclusivo)). Sugestão divida 0.99 em 3 partes.
  c. A partir das duas escolhas determinar o vencedor 
*/
let pontosJogador = 0;
let pontosComputador = 0;

function jogar(escolhaJogador) {
  let output = document.querySelector('#output');
  output.innerHTML = '';
  
  let div = document.createElement('div');
  div.innerHTML = `Você escolheu: ${verificaEscolha(escolhaJogador)}</br>`;

  let escolhaComputador = jogadaComputador();
  div.innerHTML += `Computador: ${verificaEscolha(escolhaComputador)}</br>`;
  
  let resultado = verificaResultado(escolhaJogador, escolhaComputador);
  div.innerHTML += `Resultado: <b>${resultado}<b></br></br></br>`;

  // Pontuação
  div.innerHTML += `<span style="color: blue">Jogador</span> (${pontosJogador}) x <span style="color: red">Computador</span> (${pontosComputador})`;
  output.appendChild(div);
}

function verificaEscolha(escolha) {
  if (escolha == 'pedra') {
    return '👊';
  }
  else if (escolha == 'papel') {
    return '🖐️';
  }
  else {
    return '✌️';
  }
}

function jogadaComputador() {
  let num = Math.random() * 10.0;
  
  if (num <= 3.33) {
    return 'pedra';
  }
  else if (num <= 6.66) {
    return 'papel';
  }
  else {
    return 'tesoura';
  }
}

function verificaResultado(jogador, computador) {
  if (jogador == computador) {
    return 'EMPATE';
  }
  
  if (jogador == 'pedra' && computador == 'tesoura' || jogador == 'papel' && computador == 'pedra' || jogador == 'tesoura' && computador == 'papel') {
    pontosJogador++;
    return 'VITÓRIA';
  }
  
  pontosComputador++;
  return 'DERROTA';
}
