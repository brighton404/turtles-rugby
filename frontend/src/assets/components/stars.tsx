import { useEffect, useRef } from 'react';

export default function StarfieldCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d')!;
    let scale = window.devicePixelRatio || 1;
    let width = 0, height = 0;
    let pointerX: number | null = null, pointerY: number | null = null;
    let touchInput = false;

    interface Star {
      x: number;
      y: number;
      z: number;
    }

    const STAR_COLOR = '#fff';
    const STAR_SIZE = 4;
    const STAR_MIN_SCALE = 0.2;
    const OVERFLOW_THRESHOLD = 50;
    const STAR_COUNT = (window.innerWidth + window.innerHeight) / 8;

    const velocity = { x: 0, y: 0, tx: 0, ty: 0, z: 0.0005 };
    const stars: Star[] = [];

    function generate() {
      for (let i = 0; i < STAR_COUNT; i++) {
        stars.push({
          x: 0,
          y: 0,
          z: STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE),
        });
      }
    }

    function placeStar(star: Star) {
      star.x = Math.random() * width;
      star.y = Math.random() * height;
    }

    function recycleStar(star: Star) {
      let direction: 'z' | 'l' | 'r' | 't' | 'b' = 'z';

      const vx = Math.abs(velocity.x);
      const vy = Math.abs(velocity.y);

      if (vx > 1 || vy > 1) {
        const axis = vx > vy
          ? Math.random() < vx / (vx + vy) ? 'h' : 'v'
          : Math.random() < vy / (vx + vy) ? 'v' : 'h';

        if (axis === 'h') direction = velocity.x > 0 ? 'l' : 'r';
        else direction = velocity.y > 0 ? 't' : 'b';
      }

      star.z = STAR_MIN_SCALE + Math.random() * (1 - STAR_MIN_SCALE);

      if (direction === 'z') {
        star.z = 0.1;
        star.x = Math.random() * width;
        star.y = Math.random() * height;
      } else if (direction === 'l') {
        star.x = -OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === 'r') {
        star.x = width + OVERFLOW_THRESHOLD;
        star.y = height * Math.random();
      } else if (direction === 't') {
        star.x = width * Math.random();
        star.y = -OVERFLOW_THRESHOLD;
      } else if (direction === 'b') {
        star.x = width * Math.random();
        star.y = height + OVERFLOW_THRESHOLD;
      }
    }

    function resize() {
      scale = window.devicePixelRatio || 1;
      width = window.innerWidth * scale;
      height = window.innerHeight * scale;
    
      canvas!.width = width;
      canvas!.height = height;
    
      stars.forEach(placeStar);
    }
    
    function update() {
      velocity.tx *= 0.96;
      velocity.ty *= 0.96;
      velocity.x += (velocity.tx - velocity.x) * 0.8;
      velocity.y += (velocity.ty - velocity.y) * 0.8;

      stars.forEach((star) => {
        star.x += velocity.x * star.z;
        star.y += velocity.y * star.z;

        star.x += (star.x - width / 2) * velocity.z * star.z;
        star.y += (star.y - height / 2) * velocity.z * star.z;

        star.z += velocity.z;

        if (
          star.x < -OVERFLOW_THRESHOLD ||
          star.x > width + OVERFLOW_THRESHOLD ||
          star.y < -OVERFLOW_THRESHOLD ||
          star.y > height + OVERFLOW_THRESHOLD
        ) {
          recycleStar(star);
        }
      });
    }

    function render() {
      context.clearRect(0, 0, width, height);

      stars.forEach((star) => {
        context.beginPath();
        context.lineCap = 'round';
        context.lineWidth = STAR_SIZE * star.z * scale;
        context.globalAlpha = 0.5 + 0.5 * Math.random();
        context.strokeStyle = STAR_COLOR;

        let tailX = velocity.x * 2;
        let tailY = velocity.y * 2;

        if (Math.abs(tailX) < 0.1) tailX = 0.5;
        if (Math.abs(tailY) < 0.1) tailY = 0.5;

        context.moveTo(star.x, star.y);
        context.lineTo(star.x + tailX, star.y + tailY);
        context.stroke();
      });
    }

    function movePointer(x: number, y: number) {
      if (pointerX !== null && pointerY !== null) {
        const ox = x - pointerX;
        const oy = y - pointerY;

        velocity.tx += (ox / 8) * scale * (touchInput ? 1 : -1);
        velocity.ty += (oy / 8) * scale * (touchInput ? 1 : -1);
      }

      pointerX = x;
      pointerY = y;
    }

    function onMouseMove(event: MouseEvent) {
      touchInput = false;
      movePointer(event.clientX, event.clientY);
    }

    function onTouchMove(event: TouchEvent) {
      touchInput = true;
      movePointer(event.touches[0].clientX, event.touches[0].clientY);
      event.preventDefault();
    }

    function onMouseLeave() {
      pointerX = null;
      pointerY = null;
    }

    function step() {
      update();
      render();
      requestAnimationFrame(step);
    }

    generate();
    resize();
    step();

    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', onMouseMove);
    canvas.addEventListener('touchmove', onTouchMove);
    canvas.addEventListener('touchend', onMouseLeave);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', onMouseMove);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onMouseLeave);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <canvas className='starfield'
      ref={canvasRef}
      style={{
        position: 'absolute',
        width: '100%',
        height: '94vh',
        background: 'radial-gradient(circle at top right, rgba(121, 68, 154, 0.13), lightblue), radial-gradient(circle at 20% 80%, rgba(41, 196, 255, 0.13), lightblue)',
/*        background: `url(https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fgetwallpapers.com%2Fwallpaper%2Ffull%2F5%2F3%2F8%2F982607-best-cute-turtle-wallpaper-2560x1920-for-tablet.jpg&f=1&nofb=1&ipt=451f006f77382c93eda3f96da0115b7db88558a386c6cda47e8d1229acd73fdc)`, */
        top: 0,
        left: 0,
        zIndex: -2, // or lower once you're done testing
      }}
    />
  );
}
