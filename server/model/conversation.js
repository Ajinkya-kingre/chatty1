const mongoose = require("mongoose")


const  Schema = mongoose.Schema;

const conversationModel = new Schema({
    participants : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "User"
    }],
    messages : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : "Message"
    }]
}, { timestamps: true })

const Conversation = mongoose.model("Conversation", conversationModel);

module.exports = Conversation;