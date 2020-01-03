// notes for me: read more on foreach, css grid.

const container = document.querySelector('.container');
// function to create sizexsize grid:
function createGrid(size){
    for (i = 0; i < size; i++){
        for (x = 0; x < size; x++){
            let gridBox = document.createElement('div');
            container.appendChild(gridBox);
        }   
    }
    // add event listener to each div in grid
    const divs = document.querySelectorAll('.container div');
    divs.forEach( function(divs){
        divs.addEventListener('mouseover', function(e){
            e.target.classList.add('hover');
        });
    });  
}
function clearGrid(){
    const divs = document.querySelectorAll('.container div');
    divs.forEach( function(e){
        e.parentNode.removeChild(e);
        });
}
// start
createGrid(16);  

// prompt user for squares on button click, and make grid of size
const button = document.querySelector('button');
button.addEventListener('click', function(e){
    const numOfSquares = prompt("How many squares per side for new grid?");
    clearGrid();
    // Create new grid
    createGrid(numOfSquares);
    container.style.gridTemplateColumns = `repeat(${numOfSquares}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numOfSquares}, 1fr)`;
});