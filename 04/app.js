const divsList = document.querySelectorAll('div')
const bodyElement = document.querySelector('body')

const handleClick = function(e){
    e.currentTarget.classList.add('clicked')

}

divsList.forEach(function(div){
    div.addEventListener('click', handleClick)
})