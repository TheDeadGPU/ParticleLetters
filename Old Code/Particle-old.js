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

    constructor(_x, _y , _vx, _vy, _radius, _color,two) {
        this.x = _x;
        this.y = _y;
        this.vx = _vx;
        this.vy = _vy;
        this.radius = _radius;
        this.color = _color;
        this.originX = _x;
        this.originY = _y;
        this.circle = two.makeCircle(_x, _y, _radius);
        this.circle.fill = '#FF8000';
        // And accepts all valid CSS color:
        this.circle.stroke = 'orangered';
        this.circle.linewidth = 5;
    }
}