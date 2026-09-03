export const fadeIn = (direction: "up" | "down" | "left" | "right", delay: number = 0) => {
  const scaledDelay = Math.min(delay * 0.15, 0.06);
  return {
    hidden: {
      y: direction === "up" ? 14 : direction === "down" ? -14 : 0,
      opacity: 0,
      x: direction === "left" ? 14 : direction === "right" ? -14 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.28,
        delay: scaledDelay,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};
