const express = require('express')
const storyRouter = express.Router()
const {createStory,getAllStories,getStory,updateStory} = require('../controller/StoryController.js')

storyRouter.route("/").post(createStory)
storyRouter.route("/:id").get(getStory)
storyRouter.route("/").get(getAllStories)
storyRouter.route("/:id").put(updateStory)

module.exports = storyRouter