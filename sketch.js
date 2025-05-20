console.log("Hello World!");


const buttons = document.querySelectorAll('button');
const grid = document.querySelector('#grid');
let currSize = 16;
let randomColour = false;
buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.classList.add('flash');
    });

    button.addEventListener('mouseup', () => {
        button.classList.remove('flash');
        if (button.id == "rst"){
            let newSize = document.querySelector('input').value;
            newSize = parseInt(newSize, 10);
            if (newSize != NaN && newSize <=100 && newSize > 0){
                grid.innerHTML = '';
                makeGrid(newSize);
            }
            else{ 
                window.alert("Invalid input! Ensure input is between 1 and 100 (inclusive) and an integer");
            }
        }
        else if (button.id == "clr"){
            grid.innerHTML = '';
            makeGrid(currSize);
        }
        else{
            if (randomColour){
                randomColour = !randomColour;
                button.textContent = "Randomize";
            }
            else{
                randomColour = !randomColour;
                button.textContent = "Derandomize";
            }
            
        }
    })
    button.addEventListener('mouseleave', () => {
        button.classList.remove('flash');
    });
});



function makeGrid(row_size){
    let square_size = 960/row_size;
    currSize = row_size;
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

function rand(max){
    return Math.floor(Math.random()*max);
}

function changeColor(square){
    if (randomColour == true){
        square.style.backgroundColor = `rgb(${rand(256)}, ${rand(256)}, ${rand(256)})`;
        square.dataset.darkness = 1;
    }
    else{
        let currDarkness = parseFloat(square.dataset.darkness) || 1;
        currDarkness = Math.max(0, currDarkness - 0.1);
        
        // Compute a grayscale value from white (255) to black (0)
        const gray = Math.floor(255 * currDarkness);
        
        square.style.backgroundColor = `rgb(${gray}, ${gray}, ${gray})`; 
        square.dataset.darkness = currDarkness;

    }

}


makeGrid(16);

