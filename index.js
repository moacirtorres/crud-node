const express = require('express')
const app = express()

// Setando para Json...
app.use(express.json())

const cursos = [
    'FullStack Master',
    'Desenvolvimento de Games',
    'Viver de YouTube'
]

// Retornar um curso...

app.get('/cursos/:index', (req, res) => {
    const { index } = req.params
    return res.json(cursos[index])
})

// Retornar todos os cursos...

app.get('/cursos', (req, res) =>{
    return res.json(cursos)
})


// Criando um novo curso...
app.post('/cursos', (req, res) => {
    const {name} = req.body
    cursos.push(name)

    return res.json(cursos)
})

// Atualizar cursos...

app.put('/cursos/:index', (req, res) => {
    const {index} = req.params
    const {name} = req.body

    cursos[index] = name 

    return res.json(cursos)
})

// Deletar um curso...

app.delete('/cursos/:index', (req, res) => {
    const { index } = req.params
    cursos.splice(index, 1)

    return res.json({message: "O curso foi deletado com sucesso"})
})


// Ouvindo...

app.listen(3000, () => {
    console.log('O servidor está online!')
})