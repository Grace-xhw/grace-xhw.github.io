

$(function(){
  $("#btn_sec").click(function(){
    $("#tip_sec").show();
  });

  $("#btn").click(function(){
    $("#tip").show();
  });

  $("#withdraw").click(function(){
    $("#page_second").slideDown();
    $("#alert_tips_bg").show();
  });

  $("#charge").click(function(){
    $("#page_third").slideDown();
    $("#alert_tips_bg").show();
  });

  $("#alert_tips_bg").click(function(){
    $("#alert_tips_bg").hide();
    $("#page_second, #page_third").slideUp();
  });
})

