const express = require('express')
const { getPosts, createPost, updatePost } = require('../controllers/postController')


const postRoutes = express.Router()


postRoutes.get("/posts", getPosts)
postRoutes.post("/post", createPost)
postRoutes.put("/post/:id", updatePost)

module.exports = postRoutes;