function contaVogais(str) {
    var vogais = str.match(/[aeiou]/gi); // i -> case insensitive, g -> global search
    return vogais ? vogais.length : 0;
}
console.log("Número de vogais em 'Beterraba': " + contaVogais("Beterraba"));