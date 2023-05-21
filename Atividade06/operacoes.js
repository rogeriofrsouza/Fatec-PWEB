let output = document.querySelector('#output');

function calcular() {
  let num1 = Number(prompt('Informe um número: '));
  let num2 = Number(prompt('Informe outro número: '));
  
  let element = document.createElement('h2');
  element.innerHTML = `Números informados: ${num1} e ${num2}`;
  output.appendChild(element)

  element = document.createElement('p');
  element.innerHTML = `Soma: ${num1 + num2}<br>Subtração: ${num1 - num2}<br>Produto: ${num1 * num2}<br>Divisão: ${num1 / num2}<br>Módulo: ${num1 % num2}`;
  output.appendChild(element)
}
