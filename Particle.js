import { MathHelper } from "./MathHelper";

export class Particle {
    x;
    y;
    radius = Math.random()*5 + 2;
    color;
    originX;
    originY;
    vx = (Math.random()-0.5)*20;
    vy = (Math.random()-0.5)*20;
    accX = 0;
    accY = 0;
    friction = Math.random()*0.05 + 0.94;
    two;
    circle;
    colors = ["#468966","#FFF0A5", "#FFB03B","#B64926", "#8E2800"];
    
    constructor(_x, _y,_two) {
        this.x = _x;
        this.y = _y;
        this.color = this.colors[Math.floor(Math.random()*6)];
        this.originX = _x;
        this.originY = _y;
        this.two = _two;
        this.circle = this.two.makeCircle(this.x, this.y, this.radius);
        this.circle.fill = this.color;
    }
    render(_mousePositionX, _mousePositionY){
        this.accX = (this.originX - this.x)/1000;
        this.accY = (this.originY - this.y)/1000;
        this.vx += this.accX;
        this.vy += this.accY;
        this.vx *= this.friction;
        this.vy *= this.friction;
      
        this.x += this.vx;
        this.y +=  this.vy;

        this.circle.position.x = this.x;
        this.circle.position.y = this.y;

        var a = this.x - _mousePositionX;
        var b = this.y - _mousePositionY;
      
        var distance = Math.sqrt( a*a + b*b );
        if(distance<(this.radius*70)){
          this.accX = (this.x - _mousePositionX)/100;
          this.accY = (this.y - _mousePositionY)/100;
          this.vx += this.accX;
          this.vy += this.accY;
        }
    }
}