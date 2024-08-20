import * as THREE from 'three';

export class Particle {
    x;
    y;
    vx;
    vy;
    radius;
    color;
    originX;
    originY;

    constructor(_x, _y , _vx, _vy, _radius, _color) {
        this.x = _x;
        this.y = _y;
        this.vx = _vx;
        this.vy = _vy;
        this.radius = _radius;
        this.color = _color;
        this.originX = _x;
        this.originY = _y;
    }

    GenerateParticleMesh() {
        const geometry = new THREE.SphereGeometry(this.radius);
        const wireframe = new THREE.WireframeGeometry(geometry);

        const material = new THREE.MeshBasicMaterial({ color: this.color });
        const particle = new THREE.Mesh(geometry, material);
        particle.position.x = this.x
        particle.position.y = this.y
        return particle;
    }
}