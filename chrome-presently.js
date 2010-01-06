$(document).ready(function () {
  $("#sidebar_wrapper").hide();
  $("#big_box_update").removeClass("with_sidebar"); // .css({"width" : "960px"});
  $("#update_text").css({"width":"700px"});
  $("#content").removeClass("with_sidebar").css({
    "-moz-background-clip":"border",
    "-moz-background-inline-policy":"continuous",
    "-moz-background-origin":"padding",
    "-moz-border-radius-bottomleft":"0px",
    "-moz-border-radius-bottomright":"0px",
    "-moz-border-radius-topleft":"0px",
    "-moz-border-radius-topright":"0px",
    "background":"#ffffff none repeat scroll 0 0",
    "padding":"0",
  }); // .css({"width" : "960px"});
  $(".underneath").append("<div style='clear:both;height:1px;display:block;'>&nbsp;</div>");
});
