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

elementosFake.forEach(function(elemento) {
    console.log(`A tag ${elemento.tagName} possui ${elemento.classList.length} classes.`);
});