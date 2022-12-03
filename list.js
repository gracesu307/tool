$(document).ready(function(){
	var num = 1;
	$(".enter").click(function(){
		var thing = $(".thing").val();
		$("<div class=\"onething\"><input type=\"checkbox\" class=\"ip\" id=\"cb"+num+"\"><label for=\"cb"+num+"\" class=\"cb\">"+thing+"</label><hr></div>").appendTo(".wait");
		num ++;
		$(".thing").val("");
		$(".wait").css("opacity", "1");
	});

});