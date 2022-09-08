const GRID = document.getElementById('grid');   //grid container
const SLIDER = document.getElementById('slider');   //grid dimension's input
const SLIDER_TEXT = document.getElementById('slider-dim');  //slider's text (with grid dimension) 
const COLOR_PICKER = document.getElementById('color-picker')    //color picker
const CLEAR_BUTTON = document.getElementById('clear-button');   //clear button
const SQUARES = document.getElementsByClassName('squares')  //list of grid's squares

const GRID_MAX = 600;   //grid's dimension in px

var gridDim = SLIDER.value;     //number of squares in the grid
var squareDim = GRID_MAX/gridDim;   //dimension of squares' side
var mouseDown = false;  //if left-button is down/pressed --> true || else --> false
var color = COLOR_PICKER.value;     //drawing color (taken from COLOR_PICKER)

//change the status of mouseDown if left-button is down or up
document.body.onmousedown  = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

SLIDER.addEventListener('input', newGrid); //when a new dimension is chosen --> create the new grid with new dimension
COLOR_PICKER.addEventListener('input', () => {color = COLOR_PICKER.value}); //when a new color is chosen --> update the drawing color
CLEAR_BUTTON.addEventListener('click', clearGrid);

createGrid(); //the grid must be created at least one time
function createGrid()
{
    //set grid number of columns and rows number
    GRID.setAttribute('style', 'grid-template-columns: repeat('+gridDim+', 1fr); grid-template-rows: repeat('+gridDim+', 1fr)');

    //create all the grid's squares
    for (var i = 0; i < gridDim * gridDim; i++) {
        //create a div square to put inside the grid
        const square = document.createElement('div');

        //square.setAttribute('style', 'height: '+squareDim+'px; width: '+squareDim+'px');
        square.setAttribute('style', 'height: '+squareDim+'px; width: '+squareDim+'px');
        
        //when the square is clicked (or the left-button is down and mouse is over the square) --> change square's background color
        square.addEventListener('click', changeColor);
        square.addEventListener('mouseover', changeColor);

        //add squares' class to the div/square
        square.classList.toggle('squares');
    
        //put the square in the grid
        GRID.appendChild(square);
    }
}

//create a new grid with new dimensions
function newGrid() {
    //set the new dimension
    gridDim = SLIDER.value;
    squareDim = GRID_MAX/gridDim;

    //put the new dimensin in the slider's text
    SLIDER_TEXT.innerHTML = ''+SLIDER.value+' x '+SLIDER.value+'';

    removeGrid(); 
    createGrid();
}

//remove the old grid
function removeGrid() {

    //remove all child element of GRID
    while(GRID.firstChild)  //while there is a first child (is faster to look if there is a fist child)
        GRID.removeChild(GRID.lastChild); //remove the last child (is faster to remove the last element of a list)
}

//change the color of the square when is clicked (or the left-button is down and mouse is over the square)
function changeColor(e) {
    //if the mouse is not down and the function was called because the mouse was over the square, exit the function
    if(!mouseDown && e.type == 'mouseover')
        return

    e.target.style.backgroundColor = color;
}

//clear the grid (put all background to white)
function clearGrid() {

    for(var i = 0; i < SQUARES.length; i++)
        SQUARES[i].style.backgroundColor = 'inherit';
}