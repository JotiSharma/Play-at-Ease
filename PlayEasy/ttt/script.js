let boxes = document.querySelectorAll(".box"); // Select all elements with the class 'box'
let resetbtn = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;
const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetGame = () =>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}
const disableBoxes =() =>
    {
        for(let box of boxes)
            {
                box.disabled = true;
            }
    }
    const enableBoxes =() =>
        {
            for(let box of boxes)
                {
                    box.disabled = false;
                    box.innerText="";
                }
           
        }
const showWinner = (winner) =>  
    {
        msg.innerText=`congratulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableBoxes();
    }

// Function to check for a winner
const checkWinner = () => {
    for (let pattern of winPatterns) {   
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            console.log("WINNER", pos1val);
            showWinner(pos1val) ;
            return pos1val; // Return the winner's symbol
        }
    }
    return null; // Return null if no winner
};

// Add event listeners to each box
boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerText === "") {
            box.innerText = turnO ? "O" : "X";
            turnO =! turnO; // Switch turns
            checkWinner(); // Check for a winner after each move
        }
    });
});

// Example reset button functionality
resetbtn.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = ""; // Clear each box

    });
    turnO = true; // Reset turn
});
 
 newGamebtn.addEventListener("click" , resetGame);
 resetbtn.addEventListener("click" , resetGame);