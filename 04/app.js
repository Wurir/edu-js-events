const divsList = document.querySelectorAll('div')
const bodyElement = document.querySelector('body')

const handleClick = function (e) {
    const thisDiv = this

    setTimeout(function () {
        thisDiv.classList.add('clicked')

    }, thisDiv.dataset.time)

    if (this.tagName === 'BODY') {
        e.stopPropagation()
    }
}

divsList.forEach(function (div) {
    div.addEventListener('click', handleClick)
})

bodyElement.addEventListener('click', function () {
    divsList.forEach(function (div) {
        div.classList.remove('clicked')

    })
})