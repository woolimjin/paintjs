const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("jsColor");
const lineWidth = document.getElementById("line-width");
const color = document.getElementById("color");
canvas.width = 500;
canvas.height = 500;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function startPainting(){
    painting = true;
}

function stopPainting(){
    painting = false;
}

function onMouseDown(event){
    painting=true;
}

function onMouseUp(event){
    stopPainting();
}

lineWidth.addEventListener("change", onLineWidthChange);

function handleColorClick(event){

}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else{
        ctx.lineTo(x,y)
        ctx.stroke();
    }
}
function onLineWidthChange(event){
    ctx.lineWidth=event.target.value;
}

if(canvas){
    canvas.addEventListener("mousemove",onMouseMove);
    canvas.addEventListener("mousedown",startPainting);
    canvas.addEventListener("mouseup",stopPainting);
    canvas.addEventListener("mouseleave",stopPainting);
}

function onColorChange(event){
    ctx.strokeStyle = event.target.value;
    ctx.fillStyle = event.target.value;
}

Array.from(colors).forEach(color => color.addEventListener("click"));
lineWidth.addEventListener("change",onLineWidthChange);

color.addEventListener("change",onColorChange);
