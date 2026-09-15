const letra = 'a'

console.log('Analisando se determinada letra é vogal ou consoante. . .');
console.log(`Letra: ${letra}` );

switch (true) {
    case letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u':
        console.log('A letra analisada é uma vogal');
        break;
        default:
        console.log ('A letra analisada é uma consoante')
}