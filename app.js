const GRID = document.getElementById('grid');
const SLIDER = document.getElementById('slider');
const SLIDER_DIM = document.getElementById('slider-dim');
const COLOR_PICKER = document.getElementById('color-picker')
const CLEAR_BUTTON = document.getElementById('clear-button');
const SQUARES = document.getElementsByClassName('squares')

const GRID_MAX = 600; //grid's dimension in px

var gridDim = SLIDER.value; //number of squares in the grid
var squareDim = GRID_MAX/gridDim; //dimension of squares' side
var mouseDown = false;
var color = COLOR_PICKER.value;

document.body.onmousedown  = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

SLIDER.addEventListener('input', newGrid);
COLOR_PICKER.addEventListener('input', () => {color = COLOR_PICKER.value});
CLEAR_BUTTON.addEventListener('click', clearGrid);

createGrid();
function createGrid()
{
    GRID.setAttribute('style', 'grid-template-columns: repeat('+gridDim+', 1fr); grid-template-rows: repeat('+gridDim+', 1fr)');

    for (var i = 0; i < gridDim * gridDim; i++) {
        //create a div square to put inside the grid
        const square = document.createElement('div');
        
        //square.setAttribute('style', 'height: '+squareDim+'px; width: '+squareDim+'px');
        square.setAttribute('style', 'height: '+squareDim+'px; width: '+squareDim+'px');
    
        square.addEventListener('click', changeColor);
        square.addEventListener('mouseover', changeColor);

        square.classList.toggle('squares');
    
        //put the square in the grid
        GRID.appendChild(square);
    }
}

function newGrid() {
    gridDim = SLIDER.value;
    squareDim = GRID_MAX/gridDim;

    SLIDER_DIM.innerHTML = ''+SLIDER.value+' x '+SLIDER.value+'';

    removeGrid();
    createGrid();
}

function removeGrid() {
    while(GRID.firstChild)
        GRID.removeChild(GRID.lastChild);
}

function changeColor(e) {
    if(!mouseDown && e.type == 'mouseover') 
        return

    e.target.style.backgroundColor = color;
}

function clearGrid() {

    for(var i = 0; i < SQUARES.length; i++)
        SQUARES[i].style.backgroundColor = 'white';
}