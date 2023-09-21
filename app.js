const container = document.querySelector('.canvas-container');

// Creates the horizontal rows that will contain
// some of our divs
function createCanvasRows() {
    for(let i = 0; i < 16; i++){
        const containerRow = document.createElement('div');
        containerRow.classList.add('canvas-container-row');
        container.appendChild(containerRow);
    }
}

// Creates the column divs that will serve as the 
// canvas for the etch-a-sketch
function createCanvasColumns(parent) {
    for(let i = 0; i < 16; i++){
        const sketchPart = document.createElement('div');
        sketchPart.classList.add('canvas');
        parent.appendChild(sketchPart);
    }
}

// Generates the canvas
function generateCanvas() {
    createCanvasRows();
    
    const canvasRows = document.querySelectorAll('.canvas-container-row');
    canvasRows.forEach((element) => createCanvasColumns(element));
    onCanvasHover();
}

// Fills in a canvas spot when the mouse 
// is detected
function onCanvasHover() {
    const canvas = document.querySelectorAll('.canvas');

    for(let i = 0; i < canvas.length; i++){
        canvas[i].addEventListener('mousemove', (event) => {
            event.target.classList.add('black');
        });
    }
}

generateCanvas();