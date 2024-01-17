let body = document.querySelector("body");
let toggleButton = document.querySelector("#toggle-button");

const switchMode = () => {
    if(body.style.backgroundColor === "white" || body.style.backgroundColor === ""){
        body.style.backgroundColor = "black";
        toggleButton.innerText = "Switch to light mode";
    }else{
        body.style.backgroundColor = "white";
        toggleButton.innerText = "Switch to dark mode";
    }
}

toggleButton.addEventListener("click", switchMode);