declare module "swiper" {
  export interface SwiperProps {
    [key: string]: any;
  }
  export interface SwiperRef {
    [key: string]: any;
  }
}

declare module "swiper/react" {
  import React from "react";
  import { SwiperProps, SwiperRef } from "swiper";
  
  export const Swiper: React.ForwardRefExoticComponent<
    SwiperProps & React.RefAttributes<SwiperRef>
  >;
  export const SwiperSlide: React.FC<any>;
}

declare module "swiper/modules" {
  export const Pagination: any;
  export const Navigation: any;
  export const Autoplay: any;
  export const FreeMode: any;
}
