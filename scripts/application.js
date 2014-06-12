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



// var gameBoard = new Board



//*****************************************************//