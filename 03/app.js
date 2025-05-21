const btnsList = document.querySelectorAll('button')

const handleClick = function(e){
    console.log('clicked')
    e.target.innerText = 'clicked'
    e.target.removeEventListener('click', handleClick)
}

btnsList.forEach(function(btn){
    btn.addEventListener('click', handleClick)
})