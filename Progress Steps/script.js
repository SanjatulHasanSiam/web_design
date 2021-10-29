const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
let currActive = 1
next.addEventListener('click', () => {
    currActive++
    if (currActive > circles.length) {
        currActive = circles.length
    }
    update()
})

prev.addEventListener('click', () => {
    currActive--
    if (currActive < 1) {
        currActive = 1
    }
    update()
})

function update() {
    circles.forEach((circle, idx) => {
        if (idx < currActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    const actives = document.querySelectorAll('.active')
    progress.style.width = (actives.length - 0.40) / (circles.length) * 100 + '%'

    if (currActive === 1) {
        prev.disabled = true
    } else if (currActive === 4) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}