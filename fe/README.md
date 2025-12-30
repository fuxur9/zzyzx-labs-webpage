# Zzyzx Labs Website

This is a [Next.js](https://nextjs.org) project for Zzyzx Labs website, featuring individual pages for team members.

## Getting Started

First, install dependencies:

```bash
pnpm install
```

Then, run the development server:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
fe/
├── app/
│   ├── page.tsx              # Landing page (Coming Soon)
│   ├── layout.tsx             # Root layout
│   ├── globals.css            # Global styles
│   ├── frederic/              # Frederic's personal page
│   │   ├── page.tsx          # Page component
│   │   ├── MagicBento.tsx    # Re-export wrapper
│   │   └── components/       # Page-specific components
│   │       └── MagicBento/   # MagicBento component library
│   └── [your-name]/          # Your personal page folder
│       ├── page.tsx
│       ├── MagicBento.tsx    # (optional) Copy if using MagicBento
│       └── components/       # Your page-specific components
├── components/                # Shared components
│   └── ShinyText.tsx
└── public/                    # Static assets
```

## Creating Your Own Page

Follow these steps to create your personal page:

### Step 1: Create Your Page Folder

Create a new folder under `app/` with your name (lowercase, no spaces):

```bash
mkdir -p app/your-name
```

### Step 2: Create Your Page Component

Create a `page.tsx` file in your folder:

```typescript
// app/your-name/page.tsx
export default function YourNamePage() {
  return (
    <div className='flex items-center justify-center w-full min-h-screen'>
      <h1>Your Name</h1>
      {/* Your content here */}
    </div>
  );
}
```

Your page will be accessible at `http://localhost:3000/your-name`

### Step 3: Using MagicBento Component (Optional)

If you want to use the MagicBento component (like Frederic's page), you can copy it:

1. **Copy the MagicBento component folder:**

   ```bash
   cp -r app/frederic/components/MagicBento app/your-name/components/
   ```

2. **Create a re-export file:**

   ```typescript
   // app/your-name/MagicBento.tsx
   export { default } from "./components/MagicBento";
   export * from "./components/MagicBento/types";
   ```

3. **Use it in your page:**

   ```typescript
   // app/your-name/page.tsx
   "use client";
   import MagicBento, { BentoCardProps } from "./MagicBento";

   export default function YourNamePage() {
     const cards: BentoCardProps[] = [
       {
         id: "card-1",
         color: "#060010",
         children: <div>Your content</div>,
       },
       // ... more cards
     ];

     return (
       <div className='flex items-center justify-center w-full min-h-screen'>
         <MagicBento
           cards={cards}
           enableStars={true}
           enableSpotlight={true}
           enableBorderGlow={true}
         />
       </div>
     );
   }
   ```

### Step 4: Using Shared Components

You can use shared components from the `components/` folder:

```typescript
import ShinyText from "../../components/ShinyText";

export default function YourNamePage() {
  return (
    <div>
      <ShinyText text='Hello World' />
    </div>
  );
}
```

### Step 5: Adding Assets

Place your images and other assets in the `public/` folder and reference them:

```typescript
<img src='/your-image.jpg' alt='Description' />
```

## MagicBento Component Documentation

The MagicBento component is a flexible bento grid layout system with various interactive features. See the detailed documentation:

- [MagicBento README](./app/frederic/components/MagicBento/README.md)

### Key Features:

- **Interactive Cards**: Tilt effects, magnetism, click effects
- **Visual Effects**: Stars, spotlight, border glow
- **Responsive Design**: Mobile-friendly grid layout
- **Customizable**: Per-card and global settings

### Example Usage:

```typescript
const cards: BentoCardProps[] = [
  {
    id: "card-1",
    color: "#060010",
    backgroundImage: "/your-image.jpg",
    enableTilt: true,
    enableMagnetism: false,
    children: <YourContent />,
  },
  {
    id: "card-2",
    color: "#060010",
    children: <MoreContent />,
  },
];

<MagicBento
  cards={cards}
  enableStars={true}
  enableSpotlight={true}
  enableBorderGlow={true}
  glowColor='115, 225, 255'
/>;
```

## Best Practices

1. **Keep Your Page Self-Contained**: All components specific to your page should be in your folder
2. **Use Shared Components**: For reusable UI elements, use the shared `components/` folder
3. **Follow Naming Conventions**: Use lowercase, hyphenated names for folders (e.g., `your-name`)
4. **Responsive Design**: Ensure your page works on both desktop and mobile
5. **Performance**: Use Next.js Image component for images, and lazy load heavy components

## Styling

The project uses:

- **Tailwind CSS** for utility-first styling
- **Global styles** in `app/globals.css`
- **Dark theme** by default (background: `#060010`)

You can customize colors and styles per page, but try to maintain consistency with the overall design system.

## Development Tips

- Use `"use client"` directive for interactive components
- The root layout handles overflow and responsive behavior
- Check `app/frederic/page.tsx` for a complete example

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - utility-first CSS framework

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
