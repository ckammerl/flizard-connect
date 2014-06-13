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
		var newRow = this.columns[column].length

		if (this.columns[column].length >= 6){
			console.log("adios")
		}
		else {
			console.log("whatup");
			newPiece = new Piece(currentColor)
			this.rows[newRow].push(newPiece)
			this.columns[column].push(newPiece);

			updateColors(newRow, column, newPiece)
			// debugger

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
	this.row = ""
	this.column = ""
};


//************************************************//









//********************* VIEW *********************//

function drawBoard(){
	var createBoard = $('#board')
	var rowClasses = ['a','b','c','d','e','f']
	for (var i = 1; i < 7; i++){
		createBoard.append('<tr id="row' + i + '"></tr>')
		var newRow = $('#row' + i)
		for (var col = 1; col < 8; col++){
			newRow.append('<td class="' + rowClasses[rowClasses.length - 1] + ' ' + col + '"></td>')
		}
		rowClasses.pop()
	}
}

function updateColors(row, col, object){
	var rowKeys = ['a', 'b', 'c', 'd', 'e', 'f']
	// debugger
$('.' + rowKeys[row] + '.' + (col + 1)).css('background-color', object.color)
}


//************************************************//














//********************* CONTROLLER *********************//
$(document).ready(function() {
	drawBoard();
	gameBoard = new Board();
	currentColor = "red";
	player1 = prompt("Please enter the name of player 1", "type name here");
	player2 = prompt("Please enter the name of player 2", "type name here");

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


	$('#welcome').innerHTML = "Welcome to our JS Connect Four Game, " + player1 + " and " + player2 + ".";


});

//*****************************************************//


// add to the document.ready function above








