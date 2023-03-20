//slider

const tabs  = document.querySelectorAll('.tabheader__item'),
    tabsParent = document.querySelector('.tabheader__items'),
    tabContent = document.querySelectorAll('.tabcontent')

const hideTabContent = () => {
    tabContent.forEach(item => item.style.display = 'none')
    tabs.forEach(item => {item.classList.remove('tabheader__item_active')})
}

const showTabContent = (item = 0) => {
    tabContent[item].style.display = 'block'
    tabs[item].classList.add('tabheader__item_active')
}

hideTabContent()
showTabContent()

let slideIndex = 0;

function autoSlider() {
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none"
        tabs[i].classList.remove('tabheader__item_active')
    }
    slideIndex++;
    if (slideIndex === tabContent.length) {
        slideIndex = 0
    }
    tabContent[slideIndex].style.display = "block"
    tabs[slideIndex].classList.add('tabheader__item_active')
}

setInterval(autoSlider, 2000)

tabsParent.addEventListener('click', (event) => {
    if (event.target.classList.contains('tabheader__item')){
        tabs.forEach((item, index) => {
            if (event.target === item) {
                hideTabContent()
                showTabContent(index)
            }
        })
    }
})

//modal

const modal = document.querySelector('.modal')
const modalTrigger = document.querySelector('.btn_white')
const closeModalBtn = document.querySelector('.modal__close')

const openModal = () => {
    modal.classList.add('show')
    modal.classList.remove('hide')
    document.body.style.overflow = 'hidden'
}

setTimeout(openModal, 10000)

const closeModal = () => {
    modal.classList.add('hide')
    modal.classList.remove('show')
    document.body.style.overflow = ''
    setInterval(openModal, 10000)
}

modalTrigger.addEventListener('click', openModal)
closeModalBtn.addEventListener('click', closeModal)

modal.onclick = event => event.target === modal ? closeModal() : false
window.addEventListener('keydown', event => event.code === 'Escape' ? closeModal() : false)

window.addEventListener('scroll', () => window.innerHeight + window.scrollY >= document.body.offsetHeight ? openModal() : false)

//date

const deadLine = '2023-03-22'

function getTimeRemaining(deadline){
    const time = new Date(deadline) - new Date()
    const days = Math.floor(time / (1000 * 60 * 60 * 24))
    const hours = Math.floor(time / (1000 * 60 * 60) %  24)
    const minutes = Math.floor((time / 1000 / 60) % 60)
    const seconds = Math.floor((time / 1000) % 60)

    return {
        'total': time,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    }
}

function setClock(element, deadline){
    const elem = document.querySelector(element)
    const days = elem.querySelector('#days')
    const hours = elem.querySelector('#hours')
    const minutes = elem.querySelector('#minutes')
    const seconds = elem.querySelector('#seconds')

    setInterval(updateClock, 1000)
    updateClock()

    function updateClock(){
        const time = getTimeRemaining(deadline)
        days.innerHTML = time.days
        hours.innerHTML = time.hours
        minutes.innerHTML = time.minutes
        seconds.innerHTML = time.seconds
    }
}

setClock('.timer', deadLine)