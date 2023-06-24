const express = require('express')
const mongoose = require('mongoose')
const Equipe = require('./models/equipemodel')
const Jogador = require('./models/jogadormodel')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Olá')
})

//equipe

//Retorna todas as equipes
app.get('/equipes', async(req, res) => {
    try {
        const equipes = await Equipe.find({})
        res.status(200).json(equipes)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna equipe pelo nome
app.get('/equipe/nome/:nome', async(req, res) => {
    try {
        const {nome} = req.params 
        const equipe = await Equipe.find({nome: `${nome}`})
        res.status(200).json(equipe)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna equipe pelo esporte
app.get('/equipe/esporte/:esporte', async(req, res) => {
    try {
        const {esporte} = req.params 
        const equipe = await Equipe.find({esporte: `${esporte}`})
        res.status(200).json(equipe)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Adiciona equipe
app.post('/equipe', async(req, res) => {
    try {
        const equipe = await Equipe.create(req.body)
        res.status(200).json(equipe)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Atualiza dados da equipe
app.put('/equipe/:nome', async(req, res) => {
    try {
        const {nome} = req.params
        const equipe = await Equipe.findOneAndUpdate({nome: `${nome}`}, req.body)
        if(!equipe) {
            return res.status(404).json({message: 'Não foi possível encontrar equipe com esse nome'})
        }
        res.status(200).json(equipe)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Remove equipe
app.delete('/equipe/:nome', async(req, res) => {
    try {
        const {nome} = req.params
        const equipe = await Equipe.findOneAndDelete({nome: `${nome}`}, req.body)
        if(!equipe) {
            return res.status(404).json({message: 'Não foi possível encontrar equipe com esse nome'})
        }
        res.status(200).json(equipe)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Jogador

mongoose
.connect('mongodb+srv://emanuelbrits201:12345teste@campeonato.rdgcxnv.mongodb.net/campeonato?retryWrites=true&w=majority')
.then(() => {
    console.log('Conectado ao mongoDB');
    app.listen(3000, () => {
        console.log('Aplicativo rodando na porta 3000');
    })
}).catch((error) => {
    console.log(error);
})