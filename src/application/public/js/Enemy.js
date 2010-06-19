function Enemy(x,y,health,radius){
	
	this.x = x;
	this.y = y;
	this.health = health;
	
	this.points = [];
	this.points[0] = {'x':0, 'y':0};
	this.points[1] = {'x':radius*2, 'y':0};
	this.points[2] = {'x':0, 'y':radius*2};
	this.points[3] = {'x':radius*2, 'y':radius*2};
	
	this.state = 1;
	this.radius = radius;
	
	this.color = {'r':250,'g':50,'b':50};
}

function DrawCircle(){
	
	ctx.fillStyle = "rgba("+this.color.r+", "+this.color.g+", "+this.color.b+", 1)";
	ctx.beginPath();  
	ctx.arc(this.x+this.radius,this.y+this.radius,this.radius,0,Math.PI*2,true); // Outer circle  
	ctx.stroke();  
	ctx.fill();  
	ctx.closePath();
	
	//ctx.fillStyle = "rgba("+this.color.r+", "+this.color.g+", "+this.color.b+", 0.5)";
	//ctx.fillRect(this.x,this.y,this.radius*2,this.radius*2);
	//ctx.strokeRect(this.x,this.y,this.radius*2,this.radius*2);
	
}



Enemy.prototype.Draw = DrawCircle;

