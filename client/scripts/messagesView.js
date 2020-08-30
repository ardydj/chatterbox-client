var MessagesView = {
  $chats: $('#chats'),

  initialize: function() {
    // what initiliazing

      // needs to listen to Messages.js
        // if messages.chatList.length === 1;
          // messageView initialize one message at a time
            //
          // add message to chats div container
    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
  },

  render: function () {
    MessagesView.$chats.html('');

    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));

  },

  renderMessage: function(message) {
    // check for new message(s) in message.chatList
      // [message, message]
      //var $userName = $('<div #us>')
    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function(event) {
    var username = $(event.target).data('username');
    if (username === undefined) {return;}

    Friends.toggleStatus(username, MessagesView.render);
  }
      //$message.text(message.)
        // forEach MessageView.render(each message)
        // $div.text()
    // $chats.apppend(newDiv) for each message
    // count++


};

// MessagesView.renderMessage();