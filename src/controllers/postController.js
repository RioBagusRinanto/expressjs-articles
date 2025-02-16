const prisma = require("../helpers/prisma")
const { postSchema } = require("../helpers/schema")

const getPosts = async (req, res) => {
    try {
        const posts = await prisma.post.findMany()
        

        return res.json({
            success: true,
            message: "Get posts success !!",
            data: posts
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json(
            {
                success: false,
                message: "Failed to get posts",
                data: error
            }
        )
    }
}

const createPost = async (req, res) => {
    try {
        const parse = postSchema.safeParse(req.body)

        if(!parse.success){
            const errMsg = parse.error.issues.map(err => `${err.path} - ${err.message}`)

            return res.json(
                {
                    success: false,
                    message: errMsg,
                    data: null
                }
            )
        }

        const post = await prisma.post.create({
            data: {
                author_name: parse.data.author_name,
                title: parse.data.title,
                content: parse.data.content,
                published: parse.data.published

            }
        })

        return res.json({
            success: true,
            message: "Created success",
            data: post
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json(
            {
                success: false,
                message: "Failed to created post",
                data: error
            }
        )
    }
}


module.exports = {
    getPosts,
    createPost
    
}