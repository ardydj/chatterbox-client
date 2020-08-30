var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function() {

    RoomsView.$select.html('');
    Rooms
      .items()
      .each(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
  },

  renderRoom: function(roomname) {
    var $room = $(`<option>`).val(roomname).text(roomname);
    RoomsView.$select.append($room);
  },

  handleChange: function(event) {
    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
  },

  handleClick: function(event) {
    var roomname = prompt('Enter room name');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
  }
  // addRoom: function(event) {
  //   this.$button.on('click', function () {
  //     // access roomName in room input element
  //     var $input = $("input[name='room']").val();
  //     // push Rooms.roomList array
  //     debugger;
  //     // Room.add isn't working
  //     // Rooms.add.call(Rooms, $input);
  //     Rooms.add($input);
  //     // add.call(Rooms, $input);
  //     renderRoomBind($input);
  //     // this.renderRoomBind($input);

  //     // this.renderRoom.call(RoomsView, $input);
  //     // what is this? this room should show up on our selector
  //   })
  //     // this.renderRoom(roomName))
  // }
};

// // listen for MessagesView.renderMessage() invocations
// var renderRoomFunc = RoomsView.renderRoom;
// var renderRoomBind = renderRoomFunc.bind(RoomsView, arguments)
// // $("input[name='room']").val();
// RoomsView.addRoom();