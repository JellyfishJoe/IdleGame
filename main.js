var numberElectrons = 0;

$(document).ready(function(){
	console.log("wow");
})

function beginGame(){
	console.log("clicked");
	runCurrencyLoop();
}

function runCurrencyLoop(){
	setInverval(function(){
		numberElectrons += 1;
		document.getElementById('electrons').innerHTML = "wow"
		console.log(numberElectrons);
	}, 1000)
}