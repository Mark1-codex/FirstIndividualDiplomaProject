let Varriants = ['rock', 'scissors', 'paper']
let cpuScore = 0
let playerScore = 0
let Rock = document.getElementById('rock-button')
let Scissors = document.getElementById('scissors-button')
let Paper = document.getElementById('paper-button')
let winLoseText = document.getElementById('winOrLose')
let cpu = document.getElementById('computer-variant')
let cpuScoreLabel = document.getElementById('comp-score-text')
let playerScoreLabel = document.getElementById('user-score-text')
let playGame = function(player, cpu){
    winLoseText.style.opacity = '1'
    if(player == cpu){
        winLoseText.innerHTML = 'Нічия!'
        winLoseText.style.color = 'yellow'
        cpuScoreLabel.textContent  = `${cpuScore}`
        playerScoreLabel.textContent  = `${playerScore}`
    }else if((player == 'rock' && cpu == 'scissors') || (player == 'paper' && cpu == 'rock') || (player == 'scissors' && cpu == 'paper')) {
        winLoseText.innerHTML = 'Гравець виграв!'
        winLoseText.style.color = 'green'
        playerScore++
           cpuScoreLabel.textContent  = `${cpuScore}`
        playerScoreLabel.textContent  = `${playerScore}`
    }else if(player == ''){
        winLoseText.innerHTML = 'Гравець не відповів. Спершу натисніть ваш варіант, а далі кнопку варіант Компютера'
        winLoseText.style.color = 'yellow'
           cpuScoreLabel.textContent  = `${cpuScore}`
        playerScoreLabel.textContent  = `${playerScore}`
    }else{
        winLoseText.innerHTML = 'ПК виграв!'
        winLoseText.style.color = 'red'
        cpuScore++
           cpuScoreLabel.textContent  = `${cpuScore}`
        playerScoreLabel.textContent  = `${playerScore}`
    }
    
}
let playerVariant = ''
Rock.addEventListener('click', function(){
    playerVariant = 'rock'
})
Scissors.addEventListener('click', function(){
    playerVariant = 'scissors'
})
Paper.addEventListener('click', function(){
    playerVariant = 'paper'
})
cpu.addEventListener('click', function(){
    playGame(playerVariant, `${Varriants[Math.floor(Math.random()*3+1)]}`)
    console.log(playerVariant)
})
