$(document).ready(function(){
  var ans;
  $(".start").click(function(){
    ans = parseInt((Math.random() * 1000));
    $(".guess").empty();
    $(".ans").val("");
    $(".text_ans").css("opacity", "1");
    console.log(ans);
  });

  $(".enter").click(function(){
    var guess = $(".ans").val();
    if(guess > ans){
      $("<div class=\"result\">"+guess+"比答案大</div>").appendTo(".guess");
    }
    else if(guess < ans){
      $("<div class=\"result\">"+guess+"比答案小</div>").appendTo(".guess");
    }
    else if(guess == ans){
      $("<div class=\"result\">恭喜答對了</div>").appendTo(".guess");
      $(".text_ans").css("opacity", "0");
    }
    else{
      $("<div class=\"result\">輸入錯誤</div>").appendTo(".guess");
    }
    $(".ans").val("");
  });
});
