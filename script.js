const container = document.querySelector("#container")


for(let i=0;i<16;i++){
    row = document.createElement("div")
    row.classList.add("row")
    for(let j=0;j<16;j++){
        box = document.createElement("div")
        box.classList.add("box")
        box.addEventListener("mouseover",function(){
            box.style.backgroundcolor = "grey";
        })
        row.appendChild(box)
    }
    container.appendChild(row)
}