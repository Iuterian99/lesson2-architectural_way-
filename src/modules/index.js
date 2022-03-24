const { Router } = require('express')
const router = Router()
const Users = require('./Users/users')
const Posts = require('./Posts/posts')

router
    .get('/users', Users.GET)
    .post('/updateUser', Users.POST)
    .get('/posts', Posts.GET)
    .post('/updatePost', Posts.POST)

module.exports = router
