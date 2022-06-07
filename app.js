
var briksInput = document.getElementById('briksInput');
var BricksOutput = document.getElementById('BricksOutput');
var btn = document.getElementById('btn');

btn.addEventListener('click', function(){
    var userInput =  briksInput.value;
    var convertUserInput = parseFloat(userInput);
if(convertUserInput<=0){
    briksInput.style.backgroundColor = ' rgb(248, 68, 68)';
    BricksOutput.style.backgroundColor = 'rgb(248, 68, 68)';
    alert('Invalid Number ')
}else if(userInput == ""){
    briksInput.style.backgroundColor = ' rgb(248, 68, 68)';
    BricksOutput.style.backgroundColor = 'rgb(248, 68, 68)';
    alert(' Empty Value ');
    BricksOutput.innerHTML = 0;
}
else{
    briksInput.style.backgroundColor = ' white';
    BricksOutput.style.backgroundColor = 'black';
}

    var totalBricks;
   if(convertUserInput<=10){
       totalBricks = convertUserInput * 15 * 1000; 
   }else if(convertUserInput<=20){
      totalBricks = 10 * 15 * 1000 + (convertUserInput-10) * 12 * 1000;
   }else{
       totalBricks = 10 * 15 * 1000 + 10 * 12 * 1000 + (convertUserInput -20) * 10 * 1000;
   }
   BricksOutput.innerHTML = totalBricks;

})

//  reset button 

var resetBtn = document.getElementById('reset-btn');

resetBtn.addEventListener('click', function(){
    briksInput.value = 0;
    BricksOutput.innerHTML = 0;
})