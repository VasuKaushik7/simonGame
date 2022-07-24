$('.btn').click(function (event) {
    console.log('clicked');
    if (isGameStarted && !gameOver) {
        console.log(event.currentTarget.id);
        $('.' + event.currentTarget.id).addClass('pressed');
        setTimeout(() => {
            $('.' + event.currentTarget.id).removeClass('pressed');
        }, 100);

        var audio = new Audio('sounds/' + event.currentTarget.id + '.mp3');
        audio.play();
        if (event.currentTarget.id === globalGameArray[correctlyidentified]) {
            correctlyidentified++;
            if (correctlyidentified === globalGameArray.length) {
                stage++
                $('#level-title').text('Stage ' + stage);
                correctlyidentified=0;
                buttonClicked=true;
                gameStart();
            }
            else {
                console.log('doNothing');
                
            }

        }
        else {
            $('#level-title').text('Game Over Reload to Restart');
            $('body').css('background-color', 'red');
            // isGameStarted=false;
            correctlyidentified=0;
            gameOver=true;
        }
    }
    else{
        console.log('gameOver')
    }
})

$(document).keypress(function () {
    gameStart();

})
var globarStarterArray = ['blue', 'green', 'red', 'yellow']
var isGameStarted = false;
var globalGameArray = [];
let stage = 1;
var correctlyidentified = 0;
var buttonClicked=false;
var gameOver=false;
function gameStart() {
    console.log("game start called",isGameStarted);
    if(!isGameStarted || buttonClicked){
    isGameStarted = true;
    // console.log("loopCount", loopCount)
    $('#level-title').text('Stage ' + stage);
    var randomButton = Math.floor(Math.random() * 4);
    console.log("randomButton", randomButton);
    $('.' + globarStarterArray[randomButton]).fadeOut().fadeIn();
    var audio = new Audio('sounds/' + globarStarterArray[randomButton] + '.mp3');
    audio.play();
    globalGameArray.push(globarStarterArray[randomButton]);
    buttonClicked=false;
    }
}

