

{/**
const  {io,getReceiverSocketId}  = require('../app') */} // uncomment this

const Conversation = require("../model/conversation");
const Message = require("../model/message");


const sendMessage = async (req, res) => {
  try {
    const senderId = req.id;
    const receiverId = req.params.id;
    const { message } = req.body;

    if (!message || !receiverId) {
      return res
        .status(400)
        .json({ error: "Message and receiver ID are required." });
    }

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = await Message.create({
      senderId,
      receiverId,
      message,
    });

    conversation.messages.push(newMessage._id);
    await conversation.save();

  {/*  // socket.io
    const receiverSocketId = getReceiverSocketId(receiverId);
    if (receiverSocketId) {
      io.to(receiverSocketId).emit("newMessage", newMessage);
    } */}  // uncomment this

    return res.status(201).json({ newMessage });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getMessage = async (req, res ) => {
  try {
    const senderId = req.id;
    const recieverId = req.params.id;
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, recieverId] },
    }).populate("messages");
       
    return res.status(200).send(conversation?.messages);

    


  } catch (error) {
    console.log(error);
    res.status(400).send({ error: error });
  }
};

module.exports = { sendMessage, getMessage };
