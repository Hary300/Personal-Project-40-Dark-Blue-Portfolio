import { motion, type HTMLMotionProps } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';
import type { ReactNode } from 'react';

interface SkewMotionProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  duration?: number;
  delay?: number;
  asChild?: boolean;
}

const MotionSlot = motion.create(Slot);
const MotionDiv = motion.div;

const SkewMotion = ({
  children,
  delay,
  duration,
  asChild,
  ...motionProps
}: SkewMotionProps) => {
  const Comp = asChild ? MotionSlot : MotionDiv;
  return (
    <Comp
      transition={{ duration, delay }}
      animate={{ skewX: -7 }}
      {...motionProps}
    >
      {children}
    </Comp>
  );
};

export default SkewMotion;
