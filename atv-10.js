function verificaPrimo(num) {
    if (num < 2) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
var numero = 17; // Exemplo de número para testar
console.log(numero + " é primo? " + (verificaPrimo(numero) ? "Sim" : "Não"));