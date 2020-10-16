$(() => {
    //User storage
    //w3schools.com
    var person = prompt('Please enter your name', 'Anonymous');
    if (person != null) {
        localStorage.setItem('playerName', person);
        $("#playerGreeting").html('Welcome to the quiz! ' + localStorage.getItem('playerName'));
        $("#playerGreeting").fadeOut(5000);
    }
    $('.answers p').slideDown('slow');
    $('.answers input[type="radio"]').click(function() {

// $(this) is just a short way of doing this $('.answers input[type="radio"]')
//data('type') The value of the "data-type" attribute that is in the HTML <input type="radio" name="q1" data-type="0">

         let type = $(this).data('type');

//How many answers that have the "data-type" attribute with the value of "1" are selected

        let answeredCorrectCount = $('.answers input[type="radio"]:checked[data-type="1"]').length;
        
//if it is the correct answer meaning if the input with a data-type="1" was selected

        if (type === 1) {


            $('#resultsImage').html('<h3 class="correct">CORRECT!</h3><img src="https://admin.promonews.tv/sites/default/files/styles/bmvd_content_page/public/drake%20laugh%20now.jpg?itok=Nal_X8dG">');
       
        } else {
            $('#resultsImage').html('<h3 class= "incorrect">WRONG ANSWER TRY AGAIN</h3><img src="https://www.gamegrin.com/assets/Uploads/_resampled/croppedimage640200-kanyemad.jpg">');
        }


//Select <div id="results"></div> by ID with Jquery and add this HTML inside of the element AND then SHOW it 
        $('#results').html('<p>Score: ' + answeredCorrectCount + '</p>').show();
    });
});