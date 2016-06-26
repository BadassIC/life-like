var dollars = 50;
var energy = 50;
var time = 12;
var hunger = 5;
var day = 1;

document.getElementById("dollars").innerHTML = dollars;
document.getElementById("energy").innerHTML = energy;
document.getElementById("time").innerHTML = time;
document.getElementById("hunger").innerHTML = hunger;
document.getElementById("day").innerHTML = day;

function work(number){
	if(energy >= 5 && hunger >= 5){
    dollars = dollars + 3;
	energy = energy - 5;
	hunger = hunger - 5;
	time = time + 1;
		if(time => 25){
		time = 1;
		day = day + 1;
	}
    document.getElementById("dollars").innerHTML = dollars;
	document.getElementById("energy").innerHTML = energy;
	document.getElementById("time").innerHTML = time;
	document.getElementById("hunger").innerHTML = hunger;
	document.getElementById("day").innerHTML = day;
	}
};

function sleep(number){
	if(energy <= 100){
	energy = energy + 20;
	time = time + 1;
	}
	if(time >= 25){
		time = 1;
		day = day + 1;
	}
	if(energy >= 100){
		energy = 100;
	}
	document.getElementById("time").innerHTML = time;
	document.getElementById("energy").innerHTML = energy;
	document.getElementById("day").innerHTML = day;
}


