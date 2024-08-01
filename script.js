

//Makes 16 divs on each side 256 total to act as starting screen size
makeScreen(16);


function makeScreen(sidesLength) {
    const container = document.querySelector("#container");
    totalDivs = sidesLength * sidesLength;
    for (let i = 1; i <= totalDivs; i++) {
        let squareDiv = document.createElement("div");
        squareDiv.classList.add("square");
        squareDiv.style.flex = `0 0 ${100 / sidesLength}%`
        container.appendChild(squareDiv);
    };
};

function getRanRgbVal() {
    // Cuts off to 60-245 to not have colors that are too bright
    // or too dark but favors brighter colors
    return Math.floor(Math.random() * 215) + 30
    //return Math.floor(Math.random() * 256)
}

// Every square hovered over recieves the square-color class giving it a new color
container.addEventListener("mouseover", (event) => {
    target = event.target
    if (!(target.classList.contains("square"))) {
        return
    }
    if (target.style.backgroundColor == "") {
        target.style.backgroundColor = `rgb(${getRanRgbVal()},${getRanRgbVal()},${getRanRgbVal()})`;
        target.style.opacity = '.2'
        console.log(target.style.backgroundColor)
    }
    else {
        //After color is set darkens 9 times to full opacity
        target.style.opacity = parseFloat(target.style.opacity) + .1
    }
})

const btn = document.querySelector("#btn")
btn.addEventListener("click", () => {
    screenSize = prompt("Enter the Number of Squares You Want on Each Side")
    //Error Checks
    if (!Number.isInteger(parseInt(screenSize)) || screenSize - Math.floor(screenSize) !== 0 || screenSize > 100) {
        alert("Invalid Response")
    }
    else {
        //Removes all squares then creates new squares
        allSquares = document.getElementsByClassName("square");
        while (allSquares[0]) {
            [allSquares[0].remove()]
        }
        makeScreen(screenSize)
    }
})