$(document).ready(function(){


var loneStar = {
	atkPwr: 10,
	counterAtk: 10,
	health: 100,
}

var barf = {
	atkPwr: 10,
	counterAtk: 10,
	health: 120,
}

var darkHelmet = {
	atkPwr: 10,
	counterAtk: 10,
	health: 160,
}

var pres = {
	atkPwr: 10,
	counterAtk: 10,
	health: 200,
}

var charaChosenId
var enemyChosenId

//Game-State Variables ------------
var gameYourChara = 1
var gamePickNme
var gameFight
var gameOver



$(".healthloneStar").text(loneStar.health);
$(".healthbarf").text(barf.health);
$(".healthdarkHelmet").text(darkHelmet.health);
$(".healthpres").text(pres.health);



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
		gameFight = 1;
		$(".leftScreenContainer [id]").appendTo(".middleScreenContainer");
		$(".middleScreenContainer").append("<h1 class='colHeading text-center clickToFight'>-Click To Fight!-</h1>");
		$(this).appendTo(".middleScreenContainer");
	}	
});

$(".middleScreenContainer").on("click", ".clickToFight", function(){
	var yourChara = $(".middleScreenContainer [id]").first().attr("id");
	var enemyChara = $(".middleScreenContainer [id]").last().attr("id");
	var yourCharaObj = "yourChara"
	console.log(yourChara);
	console.log(loneStar);
	console.log(enemyChara);
	enemyChara.health -= yourChara.atkPwr;
	yourChara.atkPwr += 10;
	yourChara.health -= enemyChara.counterAtk;
	$(".health" + yourChara).text(yourChara.health);
	console.log(yourChara.health);
	console.log(loneStar.health);
	$(".health" + enemyChara).text(enemyChara.health);
	console.log(enemyChara.health);
	console.log(barf.health);
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







































});