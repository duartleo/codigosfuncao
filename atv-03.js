function converteFparaC(F) {
    var celsius = (F - 32) * (5 / 9);
    return celsius;
}
console.log("212°F em Celsius: " + converteFparaC(212) + "°C");