

let cheakAgeNight = document.querySelector(".cheak-age-night")
let guessNumberNight = document.querySelector(".guess-number-night")
let prsNight = document.querySelector(".prs-night")
let calculatorNight = document.querySelector(".calculator-night")
let timeCalculatorNight = document.querySelector(".time-calculator-night")
let dinosaurNight = document.querySelector(".dinosaur-night")
let soccerNight = document.querySelector(".soccer-night")
let threeNumbersNight = document.querySelector(".three-numbers-night")
let ourTeamNight = document.querySelector(".our-team-night")
let scientistNight = document.querySelector(".scientist-night")
// Header
let header = document.getElementById('header');
let sort = document.getElementById("sort-select")
let option = document.querySelector(".sort-option")




// Footer
let footer = document.querySelector(".footer")

document.querySelector('.switch').addEventListener('click', function() {
    this.classList.toggle('night');
    if (this.classList.contains('night')) {
        cheakAgeNight.classList.add("night-section")
        guessNumberNight.classList.add("night-section")
        prsNight.classList.add("night-section")
        calculatorNight.classList.add("night-section")
        timeCalculatorNight.classList.add("night-section")
        dinosaurNight.classList.add("night-section")
        soccerNight.classList.add("night-section")
        threeNumbersNight.classList.add("night-section")
        ourTeamNight.classList.add("night-section")
        scientistNight.classList.add("night-section")




        // Header
        header.classList.add("header-night")
        sort.style.backgroundColor = "#333"
        sort.style.color = "#fff"
        option.style.backgroundColor = "#333"
        option.style.border = "2px #fff solid"

        // Footer
        footer.classList.add("footer-night")
    } else {
        cheakAgeNight.classList.remove("night-section")
        guessNumberNight.classList.remove("night-section")
        prsNight.classList.remove("night-section")
        calculatorNight.classList.remove("night-section")
        timeCalculatorNight.classList.remove("night-section")
        dinosaurNight.classList.remove("night-section")
        soccerNight.classList.remove("night-section")
        threeNumbersNight.classList.remove("night-section")
        ourTeamNight.classList.remove("night-section")
        scientistNight.classList.remove("night-section")

        // Header
        header.classList.remove("header-night")
        sort.style.backgroundColor = "#fff"
        sort.style.color = "#333"
        option.style.backgroundColor = "#fff"
        option.style.border = "2px #000 solid"
        
        // Footer
        footer.classList.remove("footer-night")

    }
});
