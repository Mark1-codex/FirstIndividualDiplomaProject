let result = 0
let firstInput = document.getElementById('first-input')
let secondInput = document.getElementById('second-input')
let plus = document.getElementById('plus')
let minus = document.getElementById('minus')
let multiply = document.getElementById('multiply')
let division = document.getElementById('division')
let calculationButton = document.getElementById('equals')
let resultField = document.getElementById('result-p')
let mathematicalAction = ''
let calculate = function(){
    let firstNumber = parseInt(firstInput.value)
    let secondNumber = parseInt(secondInput.value)
    if(mathematicalAction == '+'){
       result = firstNumber + secondNumber
    }else if(mathematicalAction == '-'){
        result = firstNumber - secondNumber
    }else if(mathematicalAction == '*'){
        result = firstNumber * secondNumber
    }else if(mathematicalAction == '/'){
        result = firstNumber / secondNumber
    }else{
        result = 'Введіть числа у поля'
    }
    resultField.textContent = result
}
plus.addEventListener('click', function(){
    mathematicalAction = '+'
})
minus.addEventListener('click', function(){
    mathematicalAction = '-'
})
multiply.addEventListener('click', function(){
    mathematicalAction = '*'
})
division.addEventListener('click', function(){
    mathematicalAction = '/'
})
calculationButton.addEventListener('click', function(){
   calculate()
   console.log(firstInput.value)
   console.log(secondInput.value)
})
