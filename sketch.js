console.log("Hello World!");

function makeGrid(){
    const grid = document.querySelector("#grid")
    for(let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            console.log("Making box " + i + " " + j);
            const square = document.createElement("div");
            square.classList.add('square');
            square.dataset.darkness = '1';
            grid.appendChild(square);

            square.addEventListener('mouseenter', () => {
                changeColor(square);
            });
        
        }
    }
}

/*function changeColor(square){
    let currBrightness = parseFloat(square.dataset.darkness) || 1;
    currBrightness = Math.max(0, currBrightness-0.1);
    square.style.backgroundColor = `rgba(255, 255, 255, ${currBrightness})`; 
    square.dataset.darkness = currBrightness;
}*/

function changeColor(square){
    let currDarkness = parseFloat(square.dataset.darkness) || 1;
    currDarkness = Math.max(0, currDarkness - 0.1);
    
    // Compute a grayscale value from white (255) to black (0)
    const gray = Math.floor(255 * currDarkness);
    
    square.style.backgroundColor = `rgb(${gray}, ${gray}, ${gray})`; 
    square.dataset.darkness = currDarkness;
}

makeGrid();

/*const squares = document.querySelectorAll(".square");
squares.forEach(square => {
    square.addEventListener('mouseenter',() => {
        changeColor(square);
    } )
})*/