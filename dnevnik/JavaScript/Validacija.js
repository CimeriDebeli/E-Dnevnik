
var elementi = document.getElementsByTagName("input");

for(var i = 0; i < elementi.length; i++){

	if(elementi[i].type != "submit")
		elementi[i].onblur = validateInput;
}



function validateInput(e){

	var element = e.target;
	var valid = true;

	if(element == null)
		element = e;

	if(element.value == "")
		valid = false;

	if(!valid)
		element.classList.add("error");
	else
		element.classList.remove("error");

	return valid;
}

if(characterCode == 13)
	buttonValidation();

function buttonValidation(){

	var valid = true;

	for(var i = 0; i < elementi.length; i++){
		
		if(elementi[i].type != "submit"){
			if(validateInput(elementi[i]) == false)
				valid = false;
		}
	}
	return valid;
}
