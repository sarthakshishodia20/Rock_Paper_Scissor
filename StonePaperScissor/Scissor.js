let userScore=0;
let compScore=0;


const uScore=document.querySelector("#userScore");
const cScore=document.querySelector("#compScore");

const msg=document.querySelector("#msg");
const generateComputerChoice=()=>{
    // rock paper scissor
    let options=["rock","paper","scissor"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

}

const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        uScore.innerText=userScore;
        console.log("You win");
        msg.innerText="You Win";
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        console.log("You Lose");
        cScore.innerText=compScore;
        msg.innerText="You Lose";
        msg.style.backgroundColor="red";
    }
}
const playgame=(userChoice)=>{
    console.log("userChoice = ",userChoice);
    // generate Computer Choice
    const compChoice=generateComputerChoice();
    console.log("Computer Choice= ",compChoice);
    if(userChoice===compChoice){
        // Draw Game
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            // scissor or paper
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            // rock ,scissor
            userWin=compChoice==="scissor"?false:true;
        }
        else{
            // rock ,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="Game Draw ! Play Again";
    msg.style.backgroundColor="blue";
}
const choices=document.querySelectorAll(".choice");
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("Choice was clicked");
        // console.log(userChoice);
        playgame(userChoice);

    })
});





