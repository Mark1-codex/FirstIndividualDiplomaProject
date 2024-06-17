let firstInput = document.getElementById('one-input')
let secondInput = document.getElementById('two-input')
let thirdInput = document.getElementById('three-input')
let highestNumberSpace = document.getElementById('highest-number__text')
let numberOne = parseInt(firstInput.value);
let numberTwo = parseInt(secondInput.value);
let numberThree = parseInt(thirdInput.value);
let numbers = []
numbers.push(numberOne)
numbers.push(numberTwo)
numbers.push(numberThree)
let checkNumber = function(){
    if(firstInput.value == '' && secondInput.value == '' && thirdInput.value == '' ){
        highestNumberSpace.textContent = ''
    } else if(firstInput.value = NaN && secondInput.value == NaN && thirdInput.value == NaN){
        highestNumberSpace.textContent == 'Будь ласка, введіть числа у рядки'
    } else if(firstInput.value = '' || secondInput.value == '' || thirdInput.value == '' ){
        highestNumberSpace.textContent == 'Будь ласка, заповніть всі рядки'
    } else if(firstInput.value = NaN || secondInput.value == NaN || thirdInput.value == NaN){
        highestNumberSpace.textContent = 'Будь ласка, введіть числа у всі рядки'
    } else {
        highestNumberSpace.textContent = Math.max(...numbers)
    }
}
firstInput.addEventListener('input', checkNumber)
secondInput.addEventListener('input', checkNumber)
thirdInput.addEventListener('input', checkNumber)
console.log(firstInput)