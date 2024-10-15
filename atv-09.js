function contaCaractere(str, caractere) {
    var contador = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] === caractere) {
            contador++;
        }
    }
    return contador;
}
console.log("O caractere 'a' aparece " + contaCaractere("banana", "a") + " vezes.");