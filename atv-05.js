function calculaCirculo(raio) {
    var perimetro = 2 * Math.PI * raio;
    var area = Math.PI * raio * raio;
    return `Perímetro: ${perimetro.toFixed(2)} <br> Área: ${area.toFixed(2)}`;
}
console.log(calculaCirculo(10));