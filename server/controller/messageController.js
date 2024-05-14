const Conversation = require("../model/conversation");
const Message = require("../model/message");
const {getReceiverSocketId, io} = require("../socket/socket")

const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const recieverId = req.params.id;
    const { message } = req.body;

    let gotConversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    });

    if (!gotConversation) {
      await Conversation.create({
        participants: [senderId, recieverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      recieverId,
      message,
    });

    if (newMessage) {
      gotConversation.messages.push(newMessage._id);
    }

    await Promise.all([gotConversation.save(), newMessage.save()]);

    // socket.io
    const recieverSocketId = getReceiverSocketId(recieverId);
    if(recieverSocketId){
      io.to(recieverSocketId).emit("newMessage", newMessage);
    }
    return res.status(201).json({
      newMessage
    })
  } catch (error) {
    res.status(400).send({ error: error });
    console.log(error)
  }
};


const getMessage = async (req,res) => {
    try {
        const senderId = req.id;
        const recieverId = req.params.id;
        const conversation = await Conversation.findOne({
            participants : {$all : [senderId, recieverId]}
        }).populate("messages")
        return res.status(200).send(conversation?.messages)

    } catch (error) {
        console.log(error);
        res.status(400).send({error : error})
    }
}



module.exports = {sendMessage, getMessage}