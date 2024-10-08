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

function playGame(player_move) {
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

function resetScore() {
    player_score = { Wins: 0, Losses: 0, Ties: 0 };
    updateScore();
    localStorage.removeItem('score');
}