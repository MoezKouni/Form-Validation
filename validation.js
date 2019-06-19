window.onload = function(){
const containerForm = document.getElementsByTagName('form');
const resetBtn = document.getElementById('resetButton'); 
const sendBtn = document.getElementById('sendButton');
const textArea = document.getElementById('commentArea');
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const patterns = {
    firstname: /^[a-z]{2,20}$/,
    lastname: /^[a-z]{2,20}$/,
    address: /^[a-z\d\.-]{2,50}$/,
    email: /^([a-z\d\.-]{3,})@([a-z]+)\.([a-z]{2,6})$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
};

// Validation
function validate(field){
    // let regex={firstname:/^[a-z]{2,10}$/}
    if(patterns[field.name].test(field.value)){
    field.className = 'valid';
    } else {
        field.className = 'invalid';
    }}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        validate(e.target, patterns['e.target.attributes.name.value'])
    });
});



sendBtn.addEventListener('click', () => {
    inputs.forEach((input) => {
        if(input.value === "" || input.className === 'invalid'){
            alert(`Please verify your ${input.name}`);
        } else {
            input.value = "";
            textArea.value = "";
        }
    });
    
});














}


