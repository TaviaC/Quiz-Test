$(() => {
    ​//User lands on the website to the Quiz game// User enters their name
      var person = prompt('Please enter your name', 'Anonymous');
    ​  
    //Storage  for user input // storing the user input
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

        let type = $(this).data('type');
        let answeredCorrectCount = $('.answers input[type="radio"]:checked[data-type="1"]').length;
​
        if(type === 1) {
            $('#resultsImage').html('<h3 class="correct">CORRECT!</h3><img src="https://media.gettyimages.com/photos/drake-attends-the-premiere-of-hbos-euphoria-at-the-cinerama-dome-on-picture-id1153778011?s=612x612">');
            } else {
            $('#resultsImage').html('<h3 class="incorrect">WRONG ANSWER TRY AGAIN</h3><img src="https://www.gamegrin.com/assets/Uploads/_resampled/croppedimage640200-kanyemad.jpg">');
        }
        
        $('#results').html('<p>Score: ' + answeredCorrectCount + '</p>').show();
​
   
});
    });

