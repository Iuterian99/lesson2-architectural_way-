const userModel = require('../../model/Users')
module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await userModel.find())
        } catch (err) {
            console.log(err)
        }
    },
    POST: async (req, res) => {
        try {
            const { name, age } = req.body
            const newUser = new userModel({ name, age })
            await newUser.save()
            console.log(newUser)
            res.send(await userModel.find())
        } catch (err) {
            console.log(err)
        }
    },
}
