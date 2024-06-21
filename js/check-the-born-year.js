let checkYearInput = document.querySelector('.input__leap')
let yesNoLeap = document.getElementById('yes-no-leap')
let checkButton = document.querySelector('.input-but__leap')
yesNoLeap.style.opacity = '1'
checkButton.addEventListener('click', function (first, second, third){
   first = parseInt(checkYearInput.value);
   second = first/4;
   third = Math.floor(second)
   if(third == second){
       yesNoLeap.textContent = 'Ви народились у високосному році'
       yesNoLeap.style.color = 'green'
       console.log('Ви народились у високосному році')
   }else{
    yesNoLeap.textContent = 'Ви не народились у високосному році'
    yesNoLeap.style.color = 'red'
    console.error('Ви не народились у високосному році')
}
})
