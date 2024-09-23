const User = require('../model/User.js')
const Story = require('../model/Story')

const addBookmark = async (req, res) => {
    try {
        const { story_id, user_id } = req.body
    
        const storyExists = await Story.exists({ _id: story_id })
        if (!storyExists) {
            return res.status(404).json({
                success: false,
                error:'Story_Not_Found',
                message: 'Story not found'
            })
        }
    
        const updatedUser = await User.findByIdAndUpdate(user_id, {$addToSet: { bookmarks: story_id }}, { new: true, runValidators: true });
    
        if(!updatedUser){
            return res.status(400).json({
                success:false,
                error:'User_Not_Found',
                message:'User not found'
            })
        }
    
        return res.status(200).json({
            success:true,
            payload:updatedUser
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            error,
            message:'Internal Server Error'
        })
    }
}

module.exports = {
    addBookmark,
}