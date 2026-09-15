let energia = 100;

do {
    (energia > 0)
  console.log('Jogando...');
  energia -= 20; // Consome a energia até virar 0
} while (energia > 110);
    
console.log('Fim de jogo!');