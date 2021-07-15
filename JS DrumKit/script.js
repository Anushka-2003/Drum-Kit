// const keys = document.querySelectorAll(".key");

// keys.forEach((k) => {
//     k.addEventListener("keydown", () => {
//         console.log(keys);
//     })
//     // k.addEventListener("mouseout", () => {
//     //     k.classList.remove("playing");
//     // })
    
// })


function playSound(e){
    const audio = document.querySelector(`audio[data-key = "${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key = "${e.keyCode}"]`);
    key.classList.add("playing");
    if(!audio) return; // stops the function from running all together
    audio.currentTime = 0; // Rewind to the start
    audio.play();
}


function removeTransition(e){
    // console.log(e);
    if(e.propertyName !== 'transform') return; // skip it if it was not a transform
    this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition))

window.addEventListener("keydown", playSound);

