// Fork the Food buttons
var forkFoodBtn = document.querySelector('#forkthefoodbtn')
var backBtn = document.getElementById('backbtn')
// Code quiz buttons
var codequizbtn = document.getElementById('codequizbtn')

var backBtn = document.querySelector('#backbtn')

backBtn.addEventListener('click', function(event) {
    console.log(event.target)
    window.location.href = 'portfolio.html'
})

forkFoodBtn.addEventListener('click', function(event) {
    console.log(event.target)
    window.location.href = "fork-the-food.html"
})



codequizbtn.addEventListener('click', function(event) {
    window.location.href = "code-quiz.html"
})
