import React from "react";
import Image from "next/image";

const TopLeftImg: React.FC = () => {
  return (
    <div className="absolute left-0 top-0 grayscale sepia mix-blend-color-dodge opacity-60 z-10 w-[200px] xl:w-[400px] pointer-events-none select-none">
      <Image
        src="/top-left-img.png"
        alt="left cover bg"
        width={400}
        height={400}
      />
    </div>
  );
};

export default TopLeftImg;
