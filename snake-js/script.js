const canvas = document.querySelector('#game-canvas');
const ctx = canvas.getContext('2d');

let snake= [
    {x: 8, y: 8},   // Tête
    {x: 7, y: 8},   // Corps
    {x: 6, y: 8}    //queue
];
let direction = {x:1,y:0};
let food = {
    x: Math.floor(Math.random() * 20),
    y: Math.floor(Math.random() * 20)
};
let score = 0;
let level = 1;
let moveInterval = 200;
let tileCount = 20;
let wallsEnabled =false



////////////////////////////////////////////////////////////////////
function draw(){
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Efface le canvas
    //dessiner snake
    snake.forEach((elmt,i) => {
        ctx.fillStyle = (i ===0) ? "pink" : "red";
        ctx.fillRect(elmt.x*20, elmt.y*20 ,20,20 ) ; 
    });
    //dessiner food
    ctx.fillStyle = "green";
    ctx.fillRect(food.x*20, food.y*20, 20, 20 );

    //dessiner score level
    ctx.font = "18px Ariel";
    ctx.fillStyle = "red"
    ctx.fillText("Score:"+ score, 20, 20);
    ctx.fillStyle = "blue"
    ctx.fillText("Level:"+ level, 320,20)
   


};

////////////////////////////////////////////////////////////////////

function gameLoop(){
    draw();
    const head = {
        x:snake[0].x + direction.x,
        y:snake[0].y + direction.y
    };
    snake.unshift(head);       // Ajoute la nouvelle tête devant
    if(snake[0].x === food.x && snake[0].y === food.y){
        console.log("manger")
        food = {
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20)
        };
        updateLevel()
    }else{
        snake.pop();      // Retire la dernière case (queue)  
    }
    if (wallsEnabled) {     // le mur
        if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        //fin
    }
    } else {
        head.x = (head.x + tileCount) % tileCount;
        head.y = (head.y + tileCount) % tileCount;
    }
    

    console.log("tick!");
   
};

setInterval(gameLoop, moveInterval);
handleKeyDown();

////////////////////////////////////////////////////////////////////////

function handleKeyDown(){
    window.addEventListener("keydown",function(e) {   //une fonction annonyme
        if ((e.key ==="ArrowLeft" || e.key ==="q")&& direction.x !==1 )direction = {x:-1,y:0};
        if ((e.key ==="ArrowRight" || e.key ==="d")&& direction.x !==-1 )direction = {x:1,y:0};
        if ((e.key ==="ArrowUp" || e.key ==="z")&& direction.y !==1 )direction = {x:0,y:-1};
        if ((e.key ==="ArrowDown" || e.key ==="s")&& direction.y !==-1 )direction = {x:0,y:1};

    })  
       




}
//////////////////////////////////////////////////////////////////////////////

function updateLevel(){
    score++
    if(score % 5 ==0){
         level++
         moveInterval = Math.max(60, moveInterval - 50) // viwtesse max a 60ms
     }
 }

////////////////////////////////////////////////////////////////////////////

