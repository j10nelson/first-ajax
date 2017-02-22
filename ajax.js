$(document).ready(function () {
  $(".run-ajax").on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    })
  });
  /* Your code goes here */

});
