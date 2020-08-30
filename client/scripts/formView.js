var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var message = {
      roomname: Rooms.selected || 'lobby',
      text: FormView.$form.find('#message').val(),
      username: App.username
    }

    Parse.create(message, (data) => {
      _.extend(message, data);
      Messages.add(message, MessagesView.render);
      // Messages = [message, ...Messages];
      // MessagesView.render();
    });

    // Parse.readAll((data) => {
    //   Message = data.results;
    //   MessagesView.render();
    // });
    console.log('click!');
  },



  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};