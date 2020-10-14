//THINGS I WANT ON MY WEBSITE//

//User lands on the website, the game pops up on the screen//
//Storage  for user input//
//User hits start button// //Tool//  
//User hits next button to go forth to the next question // No back button//
//The questions appear, Question 1, Questioin 2, Question 3//
//Answers a,b - choose the correct answer//
// Timer for the question & answers 3 seconds, Timer for next question // Tool//
//If the answer is incorrect- the answer turns "RED"//
// If the answer is correct- the answer turns "GREEN"//
//Function for the score button//
// End game// or //Restart//

$(() => {
    ​//User lands on the website to the Quiz game// User enters their name
      var person = prompt('Please enter your name', 'Anonymous');
    ​  
    //Storage  for user input// go to the console/ go to the application// you will see if this is storing the user input
     // w3schools.com//
        
     if (person != null) {
            localStorage.setItem('playerName', person);
    ​
            $("#playerGreeting").html('Welcome to the quiz! ' + 
            localStorage.getItem('playerName'));
            $("#playerGreeting").fadeOut(5000);
        }
    
    ​// slide down tool for answers//
        $('.answers p').slideDown('slow');
        $('.answers input[type="radio"]').click(function () {
   
            // $(this) is just a short way of doing this $('.answers input[type="radio"]')
//data('type') The value of the "data-type" attribute that is in the HTML
//Youtube video//
        let type = $(this).data('type');
        
  //How many answers that have the "data-type" attribute with the value of "1" are selected      
   let answeredCorrectCount = $('.answers input[type="radio"]:checked[data-type="1"]').length;

   //if it is the correct answer meaning if the input with a data-type="1" was selected
    if(type === 1) {
        $('#resultsImage').html('<h3 class="correct">CORRECT!</h3><img src="https://media.gettyimages.com/photos/drake-attends-the-premiere-of-hbos-euphoria-at-the-cinerama-dome-on-picture-id1153778011?s=612x612">');

 //Select <div id="resultsImage"></div> by ID with Jquery and add this HTML inside of the element 
    } else {
        $('#resultsImage').html('<h3 class="incorrect">WRONG ANSWER TRY AGAIN</h3><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSCvOUtTeduswrWVzw1Mc0E3Uq9GfbSqIYk4Q&usqp=CAU">');
    }


});
    });

