"use client";

import { motion } from "framer-motion";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  noBorder?: boolean;
}

export const SectionWrapper = ({
  id,
  children,
  className = "",
  noBorder = false,
}: SectionWrapperProps) => {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      // Horizontal padding removed to rely on page.tsx container
      className={`py-6 ${
        !noBorder ? "theme-divider" : ""
      } ${className}`}
    >
      {children}
    </motion.section>
  );
};