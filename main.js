var square = document.querySelectorAll(".square");
var displayColor = document.querySelector(".displayColor");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");


var colors= generateRandomColor();
// [
//   "rgb(255, 0, 0)",
//   "rgb(255, 255, 0)",
//   "rgb(255, 100, 100)",
//   "rgb(0, 255, 0)",
//   "rgb(255, 0, 255)",
//   "rgb(0, 0, 255)",
// ];

var pickedColor = colors[pickedRandomColor()];
displayColor.textContent = pickedColor;

for(var i = 0; i < colors.length; i++){
   square[i].style.backgroundColor = colors[i];
  square[i].addEventListener("click", function(){
    var choosenColor = this.style.backgroundColor;
    if(choosenColor === pickedColor){
      message.textContent = "Correct";
      h1.style.backgroundColor = pickedColor;
      matchColor(pickedColor);
    }else{
      message.textContent = "Try again";
      this.style.backgroundColor = '#232323';
    }
  });
}
 
function matchColor(color){
  for(var i = 0; i <square.length; i++){
    square[i].style.backgroundColor = color;
  }
}

function pickedRandomColor(){
  var randomNumber = Math.floor(Math.random() * colors.length);
  return randomNumber;
}

function generateRandomColor(number){
  var colors = [];
  
  for(var i = 0; i < number; i++){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b
    = Math.floor(Math.random() * 256);
  }
  
  return colors;
}
