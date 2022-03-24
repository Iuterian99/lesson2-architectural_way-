const mongoose = require('mongoose')
require('../model/Users')
require('../model/Posts')

const mongo = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/mongodb')
    } catch (err) {
        console.log(err)
    }
}
module.exports = mongo
