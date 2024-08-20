import Two from 'https://cdn.skypack.dev/two.js@latest';
import { ParticleEngine } from './ParticleEngine';
import { Particle } from './Particle';

var two = new Two({
  type: Two.Types.svg,
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

two.renderer.domElement.style.background = 'black';
two.renderer.domElement.style.cursor = 'none';

// Initialize
const engine = new ParticleEngine(two);
engine.Add(new Particle(1,1,1,1,50,"green",two))
engine.Add(new Particle(1,1,1,1,25,"green",two))

var cx = two.width / 2;
var cy = two.height / 2;
var delta = new Two.Vector();
var mouse = new Two.Vector(cx, cy);
var drag = 0.33;
var radius = 50;

var circle = two.makeCircle(400, 250, 75);
circle.fill = 'yellow';
circle.stroke = 'red';
circle.linewidth = 4;

// Mouse Position
window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }, false);

// Animation Loop
two.bind('update', function() {
    circle.position.x = mouse.x;
    circle.position.y = mouse.y;
    engine.Animate(mouse.x,mouse.y);
});