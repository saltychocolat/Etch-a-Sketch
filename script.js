
const container = document.querySelector("#container");

const colorInput = document.querySelector("#colorInput");
const colorButton = document.querySelector("#colorButton");

const gridInput = document.querySelector("#gridInput"); 
const gridButton = document.querySelector("#gridButton");

const resetButton = document.querySelector("#resetButton") 


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

gridButton.addEventListener("click",function(){
    value = Number(gridInput.value)
    console.log(Number.isInteger(value))
    if(Number.isInteger(value) && value<=110){
        container.innerHTML = ""
        last=createGrid(value)
    }
    else{
        gridInput.focus()
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

colorButton.addEventListener("click",function(){
    value = colorInput.value
    document.documentElement.style.setProperty("--text-color",value)
})