var numberElectrons = 0;

$(document).ready(function(){
	console.log("wow");
})

function beginGame(){
	console.log("clicked");
	document.location = "file:///C:/Users/etone/Desktop/Projects/IdleGame/main.html";
	runCurrencyLoop();
}

function runCurrencyLoop(){
	window.setInverval(function(){
		numberElectrons += 1;
		document.getElementById('electrons').innerHTML = "wow"
		console.log(numberElectrons);
	})
}