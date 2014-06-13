//******************** MODEL ********************//
function Board(){
	this.rows = [[],[],[],[],[],[]];
	this.columns = [[],[],[],[],[],[],[]];
	this.players = [];
};

Board.prototype = {
	addPiece: function(column){
		// debugger
		var newPiece
		if (this.columns[column].length >= 6){
			console.log("adios")
		}
		else {
			console.log("whatup");
			newPiece = new Piece(currentColor)
			this.rows[this.columns[column].length].push(newPiece)
			this.columns[column].push(newPiece);
			
			if (currentColor === "red"){
				currentColor = "black";
			}	else {
				currentColor = "red";
			}

		}
	}
}

function Piece(color){
	this.color = color;
};


//************************************************//









//********************* VIEW *********************//

function drawBoard(){
	var createBoard = $('#board')
	for (var i = 1; i < 7; i++){
		createBoard.append('<tr id="row' + i + '"></tr>')
		var newRow = $('#row' + i)
		for (var col = 1; col < 8; col++){
			newRow.append('<td class="a ' + col + '"></td>')
		}
	}
}



//************************************************//














//********************* CONTROLLER *********************//
$(document).ready(function() {
	drawBoard();
	add_diagonals_to_class();
	gameBoard = new Board();
	currentColor = "red";


	$('.1').on("click", function(){
		gameBoard.addPiece(0);
	});
	$('.2').on("click", function(){
		gameBoard.addPiece(1);
	});
	$('.3').on("click", function(){
		gameBoard.addPiece(2);
	});
	$('.4').on("click", function(){
		gameBoard.addPiece(3);
	});
	$('.5').on("click", function(){
		gameBoard.addPiece(4);
	});
	$('.6').on("click", function(){
		gameBoard.addPiece(5);
	});
	$('.7').on("click", function(){
		gameBoard.addPiece(6);
	});

	var player_1 = prompt("Please enter the name of player 1", "type name here");
	var player_2 = prompt("Please enter the name of player 2", "type name here");
	$('#welcome').innerHTML = "Welcome to our JS Connect Four Game, " + player_1 + " and " + player_2 + ".";

});

//*****************************************************//


function add_diagonals_to_class() {
$('.a.1').addClass("d3a");
$('.a.2').addClass("d4a");
$('.a.3').addClass("d5a");
$('.a.4').addClass("d6a d1b");
$('.a.5').addClass("d2b");
$('.a.6').addClass("d3b");
$('.a.7').addClass("d4b");

$('.b.1').addClass("d2a");
$('.b.2').addClass("d3a");
$('.b.3').addClass("d4a d1b");
$('.b.4').addClass("d5a d2b");
$('.b.5').addClass("d6a d3b");
$('.b.6').addClass("d4b");
$('.b.7').addClass("d5b");

$('.c.1').addClass("d1a");
$('.c.2').addClass("d2a d1b");
$('.c.3').addClass("d3a d2b");
$('.c.4').addClass("d4a d3b");
$('.c.5').addClass("d5a d4b");
$('.c.6').addClass("d6a d5b");
$('.c.7').addClass("d6b");

$('.d.1').addClass("d1b");
$('.d.2').addClass("d1a d2b");
$('.d.3').addClass("d2a d3b");
$('.d.4').addClass("d3a d4b");
$('.d.5').addClass("d4a d5b");
$('.d.6').addClass("d5as d6b");
$('.d.7').addClass("d6a");

$('.e.1').addClass("d2b");
$('.e.2').addClass("d3b");
$('.e.3').addClass("d1a d4b");
$('.e.4').addClass("d2a d5b");
$('.e.5').addClass("d3a d6b");
$('.e.6').addClass("d4a");
$('.e.7').addClass("d5a");

$('.f.1').addClass("d3b");
$('.f.2').addClass("d4b");
$('.f.3').addClass("d5b");
$('.f.4').addClass("d6b d1a");
$('.f.5').addClass("d2a");
$('.f.6').addClass("d3a");
$('.f.7').addClass("d4a");

};





