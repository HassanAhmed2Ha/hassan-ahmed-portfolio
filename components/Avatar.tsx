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
  const maskStyles = applyMask ? {
    WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
    maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)"
  } : {};

  return (
    <div className="w-full h-full flex justify-center items-center pointer-events-none select-none" style={maskStyles}>
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