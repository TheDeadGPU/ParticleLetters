import { Particle } from './Old Code/Particle-old.js';

export class ParticleEngine {
    scene;
    window;
    particles = [];
    particleShapes = [];
    lastTime = new Date();
    two;
    constructor(_two) {
        this.two = _two;
    }

    Add(_particle) {
        this.particles.push(_particle);
        var circle = this.two.makeCircle(_particle.x, _particle.y, _particle.radius);
        circle.fill = '#FF8000';
        circle.stroke = 'orangered';
        circle.linewidth = 5;
        this.particleShapes.push(circle);
        //this.two.update();
    }
    Animate(_mousePositionX, _mousePositionY) {
        const currentTime = new Date();
        const timeDiff = (currentTime - this.lastTime);
        //Function here
        this.AnimateParticles(timeDiff,_mousePositionX, _mousePositionY);
        this.lastTime = currentTime;
    }
    AnimateParticles(_timeDiff, _mousePositionX, _mousePositionY) {
        proximityMult = 1;
        distance 
    }
}