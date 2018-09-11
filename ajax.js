document.addEventListener("DOMContentLoaded", function() {

  /* Your code goes here */
  $("#step12 button").click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/",
      method: "GET"
    });
  });

  $("#step3456 button").click(function(){
    $.ajax({
      url: "http://first-ajax-api.herokuapp.com/pong",
      method: "GET",
    }).done(function(responseData) {
      var response = $("<p>").html(responseData);
      $("#step3456").append(response);
    }).fail(function(responseData){
      var response = $("<p>").html(responseData.responseText);
      $("#step3456").append(response);
    });
  });
});
