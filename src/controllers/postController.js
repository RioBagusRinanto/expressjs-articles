const prisma = require("../helpers/prisma")

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
                message: "Failed to get files",
                data: error
            }
        )
    }
}


module.exports = {
    getPosts,
    
}