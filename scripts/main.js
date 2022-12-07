var myImage = document.querySelector('img[src]')

myImage.onclick = function() {
	mySrc = myImage.getAttribute('src');

	if (mySrc === 'image/prikol.jpg'){
		myImage.setAttribute('src', 'image/prikol3.jpg');
	}
	else{
		myImage.setAttribute('src', 'image/prikol.jpg');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myButton.onclick = function() {
	setUserName();
}

if (!localStorage.getItem('name')) {
	setUserName();
}
else{
	var storedName = localStorage.getItem('name');
	myHeading.textContent = 'Приветствуем вас, ' + storedName + '!';
}

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Приветствуем вас, ' + myName + '!';
}