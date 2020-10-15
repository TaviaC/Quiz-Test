$(() => {
    
    var person = prompt('Please enter your name', 'Anonymous');
    if (person != null) {
        localStorage.setItem('playerName', person);
        $("#playerGreeting").html('Welcome to the quiz! ' + localStorage.getItem('playerName'));
        $("#playerGreeting").fadeOut(5000);
    }
    $('.answers p').slideDown('slow');
    $('.answers input[type="radio"]').click(function() {

        let type = $(this).data('type');
        let answeredCorrectCount = $('.answers input[type="radio"]:checked[data-type="1"]').length;
        
        if (type === 1) {
            $('#resultsImage').html('<h3 class="correct">CORRECT!</h3><img src="https://s.yimg.com/ny/api/res/1.2/qkKXZXbS52Ka.bx2MW2ocQ--~A/YXBwaWQ9aGlnaGxhbmRlcjtzbT0xO3c9NzY4O2g9NDk5/http://media.zenfs.com/en_us/News/afp.com/f2b9090c0e41e23f55251a1adbda42b1c6cf8aa5.jpg">');
        } else {
            $('#resultsImage').html('<h3 class= "incorrect">WRONG ANSWER TRY AGAIN</h3><img src="https://www.gamegrin.com/assets/Uploads/_resampled/croppedimage640200-kanyemad.jpg">');
        }

        $('#results').html('<p>Score: ' + answeredCorrectCount + '</p>').show();
    });
});