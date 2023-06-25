const mongoose = require('mongoose')

const jogadorSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Digite o nome do jogador"]
        },
        esporte: {
            type: String,
            required: [true, "Digite o esporte do jogador"]
        },
        equipe: {
            type: String,
            required: [true, "Digite a equipe do jogador"]
        },
        pos: {
            type: String,
            required: [true, "Digite a posição do jogador"]
        },
        camisa: {
            type: Number,
            required: [true, "Digite o numero da camisa do jogador"]
        }
    },
    {
        timestamps: true
    }
) 

const jogador = mongoose.model('jogador', jogadorSchema)

module.exports = jogador