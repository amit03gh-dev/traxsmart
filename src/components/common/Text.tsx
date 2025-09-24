'use client';

import React from 'react';

type TextProps = {
  children: React.ReactNode;
  className?: string;
  style?:  React.CSSProperties;
};

export default function Text({ children, className = '', style }: TextProps) {
  return <p className={className} style={style}>{children}</p>;
}
