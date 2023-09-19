let inputs=document.querySelectorAll('input')
let emailInput=document.querySelector('.email-input')
let nameInput=document.querySelector('.name-input')
let passwordInput=document.querySelector('.password-input')
let errorMsg=document.querySelector('.error')
let btn=document.querySelector('.register-btn')
btn.addEventListener("click", addUser)
function addUser(e) {
    e.preventDefault()
    console.log(emailInput.value);
    let user={
        name:nameInput.value,
        email:emailInput.value,
        password:passwordInput.value,
    }
    console.log(user);
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




