const canvasContainer = document.querySelector('.canvas-container');
const resizeGridButton = document.querySelector('.resize-canvas-button');
const clearCanvasButton = document.querySelector('.clear-canvas-button');

// Creates a x * x canvas via user input
function createCanvas(parent, gridSize) {
    for(let i = 0; i < gridSize * gridSize; i++) {
        const canvas = document.createElement('div');
        canvas.classList.add('canvas');
        parent.appendChild(canvas);
    }
}

// Generates the canvas
function generateCanvas(gridSize) {
    // We can generate a grid size between 1 and 100
    if(gridSize > 0 && gridSize < 101) {
        canvasContainer.setAttribute('style', `grid-template-columns: repeat(${gridSize}, 2fr); grid-template-rows: repeat(${gridSize}, 2fr);`);
        createCanvas(canvasContainer, gridSize);

        onCanvasHover();
    }else {
        alert("Invalid input! A 16x16 canvas has been generated!");
        generateCanvas(16);
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

// Clears the current canvas
function clearCanvas() {
    const filledCanvas = document.querySelectorAll('.black');
    for(let i = 0; i < filledCanvas.length; i++) {
        filledCanvas[i].classList.remove('black');
    }
}

clearCanvasButton.addEventListener('click', clearCanvas);

resizeGridButton.addEventListener('click', () => {
    let input = prompt("Input a number between 1 and 100: ");

    removeCanvas();
    generateCanvas(input);
});

// Default canvas for when the site is first loaded
generateCanvas(16);