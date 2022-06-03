var backBtn = document.querySelector('#backbtn')
var forkfoodhomepage = document.querySelector('#forkfoodhomepage')

forkfoodhomepage.addEventListener('click', function(event) {
    window.location.href = "https://eyesackel.github.io/fork-the-food/"
})

backBtn.addEventListener('click', function(event) {
    console.log(event.target)
    window.location.href = 'portfolio.html'
})

