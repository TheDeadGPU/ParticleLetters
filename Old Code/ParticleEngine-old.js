import { Particle } from './Particle-old.js';

export class ParticleEngine {
    scene;
    window;
    particles = [];
    lastTime = new Date();
    constructor() {
    }

    Add(_particle) {
        this.particles.push(_particle);
        
    }
    Animate(_mousePositionX, _mousePositionY) {
        const currentTime = new Date();
        const timeDiff = (currentTime.getMilliseconds() - this.lastTime.getMilliseconds());
        //Function here
        this.AnimateParticles(timeDiff,_mousePositionX, _mousePositionY);
        this.lastTime = currentTime;
    }
    AnimateParticles(_timeDiff, _mousePositionX, _mousePositionY) {
        const collisionDamper = 0.9;
        var floorFriction = 0.0005 * _timeDiff;
        var mouseForceMultiplier = 1 * _timeDiff;
        var restoreForce = 0.001 * _timeDiff;
        for (let i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            //console.log(particle);
            //Set Particle Velocity
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            // restore forces
            if (particle.x > particle.origX)
            {
                particle.vx -= restoreForce;
            }
            else
            {
                particle.vx += restoreForce;
            }
            if (particle.y > particle.origY)
            {
                particle.vy -= restoreForce;
            }
            else
            {
                particle.vy += restoreForce;
            }

            // mouse forces
            var mouseX = _mousePositionX;
            var mouseY = _mousePositionY;

            var distX = particle.x - mouseX;
            var distY = particle.y - mouseY;

            var radius = Math.sqrt(Math.pow(distX, 2) + Math.pow(distY, 2));

            var totalDist = Math.abs(distX) + Math.abs(distY);

            var forceX = (Math.abs(distX) / totalDist) * (1 / radius) * mouseForceMultiplier;
            var forceY = (Math.abs(distY) / totalDist) * (1 / radius) * mouseForceMultiplier;

            if (distX > 0)
            {
                // mouse is left of ball
                particle.vx += forceX;
            }
            else
            {
                particle.vx -= forceX;
            }
            if (distY > 0)
            {
                // mouse is on top of ball
                particle.vy += forceY;
            }
            else
            {
                particle.vy -= forceY;
            }

            // floor friction
            if (particle.vx > 0)
            {
                particle.vx -= floorFriction;
            }
            else if (particle.vx < 0)
            {
                particle.vx += floorFriction;
            }
            if (particle.vy > 0)
            {
                particle.vy -= floorFriction;
            }
            else if (particle.vy < 0)
            {
                particle.vy += floorFriction;
            }

            // floor condition
            if (particle.y > ((window.innerHeight - 100) - particle.radius))
            {
                particle.y = (window.innerHeight - 100) - particle.radius - 2;
                particle.vy *= -1;
                particle.vy *= (1 - collisionDamper);
            }

            // ceiling condition
            if (particle.y < (particle.radius))
            {
                particle.y = particle.radius + 2;
                particle.vy *= -1;
                particle.vy *= (1 - collisionDamper);
            }

            // right wall condition
            if (particle.x > ((window.innerWidth - 100) - particle.radius))
            {
                particle.x = (window.innerWidth - 100) - particle.radius - 2;
                particle.vx *= -1;
                particle.vx *= (1 - collisionDamper);
            }

            // left wall condition
            if (particle.x < (particle.radius))
            {
                particle.x = particle.radius + 2;
                particle.vx *= -1;
                particle.vx *= (1 - collisionDamper);
            }
        }
    }
}