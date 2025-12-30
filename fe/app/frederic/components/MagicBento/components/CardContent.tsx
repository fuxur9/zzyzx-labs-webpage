"use client";
import React from "react";
import { BentoCardProps } from "../types";
import { CardButton } from "./CardButton";

interface CardContentProps {
  card: BentoCardProps;
  textAutoHide?: boolean;
}

export const CardContent: React.FC<CardContentProps> = ({
  card,
  textAutoHide = true,
}) => {
  // If custom children provided, use them
  if (card.children) {
    return <>{card.children}</>;
  }

  // Otherwise render default content
  return (
    <>
      {card.backgroundImage && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(6, 0, 16, 0.6)",
            zIndex: 0,
          }}
        />
      )}
      <div className='card__header flex justify-between gap-3 relative text-white z-10'>
        <span className='card__label text-base'>{card.label}</span>
      </div>
      <div className='card__content flex flex-col relative text-white z-10'>
        {card.title && (
          <h3
            className={`card__title font-normal text-base m-0 mb-1 ${
              card.textAutoHide !== undefined
                ? card.textAutoHide
                  ? "text-clamp-1"
                  : ""
                : textAutoHide
                ? "text-clamp-1"
                : ""
            }`}
          >
            {card.title}
          </h3>
        )}
        {card.description && (
          <p
            className={`card__description text-xs leading-5 opacity-90 ${
              card.textAutoHide !== undefined
                ? card.textAutoHide
                  ? "text-clamp-2"
                  : ""
                : textAutoHide
                ? "text-clamp-2"
                : ""
            }`}
          >
            {card.description}
          </p>
        )}
        {card.buttons && card.buttons.length > 0 && (
          <div className='card__buttons flex gap-2 mt-4 relative z-20'>
            {card.buttons.map((button, index) => (
              <CardButton
                key={index}
                button={button}
                index={index}
                onButtonClick={card.onButtonClick}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
