const userModel = require('../../model/Users')
module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await userModel.find().populate('posts'))
        } catch (err) {
            console.log(err)
        }
    },
    POST: async (req, res) => {
        try {
            const { name, age } = req.body
            const newUser = new userModel({ name, age })
            newUser.validate(async (err) => {
                if (err) {
                    res.send(err.errors['age'].message)
                } else {
                    await newUser.save()
                    res.send(newUser)
                }
            })
        } catch (err) {
            console.log(err)
        }
    },
}
