$(document).ready(function () {
  $("#sidebar_wrapper").hide();

  $("#big_box_update").removeClass("with_sidebar").addClass("chrome-noborder");

  // make the update box bigger
  $("#update_text").css({"width":"700px"}).addClass("chrome").addClass("chrome-noborder");
  $("#big_box_submit").addClass("chrome-noborder"); 
  
  // un-puff body
  $("#content").removeClass("with_sidebar").css({
    "background":"#ffffff none repeat scroll 0 0",
    "padding":"0",
  }).addClass("chrome-noborder");
  $(".underneath").append("<div class='clearfix'></div>");

  // replace feed title (tighten up)
  $("h2#feed_title").before("<p>Home Feed</p>").remove();

  // make mark as read a smaller link;
  $("#mark_as_read").removeClass("button").addClass("disabled-chrome").css({"cursor":"pointer"});

  // account bubble
  $('#account_bar').css({
      "opacity": "0.4", 
      "filter": "alpha(opacity=40)", 
      "position":"fixed",
      "right":"20px",
      "bottom":"38px",
      "z-index":"100", 
      'width':'auto'});
  
  // pinch top bar
  $('#image_logo').css({
      'display':'inline',
      'width':'auto',
      "opacity": "0.4",
      "filter": "alpha(opacity=40)", 
      "position":"fixed", 
      "left":"20px",
      "bottom":"8px",
      "z-index":"100"});

  // square it all.
  $("input[type='text']").addClass("chrome-noborder");

  $(".share_selector_box").css({"padding":"0px"});
  $(".selector").addClass("chrome-noborder");

});
