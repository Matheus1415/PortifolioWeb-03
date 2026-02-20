import { useEffect, useRef, useState, useCallback } from "react";

export const CustomCursor = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const posRef = useRef({ x: 0, y: 0 });
  const followerRef = useRef({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [clicking, setClicking] = useState(false);
  const rafRef = useRef<number>(0);

  const animate = useCallback(() => {
    followerRef.current.x += (posRef.current.x - followerRef.current.x) * 0.1;
    followerRef.current.y += (posRef.current.y - followerRef.current.y) * 0.1;

    if (dotRef.current) {
      dotRef.current.style.transform = `translate(${posRef.current.x - 4}px, ${posRef.current.y - 4}px) scale(${clicking ? 0.5 : 1})`;
    }
    if (ringRef.current) {
      const size = hovered ? 40 : 28;
      ringRef.current.style.transform = `translate(${followerRef.current.x - size / 2}px, ${followerRef.current.y - size / 2}px)`;
      ringRef.current.style.width = `${size}px`;
      ringRef.current.style.height = `${size}px`;
      ringRef.current.style.borderColor = hovered ? "hsl(185 100% 50% / 0.8)" : "hsl(262 83% 65% / 0.7)";
      ringRef.current.style.boxShadow = hovered
        ? "0 0 10px hsl(185 100% 50% / 0.4)"
        : "0 0 8px hsl(262 83% 65% / 0.3)";
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [hovered, clicking]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [animate]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      posRef.current = { x: e.clientX, y: e.clientY };
    };
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);

    const updateTargets = () => {
      document.querySelectorAll("a, button, [data-hover]").forEach((el) => {
        el.addEventListener("mouseenter", () => setHovered(true));
        el.addEventListener("mouseleave", () => setHovered(false));
      });
    };
    updateTargets();
    const id = setInterval(updateTargets, 1200);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      clearInterval(id);
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed", top: 0, left: 0, zIndex: 9999,
          width: 8, height: 8, borderRadius: "50%",
          background: "hsl(262 83% 65%)",
          pointerEvents: "none",
          transition: "transform 0.05s",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed", top: 0, left: 0, zIndex: 9998,
          borderRadius: "50%",
          border: "1.5px solid hsl(262 83% 65% / 0.7)",
          pointerEvents: "none",
          transition: "width 0.3s, height 0.3s, border-color 0.3s, box-shadow 0.3s",
        }}
      />
    </>
  );
};
