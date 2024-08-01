

//Makes 16 divs on each side 256 total to act as starting screen size
makeScreen(16);
    

function makeScreen(sidesLength) {
    const container = document.querySelector("#container");
    totalDivs = sidesLength*sidesLength ;
    for (let i = 1; i<=totalDivs; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.style.flex = `0 0 ${100/sidesLength}%`
        container.appendChild(squareDiv);
    };
};

// Every square hovered over recieves the square-color class giving it a new color
container.addEventListener("mouseover", (event) => {
    target = event.target
    if (target.classList.contains("square")) {
        target.classList.add("square-color")
    }
})  

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    screenSize = prompt("Enter the Number of Squares You Want on Each Side")
    if (!Number.isInteger(parseInt(screenSize)) || screenSize-Math.floor(screenSize) !== 0 || screenSize>100  )  {
        alert("Invalid Response")
    }
    else {
        //Removes all squares then creates new squares
        allSquares = document.getElementsByClassName("square");
        while(allSquares[0]) {
            [allSquares[0].remove()]
        }
        makeScreen(screenSize)
    }
})