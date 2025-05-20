console.log("Hello World!");



function makeGrid(row_size){
    let square_size = 960/row_size;
    const grid = document.querySelector("#grid")
    for(let i = 0; i < row_size; i++){
        for (let j = 0; j < row_size; j++){
            console.log("Making box " + i + " " + j);
            const square = document.createElement("div");
            square.classList.add('square');
            square.dataset.darkness = '1';
            square.style.width = square_size + 'px';
            square.style.height = square_size + 'px';
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

makeGrid(2);

