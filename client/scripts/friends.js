var Friends = {
  // list of friends
  // friendsList: [],
  // toggleStatus: function (event) {
  //   var $username = $('div .username')
  //   $username.on('click', function(event) {
  //     if (this.friendsList.includes($(event.target).text())) {}
  //   })
  // }
  // toggleStatus method to check whether or not it's a friend returns true or false

  _data: new Set,

  items: function() {
    return _.chain([...Friends._data]);
  },

  isFriend: function(name) {
    return Friends._data.has(name);
  },

  toggleStatus: function(name, callback = ()=>{}) {
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      callback(false);
    } else {
      Friends._data.add(name);
      callback(true);
    }
  }
};

// click div with class .username
  // text val of the username div passes that argument
  // check if name is in friendsList array
    // return true/false