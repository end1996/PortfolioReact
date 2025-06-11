import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Preset = "fade-in" | "slide-up" | "slide-left" | "zoom-in";

type AnimatedSectionProps = {
  id?: string;
  className?: string;
  children: ReactNode;
  preset?: Preset;
  duration?: number;
  delay?: number;
  once?: boolean;
  trigger?: "onLoad" | "onView";
};

const animationPresets: Record<Preset, any> = {
  "fade-in": {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
  },
  "slide-up": {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
  },
  "slide-left": {
    initial: { opacity: 0, x: -100 },
    whileInView: { opacity: 1, x: 0 },
  },
  "zoom-in": {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
  },
};

function AnimatedSection({
  id,
  className,
  children,
  preset = "fade-in",
  duration = 0.7,
  delay = 0,
  once = true,
  trigger = "onView",
}: AnimatedSectionProps) {
  const { initial, whileInView } = animationPresets[preset];

  const animationProps =
    trigger === "onLoad"
      ? { initial, animate: whileInView }
      : { initial, whileInView };

  return (
    <motion.section
      id={id}
      className={className}
      {...animationProps}
      initial={initial}
      whileInView={whileInView}
      transition={{ duration, delay }}
      viewport={{ once }}
    >
      {children}
    </motion.section>
  );
}

export default AnimatedSection;
