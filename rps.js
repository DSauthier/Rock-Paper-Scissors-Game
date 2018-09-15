// score count
var playerScore = 0;
var computerScore = 0;

function computerPlay(){
	let number = Math.floor(Math.random()* 3);

	if(number === 0){
		return "Rock"
	}
	else if(number === 1){
		return "Paper"
	}
	else if(number ===2){
		return "Scisors"
	}
};
function playerPlay(){
	let number = Math.floor(Math.random()* 3);

	if(number === 0){
		return "Rock"
	}
	else if(number ===1){
		return "Paper"
	}
	else if(number === 2){
		return "Scisors"
	}
};
// possible outcomes:
/* rock > scisor 1
// rock = rock 2 
	rock < paper 3
	scisor = scisor 4
	scisor > rock 5
//  scisor > paper 6
// paper > rock 7
// paper = paper 8 
	paper < scisor 9
*/

function game(x,y){
	var x = playerPlay();
	var y = computerPlay()
	/*2,4,8*/if( x === y ){
		return "its a tie"
	}
	/*1*/ else if( x === "Rock" && y === "Scisors"){
		console.log("Rock Beat Scisors")
		return "Player wins"
	}

	/*6*/ else if(x === "Scisors" && y === "Paper"){
		console.log("Scisors Beat Paper")
		return "Player wins"
	}

	/*7*/ else if(x === "Paper" && y === "Rock"){
		console.log("Paper Beat Rock")
		return "Player wins"
	}
	/*3*/else if(x === "Rock" && y === "Paper"){
		console.log("Rock Beat Paper")
		return "computer wins"
	}

	/*5*/else if(x === "Scisors" && y === "Rock"){
		console.log("Scisors Beat Rock")
		return "computer wins"
	}

	/*9*/else if(x === "Paper" && y === "Scisors"){
		console.log("Paper Beat Scisors")
		return "computer wins"
	}
}
function gameScore(){
	var r = game()
	if( r === "Player wins"){
		playerScore =+ 1;
		return "Player Score " + playerScore + " X " + computerScore + " Computer Score";
	} 
	else if( r === "computer wins"){
		computerScore =+ 1;
		return "Player Score " + playerScore + " X " + computerScore + " Computer Score";
	}
	else if( r === "its a tie"){
		return "Player Score " + playerScore + " X " + computerScore + " Computer Score";
	}
}

function score(){
	return "Player Score " + playerScore + " X " + computerScore + " Computer Score";
}