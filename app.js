const modeBtn = document.getElementById('mode-change')
modeBtn.addEventListener('click', () => {
    document.querySelector('body').classList.toggle('dark')
    document.querySelector('nav').classList.toggle('dark-nav')
    document.querySelector('.mode-change-button').classList.toggle('dark-mode-button')
    document.querySelector('i').classList.toggle('dark-mode-i')
    const cards = document.querySelectorAll('.card')
    cards.forEach((card) => {
        card.classList.toggle('card-dark')
    })
})
