import { useEffect, useRef, useCallback } from "react";

const CursorGradient = () => {
  const canvasRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animFrameRef = useRef<number>(0);

  const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

  const updateGradient = useCallback(() => {
    if (!canvasRef.current) return;

    currentPos.current.x = lerp(currentPos.current.x, mousePos.current.x, 0.08);
    currentPos.current.y = lerp(currentPos.current.y, mousePos.current.y, 0.08);

    const isDark = document.documentElement.classList.contains("dark");

    if (isDark) {
      canvasRef.current.style.background = "none";
      animFrameRef.current = requestAnimationFrame(updateGradient);
      return;
    }

    const colors = [
      `radial-gradient(600px circle at ${currentPos.current.x}px ${currentPos.current.y}px, rgba(100, 110, 130, 0.05), transparent 40%)`,
      `radial-gradient(400px circle at ${currentPos.current.x + 100}px ${currentPos.current.y - 50}px, rgba(120, 130, 150, 0.04), transparent 40%)`,
    ];

    canvasRef.current.style.background = colors.join(", ");

    animFrameRef.current = requestAnimationFrame(updateGradient);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    animFrameRef.current = requestAnimationFrame(updateGradient);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameRef.current);
    };
  }, [updateGradient]);

  return (
    <div
      ref={canvasRef}
      className="cursor-gradient"
      aria-hidden="true"
    />
  );
};

export default CursorGradient;
