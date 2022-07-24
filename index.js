// Global Variables
var globarStarterArray = ['blue', 'green', 'red', 'yellow']
var isGameStarted = false;
var globalGameArray = [];
var stage = 1;
var correctlyidentified = 0;
var buttonClicked=false;
var gameOver=false;

$(document).click(function () {
    if(!isGameStarted){ // game starts
    gameStart();
    }
    if(gameOver){ // if game is over then on click start game again
        $('body').css('background-color', '#011F3F');
        isGameStarted=false;
        console.log("startting new game");
        stage=1;
        correctlyidentified=0;
        globalGameArray=[];
        gameOver=false;
        gameStart();

    }
})

function gameStart() {

    if(!isGameStarted || buttonClicked){ // only generate random button when game starts and when next stage is called.
    isGameStarted = true;
    $('#level-title').text('Stage ' + stage);
    var randomButton = Math.floor(Math.random() * 4);
    $('.' + globarStarterArray[randomButton]).fadeOut().fadeIn();
    var audio = new Audio('sounds/' + globarStarterArray[randomButton] + '.mp3');
    audio.play();
    globalGameArray.push(globarStarterArray[randomButton]);
    buttonClicked=false;
    }
}

$('.btn').click(function (event) {
    if (isGameStarted && !gameOver)  //only do the animation when the game starts
    { 
         $('.' + event.currentTarget.id).addClass('pressed');
        setTimeout(() => {
            $('.' + event.currentTarget.id).removeClass('pressed');
        }, 100);

        if (event.currentTarget.id === globalGameArray[correctlyidentified]) {
            correctlyidentified++;
            var audio = new Audio('sounds/' + event.currentTarget.id + '.mp3');
            audio.play();
            if (correctlyidentified === globalGameArray.length) {
                // pattern matched fully go to next stage
                stage++
                $('#level-title').text('Stage ' + stage);
                correctlyidentified=0;
                buttonClicked=true;
                gameStart();
            } 
            else {
                // Wait for users next click
                
            }

        }
        else { // Wrong button clicked
            console.log("ending game");
            $('#level-title').text('Game Over Touch anywhere to Restart');
            $('body').css('background-color', 'red');
            correctlyidentified=0;
            var audio = new Audio('sounds/wrong.mp3');
            audio.play();
            setTimeout(() => {
                gameOver=true;
            }, 1000);
        }
    }
    else{
        // Game already over
    }
})





