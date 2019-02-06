var numCircle = 6;
//Genrate Rondom array of colors
var colors = genrateRondomColor(numCircle);

var circles = document.querySelectorAll(".circle");

//pick rondom color from the array
var pickedColor = pickColor();

var h1 = document.querySelector("h1");

var pickedColorDisplay = document.getElementById("displayColor");

var resultDisplay = document.getElementById("result");

var bttn = document.querySelector("#playAgian");

var easy = document.getElementById("easybtn");
var hard = document.getElementById("hardbtn");

pickedColorDisplay.textContent =pickedColor;

//Button event listener
bttn.addEventListener("click", function(){
    colors = genrateRondomColor(numCircle);
    
    pickedColor = pickColor();
    
    pickedColorDisplay.textContent =pickedColor;
    
    for(var i =0; i < circles.length; i++){
    // Assign each circle to color
        
    circles[i].style.backgroundColor=colors[i];
        
    }
    h1.style.backgroundColor= "steelblue";
    
    resultDisplay.textContent="";
    bttn.textContent= "New Color";
    resultDisplay.style.color= "black";

    
});

for(var i =0; i < circles.length; i++){
    // Assign each circle to color
    circles[i].style.backgroundColor=colors[i];
    
    //add event lisnters to each circle
    circles[i].addEventListener("click", function(){
        
       var clickedColor = (this.style.backgroundColor);
        
        if(clickedColor=== pickedColor){
            changeColors(pickedColor);
            resultDisplay.textContent="Winner";
            h1.style.backgroundColor= pickedColor;
            resultDisplay.style.color= pickedColor;
            bttn.textContent= "Play Agian";
        }
        else{
            this.style.backgroundColor = "#222222";
            resultDisplay.textContent="Try agian";

        }
    });
}

//function to change circle colors to the corcct color
function changeColors(color){
    for(var i = 0; i < circles.length; i++){
    circles[i].style.backgroundColor=color;
    }
}

// the function to pick rondom color in the array
function pickColor(){
    var pic = Math.floor(Math.random() * colors.length);
    return colors[pic];
}

// Function to PUSH THE RGB STRING TO THE ARRAY
function genrateRondomColor(num){
    var arr = [];
    for(var i = 0; i < num; i++){
        arr.push(rondomColor());
        
    }
    return arr;
}

// Function to genrate the RBG STRING
function rondomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    return "rgb(" + r + ", " + g + ", " + b + ")"
    //|| || || ||
    //^^ ^^ ^^ ^^
}

//easyBtn eventListner

easy.addEventListener("click", function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    numCircle = 3;
    colors = genrateRondomColor(numCircle);
    pickedColor = pickColor();
    resultDisplay.textContent="";
    h1.style.backgroundColor= "steelblue";
    pickedColorDisplay.textContent = pickedColor;
    for(var i = 0; i<circles.length; i++){
        if(colors[i]){
        circles[i].style.backgroundColor= colors[i];

        }else{
            circles[i].style.display="none";
        }
        
    }

    


});
hard.addEventListener("click", function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    resultDisplay.textContent="";
    h1.style.backgroundColor= "steelblue";
    numCircle = 6;
    colors = genrateRondomColor(numCircle);
    pickedColor = pickColor();
    pickedColorDisplay.textContent = pickedColor;
    for(var i = 0; i<circles.length; i++){
        circles[i].style.backgroundColor= colors[i];
            circles[i].style.display="block";
        
        
    }

});

