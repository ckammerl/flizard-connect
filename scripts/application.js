//******************** MODEL ********************//
function Board(){
	this.rows = [[],[],[],[],[],[]];
	this.columns = [[],[],[],[],[],[],[]];
	this.players = [];
}
Board.prototype = {
	addPiece: function(column){
		if (this.columns[column - 1].length >= 6){
			break // implement this later
		}
		else {
			// var lastColor = "red"
			var newPiece = new Piece("red")
			var insertColumn = this.columns[column - 1]
			insertColumn.push(newPiece)
			this.rows[insertColumn.length].push(newPiece)
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
	renderBoard()

})

$('.colA').addEventListener("click", addPiece(0), false);
$('.colB').addEventListener("click", addPiece(1), false);
$('.colC').addEventListener("click", addPiece(2), false);
$('.colD').addEventListener("click", addPiece(3), false);
$('.colE').addEventListener("click", addPiece(4), false);
$('.colF').addEventListener("click", addPiece(5), false);
$('.colG').addEventListener("click", addPiece(6), false);



// var gameBoard = new Board



//*****************************************************//