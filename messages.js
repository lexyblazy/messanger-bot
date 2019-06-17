const nanoid = require("nanoid");
// The initially proposed runtime persistence layer
class Messages {
  constructor() {
    this.messages = {};
  }

  getMessages() {
    return Object.values(this.messages);
  }

  getMessage(id) {
    return this.messages[id];
  }

  saveMessage(message) {
    const id = nanoid();
    this.messages[id] = { id, ...message };
  }
}

module.exports = Messages;
