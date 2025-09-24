'use client';

import React from 'react';

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties
};

export default function Button({ children, className = '', onClick, style }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`btn ${className}`}
      style={style}
    >
      {children}
    </button>
  );
}
