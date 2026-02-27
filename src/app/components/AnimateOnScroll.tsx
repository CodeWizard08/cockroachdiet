"use client";

import { motion, type Variant } from "framer-motion";
import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export default function AnimateOnScroll({
  children,
  delay = 0,
  className = "",
}: Props) {
  const hidden: Variant = { opacity: 0, y: 40 };
  const visible: Variant = { opacity: 1, y: 0 };

  return (
    <motion.div
      initial={hidden}
      whileInView={visible}
      viewport={{ once: true, margin: "0px 0px -60px 0px" }}
      transition={{ duration: 0.8, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
