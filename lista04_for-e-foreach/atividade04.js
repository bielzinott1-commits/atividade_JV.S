const nomesRepetidos = ['João','Maria','João','Pedro','Maria'];

function limparLista(lista) {
    return [...new Set(lista)];
}

const nomesLimpos =
limparLista(nomesRepetidos);

console.log(nomesLimpos);