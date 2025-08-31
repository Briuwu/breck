import { Variants } from "motion/react";

type ContainerOpts = {
  staggerChildren?: number;
  y?: number;
  duration?: number;
};

type ItemOpts = {
  y?: number;
  duration?: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ease?: any;
};

export const createContainer = (opts: ContainerOpts = {}): Variants => {
  const { staggerChildren = 0.12, y = 24, duration = 0.6 } = opts;

  return {
    hidden: { opacity: 0, y },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren, duration },
    },
  };
};

export const createItem = (opts: ItemOpts = {}): Variants => {
  const { y = 12, duration = 0.5, ease = "easeOut" } = opts;

  return {
    hidden: { opacity: 0, y },
    show: { opacity: 1, y: 0, transition: { duration, ease } },
  };
};

export const defaultViewport = { once: true, amount: 0.15 } as const;

// Handy interaction preset for buttons/controls
export const buttonInteraction = {
  whileHover: { scale: 1.03 },
  whileTap: { scale: 0.98 },
} as const;

const motionVariants = {
  createContainer,
  createItem,
  defaultViewport,
  buttonInteraction,
};

export default motionVariants;
