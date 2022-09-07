const GRID = document.getElementById('grid');

const GRID_DIM = 16; //number of squares in the grid
const SQUARE_DIM = 400/GRID_DIM; //dimension of squares' side

GRID.setAttribute('style', 'grid-template-columns: repeat('+GRID_DIM+', auto)');

for (i = 0; i < GRID_DIM * GRID_DIM; i++) {
    //create a div square to put inside the grid
    const square = document.createElement('div');
    square.setAttribute('style', 'height: '+SQUARE_DIM+'px; width: '+SQUARE_DIM+'px; border: solid 1px gray');

    square.addEventListener('click', changeColor);

    //put the square in the grid
    GRID.appendChild(square);
}

function changeColor(e) {
    e.target.style.backgroundColor = 'black';
    e.target.style.border = 'solid 1px black';
}