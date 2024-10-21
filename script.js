
const container = document.querySelector("#container");
const newGridButton = document.querySelector("button");
const resetButton = document.querySelector("#reset")
const input = document.querySelector("input"); 
let x;

function createGrid(x){
    if(x>100){
        alert("Number too big");
        return
    }
    for(let i=0;i<x;i++){
        row = document.createElement("div")
        row.classList.add("row")
        for(let j=0;j<x;j++){
            box = document.createElement("div")
            box.classList.add("box")
            row.appendChild(box)
        }
        container.appendChild(row)
    }
    return x;
}
x=createGrid(100)

container.addEventListener("mouseover",function(event){
    target = event.target;
    target.classList.toggle("colored");
})

newGridButton.addEventListener("click",function(){
    value = Number(input.value)
    if(Number.isInteger(value)){
        while(container.firstChild){
            container.firstChild.remove()
        }
        createGrid(value)
    }
    else{
        input.focus()
        alert("Type Number")
    }
})

resetButton.addEventListener("click",function(){
    while(container.firstChild){
        container.firstChild.remove()
    }
    createGrid(x)
})