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
engine.Add(new Particle(1,1,two))
engine.Add(new Particle(500,500,two))
engine.Add(new Particle(500,510,two))
engine.Add(new Particle(500,520,two))
engine.Add(new Particle(500,530,two))
engine.Add(new Particle(500,540,two))
engine.Add(new Particle(500,550,two))
engine.Add(new Particle(500,560,two))
engine.Add(new Particle(500,570,two))
engine.Add(new Particle(500,580,two))

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
function onMouseMove(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  }

function onTouchMove(e){
  if(e.touches.length > 0 ){
    mouse.x = e.touches[0].clientX;
    mouse.y = e.touches[0].clientY;
  }
}

function onTouchEnd(e){
mouse.x = -9999;
mouse.y = -9999;
}

// Animation Loop
two.bind('update', function() {
    circle.position.x = mouse.x;
    circle.position.y = mouse.y;
    engine.Animate(mouse.x,mouse.y);
});

window.addEventListener("mousemove", onMouseMove);
window.addEventListener("touchmove", onTouchMove);
window.addEventListener("touchend", onTouchEnd);