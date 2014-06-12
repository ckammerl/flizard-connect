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



{

			}






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
});

//*****************************************************//