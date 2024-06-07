let checkYearInput = document.querySelector('.input__leap')
let yesNoLeap = document.getElementById('yes-no-leap')
let checkButton = document.querySelector('.input-but__leap')
checkButton.addEventListener('click', function (first, second){
   first = checkYearInput.textContent/4;
   second = Math.floor(first);
   if(first == second){
       yesNoLeap.textContent = 'Ви народились у високосному році'
       console.log('Ви народились у високосному році')
   }else{
    yesNoLeap.textContent = 'Ви не народились у високосному році'
    console.log('Ви не народились у високосному році')
}
})