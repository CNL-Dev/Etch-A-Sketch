const canvasContainer = document.querySelector('.canvas-container');
const resizeGridButton = document.querySelector('.resize-canvas-button');

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