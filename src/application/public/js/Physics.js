function World(){
	this.stationary = new Array();
	this.moving = new Array();
	
}

function AddObject(object, type){
	if(type == "static"){
		this.stationary.push(object);
		
	}else{
		this.moving.push(object);
	}
	
}

function CheckBounds(object){
	//check top right corner
	var xLeft = object.points[0].x+object.x -(this.x+this.radius*2);
	var xRight = (this.x) -object.points[3].x-object.x;
	
	var yLeft = object.points[0].y+object.y -(this.y+this.radius*2);
	var yRight = (this.y) -object.points[3].y-object.y;
	
	if((this.x+this.radius*2 > object.points[0].x+object.x)&&(this.x < object.points[3].x+object.x)){
		if((this.y+this.radius*2 > object.points[0].y+object.y)&&(this.y < object.points[3].y+object.y)){
			var interX = 0;
			var interY = 0;
			
			if(xLeft > xRight){
				interX -= xLeft;
			}else{
				interX = xRight;
			}
			
			if(yLeft > yRight){
				interY -= yLeft;
			}else{
				interY = yRight;
			}
			
			if(Math.abs(interY) > Math.abs(interX)){
				this.x -= interX;
			}else{
				this.y -= interY;
			}
		}
	}
}

Player.prototype.CheckBounds = CheckBounds;
Enemy.prototype.CheckBounds = CheckBounds;

Player.prototype.CheckMovingObjects = CheckBounds;
Enemy.prototype.CheckMovingObjects = CheckBounds;

function Update(){
	for(var i = 0; i< this.moving.length;i++){
		
		for(var j=0;j<this.stationary.length;j++){
			this.moving[i].CheckBounds(this.stationary[j]);
		}
		
		for(var j=i+1;j<this.moving.length;j++){
			this.moving[i].CheckMovingObjects(this.moving[j]);
		}
	}
}

function DrawWorld(){
	for(var j=0;j<this.stationary.length;j++){
		this.stationary[j].Draw();
	}
	for(var j=0;j<this.moving.length;j++){
		this.moving[j].Draw();
	}
}

World.prototype.Update = Update;
World.prototype.Draw = DrawWorld;
World.prototype.AddObject = AddObject;



