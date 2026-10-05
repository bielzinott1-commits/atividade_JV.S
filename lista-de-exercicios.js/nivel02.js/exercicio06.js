const verificarIdade = (idade) => {
    if (idade >= 18){
        return "Permitido";
    }else{
        return "Bloqueado";
    }
}
console.log(verificarIdade(7));