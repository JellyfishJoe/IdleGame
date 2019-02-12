var numberSadness = 100;
var cost = 10;
var increase = 0.1;
var prestigeShown = false;

$(document).ready(function(){
	console.log("wow");
})

//begin money-making when this button is clicked
function beginGame(){
	console.log("clicked");
	runCurrencyLoop();
}

//handles the making and displaying of monies
function runCurrencyLoop(){
	//function runs once every 100 ms to update quickly after spending, but only adds money every 1s
	numberSadness += increase;
	document.getElementById('sadnesses').innerHTML = `You have ${Math.floor(numberSadness)} sadness`;
	//console.log(numberElectrons);
	if(numberSadness > 100 && prestigeShown == false){
		showPrestige(numberSadness);
		prestigeShown = true;
	}
	setTimeout(runCurrencyLoop, 100);
}

//click this button to upgrade the speed of making monies
function upgradeProduction(){
	if(numberSadness >= cost){
		numberSadness -= cost;
		//cost increases with each purchase
		cost = Math.floor(cost * 1.27);
		document.getElementById('upgradeButton').innerHTML = `Make go faster. Cost: ${cost}`;
		increase += 0.1;
	}
}

function showPrestige(sadness){
	var depressionEarned = Math.floor(sadness / 100);
	var btn = document.createElement("Button");
	var t = document.createTextNode(`Make better. You will receive ${depressionEarned} depression.`);
	btn.appendChild(t);
	document.body.appendChild(btn);   
}

function prestige(sadness){
	numberSadness = 0;
	increase = 0.1;
	cost = 10;
	numberDepression = Math.floor(sadness / 100);
}