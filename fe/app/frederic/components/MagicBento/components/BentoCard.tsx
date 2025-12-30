"use client";
import React, { useRef } from "react";
import { BentoCardProps } from "../types";
import { CardContent } from "./CardContent";
import { useParticleAnimation } from "../hooks/useParticleAnimation";
import { useCardAnimations } from "../hooks/useCardAnimations";

interface BentoCardComponentProps extends BentoCardProps {
  enableStars: boolean;
  enableBorderGlow: boolean;
  textAutoHide: boolean;
  // Animation settings
  enableTilt: boolean;
  enableMagnetism: boolean;
  clickEffect: boolean;
  particleCount: number;
  glowColor: string;
  disableAnimations: boolean;
  // Grid settings
  isWideCard?: boolean;
}

export const BentoCard: React.FC<BentoCardComponentProps> = (props) => {
  const {
    id,
    color,
    backgroundImage,
    className,
    customStyle,
    gridColumn,
    gridRow,
    gridColumnSpan,
    gridRowSpan,
    enableStars,
    enableBorderGlow,
    textAutoHide,
    enableTilt,
    enableMagnetism,
    clickEffect,
    particleCount,
    glowColor,
    disableAnimations,
    onClick,
    isWideCard = false,
  } = props;

  // Extract card props for CardContent
  const cardProps: BentoCardProps = {
    ...props,
  };
  const cardRef = useRef<HTMLDivElement>(null);

  const { animateParticles, clearAllParticles, isHoveredRef } =
    useParticleAnimation({
      particleCount,
      glowColor,
      disableAnimations,
      cardRef,
    });

  useCardAnimations({
    cardRef,
    enableTilt,
    enableMagnetism,
    clickEffect,
    glowColor,
    disableAnimations,
    onParticleHover: () => {
      isHoveredRef.current = true;
      animateParticles();
    },
    onParticleLeave: () => {
      isHoveredRef.current = false;
      clearAllParticles();
    },
  });

  const baseClassName = `card flex flex-col justify-between relative ${
    isWideCard ? "" : "aspect-[4/3]"
  } min-h-[200px] w-full max-w-full p-5 rounded-[20px] border border-solid font-light overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_25px_rgba(0,0,0,0.15)] ${
    enableBorderGlow ? "card--border-glow" : ""
  } ${className || ""}`;

  const cardStyle: React.CSSProperties = {
    backgroundColor: color || "var(--background-dark)",
    borderColor: "var(--border-color)",
    color: "var(--white)",
    "--glow-x": "50%",
    "--glow-y": "50%",
    "--glow-intensity": "0",
    "--glow-radius": "200px",
    ...(backgroundImage && {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    }),
    ...(gridColumn && { gridColumn }),
    ...(gridRow && { gridRow }),
    ...(gridColumnSpan && {
      gridColumn: `span ${gridColumnSpan}`,
    }),
    ...(gridRowSpan && { gridRow: `span ${gridRowSpan}` }),
    ...customStyle,
  } as React.CSSProperties;

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Don't trigger card click if clicking on a button
    if ((e.target as HTMLElement).closest("button")) {
      return;
    }
    onClick?.(e);
  };

  if (enableStars) {
    return (
      <div
        ref={cardRef}
        className={`${baseClassName} relative overflow-hidden`}
        style={{ ...cardStyle, position: "relative", overflow: "hidden" }}
        onClick={handleCardClick}
      >
        <CardContent
          card={cardProps as BentoCardProps}
          textAutoHide={textAutoHide}
        />
      </div>
    );
  }

  return (
    <div
      ref={cardRef}
      className={baseClassName}
      style={cardStyle}
      onClick={handleCardClick}
    >
      <CardContent
        card={cardProps as BentoCardProps}
        textAutoHide={textAutoHide}
      />
    </div>
  );
};
