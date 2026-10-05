const testarEscopo = () => {
    const segredo = "123";

    return segredo;
};

console.log(testarEscopo());

// Isso dará erro:
console.log(segredo);