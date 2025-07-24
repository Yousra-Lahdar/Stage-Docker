// ==== SNAKE GAME - Version Complète corrigée ====

const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext('2d');
canvas.style.border="1px solid red";

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [
     {x: 8, y: 8},   // Tête
    {x: 7, y: 8},   // Corps
    {x: 6, y: 8}
];

let direction = { x: 1, y: 0 };
let nextDirection = direction;
let food = {};
let bonus = null;
let score = 0;
let level = 1;
let lives = 3;
let isPaused = false;
let isGameOver = false;
let moveInterval = 200;
let moveTimer = null;
let wallsEnabled = false;
let difficulty = 'normal';

window.onload = function () {
    document.getElementById('start-btn').addEventListener('click', startGame);
    document.getElementById('pause-btn').addEventListener('click', togglePause);
    document.getElementById('restart-btn').addEventListener('click', restartGame);
    document.addEventListener('keydown', handleKeyDown);
    draw();
};

function gameLoop() {
    if (isPaused || isGameOver) return;

    direction = nextDirection;
    const newHead = {
        x: snake[0].x + direction.x,
        y: snake[0].y + direction.y
    };
    
    // Collision murs
    if (wallsEnabled && (newHead.x < 0 || newHead.x >= tileCount || newHead.y < 0 || newHead.y >= tileCount)) {
        endGame();
        return;
    }

    // Collision sans murs : 
    if (!wallsEnabled) {
        newHead.x = (newHead.x + tileCount) % tileCount;
        newHead.y = (newHead.y + tileCount) % tileCount;
    }

    // Collision avec le corps
    if (snake.some(cell => cell.x === newHead.x && cell.y === newHead.y)) {
        endGame();
        return;
    }

    snake.unshift(newHead);

    if (newHead.x === food.x && newHead.y === food.y) {
        score++;
        spawnFood();
        updateLevel();
    } else {
        snake.pop();
    }

    draw();
    moveTimer = setTimeout(gameLoop, moveInterval);
}


function startGame() {
    snake = [ {x: 8, y: 8}, {x: 7, y: 8}, {x: 6, y: 8} ];
    direction = { x: 1, y: 0 };
    nextDirection = direction;
    score = 0;
    level = 1;
    lives = 3;
    isPaused = false;
    isGameOver = false;
    moveInterval = 200;
    spawnFood();
    clearTimeout(moveTimer);
    gameLoop();
}



function togglePause() {
    isPaused = !isPaused;
    if (!isPaused) gameLoop();
    else clearTimeout(moveTimer);
}

function restartGame() {
    clearTimeout(moveTimer);
    startGame();
}

function handleKeyDown(e) {
    const key = e.key;
    if ((key === 'ArrowUp' || key === 'z') && direction.y !== 1) {
        nextDirection = { x: 0, y: -1 };
    } else if ((key === 'ArrowDown' || key === 's') && direction.y !== -1) {
        nextDirection = { x: 0, y: 1 };
    } else if ((key === 'ArrowLeft' || key === 'q') && direction.x !== 1) {
        nextDirection = { x: -1, y: 0 };
    } else if ((key === 'ArrowRight' || key === 'd') && direction.x !== -1) {
        nextDirection = { x: 1, y: 0 };
    }
}

function spawnFood() {
    let valid = false;
    while (!valid) {
        food = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
        valid = !snake.some(part => part.x === food.x && part.y === food.y);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Snake
    snake.forEach((cell, i) => {
        ctx.fillStyle = (i === 0) ? "#fcd34d" : "#34d399";
        ctx.fillRect(cell.x * gridSize, cell.y * gridSize, gridSize, gridSize);
    });

    // Food
    ctx.fillStyle = "#ef4444";
    ctx.beginPath();
    ctx.arc(food.x * gridSize + gridSize / 2, food.y * gridSize + gridSize / 2, gridSize / 2.5, 0, Math.PI * 2);
    ctx.fill();

    // Infos
    document.getElementById('score').textContent = score;
    document.getElementById('level').textContent = level;
    document.getElementById('lives').textContent = lives;
}

function updateLevel() {
    if (score % 5 === 0) {
        level++;
        moveInterval = Math.max(50, moveInterval - 20);
    }
}

function endGame() {
    isGameOver = true;
    clearTimeout(moveTimer);
    alert("Game Over!");
}


