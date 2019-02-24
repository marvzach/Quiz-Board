function check(){
	var question2 = document.quiz.question2.value;
	var question3 = document.quiz.question3.value;
	var question4 = document.quiz.question4.value;
	var question5 = document.quiz.question5.value;
	var question6 = document.quiz.question6.value;
	var correct = 0;
	var percent;
	var total=5;
	var wrong;
	var comments;

	if (question2 == "Array") {
		correct++;
	}
	if (question3 == "Yes") {
		correct++;
	}
	if (question4 == "Netscape") {
		correct++;
	}
	if (question5 == 122) {
		correct++;
	}
	if (question6 == "Loop") {
		correct++;
	}
	wrong=total-correct;
	percent=(100*correct)/total;
