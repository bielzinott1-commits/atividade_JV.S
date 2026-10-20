const usuarios = [
    {nome: 'Ana',ativo: true},
    {nome: 'Beto',ativo: false},
    {nome: 'Caio',ativo: true},
    {nome: 'Duda',ativo: false}
]

const usuariosAtivos = usuarios.filter(usuarios => usuarios.ativo);

console.log(`Usuarios Ativo`);
console.log(usuariosAtivos);