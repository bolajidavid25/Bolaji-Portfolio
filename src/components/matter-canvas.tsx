"use client";

import { useEffect, useRef } from "react";

/* Physics shapes in the left/right margins of the viewport.
   Shapes are repelled when the mouse cursor approaches.
   Canvas is pointer-events: none so it never blocks content interaction. */
export function MatterCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Only run on desktop (margin space exists ≥ 1280px)
    if (typeof window === "undefined" || window.innerWidth < 1200) return;

    let cleanupFn: (() => void) | undefined;

    (async () => {
      const Matter = (await import("matter-js")).default;
      const {
        Engine, Render, Runner, Bodies, Body,
        World, Events, Composite,
      } = Matter;

      const canvas = canvasRef.current;
      if (!canvas) return;

      const W = window.innerWidth;
      const H = window.innerHeight;

      canvas.width = W;
      canvas.height = H;

      const engine = Engine.create({ gravity: { x: 0, y: 0.04 } });
      const render = Render.create({
        canvas,
        engine,
        options: {
          width: W,
          height: H,
          background: "transparent",
          wireframes: false,
        },
      });

      // ── Margin zones ──────────────────────────────────────
      // max-w-6xl = 1152px centred; shapes live outside that.
      const contentW = Math.min(1152, W);
      const marginW = (W - contentW) / 2; // width of each margin
      const marginPad = 24; // inner padding so shapes don't overlap page edge gutter

      // ── Shape factory ──────────────────────────────────────
      const accent = ["#8b5cf6", "#06b6d4", "#a78bfa", "#22d3ee"];

      function makeShape(zone: "left" | "right") {
        const color = accent[Math.floor(Math.random() * accent.length)];
        const fill = color + "28"; // 16% opacity fill
        const stroke = color + "90"; // 56% opacity stroke
        const maxX = marginW - marginPad;
        const rawX =
          zone === "left"
            ? marginPad + Math.random() * maxX
            : W - marginPad - Math.random() * maxX;
        const y = -40 - Math.random() * 300; // spawn above viewport

        const pick = Math.floor(Math.random() * 3);
        const opts = {
          restitution: 0.75,
          friction: 0.005,
          frictionAir: 0.018,
          render: { fillStyle: fill, strokeStyle: stroke, lineWidth: 1.5 },
        };

        if (pick === 0) {
          const r = 6 + Math.random() * 14;
          return Bodies.circle(rawX, y, r, opts);
        } else if (pick === 1) {
          const s = 12 + Math.random() * 20;
          return Bodies.rectangle(rawX, y, s, s, opts);
        } else {
          const s = 14 + Math.random() * 18;
          return Bodies.polygon(rawX, y, 3, s, { angle: Math.random() * Math.PI, ...opts });
        }
      }

      const shapeCount = Math.min(12, Math.floor(marginW / 16));
      const shapeBodies = Array.from({ length: shapeCount }, (_, i) =>
        makeShape(i % 2 === 0 ? "left" : "right")
      );

      // ── Static boundaries ──────────────────────────────────
      const wallOpts = { isStatic: true, render: { fillStyle: "transparent" } };
      const floor = Bodies.rectangle(W / 2, H + 30, W, 60, wallOpts);
      const leftWall = Bodies.rectangle(-30, H / 2, 60, H, wallOpts);
      const rightWall = Bodies.rectangle(W + 30, H / 2, 60, H, wallOpts);
      const ceiling = Bodies.rectangle(W / 2, -30, W, 60, wallOpts);

      World.add(engine.world, [
        ...shapeBodies, floor, leftWall, rightWall, ceiling,
      ]);

      // ── Mouse repulsion ────────────────────────────────────
      let mx = W / 2, my = H / 2;
      const onMouseMove = (e: MouseEvent) => { mx = e.clientX; my = e.clientY; };
      window.addEventListener("mousemove", onMouseMove, { passive: true });

      Events.on(engine, "beforeUpdate", () => {
        Composite.allBodies(engine.world).forEach((b) => {
          if (b.isStatic) return;

          const dx = b.position.x - mx;
          const dy = b.position.y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const radius = 140;

          // Repulsion force
          if (dist < radius && dist > 1) {
            const force = ((radius - dist) / radius) * 0.0025;
            Body.applyForce(b, b.position, {
              x: (dx / dist) * force,
              y: (dy / dist) * force,
            });
          }

          // Soft push back into margins if shape drifts into content area
          const inLeft = b.position.x < marginW;
          const inRight = b.position.x > W - marginW;
          if (!inLeft && !inRight) {
            const pushStrength = 0.0008;
            if (b.position.x < W / 2) {
              Body.applyForce(b, b.position, { x: -pushStrength, y: 0 });
            } else {
              Body.applyForce(b, b.position, { x: pushStrength, y: 0 });
            }
          }

          // Slow down if drifting off-screen top (recycle)
          if (b.position.y < -100 || b.position.y > H + 100) {
            Body.setPosition(b, {
              x: b.position.x,
              y: Math.random() * H * 0.5,
            });
            Body.setVelocity(b, { x: 0, y: 0 });
          }
        });
      });

      const runner = Runner.create();
      Runner.run(runner, engine);
      Render.run(render);

      cleanupFn = () => {
        window.removeEventListener("mousemove", onMouseMove);
        Render.stop(render);
        Runner.stop(runner);
        Engine.clear(engine);
      };
    })();

    return () => cleanupFn?.();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
