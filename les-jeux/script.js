
//////////////////MORPION/////////////////

const cell = document.querySelectorAll(".cell");
let player = "O";
let info = document.querySelector("#play-info");
let board = [ ["", "", ""],["", "", ""], ["", "", ""] ];
let gameOver = false
let restart = document.querySelector(".restart")





////////////////////////////////////////////////////////

function game() {
    for (let i = 0; i < cell.length; i++) {
        cell[i].addEventListener("click", () => {
            if (cell[i].textContent === "" && !gameOver) {
               cell[i].textContent = player;
               cell[i].style.color = player === "O" ? "blue" : 'red';

               // Mettre à jour le tableau logique
               const row = Math.floor(i / 3);
               const col = i % 3;
               board[row][col] = player;
               
               if (win(board, player)) {
                info.style.color= "rgb(200, 133, 233"
                info.textContent = `Le joueur ${player} a gagné !`;
                gameOver = true;
                return;
                }  
                
                
                // Vérifier match nul
                if (isDraw()) {
                    info.style.color= "#25bb11"
                    info.textContent = "Match nul !";
                    gameOver = true;
                    return;
                }


               if(player === "O"){
                player = "X";
               }else{
                player = "O";
               };

               info.innerHTML ="C'est à "+ player;
            }

        });
        
    };
};
game();
//////////////////////////////////////////////////////////

restart.addEventListener("click", () => {
    
    board = [["", "", ""], ["", "", ""], ["", "", ""]];
    gameOver = false;
    player = "O";
    info.textContent = "C'est à " + player;
    info.style.color="rgb(4 29 68)";

    // Réinitialiser les cases du HTML
    for (let i = 0; i < cell.length; i++) {
        cell[i].textContent = "";
        
    }
});



/////////////////////////////////////////////////////////

function win (board,player){
    for(let i=0; i<3; i++){
        if(board[0][i] === player && board[1][i] === player && board[2][i] === player)
            return true;
        
        if(board[i][0] === player && board[i][1] === player && board[i][2] === player)
            return true;
    }
        
    if(board[0][0] === player && board[1][1] === player && board[2][2] === player)
            return true
            
        
     if(board[0][2] === player && board[1][1] === player && board[2][0] === player)
            return true
        
    return false
}

/////////////////////////////////////////////////////////////////////

function isDraw() {
    return board.flat().every(cell => cell !== "");
}
 


















///////////////SNAK//////////////////////////////////


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











/////////////////////////////Guess the word//////////////////////////////////

const words = ["banana", "work", "sister", "drive", "apple", "water", "look"];

let index = 0;
let tries = 0;
let mistakes = [];
let selectedLetters = [];



const zoneRepoRef = document.querySelector('.zone-reponse');
const letrMelangRef = document.querySelector('.lettres-melangees')
const triesRef = document.querySelector('#tries');
const mistakeRef = document.querySelector('#mistakes');
const messageRef = document.querySelector('#message');
const randomRef = document.querySelector('.random');
const resetRef = document.querySelector('.reset');


/////////////////////////////////////////////

//fonction pour melanger les mots
function melanger(mot) {
    const lettres = mot.split("");
    for (let i = lettres.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [lettres[i], lettres[j]] = [lettres[j], lettres[i]];
    }
    return lettres;
}


/////////////////////////////////////////



function resetJeu() {
    selectedLetters = [];
    mistakes = [];
    mistakeRef.textContent = "";
    messageRef.textContent = "";
    zoneRepoRef.innerHTML = "";
    letrMelangRef.innerHTML = "";
};



////////////////////////////////////////


function afficherChampsDeReponse(mot) {
    for (let i = 0; i < mot.length; i++) {
        const spanRef = document.createElement("span");
        spanRef.classList.add("reponse-lettre");
        spanRef.textContent = "_";
        zoneRepoRef.appendChild(spanRef);
    }
}

///////////////////////////////////////


function placerLettresMelangees(mot) {
    const melange = melanger(mot);
    melange.forEach((element) => {
        const btn = document.createElement("button");
        btn.textContent = element;
        btn.classList.add("lettre");

        btn.addEventListener("click", () => {
            if (selectedLetters.length < mot.length) {
                selectedLetters.push(element);
                zoneRepoRef.children[selectedLetters.length - 1].textContent = element;
                btn.disabled = true;

                if (selectedLetters.length === mot.length) {
                    verif(mot);
                }
            }
        });

        letrMelangRef.appendChild(btn);
    });
}

////////////////////////////////////////





function verif(mot) {
    tries++;
    triesRef.textContent = tries;
    const userWord = selectedLetters.join("");
    mistakes = [];

    for (let i = 0; i < mot.length; i++) {
        if (userWord[i] !== mot[i]) {
            mistakes.push(userWord[i]);
        }
    }

    mistakeRef.textContent = mistakes.join(" ");

    if (userWord === mot) {
        messageRef.textContent = "🎉 Bien joué ! Tu as trouvé le mot.";
    } else {
        messageRef.textContent = "❌ Mauvaise réponse, essaie encore !";
        if (tries === 6) {
            messageRef.textContent = "❌ Tu as échoué 6 fois. Nouveau mot...";
            setTimeout(() => {
                index = (index + 1) % words.length;
                tries = 0;
                placeMot(words[index]);
            }, 4000);
        }
    }
}




////////////////////////////////////


function placeMot(mot) {
    resetJeu();
    afficherChampsDeReponse(mot);
    placerLettresMelangees(mot);
}

///////////////////////////////////////



randomRef.addEventListener("click", () => {
    tries = 0;
    triesRef.textContent = tries;
    index = (index + 1) % words.length;
    placeMot(words[index]);
});


resetRef.addEventListener("click", () => {
    selectedLetters = [];
    mistakes = [];
    mistakeRef.textContent = "";
    messageRef.textContent = "";
    placeMot(words[index]);
});

placeMot(words[index]);