const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const jsonParse = bodyParser.json();

const usuarios = [
    { id: 1, nome: "Diego", sobrenome: "Campos"}, 
    { id: 2, nome: "Ana", sobrenome: "Souza"}
];

server.get('/usuarios', (req, res) =>{
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

server.post('/usuarios', jsonParse, (req, res) =>{
    console.log(req.body)
    const newUser = req.body
    usuarios.push(newUser)
    res.send(usuarios);
});

server.delete('/usuarios/:index', (req, res)=>{
    const {index} = req.params
    usuarios.splice(index,1)
    res.send(usuarios);
})

console.log("O servidor ta rodando")

server.listen(3000)

