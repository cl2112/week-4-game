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

var charaChosenId



/*(".leftScreenContainer #pres").on("click", function(){

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

//Game-State Variables ------------
var gameStart
var gameYourChara
var gamePickNme
var gameFight
var gameOver





if (gameStart = 1) {
	
}


$(".leftScreenContainer [id]").on("click", function(){
	charaChosenId = $(this).attr("id");
	console.log(charaChosenId);
	$(".leftScreenContainer [id]").not(this).each(function(){
		$(this).clone().appendTo(".rightScreenContainer");
		$(this).hide();
	});
		

});









































});