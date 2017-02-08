$(document).ready(function(){


var loneStarStats = {
	atkPwr: 0,
	counterAtk: 0,
	health: 0,
}

var barfStats = {
	atkPwr: 0,
	counterAtk: 0,
	health: 0,
}

var darkHelmetStats = {
	atkPwr: 0,
	counterAtk: 0,
	health: 0,
}

var presStats = {
	atkPwr: 0,
	counterAtk: 0,
	health: 0,
}

var charaChosenId
var enemyChosenId



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
var gameYourChara = 1
var gamePickNme
var gameFight
var gameOver



$(".leftScreenContainer [id]").on("click", function(){
	if (gameYourChara == 1){
		gameYourChara = 0;
		gamePickNme = 1;
		$(".leftScreenContainer [id]").not(this).appendTo(".rightScreenContainer");
	}
});

$(".rightScreenContainer").on("click","[id]", function(){
	if (gamePickNme == 1){
		gamePickNme = 0;
		$(this).appendTo(".middleScreenContainer");
	}	
});





/*$(".leftScreenContainer [id]").on("click", function(){
	if (gameYourChara == 1){
		charaChosenId = $(this).attr("id");
		console.log(charaChosenId);
		
		gameYourChara = 0;
		gamePickNme = 1;

		console.log(gameYourChara);
		console.log(gamePickNme);
	}
});
*/
/*
$(".leftScreenContainer [id]").on("click", function(){
	if (gameYourChara == 1){
		charaChosenId = $(this).attr("id");
		console.log(charaChosenId);
		gamePickNme = 1;
		gameYourChara = 0;
		console.log(gamePickNme);
		console.log(gameYourChara);
		$(".leftScreenContainer [id]").not(this).each(function(){
			$(this).clone().appendTo(".rightScreenContainer");
			$(this).hide();
		});

	}
});
*/

/*$(".rightScreenContainer [id]").on("click", "[id]", function(){
	if (gamePickNme == 1){
		enemyChosenId = $(this).attr("id");
		console.log(enemyChosenId);
		$(".leftScreenContainer [id]").clone().appendTo(".middleScreenContainer");
		$(".leftScreenContainer [id]").hide();
		$(this).clone().appendTo(".middleScreenContainer");
		$(this).hide();
	}
});
*/








/*$(".leftScreenContainer [id]").on("click", function(){
	charaChosenId = $(this).attr("id");
	console.log(charaChosenId);
	$(".leftScreenContainer [id]").not(this).each(function(){
		$(this).clone().appendTo(".rightScreenContainer");
		$(this).hide();
	});
		

});*/









































});