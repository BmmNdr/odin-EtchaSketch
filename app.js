const GRID = document.getElementById('grid');
const SLIDER = document.getElementById('slider');

const GRID_MAX = 600; //grid's dimension in px

var gridDim = SLIDER.value; //number of squares in the grid
var squareDim = GRID_MAX/gridDim; //dimension of squares' side
var mouseDown = false;

document.body.onmousedown  = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


SLIDER.addEventListener('input', newGrid);

createGrid();

function createGrid()
{
    GRID.setAttribute('style', 'grid-template-columns: repeat('+gridDim+', 1fr); grid-template-rows: repeat('+gridDim+', 1fr)');

    for (i = 0; i < gridDim * gridDim; i++) {
        //create a div square to put inside the grid
        const square = document.createElement('div');
        //square.setAttribute('style', 'height: '+squareDim+'px; width: '+squareDim+'px');
        square.setAttribute('style', 'height: '+squareDim+'px; width: '+squareDim+'px');
    
        square.addEventListener('click', changeColor);
        square.addEventListener('mouseover', changeColor);
    
        //put the square in the grid
        GRID.appendChild(square);
    }
}

function newGrid() {
    gridDim = SLIDER.value;
    squareDim = GRID_MAX/gridDim;

    removeGrid();
    createGrid();
}

function removeGrid() {
    while(GRID.firstChild) {
        GRID.removeChild(GRID.lastChild);
    }
}

function changeColor(e) {
    if(mouseDown)
        e.target.style.backgroundColor = 'black';
}