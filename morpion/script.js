
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
 

