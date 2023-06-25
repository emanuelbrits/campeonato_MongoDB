const mongoose = require('mongoose')

const partidaSchema = mongoose.Schema(
    {
        equipecasa: {
            type: String,
            required: [true, "Digite o nome da equipe da casa"]
        },
        equipevisitante: {
            type: String,
            required: [true, "Digite o nome da equipe visitante"]
        },
        esporte: {
            type: String,
            required: [true, "Digite o esporte do jogador"]
        },
        golscasa: {
            type: Number,
            required: [false]
        },
        golsvisitante: {
            type: Number,
            required: [false]
        },
        pontosscasa: {
            type: Number,
            required: [false]
        },
        pontosvisitante: {
            type: Number,
            required: [false]
        },
        rodada: {
            type: Number,
            required: [true, "Digite a rodada"]
        }
    },
    {
        timestamps: true
    }
) 

const partida = mongoose.model('partida', partidaSchema)

module.exports = partida