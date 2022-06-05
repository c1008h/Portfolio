var backBtn = document.getElementById('backbtn')

backBtn.addEventListener('click', function(event) {
    console.log(event.target)
    window.location.href = 'portfolio.html'
})