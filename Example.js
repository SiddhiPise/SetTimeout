var gameState =1;

function setup(){
    createCanvas (400,400)
}
function draw(){
    var  myVar =0;
    
     if(gameState === 1){
       background("blue");
       text ("After 2 seconds the background will change to red",20,200)
        myFunction();
           
       
     }
     
     if(gameState === 2){
       background("red");
     }
   
   
     function alertFunc() {
       gameState =2;
       
     }
     function myFunction() {
       setTimeout(alertFunc, 2000);
      }
   
   }
