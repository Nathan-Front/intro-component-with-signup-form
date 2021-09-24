const form = document.getElementById('form');
const firstname = document.getElementById('first-name');
const lastname = document.getElementById("last-name");
const email = document.getElementById('email');
const password = document.getElementById("password");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    validateInput();
});

//Validate the input 
function validateInput(){
	const first = firstname.value.trim();
	const last = lastname.value.trim();
	const Email = email.value.trim();
	const Password = password.value.trim();

	if(first === ''){
		setErrorFor(firstname, 'Firstname cannot be empty');
	}else{
		setSuccessFor(firstname, 'Great job');
	}
	if(last === ''){
		setErrorFor(lastname, 'Lastname cannot be empty');
	}else{
		setSuccessFor(lastname, 'Great job');
	}
	if(Email === ''){
		setErrorFor(email, 'Email cannot be empty');
	}else if(!isEmail(email.value)){
		setErrorFor(email, 'Please enter valid email');
	}else{
		setSuccessFor(email, 'Great job');
	}
	if(Password === ''){
		setErrorFor(password, 'Password cannot be empty');
	}else{
		setSuccessFor(password, 'Great job');
	}
}
//appending CSS classes
function setErrorFor(input, message) {
	const validate = input.parentElement;
	const span = validate.querySelector('span');
	validate.className = 'validate-input error';
	span.innerText = message;
}
function setSuccessFor(input, message){
	const validate = input.parentElement;
	const span = validate.querySelector('span');
	validate.className = 'validate-input success';
	span.innerText = message;
}
//use for checking email validity
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
