function check(){

	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	// var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	// var question6 = document.quiz.question6.value;
	var correct = 0;
	var percent;
	var total=3;
	var wrong;
	var comments;
	if (question2 == "Array") {
		correct++;
	}
	if (question3 == "Yes") {
		correct++;
	}
	// if (question4 == "Netscape") {
	// 	correct++;
	// }
	if (question5 == 122) {
		correct++;
	}
	// if (question6 == "Loop") {
	// 	correct++;
	// }
	wrong=total-correct;
	percent=(100*correct)/total;

	if(percent>=80){
		comments=" You have excellently passed.";
	}
	else if (percent>=50) {
		comments="You have fairly passed";
	}
	else{
		comments="Poor performance please retake the test";
	}

	var pics = ["images/win.gif", "images/mid.gif", "images/fail.gif"];
	var score;

	if (correct == 0) {
		score = 2;
	}

	if (correct > 0 && correct < 3) {
		score = 1;
	}

	if (correct == 3) {
		score = 0;
	}


	document.getElementById("percent").innerHTML = "You score in percent " + percent;
	document.getElementById("number_correct").innerHTML = "You got " + correct + " out of " + total;
	document.getElementById("wrong").innerHTML = "Number wrong Answers " + wrong ;
	document.getElementById("comments").innerHTML = comments;
	document.getElementById("pics").src = pics[score];
}
$(document).ready(function() {
	$(".clickable").click(function() {
		$("#output").slideToggle();
	});
});

$(document).ready(function() {
	$(".clickable").click(function() {
		$("#hide").slideToggle()
		$("#hide").show();
	});
});

$(document).ready(function() {
	$("#hide").click(function() {
		$("#hide").slideToggle()
		$("#output").hide();
	});
});
