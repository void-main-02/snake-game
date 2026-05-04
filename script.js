

const grid = document.querySelector('#grid')

const boxHeight = 40
const boxWidth = 40

const rows = Math.floor(grid.clientHeight/ boxHeight)
const columns = Math.floor(grid.clientWidth/ boxWidth)

console.log(rows)

for(let i=0; i< rows*columns; i++){
    const boxes = document.createElement('div')
    boxes.classList.add("boxes")
    grid.appendChild(boxes)
}
