function getComputerChoice(){
    let x = Math.floor(Math.random()*3)+1;
    if(x == 1){
        return "rock";
    } else if (x == 2){
        return "paper";
    } else {
        return "scissor";
    }
}

function rockPaperScissors(computerChoice, playerChoice){
    let a = computerChoice.toString().toLowerCase();
    let b = playerChoice.toString().toLowerCase();
    if(a == b){
        return("It's a draw! " + a + " is the same as " + b);
    } else if (a == "rock" && b == "paper"){
        return("You Won! Paper beats Rock");
    } else if(a == "scissor" && b == "rock"){
        return("You Won! Rock beats Scissors");
    } else if(a == "paper" && b == "scissor"){
        return("You Won! Scissors beats Paper");
    } else if (a == "paper" && b == "rock"){
        return("You Lost! Paper beats Rock");
    } else if(a == "rock" && b == "scissor"){
        return("You Lost! Rock beats Scissors");
    } else if(a == "scissor" && b == "paper"){
        return("You Won! Scissors beats Paper");
    }else {
        return("Invalid Choice!");
    }
}

function game(){
    let playerCount = 0;
    let computerCount = 0;
    for(let i = 0; i < 5; i++){
        let x = getComputerChoice();
        let y = prompt("Please enter your choice");
        let z = rockPaperScissors(x, y);
        if(z.substring(0, 5) == "You W"){
            playerCount++;
        } else if(z.substring(0, 5) == "You L"){
            computerCount++
        }
        console.log(z + " Player: " + playerCount + " Computer: " + computerCount);
    }
}
game();

