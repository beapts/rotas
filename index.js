const express = require('express');

const server = express();

const usuarios = [
    { id: 1, nome: "Diego", sobrenome: "Campos"}, 
    { id: 2, nome: "Ana", sobrenome: "Souza"}
];

server.get('/', (req, res) =>{
    res.send(usuarios)
});

/* server.get('/:index', (req, res) =>{
    const {index} = req.params
    const aux = usuarios[index]
    res.send(aux);
}); */

server.get('/:id', (req, res) =>{
    const {id} = req.params
    const aux = usuarios.find((usuario) => usuario.id == id)
    res.send(aux);
});

console.log("O servidor ta rodando")

server.listen(3000)

