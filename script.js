let MenuNavBar = document.querySelector('.list')
let MenuList = document.querySelector('.menu-list')
let InputEnter = document.querySelector('.input-enter')
let InputEnterPlace = document.querySelector('#input-enter-place')


MenuNavBar.addEventListener('click', function(){
    if(MenuList.style.display == 'block'){
        MenuList.style.display = 'none'
    } else{
        MenuList.style.display = 'block'
    }

   
   
})

InputEnter.addEventListener('click', function(){
    if(InputEnterPlace.style.display == 'block'){
        InputEnterPlace.style.display = 'none'
    }else{
        InputEnterPlace.style.display = 'block'
    }
    InputEnter.style.border = ' 1px solid rgba(65, 65, 228, 0.655);'
})




