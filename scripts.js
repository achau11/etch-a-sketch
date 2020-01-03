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
}
// function to change color of div on hover:
function changeColor(e){
    e.target.classList.add('hover');
}
// start
createGrid(16);  

// add event listener to each div in grid
const divs = document.querySelectorAll('.container div');
divs.forEach( function(divs){
    divs.addEventListener('mouseover', changeColor);
});               
//function to revert color of all divs:
function revertColor(){
    divs.forEach(function(divs){
        divs.classList.remove('hover');
    });
}
// prompt user for squares on button click and make grid of size
const button = document.querySelector('button');
button.addEventListener('click', function(e){
    const numOfSquares = prompt("How many squares per side for new grid?");
    createGrid(numOfSquares);
    revertColor();
});