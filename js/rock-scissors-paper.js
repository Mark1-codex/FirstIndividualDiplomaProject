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
let playerVariantImage = document.getElementById('image-player')
let cpuVariantImage = document.getElementById('image-cpu')
playerVariantImage.style.opacity = '0'
cpuVariantImage.style.opacity = '0'
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
    playerVariantImage.style.opacity = '1'
    cpuVariantImage.style.opacity = '0'
    playerVariantImage.src = `/images/${playerVariant}.png`
})
Scissors.addEventListener('click', function(){
    playerVariant = 'scissors'
    playerVariantImage.style.opacity = '1'
    cpuVariantImage.style.opacity = '0'
    playerVariantImage.src = `/images/${playerVariant}.png`
})
Paper.addEventListener('click', function(){
    playerVariant = 'paper'
    playerVariantImage.style.opacity = '1'
    cpuVariantImage.style.opacity = '0'
    playerVariantImage.src = `/images/${playerVariant}.png`
})
cpu.addEventListener('click', function(){
    let cpuVariant = Varriants[Math.floor(Math.random(+1)*3)]
    playGame(playerVariant, cpuVariant)
    console.log(playerVariant)
    cpuVariantImage.style.opacity = '1'
    cpuVariantImage.src = `/images/${cpuVariant}.png`
})
