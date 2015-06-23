$(function () {
  // Get messages and display them
  setTimeout(function getData () {
    $.getJSON('/api/messages')
      .done(function (messages) {
        var lis = messages.map(function (msg) {
          return '<li><h2>' + msg.name + ' says </h2>' +
            '<p>' + msg.message + '</p></li>';
        }).reverse();
        
        $('.messages').html(lis);
      })
      .always(function () {
        setTimeout(getData, 1000);
      });
  }, 0);

  
  // Add a new message
  $('.chat-form').on('submit', function (e) {
    e.preventDefault();
    
    // Get our data from our form
    var data = {
      name: $('input[name=name]').val(),
      message: $('input[name=message]').val()
    };
    
    // Send our data to our API
    $.ajax({
      url: '/api/messages',
      method: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json; charset=utf-8'
    }).done(function (result) {
      console.log(result);
    });
    
    // TODO: Immediately upate the UI.
  });
  
  
  
});