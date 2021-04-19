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
form.addEventListener('submit', function(e) {
    e.preventDefault();
    if(username.value === '') {
        showError(username, 'Username is required');
    }
    else 
    {
        showsuccsess(username);
    }
    if(cnic.value === '') {
        showError(cnic, 'Cnic is required');
    }
    else 
    {
        showsuccsess(cnic);
    }
    if(Email.value === '') {
        showError(Email, 'Email is required');
    }
    else 
    {
        showsuccsess(Email);
    }
    if(dob.value === '') {
        showError(dob, 'Date of birth is required');
    }
    else 
    {
        showsuccsess(dob);
    }
    if(password.value === '') {
        showError(password, 'password is required');
    }
    else 
    {
        showsuccsess(password);
    }
    if(password1.value === '') {
        showError(password1, 'confirm password is required');
    }
    else 
    {
        showsuccsess(password1);
    }
    });
