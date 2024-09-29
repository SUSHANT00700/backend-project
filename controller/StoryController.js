const Story = require('../model/Story.js')
const User = require('../model/User.js')

const createStory = async (req, res) => {
    try {
        const story = await Story.create(req.body.storyData)

        const updateUser = await User.findByIdAndUpdate(req.body.userId,{$addToSet:{stories:story._id}},{new:true,runValidators:true});

        if(!updateUser){
            return res.status(404).json({
                success:false,
                error:'User_Not_Found',
                message:'User ID is wrong'
            })
        }

        return res.status(200).json({
            success: true,
            payload: story
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "INTERNAL_SERVER_ERROR",
            message: "An unexpected error occurred during registration.",
        });
    }
}

const getStory = async (req, res) => {
    try {
        const { id: storyID } = req.params
        const story = await Story.findOne({ _id: storyID })
        if (!story)
            return res.status(409).json({
                success: false,
                error: "STORY_DOES_NOT_EXIST",
                message: "The given ID does not exist",
            });

        return res.status(200).json({
            success: true,
            payload: story
        })
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "INTERNAL_SERVER_ERROR",
            message: "An unexpected error occurred during registration.",
        });
    }
}

const updateStory = async(req,res)=>{
    try {
        const {id:storyID} = req.params
        const story = await Story.findOneAndUpdate({_id:storyID},req.body,{
            runValidators:true,
            new:true
        })
        if(!story)
            return res.status(404).json({
            success: false,
            error: "STORY_NOT_FOUND",
            message: "Story does not exist",
            });

        return res.status(200).json({
          success: true,
          payload: story,
        });
    } catch (error) {
         return res.status(500).json({
           success: false,
           error: "INTERNAL_SERVER_ERROR",
           message: "An unexpected error occurred during registration.",
         }); 
    }
}

const getAllStories = async(req,res)=>{
    const stories = await Story.find({})
    
    const formattedStories = stories.map(story => ({
        _id:story._id,
        author:story.author,
        firstSlide:story.slides[0],
        category:story.category
    }))

    return res.status(200).json({
        success:true,
        payload:formattedStories
    })
}

module.exports = { createStory, getStory, updateStory, getAllStories }