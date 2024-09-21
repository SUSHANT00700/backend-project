const User = require("../model/User.js");

const registerUser = async (req, res) => {
    try {
        const existingUser = await User.findOne({ username: req.body.username });
        if (existingUser)
            return res.status(409).json({
                success: false,
                error: "USER_ALREADY_EXISTS",
                message: "A user with this email address already exists.",
            });
        
        const user = await User.create(req.body)
        return res.status(200).json({
          success: true,
          payload: user,
        });
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: "INTERNAL_SERVER_ERROR",
            message: "An unexpected error occurred during registration.",
        });
    }
};

const loginUser = async (req, res) => { 
    try {
        const user = await User.findOne({username:req.body.username,password:req.body.password})
        if(!user)
            return res.status(409).json({
              success: false,
              error: "Invalid Credentials",
              message: "Either the Username/Password is wrong, or user doesn't exists",
            });
 
        return res.status(200).json({
            success:true,
            payload:user
        })
    } catch (error) {
        return res.status(500).json({
          success: false,
          error: "INTERNAL_SERVER_ERROR",
          message: "An unexpected error occurred during registration.",
        });
    }
};

const updateUser = async (req, res) => { 
    try {
        const {id:userID} = req.params
        const user = await User.findOneAndUpdate({_id:userID},req.body,{
            new:true,
            runValidators:true
        })

        if(!user)
            return res.status(404).json({
                success: false,
                error:'User Not Found',
                message:'User does not exists'
            })

        return res.status(200).json({
            success:true,
            payload:user
        })
    } catch (error) {
        return res.status(500).json({
          success: false,
          error: "INTERNAL_SERVER_ERROR",
          message: "An unexpected error occurred during registration.",
        });
    }
};

module.exports = {
    registerUser,
    loginUser,
    updateUser,
};
