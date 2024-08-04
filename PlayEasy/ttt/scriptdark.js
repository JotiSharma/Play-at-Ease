let modebtn = document.querySelector("#mode-btn");
let currMode = "light";
let d=document.querySelector("#box");

//DOM MANIPULATION WITH STYLE DOM
d.style.backgroundColor="blue";
d.style.width="30px"
// d.style.visibility="hidden";



//STEPS TO ADD ELEMENT(DOM)
//CREATE NEW ELEMENT OF HTML USING DOM

//INSERT ELEMENTS METHOD
//node.append(el) -- add at the end of the node(inside)
//node.prepend(el) -- add at the starting of the node(inside)
//node.before(el) -- adds before the node(outisde)
//node.after(el)-- adds after the node(outside)

//DELETE ELEMENTS METHOD 
//node.remove()
let newbtn=document.createElement("button");
newbtn.innerText="I am a new button made by append function";
d.append(newbtn);

let newHeading=document.createElement("h1")
newHeading.innerHTML ="<i>Hi i am a new heading made by create element </i>";
let b=document.querySelector("body");
b.prepend(newHeading);


//ADD EVENT LISTENER(EVENT HANDLING)
modebtn.addEventListener("click", () => {
    if (currMode === "light") {
        currMode = "dark";
        document.body.style.backgroundColor = "black";
    } else {
        currMode = "light";
        document.body.style.backgroundColor = "white";
    }

});

