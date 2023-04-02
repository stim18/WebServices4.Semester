const mongoose = require('mongoose')

const trainingShema = mongoose.Schema(
    {
        userid: {
            type: String,
            required: true
        },
        split: {
            type: Number,
            required: true
        },
        typeOfTraining: {
            type: Number,
            required: true
        },
        dateOfTraining: {
            type: Date,
            required: true
        }
    },
    {
        timestamps: false
    }
)

const Training = mongoose.model('Training', trainingShema);
module.exports = Training;