import { Particle } from './Particle.js';

export class ParticleHelper {
    constructor() {}

    static CreateParticle(_x, _y , _vx, _vy, radius, color) {
        var particle = new Particle(_x,_y,_vx,_vy,radius,color);
        return particle;
    }
}