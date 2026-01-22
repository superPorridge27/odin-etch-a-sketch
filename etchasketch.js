// Create Square Divs to attach to a parent div
function createGrid(parentDivID, numOfSquares) {
    const parent = document.getElementById(parentDivID);
    const divSize = (500 / numOfSquares);
    const totalSquares = numOfSquares * numOfSquares;
    
    for(let i = 0; i < totalSquares; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        squareDiv.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = `#000`;
        })
        squareDiv.style.width = `${divSize}px`;
        squareDiv.style.height = `${divSize}px`;
        parent.appendChild(squareDiv);
    }
}

// Calling createGrid to instantiate the Grid
createGrid("container", 16)

