$(document).ready(function(){
	$(".enter").click(function(){
		var h = Number($(".h").val());
		var w = Number($(".w").val());
		var bmi = w/(h*h);
		$(".bmi_val").html("您的BMI值為"+bmi);
	});
});
