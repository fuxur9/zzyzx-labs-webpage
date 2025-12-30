"use client";
import React, { useRef } from "react";
import { BentoProps, BentoCardProps } from "./types";
import {
  DEFAULT_PARTICLE_COUNT,
  DEFAULT_SPOTLIGHT_RADIUS,
  DEFAULT_GLOW_COLOR,
} from "./constants";
import { BentoCard } from "./components/BentoCard";
import { GlobalSpotlight } from "./components/GlobalSpotlight";
import { BentoCardGrid } from "./components/BentoCardGrid";
import { useMobileDetection } from "./hooks/useMobileDetection";
import { getBentoStyles } from "./styles";

export const MagicBento: React.FC<BentoProps> = ({
  cards = [],
  textAutoHide = true,
  enableStars = true,
  enableSpotlight = true,
  enableBorderGlow = true,
  disableAnimations = false,
  spotlightRadius = DEFAULT_SPOTLIGHT_RADIUS,
  particleCount = DEFAULT_PARTICLE_COUNT,
  enableTilt = false,
  glowColor = DEFAULT_GLOW_COLOR,
  clickEffect = true,
  enableMagnetism = true,
}) => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isMobile = useMobileDetection();
  const shouldDisableAnimations = disableAnimations || isMobile;

  return (
    <>
      <style>{getBentoStyles(glowColor)}</style>

      {enableSpotlight && (
        <GlobalSpotlight
          gridRef={gridRef}
          disableAnimations={shouldDisableAnimations}
          enabled={enableSpotlight}
          spotlightRadius={spotlightRadius}
          glowColor={glowColor}
        />
      )}

      <BentoCardGrid gridRef={gridRef}>
        <div className='card-responsive grid gap-2'>
          {cards.map((card, index) => {
            const isWideCard = index === 4; // 5th card (index 4)
            const cardId = card.id || `card-${index}`;

            // Use card-specific settings or fall back to global settings
            const cardEnableTilt =
              card.enableTilt !== undefined ? card.enableTilt : enableTilt;
            const cardEnableMagnetism =
              card.enableMagnetism !== undefined
                ? card.enableMagnetism
                : enableMagnetism;
            const cardClickEffect =
              card.clickEffect !== undefined ? card.clickEffect : clickEffect;
            const cardParticleCount = card.particleCount || particleCount;
            const cardGlowColor = card.glowColor || glowColor;
            const cardDisableAnimations =
              card.disableAnimations !== undefined
                ? card.disableAnimations
                : shouldDisableAnimations;

            return (
              <BentoCard
                key={cardId}
                {...card}
                enableStars={enableStars}
                enableBorderGlow={enableBorderGlow}
                textAutoHide={textAutoHide}
                enableTilt={cardEnableTilt}
                enableMagnetism={cardEnableMagnetism}
                clickEffect={cardClickEffect}
                particleCount={cardParticleCount}
                glowColor={cardGlowColor}
                disableAnimations={cardDisableAnimations}
                isWideCard={isWideCard}
              />
            );
          })}
        </div>
      </BentoCardGrid>
    </>
  );
};

export default MagicBento;
