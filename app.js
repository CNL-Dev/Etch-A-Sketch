const container = document.querySelector('.container');

// Creates the horizontal rows that will contain
// some of our divs
function createCanvasRows() {
    for(let i = 0; i < 16; i++){
        const containerRow = document.createElement('div');
        containerRow.classList.add('container-row');
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
    
    const canvasRows = document.querySelectorAll('.container-row');
    canvasRows.forEach(element => createCanvasColumns(element));
}

generateCanvas();