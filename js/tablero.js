function Tablero(){

	this.WIDTH = 10;
	this.HEIGHT = 20;
	this.TAM_BLOQUE = 28;
	
	this.pintar = function(context){
		context.fillStyle = '#000';
		context.fillRect(0, 0, canvas.width, canvas.height);

		for(var i=0; i<this.WIDTH; i++){
			for(var j=0; j<this.HEIGHT; j++){
				context.fillStyle = '#008080';
				context.fillRect(i*this.TAM_BLOQUE, j*this.TAM_BLOQUE, this.TAM_BLOQUE, this.TAM_BLOQUE);
				context.strokeStyle = '#488080';
				context.strokeRect(i*this.TAM_BLOQUE, j*this.TAM_BLOQUE, this.TAM_BLOQUE, this.TAM_BLOQUE);
			}
		}
	}	
}