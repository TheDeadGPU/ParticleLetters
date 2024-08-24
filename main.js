import Two from 'https://cdn.skypack.dev/two.js@latest';
import { ParticleEngine } from './ParticleEngine';
import { Particle } from './Particle';

const two = new Two({
  type: Two.Types.svg,
  fullscreen: true,
  autostart: true
}).appendTo(document.body);

const engine = new ParticleEngine(two);
two.renderer.domElement.style.background = 'black';
two.renderer.domElement.style.cursor = 'none';

const mouse = new Two.Vector(two.width / 2, two.height / 2);

function canvasInit() {
  engine.ResetEngine();
  const c = document.getElementById("transposeCanvas");
  const ctx = c.getContext("2d");

  const ww = c.width = window.innerWidth;
  const wh = c.height = window.innerHeight;

  ctx.font = `bold ${ww / 10}px sans-serif`;
  ctx.textAlign = "center";
  ctx.fillText("TheDeadGPU", ww / 2, wh / 2);
  const data = ctx.getImageData(0, 0, ww, wh).data;

  ctx.clearRect(0, 0, c.width, c.height);
  ctx.globalCompositeOperation = "screen";

  for (let i = 0; i < ww; i += Math.round(ww / 150)) {
    for (let j = 0; j < wh; j += Math.round(ww / 150)) {
      if (data[((i + j * ww) * 4) + 3] > 150) {
        engine.Add(new Particle(i, j, two));
      }
    }
  }
}

function onPointerMove(e) {
  mouse.x = e.clientX || e.touches[0].clientX;
  mouse.y = e.clientY || e.touches[0].clientY;
}

function onPointerEnd() {
  mouse.x = -9999;
  mouse.y = -9999;
}

function debounce(func, wait) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

two.bind('update', () => {
  engine.Animate(mouse.x, mouse.y);
});

canvasInit();
window.addEventListener("pointermove", onPointerMove);
window.addEventListener("pointerup", onPointerEnd);
window.addEventListener("resize", debounce(canvasInit, 200));
