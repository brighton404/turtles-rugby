import p5 from 'p5';
import { ReactP5Wrapper } from 'react-p5-wrapper';
import type { Sketch } from 'react-p5-wrapper';

const sketch: Sketch = (p: p5) => {
  const deg = (a: number) => (Math.PI / 180) * a;
  const rand = (v1: number, v2: number) => Math.floor(v1 + Math.random() * (v2 - v1));
  const Particles: Particle[] = [];
  p.frameRate(30);
  const isMobile = window.innerWidth < 768; // You can tweak this breakpoint
  
  const opt = {
    particles: isMobile ? 100 : 800, // Mobile vs Desktop particle count
    noiseScale: 0.009,
    angle: deg(-90),
    h1: rand(0, 360),
    h2: rand(0, 360),
    s1: rand(20, 90),
    s2: rand(20, 90),
    l1: rand(30, 80),
    l2: rand(30, 80),
    strokeWeight: 1.2,
    tail: 82
  };
  

  let time = 0;

  class Particle {
    x: number;
    y: number;
    lx: number;
    ly: number;
    vx = 0;
    vy = 0;
    ax = 0;
    ay = 0;
    hueSemen: number;
    hue: number;
    sat: number;
    light: number;
    maxSpeed: number;

    constructor(x: number, y: number) {
      this.x = x;
      this.y = y;
      this.lx = x;
      this.ly = y;
      this.hueSemen = Math.random();
      this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
      this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
      this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
      this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
    }

    randomize() {
      this.hueSemen = Math.random();
      this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2;
      this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2;
      this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2;
      this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2;
    }

    update() {
      this.follow();
      this.vx += this.ax;
      this.vy += this.ay;
      const pMag = Math.sqrt(this.vx ** 2 + this.vy ** 2);
      const a = Math.atan2(this.vy, this.vx);
      const m = Math.min(this.maxSpeed, pMag);
      this.vx = Math.cos(a) * m;
      this.vy = Math.sin(a) * m;

      this.x += this.vx;
      this.y += this.vy;
      this.ax = 0;
      this.ay = 0;

      this.edges();
    }

    follow() {
      const angle = p.noise(this.x * opt.noiseScale, this.y * opt.noiseScale, time * opt.noiseScale) * Math.PI * 0.5 + opt.angle;
      this.ax += Math.cos(angle);
      this.ay += Math.sin(angle);
    }

    updatePrev() {
      this.lx = this.x;
      this.ly = this.y;
    }

    edges() {
      if (this.x < 0) {
        this.x = p.width;
        this.updatePrev();
      }
      if (this.x > p.width) {
        this.x = 0;
        this.updatePrev();
      }
      if (this.y < 0) {
        this.y = p.height;
        this.updatePrev();
      }
      if (this.y > p.height) {
        this.y = 0;
        this.updatePrev();
      }
    }

    render() {
      p.stroke(`hsla(${this.hue}, ${this.sat}%, ${this.light}%, 0.5)`);
      p.line(this.x, this.y, this.lx, this.ly);
      this.updatePrev();
    }
  }

  p.setup = () => {
   p.createCanvas(p.windowWidth, p.windowHeight) as p5.Renderer;
   /*  canvas.style.toString. = 'transparent'; // make sure CSS is transparent */
    p.strokeWeight(opt.strokeWeight);
    for (let i = 0; i < opt.particles; i++) {
      Particles.push(new Particle(Math.random() * p.width, Math.random() * p.height));
    }
  };

  p.draw = () => {
    time++;
    p.background(255, 255, 255, 150); // Transparent background
    for (let ptl of Particles) {
      ptl.update();
      ptl.render();
    }
  };

  p.mousePressed = () => {
    opt.h1 = rand(0, 360);
    opt.h2 = rand(0, 360);
    opt.s1 = rand(20, 90);
    opt.s2 = rand(20, 90);
    opt.l1 = rand(30, 80);
    opt.l2 = rand(30, 80);
    opt.angle += deg(rand(60, 60)) * (Math.random() > 0.5 ? 1 : -1);
    for (let ptl of Particles) {
      ptl.randomize();
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

const ParticleCanvas = () => {
  return (
    <div style={{ position: 'absolute', inset: 0, height: '80vh', zIndex: -1 }}>
      <ReactP5Wrapper sketch={sketch} />
    </div>
  );
};

export default ParticleCanvas;
