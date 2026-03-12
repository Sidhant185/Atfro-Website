import React from 'react';
import styles from './Typography.module.css';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'caption';

interface TypographyProps {
  variant?: Variant;
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export const Typography: React.FC<TypographyProps> = ({
  variant = 'p',
  as,
  className = '',
  children,
}) => {
  const Component = as || (variant === 'caption' ? 'span' : variant);

  return (
    <Component className={`${styles[variant]} ${className}`}>
      {children}
    </Component>
  );
};
