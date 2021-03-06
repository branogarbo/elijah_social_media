const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    ownerId:
    {
        type:String,
        min: 1,
        max: 2000
    },
    messages:
    {
        type:String,
        min: 1,
        max: 2000
    },
    upvotes:
    {
        type:Number,
        min: 0,
        default:0
    },
    downvotes:
    {
        type:Number,
        min: 0,
        default:0
    },
    friendlist:
    {
        type:String,
        required: true
    },
    date:{
        type:Date,
        default:Date.now
    }
}, {collection: "messages"})

module.esports = mongoose.model("Messages", Msg);