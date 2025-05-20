const divElement = document.querySelector('div')

divElement.addEventListener('mousemove', function(){
    console.log('mouseover')
})

divElement.addEventListener('mouseleave', function(){
    console.log('mouseleave')
})