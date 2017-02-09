$(document).ready(function(){


var characters = {
	loneStar: {
		atkPwr: 10,
		counterAtk: 10,
		health: 100,
		atkIncrement: 10,
	},
	barf: {
		atkPwr: 10,
		counterAtk: 10,
		health: 120,
		atkIncrement: 10,
	},
	darkHelmet: {
		atkPwr: 10,
		counterAtk: 10,
		health: 160,
		atkIncrement: 10,
	},
	pres: {
		atkPwr: 10,
		counterAtk: 10,
		health: 200,
		atkIncrement: 10,
	},
}



var charaChosenId
var enemyChosenId
var numberOfCharacters = Object.keys(characters).length;

//Game-State Variables ------------
var gameYourChara = 1
var gamePickNme
var gameFight
var gameOver

updateHealth();



function totalCharacters(){

}


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
		$(".leftScreenContainer [id]").not(this).appendTo(".rightScreenContainer");
	}
});

$(".rightScreenContainer").on("click","[id]", function(){
	if (gamePickNme == 1){
		gamePickNme = 0;
		$(".leftScreenContainer [id]").appendTo(".middleScreenContainer");
		$(".middleScreenContainer").append("<h1 class='colHeading text-center clickToFight'>-Click To Fight!-</h1>");
		$(this).appendTo(".middleScreenContainer");
	}	
});



$(".middleScreenContainer").on("click", ".clickToFight", function(){
	var yourChara = characters[$(".middleScreenContainer [id]").first().attr("id")];
	var enemyChara = characters[$(".middleScreenContainer [id]").last().attr("id")];
	console.log(yourChara);
	console.log(enemyChara);
	battle(yourChara, enemyChara);
	updateHealth();

	



});

function battle(you, enemy){
	enemy.health -= you.atkPwr;
	you.atkPwr += you.atkIncrement;
	if (enemy.health <= 0) {
		console.log("Enemy Dead");
		$(".middleScreenContainer [id]").first().appendTo(".leftScreenContainer");
		$(".middleScreenContainer [id]").last().remove();
		$(".middleScreenContainer .clickToFight").remove();
		gamePickNme = 1;
	} else {
		you.health -= enemy.atkPwr;
		if (you.health <= 0){
			console.log("You Dead")
		}
	}

}













/*
$(".middleScreenContainer").on("click", ".clickToFight", function(){
	var yourChara = $(".middleScreenContainer [id]").first().attr("id");
	if (yourChara == "loneStar") {
		yourChara = loneStar;
	} else if (yourChara == "barf") {
		yourChara = barf;
	} else if (yourChara == "darkHelmet") {
		yourChara = darkHelmet;
	} else {
		yourChara = pres;
	}
	var enemyChara = $(".middleScreenContainer [id]").last().attr("id");
	if (enemyChara == "loneStar") {
		enemyChara = loneStar;
	} else if (enemyChara == "barf") {
		enemyChara = barf;
	} else if (enemyChara == "darkHelmet") {
		enemyChara = darkHelmet;
	} else {
		enemyChara = pres;
	}
	console.log(yourChara);
	console.log(loneStar);
	console.log(enemyChara);
	enemyChara.health -= yourChara.atkPwr;
	yourChara.atkPwr += 10;
	yourChara.health -= enemyChara.counterAtk;
	$(".health" + yourChara.string).text(yourChara.health);
	console.log(yourChara.health);
	console.log(loneStar.health);
	$(".health" + enemyChara).text(enemyChara.health);
	console.log(enemyChara.health);
	console.log(barf.health);
});


$(".middleScreenContainer").on("click", ".clickToFight", function(){
	var yourChara = $(".middleScreenContainer [id]").first().attr("id");

})

var func = function() {
    var something = { key : "peaches"};
    
    function someOtherFunction() {

        return "key";
    }
    
    console.log(something[someOtherFunction()]);
}



function matchObj(string){
	if (string == ""){

	}
}


*/

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