
var buttonColours=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedButton=[];
var started = false;
var level=0;


$(document).keydown(function(){
    if(!started){
        $("#level-title").text("level"+ level);
        nextSequence();
        started=true;
}});

$(".btn").click(function(){
    var userChosenColour=$(this).attr("id");
    userClickedButton.push(userChosenColour);
    console.log(userClickedButton);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedButton.length-1);
});
function checkAnswer(currentLevel){
    if(gamePattern[currentLevel]===userClickedButton[currentLevel]){
        console.log("success");
    if(userClickedButton.length===gamePattern.length){
        setTimeout(function(){
            nextSequence();
        },1000)
    }
}
    else{
        playSound("wrong");
        $(body).addClass("game-over");
        $("#level-title").text("Game Over! press any key to restart");

        setTimeout(function(){
         $(body).removeClass("game-over");
        },200);
    }
}
function nextSequence(){
    userClickedButton=[];
    level++;
    $("#level-title").text("level "+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChoosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChoosenColour);
    $("#"+randomChoosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColour);}
    
function playSound(name){
    var audio=new Audio("sounds/"+name+".mp3");
    audio.play();
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed")},100);

}

