const resultadoDiv = document.getElementById('resultado') 

function calcularNumeros() {
    const primeiroNumero = parseFloat( document.getElementById(`primeiroNumero`).value )
    const segundoNumero = parseFloat(document.getElementById(`segundoNumero`).value)   
    const resultado = primeiroNumero - segundoNumero
    resultadoDiv.textContent = resultado;
}

document.getElementById('calcular').addEventListener('click', calcularNumeros)