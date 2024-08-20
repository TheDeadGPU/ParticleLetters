import { MathHelper } from "./MathHelper";

export class Particle {
    x;
    y;
    vx;
    vy;
    radius;
    color;
    originX;
    originY;
    circle;
    closeEnoughTarget = 50;

    constructor(_x, _y , _vx, _vy, _radius, _color,two) {
        this.x = _x;
        this.y = _y;
        this.vx = _vx;
        this.vy = _vy;
        this.radius = _radius;
        this.color = _color;
        this.originX = _x;
        this.originY = _y;
    }
    move(){
        proximityMult = 1;
        distance = MathHelper.distance(this.x,this.y,this.originX,this.originY);
        if (distance < this.closeEnoughTarget) {
            proximityMult = distance/this.closeEnoughTarget;
        }
    }
}