$(document).ready(function(){


var characters = {
	loneStar: {
		atkPwr: 10,
		counterAtk: 10,
		health: 100,
		atkIncrement: 18,
	},
	barf: {
		atkPwr: 10,
		counterAtk: 15,
		health: 120,
		atkIncrement: 13,
	},
	darkHelmet: {
		atkPwr: 10,
		counterAtk: 20,
		health: 160,
		atkIncrement: 10,
	},
	pres: {
		atkPwr: 10,
		counterAtk: 25,
		health: 200,
		atkIncrement: 10,
	},
}



var wins = 0
var numberOfCharacters = Object.keys(characters).length;

//Game-State Variables ------------
var gameYourChara = 1
var gamePickNme
var gameFight
var gameOver

updateHealth();




function updateHealth(){
	$(".healthloneStar").text(characters.loneStar.health);
	$(".healthbarf").text(characters.barf.health);
	$(".healthdarkHelmet").text(characters.darkHelmet.health);
	$(".healthpres").text(characters.pres.health);
};




$(".leftScreenContainer [id]").on("click", function(){
	if (gameYourChara == 1){
		gameYourChara = 0;
		gamePickNme = 1;
		$(".leftScreenContainer .colHeading").text("-Now, Pick Your Enemy-");
		$(".leftScreenContainer [id]").not(this).appendTo(".rightScreenContainer");
	}
});

$(".rightScreenContainer").on("click","[id]", function(){
	if (gamePickNme == 1){
		gamePickNme = 0;
		$(".leftScreenContainer [id]").appendTo(".middleScreenContainer");
		$(".middleScreenContainer").append("<h1 class='colHeading text-center clickToFight'>-Click To Fight!-</h1>");
		$(this).appendTo(".middleScreenContainer");
		$(".leftScreenContainer .colHeading").text("-Battle!-");
	}	
});



$(".middleScreenContainer").on("click", ".clickToFight", function(){
	var yourChara = characters[$(".middleScreenContainer [id]").first().attr("id")];
	var enemyChara = characters[$(".middleScreenContainer [id]").last().attr("id")];
	console.log(yourChara);
	console.log(enemyChara);
	battle(yourChara, enemyChara);
	updateHealth();

	
$(".leftScreenContainer").on("click", ".playAgain", function(){
	location.reload(true);
})


});

function battle(you, enemy){
	enemy.health -= you.atkPwr;
	you.atkPwr += you.atkIncrement;
	if (enemy.health <= 0) {
		console.log("Enemy Dead");
		$(".middleScreenContainer [id]").first().appendTo(".leftScreenContainer");
		$(".middleScreenContainer [id]").last().remove();
		$(".middleScreenContainer .clickToFight").remove();
		$(".leftScreenContainer .colHeading").text("-Now, Pick Your Next Enemy-");
		gamePickNme = 1;
		wins++;
		if (wins == numberOfCharacters - 1){
			$(".leftScreenContainer .colHeading").text("-All Enemies Defeated!-");
			$(".leftScreenContainer").append("<h1 class='colHeading text-center playAgain'>-Congrats!- <br> -Click Here To Play Again-</h1>");
		}
	} else {
		you.health -= enemy.counterAtk;
		if (you.health <= 0){
			console.log("You Dead");
			$(".middleScreenContainer .clickToFight").remove();
			$(".middleScreenContainer [id]").first().remove();
			$(".leftScreenContainer .colHeading").text("-You Were Defeated!-");
			$(".leftScreenContainer").append("<h1 class='colHeading text-center playAgain'>-Not Like This!- <br> -Click Here To Play Again-</h1>");
		}
	}

}


















});