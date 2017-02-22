$(document).ready(function () {
  $(".run-ajax").on('click', function(){
    $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/',
      method: 'GET',
      dataType: 'text'
    }).done(function(responseData) {
      console.log('Ajax Request Completed');
    });
  });
  $(".ajax-request").on('click', function(){
      $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/pong',
      dataType: 'text',
      method: 'GET'
    }).done(function(responseData){
      console.log('completed');
    }).fail(function(){
      console.log('Failed');
    }).always(function(){
      console.log('Something Happened!');
    });
  });
  $(".ajax-count").on('click', function(){
    $.ajax({
    url: 'http://first-ajax-api.herokuapp.com/count',
    dataType: 'text',
    method: 'GET'
    }).done(function(responseData){
      console.log('completed');
      $("#step7").append(responseData);
    });
  });
  $(".ajax-time").on('click', function(){
      $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/time',
      dataType: 'text',
      data: {timezone: 'Pacific/Honolulu'},
      method: 'GET'
    }).done(function(responseData){
        console.log('DONE');
        $('#step8').append(responseData);
      });
    });
  $(".ajax-car").on('click', function(){
      $.ajax({
      url: 'http://first-ajax-api.herokuapp.com/a_car',
      dataType: 'html',
      method: 'GET'
    }).done(function(responseData){
      console.log('DONE');
      $('#step9').append(responseData);
    });
  });
});
