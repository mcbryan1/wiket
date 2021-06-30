export const mainVariant = {
  initial: {},
  animate: {},
};

// Large Screen Animations
export const navbarAnimation = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1.7,
      delay: 3.5,
    },
  },
};
export const mainImageVariant = {
  initial: { y: 80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeIn",
      stiffness: 800,
      duration: 0.7,
      delay: 0.5,
    },
  },
};

export const gardenerVariant = {
  firstAnimation: {
    y: [0, -20],
    opacity: [0, 1],
    transition: {
      ease: "easeOut",
      stiffness: 800,
      duration: 0.6,
      delay: 1.6,
    },
  },
  secondAnimation: {
    y: -10,
    opacity: 1,
    transition: {
      yoyo: Infinity,
      duration: 4.5,
      ease: "easeInOut",
    },
  },
};

export const potterVariant = {
  firstAnimation: {
    y: [20, 0],
    opacity: [0, 1],
    transition: {
      ease: "easeOut",
      stiffness: 800,
      duration: 0.5,
      delay: 1.4,
    },
  },
  secondAnimation: {
    y: 8,
    opacity: 1,
    transition: {
      y: {
        yoyo: Infinity,
        duration: 6,
        ease: "easeInOut",
      },
    },
  },
};

export const baristaVariant = {
  firstAnimation: {
    y: [70, 0],
    opacity: [0, 1],
    transition: {
      ease: "easeOut",
      stiffness: 800,
      duration: 0.4,
      delay: 1.8,
    },
  },
  secondAnimation: {
    y: -20,
    opacity: 1,
    transition: {
      y: {
        yoyo: Infinity,
        ease: "easeInOut",
        duration: 7.5,
      },
    },
  },
};

export const svgPinVariant = {
  initial: { y: -12, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      delay: 3.5,
      duration: 5,
      y: {
        yoyo: Infinity,
        duration: 5,
        ease: "easeInOut",
      },
    },
  },
};

export const mainImageContainerTextVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 1.5,
      delay: 3,
    },
  },
};

export const mainImageContainerSubTextVariant = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 2,
      delay: 3.5,
    },
  },
};


export const rightTextContainerTextVariant = {
  initial: { opacity:0 },
  animate: { opacity:1 ,
    transition: {
      type: "tween",
      ease: 'easeOut',
      duration: 1.5,
      delay: 3,
    }
  },
};

export const rightTextContainerSubVariant = {
  initial: { opacity:0 },
  animate: { opacity:1 ,
    transition: {
      type: "tween",
      ease: 'easeOut',
      duration: 2,
      delay: 3.5,
    }
  },
};

// Small Screen Animation
export const mainImageMobileVariant = {
  initial: { y: 80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      stiffness: 800,
      duration: 0.8,
      delay: 1.5,
    },
  },
};

export const rightTextContainerVariant = {
  initial: { y: 80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      stiffness: 800,
      duration: 0.8,
      delay: 0.5,
      staggerChildren: 1,
    },
  },
};

export const rightTextContainerMainTextVariant = {
  initial: { y: 80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      stiffness: 800,
      duration: 0.8,
      delay: 0.5,
    },
  },
};
export const rightTextContainerSubTextVariant = {
  initial: { y: 80, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      ease: "easeOut",
      stiffness: 800,
      duration: 0.8,
      delay: 0.8,
    },
  },
};
