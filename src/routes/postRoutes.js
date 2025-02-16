const express = require('express')
const { getPosts, createPost, updatePost, deletePost } = require('../controllers/postController')


const postRoutes = express.Router()


postRoutes.get("/posts", getPosts)
postRoutes.post("/post", createPost)
postRoutes.put("/post/:id", updatePost)
postRoutes.delete("/post/:id", deletePost)

module.exports = postRoutes;