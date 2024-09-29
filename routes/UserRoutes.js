const express = require('express')

const userRouter = express.Router()

const {registerUser,loginUser,updateUser} = require('../controller/UserController.js')
const {addBookmark} = require('../controller/BookmarkController.js')


userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.put("/update/:id", updateUser);
userRouter.post("/bookmark",addBookmark);

module.exports = userRouter;