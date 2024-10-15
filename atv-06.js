function inverteNumero(num) {
    var invertido = num.toString().split('').reverse().join('');
    return invertido;
}
console.log("Número invertido: " + inverteNumero(875));