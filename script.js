

    var name_1 = prompt("Enter player 1 name:");
    var name_2 = prompt("Enter player 2 name:"); 
    document.querySelector(".player1").textContent = name_1;
    document.querySelector(".player2").textContent = name_2;            
    
function rollDice() {

    var play_1 = Math.floor(Math.random()*6)+1;
    var play_2 = Math.floor(Math.random()*6)+1;

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
}