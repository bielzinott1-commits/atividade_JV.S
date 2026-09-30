function soma(num1, num2) {
  return num1 + num2;
}

// 1. Guardamos o resultado da função em uma variável
let resultado = soma(12, 10); 
let presidente = "";

// 2. Usamos '===' para comparação
if (resultado === 13) {
  presidente = "Ladrão";
} else if (resultado === 22) {
  presidente = "Bolsonaro";
} else {
  presidente = "Desconhecido";
  console.log("não tem esse presidente");
}

console.log(resultado, presidente); 
// Saída: 22 Bolsonaro