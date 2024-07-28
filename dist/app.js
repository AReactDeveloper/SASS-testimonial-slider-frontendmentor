const items = document.querySelectorAll('.testimonial__item')
const btns = document.querySelectorAll('.btn')


console.log(items,btns)

btns.forEach(btn =>{
    btn.addEventListener('click',e=>{
        items.forEach(item=>{
            if(!item.classList.contains('inActive')){
                item.classList.add('inActive')
            }else{
                item.classList.remove('inActive')
            }
        })
    })
})