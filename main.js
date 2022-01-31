canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
mouseEvent="";

var width2 = screen.width
new_width = screen.width - 70
new_height = screen.height - 300

if(width2 < 992){
    document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
}


last_position_mouse_x = 0
last_position_mouse_y = 0

canvas.addEventListener("mousedown", mouseDown)
function mouseDown(e){
    color=document.getElementById("color").value;
    width = document.getElementById("width").value;
    mouseEvent = "mouseDown";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseup", mouseUp)
function mouseUp(e){
    mouseEvent="mouseUp";
    console.log(mouseEvent);
}
canvas.addEventListener("mouseleave", mouseLeave)
function mouseLeave(e){
    mouseEvent="mouseLeave";
    console.log(mouseEvent);
}
canvas.addEventListener("mousemove", mouseMove);
function mouseMove(e){
    current_position_mouse_x = e.clientX - canvas.offsetLeft
    current_position_mouse_y = e.clientY - canvas.offsetTop

    if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_mouse_x,last_position_mouse_y);
        ctx.lineTo(current_position_mouse_x, current_position_mouse_y);
        ctx.stroke();
    }

    last_position_mouse_x = current_position_mouse_x;
    last_position_mouse_y = current_position_mouse_y;
}
function clearArea(){
    ctx.clearRect(0,0,800,600)
}
function my_Touchstart(e){
    lpx = e.touches[0].clientX - canvas.offsetLeft
    lpy = e.touches[0].clientY - canvas.offsetTop
}
function my_Touchmove(e){
    cpx = e.touches[0].clientX - canvas.offsetLeft
    cpy = e.touches[0].clientY - canvas.offsetTop
    ctx.beginPath()
    ctx.strokeStyle = color
    ctx.lineWidth = width
    ctx.moveTo(lpx,lpy)
    ctx.lineTo(cpx,cpy)
    lpx = cpx
    lpy = cpy
}
