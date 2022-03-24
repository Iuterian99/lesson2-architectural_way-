const { Router } = require('express')
const router = Router()
const Users = require('./Users/users')
const Posts = require('./Posts/posts')

router
    .get('/users', Users.GET)
    .post('/addUser', Users.POST)
    .get('/posts', Posts.GET)
    .post('/addPost', Posts.POST)

module.exports = router
