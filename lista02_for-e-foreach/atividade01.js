const elementosFake = [
    {
        tagName: 'DIV',
        style: { color: 'blue', display: 'flex' },
        classList: ['container', 'active']
    },
    {
        tagName: 'H1',
        style: { color: 'red', display: 'block' },
        classList: ['title']
    },
    {
        tagName: 'BUTTON',
        style: { color: 'white', display: 'inline-block' },
        classList: ['btn', 'btn-primary']
    }
];

for (let chave in elementosFake[0]) {
    console.log(chave, elementosFake[0][chave]);
}