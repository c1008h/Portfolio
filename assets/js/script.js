// Fork the Food buttons
var forkFoodBtn = document.querySelector('#forkthefoodbtn')
var backBtn = document.querySelector('#backbtn')
// Code quiz buttons
var codeQuizBtn = document.quearySelector('#codequizbtn')


forkFoodBtn.addEventListener('click', function(event) {
    console.log(event.target)
    window.location.href = 'fork-the-food.html'
})



codeQuizBtn.addEventListener('click', function(event) {
    window.location.href = 'code-quiz.html'
})
