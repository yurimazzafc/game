//Javascript
var objeto = document.getElementById('objeto');
objeto.x = window.innerWidth / 2;
objeto.y = window.innerHeight / 2;
objeto.quadro = 0;
objeto.size = 100;

var body = document.getElementsByTagName('body')[0];
body.addEventListener('keydown', function(e){
	moveObjeto(e.keyCode);
	moveCenario(e.keyCode);
});

window.moveObjeto = function(key) {
	
	switch(key)
	{
		case 37:
			if(objeto.x > 0)
			{
				objeto.x -= 20;
				objeto.quadro -= 20;
			}
			mudaObjeto('right');
			break;
		case 38:
			if(objeto.y > 0)
			{
				objeto.y -= 20;
				objeto.quadro -= 20;
			}
			mudaObjeto('up');
			break;
		case 39:
			if(objeto.x + objeto.size < window.innerWidth)
			{
				objeto.x += 20;
				objeto.quadro += 20;
			}
			mudaObjeto('left');
			break;
		case 40:
			if(objeto.y + objeto.size < window.innerHeight)
			{
				objeto.y += 20;
				objeto.quadro += 20;
			}
			mudaObjeto('down');
			break;
	}
	
	objeto.style.top = objeto.y + 'px';
	objeto.style.left = objeto.x + 'px';
};

var quadro;
window.mudaObjeto = function(direcao) {
	quadro = Math.abs(objeto.quadro / 20);
	if(quadro > 4) { quadro = 1; objeto.quadro = 20; }
	if(quadro < 1) { quadro = 4; objeto.quadro = 80; }
	switch(direcao)
	{
		case 'left':
			objeto.style.backgroundImage = "url('img/player/left-0"+quadro+".svg')";
			break;
		case 'right':
			objeto.style.backgroundImage = "url('img/player/right-0"+quadro+".svg')";
			break;
		case 'down':
			objeto.style.backgroundImage = "url('img/player/down-0"+quadro+".svg')";
			break;
		case 'up':
			objeto.style.backgroundImage = "url('img/player/up-0"+quadro+".svg')";
			break;
	}
};

window.moveCenario = function(key) {
	switch(key)
	{
		case 37:
			document.body.style.backgroundPositionX = '0px';
			break;
		case 38:
			document.body.style.backgroundPositionY = '0px';
			break;
		case 39:
			document.body.style.backgroundPositionX = '0px';
			break;
		case 40:
			document.body.style.backgroundPositionY = '0px';
			break;
	}
}