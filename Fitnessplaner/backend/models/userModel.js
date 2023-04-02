const mongoose = require('mongoose')

const userShema = mongoose.Schema(
    {
        username: {
            type: String,
            required: true
        }, 
        goal: {
            type: Number,
            required: true
        },
        split: {
            type: Number,
            required: false
        }
    },
    {
        timestamps: false
    }
)

const User = mongoose.model('User', userShema);
module.exports = User;