function Obstacle(x,y,length,width,height){
	this.x = x;
	this.y = y;
	this.length = length;
	this.width = width;
	this.points = [];
	this.points[0] = {'x':0, 'y':0};
	this.points[1] = {'x':width, 'y':0};
	this.points[2] = {'x':0, 'y':length};
	this.points[3] = {'x':width, 'y':length};
	this.height = height;
	this.img = null;
	
	this.color = {'r':200,'g':200,'b':200};
	
}

function DrawRectangle(){
	ctx.fillStyle = "rgba("+this.color.r+", "+this.color.g+", "+this.color.b+", 1)";
	ctx.fillRect(this.x,this.y,this.width,this.length);
	ctx.strokeRect(this.x,this.y,this.width,this.length);
	
}

Obstacle.prototype.Draw = DrawRectangle;