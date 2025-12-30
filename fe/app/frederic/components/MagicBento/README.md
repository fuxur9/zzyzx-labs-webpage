# MagicBento Component

A modular, flexible bento box grid component with particle animations and customizable cards.

## Structure

```
components/MagicBento/
├── types.ts              # TypeScript interfaces
├── constants.ts          # Constants and defaults
├── styles.ts             # CSS styles generator
├── MagicBento.tsx        # Main component
├── index.ts              # Exports
├── components/
│   ├── BentoCard.tsx     # Individual card component
│   ├── CardButton.tsx    # Button component with flexible styling
│   ├── CardContent.tsx   # Card content renderer
│   ├── GlobalSpotlight.tsx # Spotlight effect
│   └── BentoCardGrid.tsx # Grid wrapper
├── hooks/
│   ├── useParticleAnimation.ts # Particle animation logic
│   ├── useCardAnimations.ts     # Card tilt/magnetism/click effects
│   └── useMobileDetection.ts    # Mobile detection hook
└── utils/
    └── particles.ts      # Particle utility functions
```

## Button Styling Flexibility

The `CardButton` component supports multiple ways to customize button styling:

### 1. Using Variants (Quick)

```typescript
buttons: [
  {
    label: "Primary Button",
    onClick: () => {},
    variant: "primary", // or "secondary", "outline"
  },
];
```

### 2. Using className (Custom Classes)

```typescript
buttons: [
  {
    label: "Custom Button",
    onClick: () => {},
    variant: "custom",
    className:
      "bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full",
  },
];
```

### 3. Using style prop (Inline Styles)

```typescript
buttons: [
  {
    label: "Styled Button",
    onClick: () => {},
    variant: "custom",
    style: {
      background: "linear-gradient(45deg, #667eea 0%, #764ba2 100%)",
      borderRadius: "12px",
      padding: "12px 24px",
    },
  },
];
```

### 4. Using render prop (Complete Control)

```typescript
buttons: [
  {
    label: "Fully Custom",
    onClick: () => {},
    variant: "custom",
    render: ({ onClick, className, style }) => (
      <button
        onClick={onClick}
        className={className}
        style={style}
        className='custom-button-class'
      >
        <span>Custom Content</span>
        <Icon />
      </button>
    ),
  },
];
```

## Creating Individual Card Files

You can create individual card files for better organization:

### Example: `cards/AnalyticsCard.tsx`

```typescript
import { BentoCardProps } from "../types";

export const AnalyticsCard: BentoCardProps = {
  id: "analytics-card",
  title: "Analytics",
  description: "Track user behavior",
  label: "Frederic Hsieh",
  backgroundImage: "/my_picture.JPG",
  enableTilt: true,
  buttons: [
    {
      label: "View Analytics",
      onClick: () => console.log("View Analytics"),
      variant: "primary",
    },
  ],
};
```

### Usage in page.tsx

```typescript
import { AnalyticsCard } from "./components/MagicBento/cards/AnalyticsCard";

const cards = [
  AnalyticsCard,
  // ... other cards
];
```

## Benefits of This Structure

1. **Separation of Concerns**: Each piece of logic is in its own file
2. **Reusability**: Components and hooks can be used independently
3. **Testability**: Easier to test individual pieces
4. **Maintainability**: Changes to one feature don't affect others
5. **Flexibility**: Easy to customize buttons and cards
6. **Scalability**: Easy to add new features or card types
