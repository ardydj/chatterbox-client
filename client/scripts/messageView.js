var MessageView = {
// check length messages.message
  // compare the last message rendered compared to new ones that were inputted


  render: _.template(`
      <div class="chat">
        <div class="username"><%- username %></div>
        <div><%- text %></div>
      </div>
    `)

};

