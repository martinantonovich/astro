// src/components/Starfield.jsx
import React, { useRef, useEffect } from 'react';

export default function Starfield() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Genera estrellas
    const starCount = 300;
    const stars = Array.from({ length: starCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.5 + 0.2,
    }));

    let animationFrameId;

    function render() {
      const scrollY = window.scrollY;
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = '#ffffff';
      stars.forEach(star => {
        // Calcular posición vertical según scroll y factor de velocidad
        const y = (star.y + scrollY * star.speed) % height;
        ctx.beginPath();
        ctx.arc(star.x, y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(render);
    }
    render();

    // Ajuste en resize
    function onResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    }
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      class="fixed inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
}
