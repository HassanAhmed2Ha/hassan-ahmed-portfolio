import React, { useRef } from "react";

interface Tilt3DProps {
  children: React.ReactNode;
  className?: string;
}

const Tilt3D: React.FC<Tilt3DProps> = ({ children, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const xRotation = -((y - rect.height / 2) / rect.height * 2.5); // reduced max tilt a bit for elegance
    const yRotation = ((x - rect.width / 2) / rect.width * 2.5);
    ref.current.style.transform = `perspective(1000px) scale(1.02) rotateX(${xRotation}deg) rotateY(${yRotation}deg)`;
  };

  const handleMouseLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "perspective(1000px) scale(1) rotateX(0) rotateY(0)";
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`transition-transform duration-300 ease-out transform-style-preserve-3d will-change-transform ${className}`}
    >
      {children}
    </div>
  );
};

export default Tilt3D;
