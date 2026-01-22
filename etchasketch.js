// Create Square Divs to attach to a parent div
function createGrid(parentDivID, numOfSquares) {
    const parent = document.getElementById(parentDivID);
    const divSize = (500 / numOfSquares);
    const totalSquares = numOfSquares * numOfSquares;
    
    for(let i = 0; i < totalSquares; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        squareDiv.style.opacity = "0.1";
        squareDiv.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = `rgb(${randomRGB()})`;
            increaseOpacity(e.target);
        })
        squareDiv.style.width = `${divSize}px`;
        squareDiv.style.height = `${divSize}px`;
        parent.appendChild(squareDiv);
    }
}

// Generate random rgb value
function randomRGB () {
    const r = randomInteger(255);
    const g = randomInteger(255);
    const b = randomInteger(255);

    return r + "," + g + "," + b;
}

// Generate random integer from 0 to max
function randomInteger(maxNum) {
    return Math.floor(Math.random() * maxNum);
}

// Increase opacity given an element
function increaseOpacity(ele) {
    let curOpac = getComputedStyle(ele).opacity;
    ele.style.opacity = parseFloat(curOpac) + 0.1;
}

const gridBtn = document.getElementById("gridBtn");
gridBtn.addEventListener("click", function (e) {
    // Prompt the user for grid size
    let desiredGridSize = prompt("How big the grid should be? (0 to 100)");
    
    // Clear the grid
    document.querySelectorAll(".squareDiv").forEach(e => e.remove);
    const container = document.getElementById("container");
    while(container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Draw the grid
    if(desiredGridSize <= 100 && desiredGridSize >= 0)
    {
        createGrid("container", desiredGridSize);
    } else {
        alert("Invalid grid size!");
    }
});