window.addEventListener('keydown', function(e) {

    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    console.log(key)
    key.classList.add('playing')

    setTimeout(() => {

    }, 0.07);


    if (!audio)
        return;

    audio.currentTime = 0;
    audio.play();
})

const keys = document.querySelectorAll('.box')

keys.forEach(function(box) {
    box.addEventListener('transitionend', remove)
})

function remove(e) {
    if (e.propertyName !== "transform") return;
    this.classList.remove('playing')
}