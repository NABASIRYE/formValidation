// var validate=()=>{
   
//     var username=document.mydata.username;
//     var telephone=document.mydata.telephone;//mydata is the name of the form, telephone is the input value for telephone
//     var email=document.mydata.email;
    // if(username.value.length==" "){
    //     username.style.border="red solid 2px";
    //     alert("you can't submit empty field");
   
    //     if(username.value.length < 5 || username.value.length>12){
    //         username.style.border="red solid 2px";
    //        alert("username should be between 5 and 12");   
    // }
    // }
    
  //VALIDATING DATA TYPE
      //  var letters=/^[A-Za-z]+$/;  //when dealing with alphabet
    //var letters=/^[0-9]+$/;         //when dealing with numeric
    // var letters=/^[0-9a-zA-Z]+$/;  //dealing with alphanumeric

    // var letters=/^[0-9a-zA-Z]+$/;
    // if(!username.value.match(letters)){
    //     username.style.border="red solid 2px"
    //     alert("username should not contain numbers");
    // } 


    //VALIDATING PHONE NUMBER   If u want a number to be like xxxx-xxx-xxx or xxxx.xxx.xxx
    // var phonenumber=/^\(?([0-9]{4})\)?[-.]?([0-9]{3})[-.]?([0-9]{3})$/; //this means the first banch of numbers should be four  and between 0-9, the second banch of numbers should be three and also between 0-9, and lastly the last banch of numbers should be three and between 0-9
    // if(telephone.value.match(phonenumber)){
    //     telephone.style.border="red solid 2px";
    //         alert("invalid phone number");  
    // }


    //VALIDATING EMAIL
// var mail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// if(email.value.match(mail)){
//    email.style.border="green solid 2px";
// }else{
//     alert("invalid email");
// }
// }






// SELF TAUGHT PHONE VALIDATION


// var telephone= document.mydata.telephone;
// function contact(input){

    //Phone number if u want the number to have 10 digits eg XXXXXXXXXX
    // var phonenumber=/^\d{10}$/;
    // if(telephone.value.match(phonenumber)){
    //     return true;
    // }else{
    //     telephone.style.border="red solid 2px"
    //     alert("invalid entry");
    //     return false;
    // }


//If u want phone number to be like +XXX XXX XXX XXX or +XXX-XXX-XXX-XXX or +xxx.xxx.xxx.xxx
// var phonenumber= /^\+?([0-9]{3})\)?[-. ]?([0-9]{3})?[-. ]?([0-9]{3})?[-. ]?([0-9]{3})$/;
//        if(telephone.value.match(phonenumber)){
//            return true;
//        }else{
//            telephone.style.border="red solid 2px";
//            alert("invalid phone number");
//            return false;
//        }
// }


