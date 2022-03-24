const Posts = require('../../model/Posts')
const Users = require('../../model/Users')
module.exports = {
    GET: async (_, res) => {
        try {
            res.send(await Posts.find().populate('author'))
        } catch (err) {
            console.log(err)
        }
    },
    POST: async (req, res) => {
        try {
            const { author, title, body } = req.body

            const postAuthor = await Users.findById({ _id: author })
            const newPost = new Posts({ author, title, body })
            await newPost.save()
            postAuthor.posts.push(newPost._id)
            await postAuthor.save()
            res.send(newPost)
        } catch (err) {
            console.log(err)
        }
    },
}
