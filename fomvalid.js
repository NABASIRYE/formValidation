var form=document.getElementById('form')
var username=document.getElementById('username');
var email=document.getElementById('email')


form.addEventListener('submit',(event)=>{
    event.preventDefault();

    validatefield();
})

function validatefield(){
var usernameinput=username.value;
var emailinput=email.value;

if(usernameinput==''){
    errormsg(username, 'fill in username')
}else {
    successful(username)

}

if (emailinput==''){
    errormsg(email, 'fill in your email address');
}else{
    successful(email);
}



}

function errormsg(input,message){

    var fieldxx=input.parentElement;
    var small=fieldxx.querySelector('small');
    small.innerText= message;
    fieldxx.className='field error';
}

function successful(input){
    var fieldxx=input.parentElement;
    fieldxx.className = 'field success';
}