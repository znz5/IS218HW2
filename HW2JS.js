var fname = document.getElementById("firstname").value;
var lname = document.getElementById("lastname").value;
var email = document.getElementById("email").value;
var town = document.getElementById("town").value;
var major = document.getElementById("major").value;
var letters = /^[A-Za-z]+$/;
var emailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

function validateForm() {
	if (fname==="" || lname==="" || email==="" || town==="" || major==="") {
		alert("All fields must be filled out");
	} else {
		fnameValidate();
		lnameValidate();
		emailValidate();
		townValidate();
		majorValidate();
	}
}

function fnameValidate(){
	if (fname.match(letters)) {
		return true;
	} else {
		alert("First name must be letters only")
	}
}

function lnameValidate(){
	if (lname.match(letters)) {
		return true;
	} else {
		alert("Last name must be letters only")
	}
}

function emailValidate(){
	if (email.match(emailformat)) {
		return true;
	} else {
		alert("Please enter a valid email address")
	}
}

function townValidate(){
	if (town.match(letters)) {
		return true;
	} else {
		alert("Town name must be letters only")
	}
}

function majorValidate(){
	if (major.match(letters)) {
		return true;
	} else {
		alert("Major must be letters only")
	}
}

function clearInputs() {
	var elements = document.getElementsByTagName("input");
	for (var ii=0; ii < elements.length; ii++) {
		if (elements[ii].type == "text") {
			elements[ii].value = "";
		}	
	}
}
