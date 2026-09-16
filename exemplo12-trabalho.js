const frutas = ['maçã','banana','uva','tangerina'];

for (const fruta of frutas) {
  console.log(fruta);
}
//add frutas
frutas.push('laranja')
frutas.push('morango')
frutas.push('abacaxi')

console.log("Depois de adicionar 3 frutas");
console.log(frutas);

frutas.unshift('maracuja')

console.log('add co unshift add maracuja')
console.log(frutas)

//remove frutas
frutas.pop(); // remove a ultima fruta
frutas.shift(); // remove a primeira fruta

console.log("removi 2 frutas a primeira maça e a ultima tangerina");
console.log(frutas)

// mostrar as frutas
for (const fruta of frutas ){
    console.log(fruta);
}

/*
O que cada comando faz:
push()  adiciona uma fruta no final.
pop()  remove a última fruta.
shift()  remove a primeira fruta.
unshift()  adiciona uma fruta no início.
splice()  pode adicionar/remover elementos em uma posição específica.
*/

frutas.splice(1,1);// splice(posição, quantidade) remove elementos da lista
frutas.splice(1,0,'pokan');// Aqui remove a fruta da posição 1 e depois adiciona "pokan" na mesma posição

console.log(frutas)