var mainElem = document.getElementById("main");

mainElem.addEventListener("click", showColor);

function showColor(){
  var trueElem = document.getElementById("true");
  var alphaNum = "0123456789ABCDEF";
  var color = "#";
  for(var i = 0; i<6; i++){
    color += alphaNum[Math.floor(Math.random()* alphaNum.length)];
    
  }
  
  console.log(color);
  trueElem.style.backgroundColor = color;
  
   
}