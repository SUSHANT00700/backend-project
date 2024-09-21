const express = require('express')

const userRouter = express.Router()

const {registerUser,loginUser,updateUser} = require('../controller/UserController.js')

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.put("/update/:id", updateUser);

module.exports = userRouter;