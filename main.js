var numSquares = 6;
var square = document.querySelectorAll(".square");
var displayColor = document.querySelector(".displayColor");
var message = document.querySelector("#message");
var reset = document.querySelector("#reset");
var easyBtn = document.querySelector("#easy");
var hardBtn = document.querySelector("#hard");
var modeBtn = document.querySelectorAll(".mode");
var h1 = document.querySelector("h1");

var colors = generateRandomColor(numSquares);

var pickedColor = colors[pickedRandomColor()];
displayColor.textContent = pickedColor;

for(var i = 0; i < modeBtn.length; i++){
  modeBtn[i].addEventListener('click', function(){
    easyBtn.classList.remove('selected');
    hardBtn.classList.remove('selected');
    this.classList.add('selected');
    
    numSquares = (this.textContent === 'Easy') ? 3 : 6;
    colors = generateRandomColor(numSquares);
    pickedColor = colors[pickedRandomColor()];
    displayColor.textContent = pickedColor;
    for(var i = 0; i < square.length; i++){
      if(colors[i]){
        square[i].style.display = "block";
        square[i].style.backgroundColor = colors[i];
      }else{
        square[i].style.display = "none";
      }
    }
  });
};

// easyBtn.addEventListener('click', function(){
//   this.classList.add('selected');
//   hardBtn.classList.remove('selected');

//   numSquares = 3;
//   colors = generateRandomColor(3);
//   pickedColor = colors[pickedRandomColor()];
//   displayColor.textContent = pickedColor;
//   for(var i = 0; i < square.length; i++){
//     if(colors[i]){
//       square[i].style.backgroundColor = colors[i];
//     }else{
//       square[i].style.display = "none";
//     }
//   }
// });

// hardBtn.addEventListener('click', function(){
//   this.classList.add('selected');
//   easyBtn.classList.remove('selected');

//   numSquares = 6;
//   colors = generateRandomColor(numSquares);
//   pickedColor = colors[pickedRandomColor()];
//   displayColor.textContent = pickedColor;
//   for(var i = 0; i < square.length; i++){
//     square[i].style.backgroundColor = colors[i];
//     square[i].style.display = "block";
//   }
// });

reset.addEventListener("click", function(){
  message.textContent = "";
  this.textContent = "New Colors";
  colors = generateRandomColor(numSquares);
  pickedColor = colors[pickedRandomColor()];
  displayColor.textContent = pickedColor;
  for(var i = 0; i < square.length; i++){
    square[i].style.backgroundColor = colors[i];
  }
});

for(var i = 0; i < colors.length; i++){
  square[i].style.backgroundColor = colors[i];
  square[i].addEventListener("click", function(){
    var clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      reset.textContent = "Play Again"
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
    var b = Math.floor(Math.random() * 256);
    var randomColor = "rgb" + "(" + r + ", " + g + ", " + b + ")";
    colors.push(randomColor);
  }

  return colors;
}
