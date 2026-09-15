const nota = 85;
let analisar_nota=true

switch (analisar_nota) {
  case nota >= 90:
    console.log('Conceito A');
    break;
  case nota >= 80:
    console.log('Conceito B');
    break;
  default:
    console.log('Melhore!.');
}
