import { useEffect, useRef } from "react";

/** Paired parametric streams, informed by the reference's developer-wave renderer. */
export default function SignalRibbon() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0,
      visible = false,
      width = 0,
      height = 0,
      time = 0,
      last = 0;
    const point = (u, line, family, phase) => {
      const v = line / 39;
      const bend = Math.sin(phase) * 0.035;
      const y0 = family ? 0.55 + v * 0.2 : 0.8 + v * 0.3;
      const y1 = family ? 0.12 + v * 0.27 + bend : 0.97 - v * 0.8;
      const y2 = family ? 0.77 + v * 0.15 - bend : 0.1 + v * 0.8 + bend;
      const y3 = family ? 0.83 + v * 0.13 : 0.04 + v * 0.78;
      const k = 1 - u;
      return (
        (k * k * k * y0 +
          3 * k * k * u * y1 +
          3 * k * u * u * y2 +
          u * u * u * y3) *
        height
      );
    };
    function draw(now = 0) {
      const still = media.matches;
      if (!still && last) time += Math.min(now - last, 40);
      last = now;
      ctx.clearRect(0, 0, width, height);
      if (!width || !height) return;
      const phase = time / 4400;
      for (let family = 0; family < 2; family++) {
        for (let line = 0; line < 40; line++) {
          const v = line / 39;
          const gradient = ctx.createLinearGradient(0, 0, width, 0);
          const hue = family ? 12 - v * 52 : 271 + v * 12;
          const light = family ? 65 : 55;
          const saturation = family ? 76 : 94;
          const strength = family ? 0.82 : 0.9;
          gradient.addColorStop(0, `hsla(${hue},${saturation}%,${light}%,0)`);
          gradient.addColorStop(
            0.28,
            `hsla(${hue},${saturation}%,${light}%,${strength})`,
          );
          gradient.addColorStop(
            0.56,
            `hsla(${hue + 5},${saturation}%,${light + 3}%,${strength})`,
          );
          gradient.addColorStop(
            0.8,
            `hsla(${hue},${saturation}%,${light}%,0.38)`,
          );
          gradient.addColorStop(1, `hsla(${hue},${saturation}%,${light}%,0)`);
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 1.45;
          ctx.beginPath();
          for (let step = 0; step <= 90; step++) {
            const u = step / 90;
            const y = point(u, line, family, phase);
            if (!step) ctx.moveTo(0, y);
            else ctx.lineTo(u * width, y);
          }
          // A broad, faint under-stroke gives each strand a luminous edge
          // without an expensive canvas blur or changing the ribbon geometry.
          ctx.globalAlpha = 0.04;
          ctx.lineWidth = 3.5;
          ctx.stroke();
          ctx.globalAlpha = 1;
          ctx.lineWidth = 1.45;
          ctx.stroke();
          // A short, soft highlight follows a few strands rather than blinking.
          if (line % 10 === 0) {
            const head =
              ((time / 12500 + v * 0.7 + family * 0.25) % 1.25) - 0.1;
            ctx.lineWidth = 1.6;
            for (let trail = 0; trail < 8; trail++) {
              const u = head - trail * 0.006;
              if (u <= 0 || u >= 1) continue;
              const fade = Math.sin(Math.PI * u) * (1 - trail / 8);
              ctx.strokeStyle = `rgba(199,125,233,${fade * 0.45})`;
              ctx.beginPath();
              ctx.moveTo(u * width, point(u, line, family, phase));
              ctx.lineTo(
                (u + 0.006) * width,
                point(u + 0.006, line, family, phase),
              );
              ctx.stroke();
            }
          }
        }
      }
      if (!still && visible && !document.hidden)
        frame = requestAnimationFrame(draw);
    }
    function restart() {
      cancelAnimationFrame(frame);
      last = 0;
      if (visible && !document.hidden) draw();
    }
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      restart();
    });
    observer.observe(canvas);
    const resize = new ResizeObserver(() => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      const ratio = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
      restart();
    });
    resize.observe(canvas);
    function preference() {
      restart();
    }
    preference();
    media.addEventListener("change", preference);
    document.addEventListener("visibilitychange", restart);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      resize.disconnect();
      media.removeEventListener("change", preference);
      document.removeEventListener("visibilitychange", restart);
    };
  }, []);
  return (
    <div className="signal-ribbon" aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
