const express = require('express')
const storyRouter = express.Router()
const {createStory,getAllStories,getStory,updateStory,getFirstFour,getStoryPartial} = require('../controller/StoryController.js')

storyRouter.route("/").post(createStory)
storyRouter.route("/getDetails/:id").get(getStory)
storyRouter.route("/").get(getAllStories)
storyRouter.route("/:id").put(updateStory)
storyRouter.route("/getFirstFour").post(getFirstFour);
storyRouter.route("/getPartial/:id").get(getStoryPartial)

module.exports = storyRouter