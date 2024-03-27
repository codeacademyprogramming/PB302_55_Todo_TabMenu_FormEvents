
let usernameInput = document.getElementById("usernameInput");
let usernameIsValid=true;

document.getElementById("registerForm").addEventListener("submit",function(e){
    e.preventDefault();

    usernameIsValid = checkUsername();
    

})

function checkUsername(){

    usernameInput.parentElement.querySelectorAll("span").forEach(elem=>{
        elem.remove();
    })

    let check = true;
    if(usernameInput.value.length<3){
        let span = createErrorSpan("Username must be greater or equal than 3")
        usernameInput.parentElement.appendChild(span);
        check=false;
    }
    if(usernameInput.value.length>20){
        let span = createErrorSpan("Username must be less or equal than 20")
        usernameInput.parentElement.appendChild(span);
        check=false;
    }
    

    return check;
}

usernameInput.addEventListener("input",function(){
    console.log(usernameInput.value)
    if(!usernameIsValid){
        checkUsername();
    }
})

function createErrorSpan(message){
    let span = document.createElement("span");
    span.innerText = message;
    span.style.color="red";
    return span;
}