//******************** MODEL ********************//
function board(){
	this.rows = [[],[],[],[],[],[]];
	this.columns = [[],[],[],[],[],[],[]];
	this.players = [];
}


function piece(){
	this.color = "";
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