const Message = require("../models/messages");

exports.getMessages = async (req, res) => {
  try {
    const messages = await Message.find();
    res.send(messages);
  } catch (error) {
    res.send({ error });
  }
};

exports.getMessage = async (req, res) => {
  try {
    const { id } = req.params;
    const message = await Message.findById(id);
    if (message) {
      res.send(message);
    } else {
      res.send({ message: "Message does not exist" });
    }
  } catch (error) {
    res.send({ error });
  }
};

exports.saveMessage = async message => {
  try {
    const newMessage = new Message(message);
    await newMessage.save();
  } catch (error) {
    //eslint-disable-next-line
    console.log(error);
  }
};
