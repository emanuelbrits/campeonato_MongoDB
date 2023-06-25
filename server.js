const express = require('express')
const mongoose = require('mongoose')
const Equipe = require('./models/equipemodel')
const Jogador = require('./models/jogadormodel')
const Partida = require('./models/partidamodel')
const Estatisticas = require('./models/estatisticasmodel')
const Tabela = require('./models/tabelamodel')

const app = express()

app.use(express.json())


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



//Partida

//Retorna todas as partidas
app.get('/partidas', async(req, res) => {
    try {
        const partidas = await Partida.find({}).sort( { rodada: 1 } )
        res.status(200).json(partidas)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna partidas pelo time
app.get('/partidas/equipe/:equipe', async(req, res) => {
    try {
        const {equipe} = req.params
        const partida = await Partida.find({$or: [{equipecasa: `${equipe}`}, {equipevisitante: `${equipe}`}]}).sort( { rodada: 1 } )

        res.status(200).json(partida)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna partidas pelo esporte
app.get('/partidas/esporte/:esporte', async(req, res) => {
    try {
        const {esporte} = req.params 
        const partida = await Partida.find({esporte: `${esporte}`}).sort( { rodada: 1 } )
        res.status(200).json(partida)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna partidas pela rodada
app.get('/partidas/rodada/:rodada', async(req, res) => {
    try {
        const {rodada} = req.params 
        const partida = await Partida.find({rodada: `${rodada}`}).sort( { rodada: 1 } )
        res.status(200).json(partida)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Adiciona partida
app.post('/partida', async(req, res) => {
    try {
        const partida = await Partida.create(req.body)
        res.status(200).json(partida)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Atualiza dados da partida
app.put('/partida/:id', async(req, res) => {
    try {
        const {id} = req.params
        const partida = await Partida.findOneAndUpdate({_id: `${id}`}, req.body)
        if(!partida) {
            return res.status(404).json({message: 'Não foi possível a partida'})
        }
        res.status(200).json(partida)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Remove partida
app.delete('/partida/:id', async(req, res) => {
    try {
        const {id} = req.params
        const partida = await Partida.findOneAndDelete({_id: `${id}`}, req.body)
        if(!partida) {
            return res.status(404).json({message: 'Não foi possível encontrar a partida'})
        }
        res.status(200).json(partida)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



//Jogador

//Retorna todos jogadores
app.get('/jogadores', async(req, res) => {
    try {
        const jogadores = await Jogador.find({})
        res.status(200).json(jogadores)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna jogador pelo nome
app.get('/jogador/nome/:nome', async(req, res) => {
    try {
        const {nome} = req.params 
        const jogador = await Jogador.find({nome: `${nome}`})
        res.status(200).json(jogador)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna jogadores pelo esporte
app.get('/jogador/esporte/:esporte', async(req, res) => {
    try {
        const {esporte} = req.params 
        const jogador = await Jogador.find({esporte: `${esporte}`})
        res.status(200).json(jogador)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna jogadores pelo time
app.get('/jogador/equipe/:equipe', async(req, res) => {
    try {
        const {equipe} = req.params 
        const jogador = await Jogador.find({equipe: `${equipe}`})
        res.status(200).json(jogador)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Adiciona jogador
app.post('/jogador', async(req, res) => {
    try {
        const jogador = await Jogador.create(req.body)
        res.status(200).json(jogador)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Atualiza dados do jogador
app.put('/jogador/:nome', async(req, res) => {
    try {
        const {nome} = req.params
        const jogador = await Jogador.findOneAndUpdate({nome: `${nome}`}, req.body)
        if(!jogador) {
            return res.status(404).json({message: 'Não foi possível encontrar jogador com esse nome'})
        }
        res.status(200).json(jogador)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Remove jogador
app.delete('/jogador/:nome', async(req, res) => {
    try {
        const {nome} = req.params
        const jogador = await Jogador.findOneAndDelete({nome: `${nome}`}, req.body)
        if(!jogador) {
            return res.status(404).json({message: 'Não foi possível encontrar jogador com esse nome'})
        }
        res.status(200).json(jogador)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})



//Estatisticas jogador

//Retorna todas estatisticas
app.get('/estatisticas', async(req, res) => {
    try {
        const estatisticas = await Estatisticas.find({})
        res.status(200).json(estatisticas)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna estatisticas pelo jogador
app.get('/estatisticas/nome/:nome', async(req, res) => {
    try {
        const {nome} = req.params 
        const estatisticas = await Estatisticas.find({nome: `${nome}`})
        res.status(200).json(estatisticas)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna estatisticas pelo esporte
app.get('/estatisticas/esporte/:esporte', async(req, res) => {
    try {
        const {esporte} = req.params 
        const estatisticas = await Estatisticas.find({esporte: `${esporte}`})
        res.status(200).json(estatisticas)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna estatisticas pelo time
app.get('/estatisticas/equipe/:equipe', async(req, res) => {
    try {
        const {equipe} = req.params 
        const estatisticas = await Estatisticas.find({equipe: `${equipe}`})
        res.status(200).json(estatisticas)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna artilharia futb
app.get('/estatisticas/artilheirofutb', async(req, res) => {
    try {
        const {esporte} = req.params 
        const estatisticas = await Estatisticas.find({esporte: `futb`}).sort( { gols: -1 } )
        res.status(200).json(estatisticas)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna artilharia futb por equipe
app.get('/estatisticas/artilheirofutb/:equipe', async(req, res) => {
    try {
        const {equipe} = req.params 
        const estatisticas = await Estatisticas.find({$and: [{esporte: `futb`}, {equipe: `${equipe}`}]}).sort( { gols: -1 } )
        res.status(200).json(estatisticas)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Adiciona estatisticas
app.post('/estatisticas', async(req, res) => {
    try {
        const estatisticas = await Estatisticas.create(req.body)
        res.status(200).json(estatisticas)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Atualiza estatisticas do jogador
app.put('/estatisticas/:nome', async(req, res) => {
    try {
        const {nome} = req.params
        const estatisticas = await Estatisticas.findOneAndUpdate({nome: `${nome}`}, req.body)
        if(!estatisticas) {
            return res.status(404).json({message: 'Não foi possível encontrar jogador com esse nome'})
        }
        res.status(200).json(estatisticas)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Remove estatisticas
app.delete('/estatisticas/:nome', async(req, res) => {
    try {
        const {nome} = req.params
        const estatisticas = await Estatisticas.findOneAndDelete({nome: `${nome}`}, req.body)
        if(!estatisticas) {
            return res.status(404).json({message: 'Não foi possível encontrar jogador com esse nome'})
        }
        res.status(200).json(estatisticas)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


//Tabela

//Retorna todas as tabelas
app.get('/tabelas', async(req, res) => {
    try {
        const tabelas = await Tabela.find({})
        res.status(200).json(tabelas)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna tabela de futebol
app.get('/tabela/futb', async(req, res) => {
    try {
        const tabela = await Tabela.find({esporte: "futb"}).sort({P: -1})
        res.status(200).json(tabela)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Retorna tabela de basquete
app.get('/tabela/basq', async(req, res) => {
    try {
        const tabela = await Tabela.find({esporte: "basq"}).sort({V: -1})
        res.status(200).json(tabela)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Adiciona time na tabela
app.post('/tabela', async(req, res) => {
    try {
        const tabela = await Tabela.create(req.body)
        res.status(200).json(tabela)
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
})

//Atualiza dados da tabela
app.put('/tabela/:nome', async(req, res) => {
    try {
        const {nome} = req.params
        const tabela = await Tabela.findOneAndUpdate({nome: `${nome}`}, req.body)
        if(!tabela) {
            return res.status(404).json({message: 'Não foi possível encontrar jogador com esse nome'})
        }
        res.status(200).json(tabela)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//Remove time da tabela
app.delete('/tabela/:id', async(req, res) => {
    try {
        const {id} = req.params
        const tabela = await Tabela.findOneAndDelete({_id: `${id}`}, req.body)
        if(!tabela) {
            return res.status(404).json({message: 'Não foi possível encontrar a tabela'})
        }
        res.status(200).json(tabela)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

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