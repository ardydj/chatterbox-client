var Messages = {
  // message property
  // this.chatList = [];
  // this.count = 0;
  _data: {},

  items: function() {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
    // return Messages._data;
  },

  add: function(message, callback = ()=>{}) {
    Messages._data[message.objectId] = message;
    callback(Messages.items());
  },

  update: function(messages, callback = ()=>{}) {
    var length = Object.keys(Messages._data).length;

    for (let message of messages) {
      message.text = message.text || '';
      message.username = message.username || '';
      message.roomname = message.roomname || '';
      Messages._data[message.objectId] = message;
    }

    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },
};

// Messages.prototype.addNewMessage = function(message) {
//   this.chatList.push(message);
//   this.count++;
// }

// var messageModel = new Messages();

