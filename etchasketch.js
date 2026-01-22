// Create Square Divs to attach to a parent div
function createSquareDivs(parentDivID, squareDivName, num) {
    const parent = document.getElementById(parentDivID);
    
    for(let i = 0; i <= num; i++) {
        const squareDiv = document.createElement("div");
        squareDiv.classList.add("squareDiv");
        parent.appendChild(squareDiv);
    }
}

createSquareDivs("container", 16);
createSquareDivs("container", 16);