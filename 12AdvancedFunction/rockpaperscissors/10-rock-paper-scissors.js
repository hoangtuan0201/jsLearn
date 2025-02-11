let player_score = JSON.parse(localStorage.getItem('score')) || { Wins: 0, Losses: 0, Ties: 0 };

updateScore();

function updateResult(result, player_move, computer_move) {
    document.querySelector('.js-result').innerHTML = `You ${result}`;

    document.querySelector('.js-moves').innerHTML
        = `You <img src="${player_move}-emoji.png" class="move-icon">
            <img src="${computer_move}-emoji.png" class="move-icon">
            Computer`
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${player_score.Wins}, Losses: ${player_score.Losses}, Ties: ${player_score.Ties}`;
}

function pickComputerMove() {
    const random_number = Math.random();
    if (random_number < 1 / 3) {
        return 'Rock';
    } else if (random_number < 2 / 3) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
let isPickingMove = false;
let intervalID;

autoPlayButtonElement = document.querySelector('.autoplay-button');
resetScoreButtonElement = document.querySelector('.resetscore-button');

function autoPlay() {
    if (!isPickingMove) { // if ispickingMove is false
        intervalID = setInterval(()=> {
            const player_move = pickComputerMove()
            //tao 1 ham random cho playermove cho bot tu choi keo bua bao voi nhau
            playGame(player_move);
        },1000)
        isPickingMove = true;
        autoPlayButtonElement.innerHTML = "Stop playing"
    }else {
        clearInterval(intervalID)
        isPickingMove = false;
        autoPlayButtonElement.innerHTML = "Auto play"
    }
}
autoPlayButtonElement.addEventListener('click', autoPlay)
//rock
document.querySelector('.js-rock-button').addEventListener('click', () => {
    playGame('Rock');
});
//paper
document.querySelector('.js-paper-button').addEventListener('click', () => {
    playGame('Paper');
});
//scissors
document.querySelector('.js-scissors-button').addEventListener('click', () => {
    playGame('Scissors');
});

//update the code so pressing a on keyboard will autoplay the game

// autoPlayButtonElement.addEventListener('keydown', (event) =>{
//     if (event.key === 'a') {
//         autoPlay();
//     }
// })



document.body.addEventListener('keydown', (event) => {
    if (event.key ==='r') {
        playGame('Rock');
    }else if (event.key ==='p') {
        playGame('Paper');
    }else if(event.key==='s') {
        playGame('Scissors');
    }
});


function playGame(player_move){
    const computer_move = pickComputerMove();

    if (player_move === computer_move) {
        result = 'Tie';
    } else if ((player_move === 'Rock' && computer_move === 'Scissors') ||
        (player_move === 'Paper' && computer_move === 'Rock') ||
        (player_move === 'Scissors' && computer_move === 'Paper')) {
        result = 'Win';
    } else {
        result = 'Lose';
    }

    if (result === 'Win') {
        player_score.Wins += 1;
    } else if (result === 'Lose') {
        player_score.Losses += 1;
    } else if (result === 'Tie') {
        player_score.Ties += 1;
    }

    updateResult(result, player_move, computer_move);
    updateScore();
    localStorage.setItem('score', JSON.stringify(player_score));
}



function showResetConfirmation() {
    document.querySelector('.reset-question')
        .innerHTML = `
      Are you sure you want to reset the score?
      <button class="js-reset-confirm-yes reset-confirm-button">
        Yes
      </button>
      <button class="js-reset-confirm-no reset-confirm-button">
        No
      </button>
    `;
    document.querySelector('.js-reset-confirm-yes').addEventListener('click', () => {
        resetScore();
        hideResetConfirmation();
    })

    document.querySelector('.js-reset-confirm-no').addEventListener('click', () => {
        hideResetConfirmation();
    })
}

resetScoreButtonElement.addEventListener('click', () => {
    // Update the click event listener to
    // show the confirmation message instead
    showResetConfirmation();})




function resetScore() {
    player_score = { Wins: 0, Losses: 0, Ties: 0 };
    updateScore();
    localStorage.removeItem('score');
}

function hideResetConfirmation() {
    document.querySelector('.reset-question')
        .innerHTML = '';
}