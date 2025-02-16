const express = require('express')
const { getPosts, createPost } = require('../controllers/postController')


const postRoutes = express.Router()


postRoutes.get("/posts", getPosts)
postRoutes.post("/post", createPost)

module.exports = postRoutes;