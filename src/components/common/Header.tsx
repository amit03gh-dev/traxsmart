'use client';

import React from 'react';

type HeaderProps = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
  style?: React.CSSProperties;
};

export default function Header({
  children,
  as: Tag = 'h1', // default is h1
  className = '',
  style,
}: HeaderProps) {
  return (
    <Tag className={className} style={style}>
      {children}
    </Tag>
  );
}
