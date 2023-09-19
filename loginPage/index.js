let inputs=document.querySelectorAll('input')
let errorMsg=document.querySelector('.error')
let nameInput=document.querySelector('.name-input')
let passwordInput=document.querySelector('.password-input')
let btn=document.querySelector('button')
btn.addEventListener('click',login)
function login(e) {
    e.preventDefault()
    inputs.forEach(element => {
        if (element.value.length==0) {
            console.log('jhu');
            errorMsg.style.display='block'
        }
        
            else{
                errorMsg.style.display='none'
            }
        
    });
}