const GRID = document.getElementById('grid');
const SLIDER = document.getElementById('slider');

var GRID_DIM = SLIDER.value; //number of squares in the grid
var SQUARE_DIM = 400/GRID_DIM; //dimension of squares' side

SLIDER.addEventListener('input', newGrid);

createGrid();

function createGrid()
{
    GRID.setAttribute('style', 'grid-template-columns: repeat('+GRID_DIM+', 1fr); grid-template-rows: repeat('+GRID_DIM+', 1fr)');

    for (i = 0; i < GRID_DIM * GRID_DIM; i++) {
        //create a div square to put inside the grid
        const square = document.createElement('div');
        square.setAttribute('style', 'height: '+SQUARE_DIM+'px; width: '+SQUARE_DIM+'px');
    
        square.addEventListener('click', () => {
            square.style.backgroundColor = 'black';
        });
    
        //put the square in the grid
        GRID.appendChild(square);
    }
}

function newGrid() {
    GRID_DIM = SLIDER.value;
    SQUARE_DIM = 400/GRID_DIM;

    removeGrid();
    createGrid();
}

function removeGrid() {
    while(GRID.firstChild) {
        GRID.removeChild(GRID.lastChild);
    }
}