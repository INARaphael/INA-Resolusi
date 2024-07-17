const Emoji = ['😊','😊','❤','❤','👍','👍','🌹','🌹','🎁','🎁','🐱‍💻','🐱‍💻']
var shufEmoji = Emoji.sort(() => (Math.random() > 0.5 ) ? 2:-1 )
const IMGplase = document.getElementById('img')
const start = document.getElementsByClassName('start')[0]
start.addEventListener('click', function () {
    window.location.reload()
})
    for (let i = 0; i < Emoji.length; i++) {
        let newImg = document.createElement('div')
        newImg.classList.add('front')
        newImg.innerHTML = shufEmoji[i]
        IMGplase.appendChild(newImg)
    }
IMGplase.addEventListener('click', function (e) {
    let openBox = document.getElementsByClassName('openBox')
    if (e.target.className =='front') {
        e.target.classList.add('openBox')
        if(openBox.length == 2){
            if(openBox[0].innerHTML === openBox[1].innerHTML){
                    for (let i = 0; i < 2; i++) {
                        openBox[0].classList.replace('openBox','correct')
                    }
            } else if (openBox[0].innerHTML != openBox[1].innerHTML) {
                setTimeout(() => {
                    for (let i = 0; i < 2; i++) {
                        openBox[0].classList.remove('openBox')
                    }
                }, 500);
            }
        } 
        if (document.getElementsByClassName('correct').length == document.getElementsByClassName('front').length ) {
            setTimeout(() => {
            alert('YOU WIN')
            }, 500);
        }
    }
    })