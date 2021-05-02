const form= document.getElementById('form');
const username=document.getElementById('username');
const nic=document.getElementById('cnic');
const email=document.getElementById('Email');
const Dob=document.getElementById('dob');
const pass=document.getElementById('password');
const pass1=document.getElementById('password1');
// creatings functions
function showError(input, message) {
    // Get the parent element of the input field (.form-control)
    const formControl = input.parentElement;
    // Replace the class - add error
    formControl.className = 'form-control error';
    // Get the small element for the error message
    const small = formControl.querySelector('small');
    // Replace the text for small element using the input message
    small.innerText = message;
}
function showsuccsess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';
}
function isvalidemail(input)
{
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(re.test(input.value.trim())){
        showsuccsess(input);
     }
    else
    {
        showError(input, `${getfieldid(input)} is not valid` );
    }
     
}
function checkreq(inputarray){
   inputarray.forEach(function(input) {
       if(input.value===''){
           showError(input, `${getfieldid(input)} is required`);
       }
       else{
           showsuccsess(input);
       }
       
   });
}
//function to get the id of the input field
function getfieldid(input){
    return input.id;
}
function checklength(input, min,max)
{
    if(input.value.length < min)
    {
        showError(input,`${getfieldid(input)} less than 3 characters`);
    }
    else if(input.value.length >max){
        showError(input,`${getfieldid(input)} is greator than 10 characters`);
    }
    else
    {

        showsuccsess(input);
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();
    checkreq([username,cnic,Dob,Email,pass,pass1]);
    checklength(username,3,6);
    checklength(password,6,10);
    isvalidemail(Email);
    });
