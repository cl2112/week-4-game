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

var charaChosen



/*$(".leftScreenContainer #pres").on("click", function(){

	$(".leftScreenContainer #darkHelmet").clone(true).appendTo(".rightScreenContainer");
	$(".leftScreenContainer #darkHelmet").hide();
	$(".leftScreenContainer #barf").clone(true).appendTo(".rightScreenContainer");
	$(".leftScreenContainer #barf").hide();
	$(".leftScreenContainer #loneStar").clone(true).appendTo(".rightScreenContainer");
	$(".leftScreenContainer #loneStar").hide();


});

$(".rightScreenContainer").on("click","#darkHelmet", function(){
	$(".rightScreenContainer #darkHelmet").clone(true).appendTo(".middleScreenContainer");
	$(".rightScreenContainer #darkHelmet").hide();

});

*/

$(".leftScreenContainer [id]").on("click", function(){
	var charaChosen = $(this);
	console.log(charaChosen);
	
});









































});