function Figura(type){

	this.tipo = type;
	this.color = '';
	this.color_borde = '';
	this.TAM_BLOQUE = 28;
	this.TAM_BORDE = 6;
	this.forma = [];

	// Creacion de la figura dependiendo el tipo
	if(this.tipo == 'I'){
		this.color = '#12f2f2';
		this.color_borde = '';
		this.forma = [[0,3], [0,4], [0,5], [0,6]];
	}else if(this.tipo == 'J'){
		this.color = '#1245f2';
		this.color_borde = '';
		this.forma = [[-1,3] ,[0,3], [0,4], [0,5]];
	}else if(this.tipo == 'L'){
		this.color = '#f2a412';
		this.color_borde = '';
		this.forma = [[0,3], [0,4], [0,5], [-1,5]];
	}else if(this.tipo == 'O'){
		this.color = '#eff212';
		this.color_borde = '';
		this.forma = [[-1,4], [0,4], [0,5], [-1,5]];
	}else if(this.tipo == 'S'){
		this.color = '#f21212';
		this.color_borde = '';
		this.forma = [[0,3], [0,4], [-1,4], [-1,5]];
	}else if(this.tipo == 'T'){
		this.color = '#d012f2';
		this.color_borde = '';
		this.forma = [[-1,3], [-1,4], [-1,5], [0,4]];
	}else if(this.tipo == 'Z'){
		this.color = '#12f237';
		this.color_borde = '';
		this.forma = [[-1,3], [-1,4], [0,4], [0,5]];
	}

	this.pintar = function(context){
		for(var i=0; i<this.forma.length; i++){
			context.fillStyle = this.color;
			context.fillRect(this.forma[i][1]*this.TAM_BLOQUE, this.forma[i][0]*this.TAM_BLOQUE, this.TAM_BLOQUE, this.TAM_BLOQUE);
			context.strokeStyle = '#488080';
			context.strokeRect(this.forma[i][1]*this.TAM_BLOQUE+this.TAM_BORDE, this.forma[i][0]*this.TAM_BLOQUE+this.TAM_BORDE, this.TAM_BLOQUE-this.TAM_BORDE*2, this.TAM_BLOQUE-this.TAM_BORDE*2);
			//context.strokeStyle = '#488080';
			context.strokeRect(this.forma[i][1]*this.TAM_BLOQUE, this.forma[i][0]*this.TAM_BLOQUE, this.TAM_BLOQUE, this.TAM_BLOQUE);
		}
	}

	this.mover_abajo = function(){
		for(var i=0; i<this.forma.length; i++){
			this.forma[i][0]++;
		}
	}

	this.mover_derecha = function(){
		for(var i=0; i<this.forma.length; i++){
			this.forma[i][1]++;
		}
	}

	this.mover_izquierda = function(){
		for(var i=0; i<this.forma.length; i++){
			this.forma[i][1]--;
		}
	}
}