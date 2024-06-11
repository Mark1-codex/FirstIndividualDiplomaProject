let inputGuess = document.querySelector('.guess-the-number__input')
let submitButton = document.querySelector('.guess-the-number__button')
let clue = document.querySelector('.guess-the-number__text')
let randomNumber = Math.floor(Math.random()*100+1)
let tries = 0
submitButton.addEventListener('click', function(values){
    values = parseInt(inputGuess.value)
    if(values == randomNumber){
        clue.style.opacity = '1'
        clue.style.color = 'green'
        clue.textContent = `Вітаємо! ви угадали з ${tries} спроби!`
        tries = 0
    }else if(values < randomNumber){
        clue.style.opacity = '1'
        clue.style.color = 'red'
        clue.textContent = 'Загадане число більше за вашу здогадку'
        tries++
    }else if(values > randomNumber){
        clue.style.opacity = '1'
        clue.style.color = 'red'
        clue.textContent = 'Загадане число менше за вашу здогадку'
        tries++
    }else{
        clue.style.opacity = '1'
        clue.style.color = 'red'
        clue.textContent = 'Будь ласка, введіть число. Ви ввели символ, або літеру'
    }
})
