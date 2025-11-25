const buttons = document.querySelectorAll('.button')

const body = document.querySelector('body')

buttons.forEach((button)=>{
   button.addEventListener('click',(e)=>{
    // console.log(e.target.id);
    // body.style.backgroundColor=e.target.id;
    if(e.target.id === 'grey'){
        body.style.backgroundColor = e.target.id;
    }
   })
})

