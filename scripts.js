const container = document.querySelector('.container');
// Create 16x16 Divs:
function createGrid(size){
    for (i = 0; i < size; i++){
        for (x = 0; x < size; x++){
            const gridBox = document.createElement('div');
            gridBox.textContent = "I'm a box";
            container.appendChild(gridBox);
        }   
    }
}
createGrid(16);
