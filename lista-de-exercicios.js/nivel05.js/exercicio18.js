const transformarStatus = (status) => {
    const novoArray = [];

    for (const valor of status) {
        novoArray.push(valor ? "Concluído" : "Pendente");
    }

    return novoArray;
};

console.log(transformarStatus([true, false, true, false]));