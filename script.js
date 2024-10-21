const container = document.querySelector("#container"); // Select the container element

const colorInput = document.querySelector("#colorInput"); // Color input element
const colorButton = document.querySelector("#colorButton"); // Button to change color

const gridInput = document.querySelector("#gridInput"); // Grid size input
const gridButton = document.querySelector("#gridButton"); // Button to create a new grid

const resetButton = document.querySelector("#resetButton"); // Button to reset the grid

let last; // Stores the last grid size

// Function to create a grid of size x by x
function createGrid(x) {
    container.classList.remove("colored"); // Remove "colored" class from container
    if (x > 110) { // Limit grid size to 110
        alert("Number too big");
        return;
    }
    for (let i = 0; i < x; i++) { // Loop to create rows
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < x; j++) { // Loop to create boxes in each row
            const box = document.createElement("div");
            box.classList.add("box");
            row.appendChild(box);
        }
        container.appendChild(row);
    }
    return x;
}
last = createGrid(100); // Initialize the grid with size 100x100

// Add "colored" class on mouseover
container.addEventListener("mouseover", function(event) {
    const target = event.target;
    target.classList.add("colored");
});

// Create new grid when the grid button is clicked
gridButton.addEventListener("click", function() {
    const value = Number(gridInput.value);
    if (Number.isInteger(value) && value <= 110) {
        container.innerHTML = ""; // Clear the container
        last = createGrid(value); // Create new grid
    } else {
        gridInput.focus();
        alert("Type Number");
    }
});

// Reset the grid to the last size
resetButton.addEventListener("click", function() {
    container.innerHTML = ""; // Clear the container
    container.classList.remove("colored"); // Remove "colored" class
    last = createGrid(last); // Recreate the last grid
});

// Change the color variable when the color button is clicked
colorButton.addEventListener("click", function() {
    const value = colorInput.value;
    document.documentElement.style.setProperty("--text-color", value);
});
