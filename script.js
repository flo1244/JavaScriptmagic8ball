// JavaScript Document
$(document).ready(function(){
 
    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams.", "Reply hazy try again", "Concentrate and ask again", "You may rely on it", "Signs point to yes", "Very doubtful", "As I see it, yes"];
	
	$("#answer").hide();
	
	//Answerubg the function
	magic8Ball.askQuestion = function(question)
	{
		
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");
		$("#answer").fadeIn(4000);
		
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = (randomNumber * this.listOfAnswers.length);
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];
		
		$("#answer").text(answer);
		
		console.log (question);
		console.log (answer);
		
		
		};
	
	//Function for button
	var onClick = function() {
		$("#answer").hide();
		
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");
		
		//wait half a second before showing prompt
		setTimeout(
			function() {
				//show prompt
		var question = prompt("ASK A YES/NO QUESTION!");
		magic8Ball.askQuestion(question);
		$("#8ball").effect( "shake" );
		},500);
		
	};	 
	
     $("#questionButton").click( onClick );
		
	
});