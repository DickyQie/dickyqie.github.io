
$(document).ready(function(){
	$("#model_item1").click(function(){
		$("#model_item1").css("background-color","#17BA9D");
		$("#model_item2").css("background-color","#006193");
		$("#model_item3").css("background-color","#006193");
		$("#about_education_title").text("Android");
		$(".education_right_ul #list1").text("TE");
		$(".education_right_ul #list2").text("Android");
		$(".education_right_ul #list3").text("Android");
		
	});
	
});

$(document).ready(function(){
	$("#model_item2").click(function(){
		$("#model_item1").css("background-color","#006193");
		$("#model_item2").css("background-color","#17BA9D");
		$("#model_item3").css("background-color","#006193");
		$("#about_education_title").text("WEB前端");
		$(".education_right_ul #list1").text("TE");
		$(".education_right_ul #list2").text("Android");
		$(".education_right_ul #list3").text("Android");
	});
	
});

$(document).ready(function(){
	$("#model_item3").click(function(){
		$("#model_item1").css("background-color","#006193");
		$("#model_item2").css("background-color","#006193");
		$("#model_item3").css("background-color","#17BA9D");
		$("#about_education_title").text("WEBAPP+其他");
		$(".education_right_ul #list1").text("TE");
		$(".education_right_ul #list2").text("Android");
		$(".education_right_ul #list3").text("Android");
	});
	
});
