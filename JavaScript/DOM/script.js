let hello =  document.querySelector("h2");
hello.innerText += " from Apna College students";

let boxes = document.querySelectorAll(".box");
boxes[0].innerText = "These are"
boxes[1].innerText = "3 boxes"
boxes[2].innerText = "with unique texts"

let newButton = document.createElement("button");
newButton.innerText = "Click me"
newButton.style.backgroundColor = "red";
newButton.style.color = "white";
document.querySelector("body").prepend(newButton);

let para = document.querySelector(".paragraph");
para.classList.add("paragraph-upd1");