const carrinho = [25.50, 10.00, 100.00, 5.00];

const precoTotal = carrinho.reduce((soma, preco) => soma + preco);

console.log(precoTotal);