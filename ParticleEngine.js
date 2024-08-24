export class ParticleEngine {
    particles = [];
    lastTime = new Date();
    two;
    constructor(_two) {
        this.two = _two;
    }

    Add(_particle) {
        this.particles.push(_particle);
    }
    Animate(_mousePositionX, _mousePositionY) {
        const currentTime = new Date();
        const timeDiff = (currentTime - this.lastTime);
        //Function here
        this.AnimateParticles(timeDiff,_mousePositionX, _mousePositionY);
        this.lastTime = currentTime;
    }
    AnimateParticles(_timeDiff, _mousePositionX, _mousePositionY) {
        for (let i = 0; i < this.particles.length; i++) {
            this.particles[i].render(_mousePositionX, _mousePositionY);
        }
    }
    ResetEngine(){
        this.two.clear();
        this.particles = [];
    }

}