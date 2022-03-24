const Posts = require('../../model/Posts')
module.exports = {
    GET: async (_, res) => {
        try {
            res.send('Posts')
        } catch (err) {
            console.log(err)
        }
    },
    POST: async (req, res) => {
        try {
            const { author, title, body } = req.body
            const newPost = new Posts({ author, title, body })
            await newPost.save()
            res.send(newPost)
        } catch (err) {
            console.log(err)
        }
    },
}
