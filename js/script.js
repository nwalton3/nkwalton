/*  script.js
 *  Author: Nate Walton
 */

$(function() {
  
  $(window).resize(function(){
    var w = $(window).width();
    log(w);
  });
  
  // Pretty Quotes and no widows
  var txt;
  txt = "";
  return $("article p").each(function() {
    txt = $(this).html();
    txt = txt.replace(/(\s)(?=\S*$)/, "&nbsp;");
    $(this).html(txt);
    txt = txt.charAt(0);
    if (txt === "\"" || txt === "“") {
      $(this).addClass("quote");
    }
  });
  
});
