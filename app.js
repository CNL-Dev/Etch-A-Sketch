const container = document.querySelector('.container');

// Creates 256 divs that will serve as our canvas for the
// etch-a-sketch
for(let i = 0; i < 256; i++){
    const sketchPart = document.createElement('div');
    sketchPart.classList.add('sketch');
    container.appendChild(sketchPart);
}