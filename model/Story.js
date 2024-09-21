const mongoose = require('mongoose')

const CATEGORIES = ['food','health and fitness','travel','movies','education']

const slidesSchema = mongoose.Schema({
    heading:{type:String,required:true},
    description:{type:String,required:true},
    image:{type:String,required:true},
})

const Story = mongoose.Schema({
    author:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true},
    slides:[slidesSchema],
    likes:{type:Number,default:0},
    category:{type:String,required:true,enum:CATEGORIES}
})

module.exports = mongoose.model('Story',Story)