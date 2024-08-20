import { Particle } from './Particle.js';
import { ParticleEngine } from './ParticleEngine.js';
import Two from 'https://cdn.skypack.dev/two.js@latest';

// Make an instance of two and place it on the page.
var two = new Two({
  type: Two.Types.svg,
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

  var cx = two.width / 2;
  var cy = two.height / 2;
  var mouse = new Two.Vector(cx, cy);
  
  // Two.js has convenient methods to make shapes and insert them into the scene.
  const engine = new ParticleEngine();
  engine.Add(new Particle(100,100,1,1,25,"green",two));

  
  //y = two.height * 0.5 + radius * 1.25;
  //var width = 100;
  //var height = 100;
  //var rect = two.makeRectangle(x, y, width, height);
  
  
  //rect.fill = 'rgb(0, 200, 255)';
  //rect.opacity = 0.75;
  //rect.noStroke();
  
  // Don’t forget to tell two to draw everything to the screen
  window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
    
  }, false);

  two.update();
  two.bind('update', function() {
    engine.Animate(mouse.x, mouse.y);
  });