function ehPrimo(numero) {
    if (numero == 0 || numero == 1) {
        return ("Não é primo");
    }
        
    for (let div = 2; div <= Math.sqrt(numero); div++){
        if (numero % div == 0) {
            return ("Não é primo");
        }
    }

    return ("Primo");
}

console.log(ehPrimo(7))