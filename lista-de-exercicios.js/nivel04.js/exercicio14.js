const calcularTotal = (precos) => {
    let total = 0;

    for (const preco of precos) {
        total = total +  preco;
    }

    return total;
};

console.log(calcularTotal([50, 100, 25]));