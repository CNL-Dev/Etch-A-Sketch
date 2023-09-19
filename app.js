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
function createCanvasColumns() {
    for(let i = 0; i < 256; i++){
        const sketchPart = document.createElement('div');
        sketchPart.classList.add('sketch');
        container.appendChild(sketchPart);
    }
}