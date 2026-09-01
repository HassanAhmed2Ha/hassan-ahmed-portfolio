import React from "react";
import Image from "next/image";

const TopLeftImg: React.FC = () => {
  return (
    <div className="absolute left-0 top-0 grayscale sepia mix-blend-color-dodge opacity-60 z-10 w-[200px] xl:w-[400px] pointer-events-none select-none" aria-hidden="true">
      <Image
        src="/top-left-img.webp"
        alt=""
        width={400}
        height={400}
        priority
      />
    </div>
  );
};

export default TopLeftImg;
