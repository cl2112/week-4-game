$(document).ready(function(){


var loneStar = {
	atkPwr: 0,
	counterAtk: 0,
	health: 0,
}

var barf = {
	atkPwr: 0,
	counterAtk: 0,
	health: 0,
}

var darkHelmet = {
	atkPwr: 0,
	counterAtk: 0,
	health: 0,
}

var pres = {
	atkPwr: 0,
	counterAtk: 0,
	health: 0,
}





$(".leftScreenContainer #pres").click(function(){
	$(".leftScreenContainer #darkHelmet").clone(true).appendTo(".rightScreenContainer");
	$(".leftScreenContainer #darkHelmet").hide();
	$(".leftScreenContainer #barf").clone(true).appendTo(".rightScreenContainer");
	$(".leftScreenContainer #barf").hide();
	$(".leftScreenContainer #loneStar").clone(true).appendTo(".rightScreenContainer");
	$(".leftScreenContainer #loneStar").hide();


});

$(".rightScreenContainer #darkHelmet").click(function(){
	$(".middleScreenContainer #darkHelmet").hide();

});









































});