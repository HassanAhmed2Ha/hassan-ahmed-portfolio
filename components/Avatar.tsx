import React from "react";
import Image from "next/image";

interface AvatarProps {
  width?: number;
  height?: number;
  className?: string;
  applyMask?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({ 
  width = 737, 
  height = 678, 
  className = "w-full h-full object-contain translate-z-0",
  applyMask = false
}) => {
  const maskClasses = applyMask 
    ? "[-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)]" 
    : "";

  return (
    <div className="w-full h-full flex justify-center items-end pointer-events-none select-none relative">
      {/* 1. The Glow (NOT masked) */}
      <div className="absolute -inset-x-20 -inset-y-20 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.25)_0%,transparent_60%)] rounded-full -z-10 pointer-events-none" />

      {/* 2. The Image (Masked) */}
      <div className={`relative z-10 w-full h-full flex justify-center items-end ${maskClasses}`}>
        <Image
          src="/avatar.png"
          alt="avatar"
          width={width}
          height={height}
          className={className}
          priority
        />
      </div>
    </div>
  );
};

export default Avatar;