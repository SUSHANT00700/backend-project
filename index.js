const express = require("express");
const connectDB = require('./db/connectDB.js')
const userRouter = require('./routes/UserRoutes.js')
const storyRouter = require('./routes/StoryRoutes.js')
const cors = require('cors')

require("dotenv").config()

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "*", // Replace with your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use('/api/v1/user',userRouter)
app.use('/api/v1/story',storyRouter)


const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(process.env.PORT,()=>{
            console.log(`Listening on Port: ${process.env.PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}

start()