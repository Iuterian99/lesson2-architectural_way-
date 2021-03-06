const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        min: [12, 'Kichik yosh kiritdiz!'],
    },
    posts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'posts',
        },
    ],
})

const userModel = mongoose.model('users', UserSchema)

module.exports = userModel
