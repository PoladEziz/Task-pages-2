let inputs=document.querySelectorAll('input')
let nameInput=document.querySelector('.name-input')
let form=document.querySelector('form')
let passwordInput=document.querySelector('.password-input')
let errorMsg=document.querySelector('.error')
let btn=document.querySelector('.register-btn')
btn.addEventListener("click", handleRegister)
function handleRegister(e) {
    e.preventDefault()
    localStorage.removeItem('users')
    if (nameInput.value && passwordInput.value) {
        errorMsg.style.display='none'
       createUser()
    }
    else{
        errorMsg.style.display='block'
    }
}
function getLocalStorage() {
let usersArray=JSON.parse(localStorage.getItem('users'))
if (usersArray) {
    return usersArray
}
else{
    createDataBase()
    let usersArray=JSON.parse(localStorage.getItem('users'))        
    return usersArray
}
}
function createDataBase() {
    let dataBase=[]
    localStorage.setItem('users',JSON.stringify(dataBase))
}
function createUser() {
    let dataBase=getLocalStorage()
    let userObject={
        name:nameInput.value,
        password:passwordInput.value
    }
    dataBase.push(userObject)
    localStorage.setItem('users',JSON.stringify(dataBase))
    form.reset()
}




