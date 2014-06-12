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




//************************************************//














//********************* CONTROLLER *********************//
$(document).ready(function() {
	gameBoard = new Board();
	currentColor = "red";
	$('.colA').on("click", function(){
		gameBoard.addPiece(0);
	});
	$('.colB').on("click", function(){
		gameBoard.addPiece(1);
	});
	$('.colC').on("click", function(){
		gameBoard.addPiece(2);
	});
	$('.colD').on("click", function(){
		gameBoard.addPiece(3);
	});
	$('.colE').on("click", function(){
		gameBoard.addPiece(4);
	});
	$('.colF').on("click", function(){
		gameBoard.addPiece(5);
	});
	$('.colG').on("click", function(){
		gameBoard.addPiece(6);
	});
});

//*****************************************************//