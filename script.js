const rollBtn = document.getElementById('rollBtn');
const resetBtn = document.getElementById('resetBtn');
const score1El = document.getElementById('score1');
const score2El = document.getElementById('score2');
const player1El = document.getElementById('player1');
const player2El = document.getElementById('player2');
const winnerEl = document.getElementById('winner');
const winningScoreInput = document.getElementById('winningScore');

let scores = [0, 0];
let activePlayer = 0;
let winningScore = parseInt(winningScoreInput.value);

function rollDice() {
    if (winnerEl.textContent) return; 

    winningScore = parseInt(winningScoreInput.value) || 50;

    const dice = Math.floor(Math.random() * 6) + 1;
    scores[activePlayer] += dice; 

    updateScores();

    if (scores[activePlayer] >= winningScore) {
        winnerEl.textContent = `Player ${activePlayer + 1} wins! 🎉`;
        winnerEl.classList.remove('hidden');
        return;
    }

    switchPlayer();
}

function updateScores() {
    score1El.textContent = scores[0];
    score2El.textContent = scores[1];
}

function switchPlayer() {
    activePlayer = activePlayer === 0 ? 1 : 0;
    player1El.classList.toggle('active');
    player2El.classList.toggle('active');
}

function resetGame() {
    scores = [0, 0];
    activePlayer = 0;
    updateScores();
    player1El.classList.add('active');
    player2El.classList.remove('active');
    winnerEl.textContent = '';
    winnerEl.classList.add('hidden');
}

rollBtn.addEventListener('click', rollDice);
resetBtn.addEventListener('click', resetGame);
