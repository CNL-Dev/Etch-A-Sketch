const canvasContainer = document.querySelector('.canvas-container');
const resizeGridButton = document.querySelector('.resize-canvas-button');

// Creates the horizontal rows that will contain
// some of our divs
function createCanvasRows(gridSize) {
    for(let i = 0; i < gridSize; i++) {
        const canvasContainerRow = document.createElement('div');
        canvasContainerRow.classList.add('canvas-container-row');
        canvasContainer.appendChild(canvasContainerRow);
    }
}

// Creates the column divs that will serve as the 
// canvas for the etch-a-sketch
function createCanvasColumns(parent, gridSize) {
    for(let i = 0; i < gridSize; i++) {
        const sketchPart = document.createElement('div');
        sketchPart.classList.add('canvas');
        parent.appendChild(sketchPart);
    }
}

// Generates the canvas
function generateCanvas(gridSize) {
    // We can generate a grid size between 1 and 100
    if(gridSize > 0 && gridSize < 101) {
        createCanvasRows(gridSize);
    
        const canvasRows = document.querySelectorAll('.canvas-container-row');
        canvasRows.forEach((element) => createCanvasColumns(element, gridSize));
        onCanvasHover();
    }   
}

// Removes the canvas
function removeCanvas() {
    while (canvasContainer.hasChildNodes()) {
        canvasContainer.removeChild(canvasContainer.firstChild);
    }
}

// Fills in a canvas spot when the mouse 
// is detected
function onCanvasHover() {
    const canvas = document.querySelectorAll('.canvas');

    for(let i = 0; i < canvas.length; i++) {
        canvas[i].addEventListener('mousemove', (event) => {
            event.target.classList.add('black');
        });
    }
}

// Default canvas for when the site is first loaded
generateCanvas(16);

resizeGridButton.addEventListener('click', () => {
    let input = prompt("Input a number between 1 and 100: ");

    removeCanvas();
    generateCanvas(input);
});