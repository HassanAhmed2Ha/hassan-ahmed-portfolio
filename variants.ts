export const fadeIn = (direction: "up" | "down" | "left" | "right", delay: number = 0) => {
  const scaledDelay = Math.min(delay * 0.35, 0.15);
  return {
    hidden: {
      y: direction === "up" ? 24 : direction === "down" ? -24 : 0,
      opacity: 0,
      x: direction === "left" ? 24 : direction === "right" ? -24 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.45,
        delay: scaledDelay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };
};
