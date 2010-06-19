function initController(){
	
	$(document).keydown(function(e) {
		var key = (e.keyCode ? e.keyCode : e.charCode);
		
		//alert(key);
		
		//w
		if (key == '87') {
				player.velY = -1;
				
		}
		//s
		else if (key == '83') {
				player.velY = 1;
		}
		//a
		else if (key == '65') {
				player.velX = -1;
		}
		//d
		else if (key == '68') {
				player.velX = 1;
		}
		
		e.preventDefault();
	});
	
	$(document).keyup(function(e) {
		var key = (e.keyCode ? e.keyCode : e.charCode);
		
		if(player.velY !=0){
			//w
			if (key == '87') {
				
				player.velY += 1;
			}
			//s
			else if (key == '83') {
				player.velY -= 1;
			}
		}
		if(player.velX !=0){
			//a
		 	if (key == '65') {
				player.velX += 1;
			}
			//d
			else if (key == '68') {
				player.velX -= 1;
			}
		}
		e.preventDefault();
	});
	
	
}