let character = document.getElementById('character');
let character_img = document.getElementById('pika');
let obstacle = document.getElementById("obstacle");
let score = 0;
let state = "running";

// add background music
let bgMusic = document.getElementById('bg-music');
bgMusic.play();

// add gameover music
let gameoverMusic = document.getElementById('gameover-music');

// event listener for character
document.addEventListener('keydown', function(){
    jump();
});

// method for jump event
function jump(){
    if(character.classList != "jump-animation"){
        character.classList.add("jump-animation");
    }
    setTimeout(function(){
        character.classList.remove("jump-animation");
    },500)
}

function checkCollision(){
    let obstacleLeft = obstacle.offsetLeft;
    let characterTop = character.offsetTop;
    if(obstacleLeft < 450 && obstacleLeft > 300 && characterTop > 400){
        state = "gameOver";
        obstacle.style.display = "none";
        character_img.src="2a9n.gif";
        // stop background music
        bgMusic.pause();
        gameoverMusic.play();
        setTimeout(function(){
            character_img.src="dribbble.gif";
            // show game over message with current score
            document.body.innerHTML = '<h1 style="text-align: center; margin-top: 50px;">Game Over</h1><p style="text-align: center;">Your score was: ' + score + '</p>';
            // clear everything after 3 seconds
            setTimeout(function(){
                location.reload();
            }, 5000);
        },1000)
    }
}


setInterval(()=>{
   checkCollision();
},50);

setInterval(()=>{
    if(state == 'running'){
      score = score + 1;
      document.getElementById("score").innerHTML =`Score :`+ score;
    }    

},1000);

// add event listener to reset game on click
document.getElementById("reset").addEventListener("click", function() {
  // reset state
  state = "running";
  score = 0;
  document.getElementById("score").innerHTML = score;

  // reset obstacle position
  obstacle.style.display = "block";
  obstacle.style.left = "80vw";

 
});
