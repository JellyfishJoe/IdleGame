var numberSadness = 100;
var numberDepression = 0;
var cost = 10;
var increase = 1;
var prestigeShown = false;
var continueRun = 1;

$(document).ready(function(){
	console.log("wow");
	$(document.getElementById('prestigeButton')).hide();
	$(document.getElementById('depressions')).hide();
})

//begin money-making when this button is clicked
function beginGame(){
	console.log('clicked');
	runCurrencyLoop();
}

//handles the making and displaying of monies
function runCurrencyLoop(){
	console.log('running currency loop');
	//function runs once every 100 ms to update quickly after spending, but only adds money every 1s
	numberSadness += increase;
	console.log(numberSadness % 100)
	if(numberSadness > 100 && numberSadness % 100 == 0){
		showPrestige(numberSadness);
		prestigeShown = true;
	}
	if(continueRun == 1){
		updateMonies(numberSadness);
		setTimeout(runCurrencyLoop, 1000);
	}
}

function updateMonies(sadness){
	document.getElementById('sadnesses').innerHTML = `You have ${sadness} sadness`;
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
	document.getElementById('prestigeButton').show();
	var depressionEarned = Math.floor(sadness / 100);
	var t = document.createTextNode(`Make better. You will receive ${depressionEarned} depression.`); 
}

function prestige(sadness){
	if(numberSadness > 100){
		numberSadness = 0;
		increase = 0.1;
		cost = 10;
		numberDepression = Math.floor(sadness / 100);
		document.getElementById('depressions').innerHTML = `You have ${numberDepression} depression`;
	}
}
