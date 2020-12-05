var form =  document.getElementById("form");
var username = document.getElementById("username");
var email = document.getElementById("email");
var password1 =  document.getElementById("password1");
var password2 =  document.getElementById("password2");
var namesmall =  document.getElementById("name-small");
var emailsmall =  document.getElementById("email-small");
var password1small =  document.getElementById("password1-small");
var password2small =  document.getElementById("password2-small");
var namewrong = document.getElementById("name-wrong");
var emailwrong = document.getElementById("email-wrong");
var pass1wrong = document.getElementById("password1-wrong");
var pass2wrong = document.getElementById("password2-wrong");
var nameright = document.getElementById("name-right");
var emailright = document.getElementById("email-right");
var pass1right = document.getElementById("password1-right");
var pass2right = document.getElementById("password2-right");


form.addEventListener('submit',(e)=>{
    e.preventDefault();

    checkInput();
});

function checkInput(){
    if (username.value ===''){
        username.style.borderBottomColor = "red";
        namesmall.innerHTML = "username can't be blank";
        namesmall.style.visibility = 'visible';
        namewrong.style.visibility = "visible";
    }
    else if(username.value.match(/^[a-z0-9A-Z]+$/g)){
        username.style.borderBottomColor =  'green';
        nameright.style.visibility  = 'visible';
        namewrong.style.visibility = 'hidden';
        namesmall.style.visibility = 'hidden';
    }
    else{
        username.style.borderBottomColor = "red";
        namesmall.innerHTML = "Username must contain small letters and no special symbols!";
        namesmall.style.visibility = 'visible';
        namewrong.style.visibility = "visible";
    }
    if(email.value ===''){
        email.style.borderBottomColor = "red";
        emailsmall.innerHTML = "email-id can't be blank";
        emailsmall.style.visibility = 'visible';
        emailwrong.style.visibility = "visible";
    }
    else if((email.value).match(/@gmail.com$/gim)){
        email.style.borderBottomColor =  'green';
        emailright.style.visibility  = 'visible';
        // emailright.style.top = '128px';
        emailwrong.style.visibility = 'hidden';
        emailsmall.style.visibility = 'hidden';
    }
    else{
        email.style.borderBottomColor = "red";
        emailsmall.innerHTML = "enter a valid email id";
        emailsmall.style.visibility = 'visible';
        emailwrong.style.visibility = "visible";
    }
    if(password1.value ===''){
        password1.style.borderBottomColor = "red";
        password1small.innerHTML = "Field can't be blank";
        password1small.style.visibility = 'visible';
        pass1wrong.style.visibility = "visible";
    }
    else{
        password1.style.borderBottomColor = 'green';
        pass1right.style.visibility='visible';
        pass1wrong.style.visibility = 'hidden';
        password1small.style.visibility = 'hidden';
    }
    if(password2.value ===''){
        password2.style.borderBottomColor = "red";
        password2small.innerHTML = "Field can't be blank";
        password2small.style.visibility = 'visible';
        pass2wrong.style.visibility = "visible";
        pass2right.style.visibility = 'hidden';
    }
    else if((password2.value)===(password1.value)){
        password2.style.borderBottomColor = 'green';
        pass2right.style.visibility = 'visible';
        pass2wrong.style.visibility = 'hidden';
        password2small.style.visibility = 'hidden';
    }
    else{
        password2.style.borderBottomColor = "red";
        password2small.innerHTML = "password can't match!";
        password2small.style.visibility = 'visible';
        pass2wrong.style.visibility = "visible";
        pass2right.style.visibility = 'hidden';
    }
}