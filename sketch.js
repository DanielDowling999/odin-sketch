console.log("Hello World!");

function makeGrid(){
    const grid = document.querySelector("#grid")
    for(let i = 0; i < 16; i++){
        for (let j = 0; j < 16; j++){
            console.log("Making box " + i + " " + j);
            const square = document.createElement("div");
            square.classList.add('square');
            grid.appendChild(square);
        }
    }
}

makeGrid();