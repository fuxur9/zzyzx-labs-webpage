import React from "react";

export interface CardButton {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  variant?: "primary" | "secondary" | "outline" | "custom";
  className?: string;
  style?: React.CSSProperties;
  // Allow complete button customization
  render?: (props: {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
    className: string;
    style: React.CSSProperties;
  }) => React.ReactNode;
}

export interface BentoCardProps {
  id?: string;
  color?: string;
  title?: string;
  description?: string;
  label?: string;
  textAutoHide?: boolean;
  disableAnimations?: boolean;
  backgroundImage?: string;
  // Custom content - if provided, will override default title/description rendering
  children?: React.ReactNode;
  // Buttons
  buttons?: CardButton[];
  // Click handlers
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  onButtonClick?: (
    buttonIndex: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
  // Individual card animation settings
  enableTilt?: boolean;
  enableMagnetism?: boolean;
  clickEffect?: boolean;
  particleCount?: number;
  glowColor?: string;
  // Grid positioning (for custom layouts)
  gridColumn?: string;
  gridRow?: string;
  gridColumnSpan?: number;
  gridRowSpan?: number;
  // Custom className
  className?: string;
  // Custom styles
  customStyle?: React.CSSProperties;
}

export interface BentoProps {
  cards?: BentoCardProps[];
  textAutoHide?: boolean;
  enableStars?: boolean;
  enableSpotlight?: boolean;
  enableBorderGlow?: boolean;
  disableAnimations?: boolean;
  spotlightRadius?: number;
  particleCount?: number;
  enableTilt?: boolean;
  glowColor?: string;
  clickEffect?: boolean;
  enableMagnetism?: boolean;
}
