
const container = document.querySelector("#container");
//Makes 256 divs to act as starting screen size
for (let i = 1; i<257; i++) {
    let squareDiv = document.createElement("div")
    squareDiv.classList.add("square");
    container.appendChild(squareDiv);
    
};


container.addEventListener("mouseover", (event) => {
    target = event.target
    if (target.classList.contains("square")) {
        target.classList.add("square-color")
    }
})  
