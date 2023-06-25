const mongoose = require('mongoose')

const estatisticasSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Digite o nome do jogador"]
        },
        esporte: {
            type: String,
            required: [true, "Digite o esporte do jogador"]
        },
        gols: {
            type: Number,
            required: [false, "Digite os gols do jogados"]
        },
        pontos: {
            type: Number,
            required: [false, "Digite os pontos do jogados"]
        },
        assistencias: {
            type: Number,
            required: [false, "Digite as assistencias do jogador"]
        },
        rebotes: {
            type: Number,
            required: [false, "Digite os rebotes do jogador"]
        },
        equipe: {
            type: String,
            required: [true, "Digite a equipe do jogador"]
        },
        cartaoamarelo: {
            type: Number,
            required: [false, "Digite os cartoes amarelos do jogador"]
        },
        cartaovermelho: {
            type: Number,
            required: [false, "Digite os cartoes vermelhos do jogador"]
        }
    },
    {
        timestamps: true
    }
) 

const estatisticas = mongoose.model('estatisticas', estatisticasSchema)

module.exports = estatisticas