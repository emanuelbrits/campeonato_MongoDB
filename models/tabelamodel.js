const mongoose = require('mongoose')

const tabelaeSchema = mongoose.Schema(
    {
        pos: {
            type: Number,
            required: [false]
        },
        equipe: {
            type: String,
            required: [true, "Digite a equipe"]
        },
        esporte: {
            type: String,
            required: [true, "Digite o esporte da tabela"]
        },
        P: {
            type: Number,
            required: [false]
        },
        J: {
            type: Number,
            required: [false]
        },
        V: {
            type: Number,
            required: [true, "Digite a quantidade de vitórias da equipe"]
        },
        E: {
            type: Number,
            required: [false]
        },
        D: {
            type: Number,
            required: [true, "Digite a quantidade de derrotas da equipe"]
        },
        GP: {
            type: Number,
            required: [false]
        },
        GC: {
            type: Number,
            required: [false]
        },
        SG: {
            type: Number,
            required: [false]
        },

    },
    {
        timestamps: true
    }
) 

const tabela = mongoose.model('tabela', tabelaeSchema)

module.exports = tabela