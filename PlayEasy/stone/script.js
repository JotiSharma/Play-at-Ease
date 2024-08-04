let userScore = 0;
let compScore = 0;
let userScorePara = document.querySelector("#user-score");
let compScorePara = document.querySelector("#comp-score");
let msg = document.getElementById("msg");
const choices = document.querySelectorAll(".choice img");

const genCompChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
}
const drawGame = ()=>{
  msg.innerText ="Game was Drawn!!";
  msg.style.backgroundColor ="yellow";
  console.log("game was drawn");
}

showWinner =(userWin , userChoice , compChoice)=>{
  if(userWin)
    { 
      userScore++;
      userScorePara.innerText =userScore;
      console.log("YOU WIN !!");
      msg.innerText =`You Win !! ${userChoice} beats ${compChoice}`;
      msg.style.backgroundColor ="green";
    }
  else
  { 
    compScore++;
    compScorePara.innerText = compScore;
    console.log("YOU LOOSE !!")
    msg.innerText =`You Loose !! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor ="red";
  }
}
const playGame = (userChoice) => {
    console.log("user choice=", userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice=", compChoice);
    if(userChoice === compChoice)
      //draw game
    {
      drawGame();
    }
  
    else
    {
      let userWin= true;
      if(userChoice === "rock")
        {
           userWin=  compChoice === "paper" ? false : true;
        }
      else if(userChoice === "paper")
        {
          userWin = compChoice === "scissor" ? false :true;
        }
     else if(userChoice === "scissor")
        {
          userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin , userChoice , compChoice)  ;
    }

}

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("choice was clicked", userChoice);
        playGame(userChoice);
    });
});
