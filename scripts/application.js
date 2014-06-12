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

$('.colA').addEventListener("click", addPiece('.colA'), false);
$('.colB').addEventListener("click", addPiece('.colB'), false);
$('.colC').addEventListener("click", addPiece('.colC'), false);
$('.colD').addEventListener("click", addPiece('.colD'), false);
$('.colE').addEventListener("click", addPiece('.colE'), false);
$('.colF').addEventListener("click", addPiece('.colF'), false);
$('.colG').addEventListener("click", addPiece('.colG'), false);



// var gameBoard = new Board



//*****************************************************//