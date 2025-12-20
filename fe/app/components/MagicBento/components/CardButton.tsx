"use client";
import React from "react";
import { CardButton as CardButtonType } from "../types";

interface CardButtonProps {
  button: CardButtonType;
  index: number;
  onButtonClick?: (
    buttonIndex: number,
    e: React.MouseEvent<HTMLButtonElement>
  ) => void;
}

export const CardButton: React.FC<CardButtonProps> = ({
  button,
  index,
  onButtonClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation(); // Prevent card click
    button.onClick(e);
    onButtonClick?.(index, e);
  };

  // If custom render function provided, use it
  if (button.render) {
    return (
      <>
        {button.render({
          onClick: handleClick,
          className: `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
            button.className || ""
          }`,
          style: { zIndex: 20, ...button.style },
        })}
      </>
    );
  }

  const getVariantClasses = () => {
    switch (button.variant) {
      case "primary":
        return "bg-white text-black hover:bg-gray-200";
      case "secondary":
        return "bg-gray-800 text-white hover:bg-gray-700";
      case "outline":
        return "border border-white text-white hover:bg-white hover:text-black";
      case "custom":
        return ""; // No default classes, use className prop
      default:
        return "bg-white text-black hover:bg-gray-200";
    }
  };

  const baseClasses = `px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${getVariantClasses()}`;
  const finalClassName =
    button.variant === "custom"
      ? button.className || baseClasses
      : `${baseClasses} ${button.className || ""}`;

  return (
    <button
      onClick={handleClick}
      className={finalClassName}
      style={{ zIndex: 20, ...button.style }}
    >
      {button.label}
    </button>
  );
};
