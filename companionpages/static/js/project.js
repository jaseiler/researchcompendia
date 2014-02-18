/* 
 * this toggles the + icons to - icons when a FAQ question is
 * collapsed, and visa versa
 */
$('.panel').on("hidden.bs.collapse", function(e) {
  $icon = $( e.currentTarget ).find( "div#iconstate" )
  $icon.removeClass("icon-plus-sign-alt")
  $icon.addClass("icon-minus-sign-alt")
});
$('.panel').on("shown.bs.collapse", function(e) {
  $icon = $( e.currentTarget ).find( "div#iconstate" )
  $icon.removeClass("icon-minus-sign-alt")
  $icon.addClass("icon-plus-sign-alt")
});
$(window).resize(function() {
    $(".col-lg-side").css("width",220);
    $(".col-lg-cont").css("width",$("body").width()-570);
    
    });
$(".col-lg-cont").css("width",$("body").width()-570); 