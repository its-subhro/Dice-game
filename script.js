var name_1;
var name_2;

var play_1;
var play_2;

document.querySelector(".start").addEventListener("click",function takeInput() {

     name_1 = prompt("Enter player 1 name:");
     name_2 = prompt("Enter player 2 name:"); 

    document.querySelector(".player1").textContent = name_1;
    document.querySelector(".player2").textContent = name_2;
    document.querySelector(".start").style.display = "none";
    document.querySelector(".play-button").style.display = "block";      
});

document.querySelector(".play-button").addEventListener("click",function rollDice() {

     play_1 = Math.floor(Math.random()*6)+1;
     play_2 = Math.floor(Math.random()*6)+1;

    if (play_1 > play_2) {

        document.querySelector(".winner-name").textContent = "Winner is "+name_1;
        document.querySelector(".dice1").src = "dice"+play_1+".png";
        document.querySelector(".dice2").src = "dice"+play_2+".png";
    } 
    else if (play_2 > play_1){
        
        document.querySelector(".winner-name").textContent = "Winner is "+name_2;
        document.querySelector(".dice1").src = "dice"+play_1+".png";
        document.querySelector(".dice2").src = "dice"+play_2+".png";
        
    }
    else if (play_1===play_2) {
        document.querySelector(".winner-name").textContent = "Match Draw";
        document.querySelector(".dice1").src = "dice"+play_1+".png";
        document.querySelector(".dice2").src = "dice"+play_2+".png";
    }
});
