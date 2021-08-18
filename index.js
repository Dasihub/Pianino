const active = document.querySelectorAll('.key')
const audio1 = document.querySelectorAll('.audio_music')

active.forEach((x, index) => {
    x.addEventListener('click', () => {
        audio1[index].play()
    })
})