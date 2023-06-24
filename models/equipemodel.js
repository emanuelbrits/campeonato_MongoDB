const mongoose = require('mongoose')

const equipeSchema = mongoose.Schema(
    {
        nome: {
            type: String,
            required: [true, "Digite o nome da equipe"]
        },
        esporte: {
            type: String,
            required: [true, "Digite o esporte da equipe"]
        }
    },
    {
        timestamps: true
    }
) 

const equipe = mongoose.model('equipe', equipeSchema)

module.exports = equipe