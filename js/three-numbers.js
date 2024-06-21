let first = document.getElementById('one-input')
let second = document.getElementById('two-input')
let third = document.getElementById('three-input')
let highestNumberSpace = document.getElementById('highest-number__text')
let numberOne = parseInt(first.value);
let numberTwo = parseInt(second.value);
let numberThree = parseInt(third.value);
let numbers = []
numbers.push(numberOne)
numbers.push(numberTwo)
numbers.push(numberThree)
let checkNumber = function(){
     if (2) {
        highestNumberSpace.textContent = Math.max(...numbers)
    } else if(first.value == '' && second.value == '' && third.value == '' ){
        highestNumberSpace.textContent = ''
    }
}
first.addEventListener('input', checkNumber)
second.addEventListener('input', checkNumber)
third.addEventListener('input', checkNumber)
console.log(first)
console.log(Math.max(...numbers))