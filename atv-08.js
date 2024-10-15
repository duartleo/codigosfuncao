function fatorial(num) {
    if (num === 0 || num === 1) return 1;
    return num * fatorial(num - 1);
}
console.log("Fatorial de 5: " + fatorial(5));