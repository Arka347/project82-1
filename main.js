var mouseEvent = "empty";
var last_x, last_y;
var colour;
var width;
var radius;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);

function my_mousedown(e) {
    colour = document.getElementById("colour").value
    width = document.getElementById("width").value
    radius = document.getElementById("radius").value
    mouseEvent = "mouseDown";
}

function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
  
    if (mouseEvent == "mouseDown"){
      console.log("Current position of x and y coordinates = ");
      console.log("x  = " + current_x + "y  = " + current_y);
       ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.line_Width = width;
        ctx.moveTo(last_x, last_y);
        ctx.arc(current_x, current_y, radius,0 ,2 * Math.PI);
        ctx.stroke();
    }
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
    current_x = e.clientX - canvas.offsetLeft;
    current_y = e.clientY - canvas.offsetTop;
    console.log(current_x + " " + current_y);

    if (mouseEvent == "mouseDown") {
        ctx.beginPath();
        ctx.strokeStyle = colour;
        ctx.line_Width = width;
        ctx.moveTo(last_x, last_y);
        ctx.lineTo(current_x, current_y);
        ctx.stroke();
    }
    last_x = current_x;
    last_y = current_y;
}

canvas.addEventListener("mouseleave", my_mouseleave);

function my_mouseleave(e) {
    mouseEvent = "mouseLeave";
    console.log(mouseEvent);
}