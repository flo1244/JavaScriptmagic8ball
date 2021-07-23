// JavaScript Document
$(document).ready(function(){ //This makes it clear to the DOM that there's jQuery/jQueryUI at work!
 
    var magic8Ball = {};
    magic8Ball.listOfAnswers = ["No", "Yes", "I don't think so...", "Of course!", "Indubitably", "In your dreams.", "Reply hazy try again", "Concentrate and ask again", "You may rely on it", "Signs point to yes", "Very doubtful", "As I see it, yes"];
	
	$("#answer").hide();
	
	//Answer the function
	magic8Ball.askQuestion = function(question) // define the method
	{
		
		$("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");//final image
		$("#answer").fadeIn(4000); // answer fades in few seconds
		
        var randomNumber = Math.random();// create a random number
        var randomNumberForListOfAnswers = (randomNumber * this.listOfAnswers.length); // make the random number between 0 and the number of items in your array --> giving a random answer from list
        var randomIndex = Math.floor(randomNumberForListOfAnswers); // round down the number to be a whole number
        var answer = this.listOfAnswers[randomIndex]; // use that number to index a random number from the answers array
		
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
		$("#8ball").effect( "shake" ); // image shakes for few seconds image will be swapped out with magic8ballanswer img.
		},500);
		
	};	 
	
     $("#questionButton").click( onClick );
		
	
});