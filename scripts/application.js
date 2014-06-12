//******************** MODEL ********************//
function Board(){
	this.rows = [[],[],[],[],[],[]];
	this.columns = [[],[],[],[],[],[],[]];
	this.players = [];
};

Board.prototype = {
	addPiece: function(column){
		// debugger
		if (this.columns[column].length >= 6){

		}
		else {
			// var lastColor = "red"
			var newPiece = new Piece(currentColor)
			var insertColumn = this.columns[column]
			insertColumn.push(newPiece)
			this.rows[insertColumn.length].push(newPiece)
			if (currentColor === "red"){
				currentColor = "black";
			}	else {
				currentColor = "red";
			}
		}
	}
}

function Piece(color){
	this.color = "color";
};


//************************************************//










//********************* VIEW *********************//
function renderBoard(){
	
}




//************************************************//














//********************* CONTROLLER *********************//
$(document).ready(function() {
	gameBoard = new Board();
	currentColor = "red";
	$('.colA').addEventListener("click", gameBoard.addPiece(0), false);
	$('.colB').addEventListener("click", gameBoard.addPiece(1), false);
	$('.colC').addEventListener("click", gameBoard.addPiece(2), false);
	$('.colD').addEventListener("click", gameBoard.addPiece(3), false);
	$('.colE').addEventListener("click", gameBoard.addPiece(4), false);
	$('.colF').addEventListener("click", gameBoard.addPiece(5), false);
	$('.colG').addEventListener("click", gameBoard.addPiece(6), false);
});

//*****************************************************//