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
    <div className={`w-full h-full flex justify-center items-end pointer-events-none select-none relative ${maskClasses}`}>
      {/* Backlight Glow */}
      <div className="absolute inset-0 bg-amber-500/20 blur-[80px] rounded-full -z-10" />
      <Image
        src="/avatar.png"
        alt="avatar"
        width={width}
        height={height}
        className={className}
        priority
      />
    </div>
  );
};

export default Avatar;