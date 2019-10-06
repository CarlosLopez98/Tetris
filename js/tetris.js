iniciar();

function iniciar(){

	canvas = document.getElementById('micanvas');
	canvas.width = 280;
	canvas.height = 560;

	contexto = canvas.getContext("2d");
	buffer = document.createElement('canvas');

	tablero = new Tablero();
	figura = new Figura('O');

	run();
}

function run(){
	buffer.width = canvas.width;
	buffer.height = canvas.height;
	contextoBuffer = buffer.getContext("2d");

	tablero.pintar(contextoBuffer);
	figura.pintar(contextoBuffer);

	contexto.clearRect(0,0,canvas.width,canvas.height);
	contexto.drawImage(buffer, 0, 0);

	setTimeout("run()",10);
}

function capturaTeclado(event){
	if(event.which==38 || event.which==87)
		console.log("arriba");
	if(event.which==40 || event.which==83)
		figura.mover_abajo();
	if(event.which==39 || event.which==68)
		figura.mover_derecha();
	if(event.which==37 || event.which==65)
		figura.mover_izquierda();
	
}

document.addEventListener("keydown",capturaTeclado);