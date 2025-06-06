'use client';

import { motion } from 'framer-motion';
import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'accent';
};

export default function Button({ children, onClick, variant = 'primary' }: ButtonProps) {
  const backgroundColor = {
    primary: 'var(--color-primary)',
    secondary: 'var(--color-secondary)',
    accent: 'var(--color-accent)',
  }[variant];

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      style={{
        backgroundColor,
        color: 'var(--color-surface)',
      }}
      className="px-6 py-3 rounded-full font-medium shadow-md transition-all duration-300"
    >
      {children}
    </motion.button>
  );
}
