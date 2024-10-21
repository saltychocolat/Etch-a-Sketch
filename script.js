
const container = document.querySelector("#container");
const newGridButton = document.querySelector("button");
const resetButton = document.querySelector("#reset")
const input = document.querySelector("input"); 
let last;

function createGrid(x){
    container.classList.remove("colored")
    if(x>110){
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
last=createGrid(100)

container.addEventListener("mouseover",function(event){
    target = event.target;
    target.classList.add("colored");
})

newGridButton.addEventListener("click",function(){
    value = Number(input.value)
    if(Number.isInteger(value) && value<=110){
        while(container.firstChild){
            container.firstChild.remove()
        }
        last=createGrid(value)
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
    container.classList.remove("colored")
    last =createGrid(last)
})