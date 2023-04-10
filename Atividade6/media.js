let output = document.querySelector('#output');

function calcular() {
  let nome = prompt('Nome do aluno: ');
  let media = 0.0;
  let i = 0;
  
  while (i < 3) {
    let nota = parseFloat(prompt(`Nota ${i + 1}: `));

    if (isNaN(nota)) {
      alert('Informe um número!');
    } else {
      media += nota;
      i++;
    }
  }
  
  media /= 3.0;
  confirm('Pronto!');
  output.innerHTML = `Aluno: ${nome}<br>Média: ${media.toFixed(1)}`;
}
