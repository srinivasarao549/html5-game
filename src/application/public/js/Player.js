function Player(x,y,health,radius){
	
	this.x = x;
	this.y = y;
	this.health = health;
	
	this.state = 1;
	this.radius = radius;
	
	this.points = [];
	this.points[0] = {'x':0, 'y':0};
	this.points[1] = {'x':radius*2, 'y':0};
	this.points[2] = {'x':0, 'y':radius*2};
	this.points[3] = {'x':radius*2, 'y':radius*2};
	
	this.color = {'r':50,'g':50,'b':200};
	this.score = 0;
	
	this.velX = 0;
	
	this.speed = 6;
	this.velY = 0;
}

function AddScore(add){
	this.score += add;
}

function UpdatePlayer(){
	
	if(this.velX >1){
		this.velX = 1;
	}
	else if(this.velX <-1){
		this.velX = -1;
	}
	if(this.velY >1){
		this.velY = 1;
	}
	else if(this.velY <-1){
		this.velY = -1;
	}
	
	this.x += this.velX*this.speed;
	this.y += this.velY*this.speed;
}

Player.prototype.Draw = DrawCircle;
Player.prototype.Update = UpdatePlayer;