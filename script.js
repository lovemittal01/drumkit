// window.addEventListener('keydown', function(e) {

//     const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
//     const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
//     console.log(key)
//     key.classList.add('playing')

//     setTimeout(() => {

//     }, 0.07);


//     if (!audio)
//         return;

//     audio.currentTime = 0;
//     audio.play();
// })

// const keys = document.querySelectorAll('.box')

// keys.forEach(function(box) {
//     box.addEventListener('transitionend', remove)
// })

// function remove(e) {
//     if (e.propertyName !== "transform") return;
//     this.classList.remove('playing')
// }



// New Code





const boxPress1 = document.querySelector(".w")

boxPress1.addEventListener("click", () => {
    boxPress1.classList.add("playing")
    const audio = new Audio('sounds/clap.mp3')
    setTimeout(() => {
        boxPress1.classList.remove("playing")
        audio.play()
    }, 200);

})

const boxPress2 = document.querySelector(".a")

boxPress2.addEventListener("click", () => {
    boxPress2.classList.add("playing")
    const audio = new Audio('sounds/boom.mp3')
    setTimeout(() => {
        boxPress2.classList.remove("playing")
        audio.play()
    }, 200);
})

const boxPress3 = document.querySelector(".s")

boxPress3.addEventListener("click", () => {
    boxPress3.classList.add("playing")
    const audio = new Audio('sounds/hihat.mp3')
    setTimeout(() => {
        boxPress3.classList.remove("playing")
        audio.play()
    }, 200);
})

const boxPress4 = document.querySelector(".d")

boxPress4.addEventListener("click", () => {
    boxPress4.classList.add("playing")
    const audio = new Audio('sounds/kick.mp3')
    setTimeout(() => {
        boxPress4.classList.remove("playing")
        audio.play()
    }, 200);
})

const boxPress5 = document.querySelector(".j")

boxPress5.addEventListener("click", () => {
    boxPress5.classList.add("playing")
    const audio = new Audio('sounds/ride.mp3')
    setTimeout(() => {
        boxPress5.classList.remove("playing")
        audio.play()
    }, 200);
})

const boxPress6 = document.querySelector(".k")

boxPress6.addEventListener("click", () => {
    boxPress6.classList.add("playing")
    const audio = new Audio('sounds/snare.mp3')
    setTimeout(() => {
        boxPress6.classList.remove("playing")
        audio.play()
    }, 200);
})

const boxPress7 = document.querySelector(".l")

boxPress7.addEventListener("click", () => {
    boxPress7.classList.add("playing")
    const audio = new Audio('sounds/tom.mp3')
    setTimeout(() => {
        boxPress7.classList.remove("playing")
        audio.play()
    }, 200);
})

document.addEventListener("keydown", (event) => {

    switch (event.keyCode) {
        case 87:
            const boxPress1 = document.querySelector(".w")

            boxPress1.classList.add("playing")
            const audio1 = new Audio('sounds/clap.mp3')
            setTimeout(() => {
                boxPress1.classList.remove("playing")
                audio1.play()
            }, 200);
            break;

        case 65:
            const boxPress2 = document.querySelector(".a")

            boxPress2.classList.add("playing")
            const audio2 = new Audio('sounds/boom.mp3')
            setTimeout(() => {
                boxPress2.classList.remove("playing")
                audio2.play()
            }, 200);
            break;
        case 83:
            const boxPress3 = document.querySelector(".s")

            boxPress3.classList.add("playing")
            const audio3 = new Audio('sounds/hihat.mp3')
            setTimeout(() => {
                boxPress3.classList.remove("playing")
                audio3.play()
            }, 200);
            break;
        case 68:
            const boxPress4 = document.querySelector(".d")

            boxPress4.classList.add("playing")
            const audio4 = new Audio('sounds/kick.mp3')
            setTimeout(() => {
                boxPress4.classList.remove("playing")
                audio4.play()
            }, 200);
            break;
        case 74:
            const boxPress5 = document.querySelector(".j")

            boxPress5.classList.add("playing")
            const audio5 = new Audio('sounds/ride.mp3')
            setTimeout(() => {
                boxPress5.classList.remove("playing")
                audio5.play()
            }, 200);
            break;
        case 75:
            const boxPress6 = document.querySelector(".k")

            boxPress6.classList.add("playing")
            const audio6 = new Audio('sounds/snare.mp3')
            setTimeout(() => {
                boxPress6.classList.remove("playing")
                audio6.play()
            }, 200);
            break;
        case 76:
            const boxPress7 = document.querySelector(".l")

            boxPress7.classList.add("playing")
            const audio7 = new Audio('sounds/tom.mp3')
            setTimeout(() => {
                boxPress7.classList.remove("playing")
                audio7.play()
            }, 200);
            break;

    }
})