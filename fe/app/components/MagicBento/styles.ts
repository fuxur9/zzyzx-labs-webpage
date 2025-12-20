export const getBentoStyles = (glowColor: string) => `
  .bento-section {
    --glow-x: 50%;
    --glow-y: 50%;
    --glow-intensity: 0;
    --glow-radius: 200px;
    --glow-color: ${glowColor};
    --border-color: #392e4e;
    --background-dark: #060010;
    --white: hsl(0, 0%, 100%);
    --purple-primary: rgba(132, 0, 255, 1);
    --purple-glow: rgba(132, 0, 255, 0.2);
    --purple-border: rgba(132, 0, 255, 0.8);
  }
  
  .card-responsive {
    grid-template-columns: 1fr;
    width: 90%;
    margin: 0 auto;
    padding: 0.5rem;
  }
  
  @media (min-width: 600px) {
    .card-responsive {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1024px) {
    .card-responsive {
      grid-template-columns: repeat(4, 1fr);
    }
    
    .card-responsive .card:nth-child(3) {
      grid-column: 3 / 5;
      grid-row: 1 / 3;
    }
    
    .card-responsive .card:nth-child(4) {
      grid-column: 1 / span 2;
      grid-row: 2 / span 2;
    }
    
    .card-responsive .card:nth-child(5) {
      grid-column: 3 / 5;
      grid-row: 3;
      align-self: start;
      height: min(200px, fit-content);
      max-height: 200px;
      overflow: hidden;
    }
  }
  
  .card--border-glow::after {
    content: '';
    position: absolute;
    inset: 0;
    padding: 6px;
    background: radial-gradient(var(--glow-radius) circle at var(--glow-x) var(--glow-y),
        rgba(${glowColor}, calc(var(--glow-intensity) * 0.8)) 0%,
        rgba(${glowColor}, calc(var(--glow-intensity) * 0.4)) 30%,
        transparent 60%);
    border-radius: inherit;
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    mask-composite: exclude;
    pointer-events: none;
    opacity: 1;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  .card--border-glow:hover::after {
    opacity: 1;
  }
  
  .card--border-glow:hover {
    box-shadow: 0 4px 20px rgba(46, 24, 78, 0.4), 0 0 30px rgba(${glowColor}, 0.2);
  }
  
  .particle::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: rgba(${glowColor}, 0.2);
    border-radius: 50%;
    z-index: -1;
  }
  
  .particle-container:hover {
    box-shadow: 0 4px 20px rgba(46, 24, 78, 0.2), 0 0 30px rgba(${glowColor}, 0.2);
  }
  
  .text-clamp-1 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    line-clamp: 1;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .text-clamp-2 {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  
  .achievements-scroll {
    scrollbar-width: thin;
    scrollbar-color: rgba(115, 213, 255, 0.5) transparent;
  }
  
  .achievements-scroll::-webkit-scrollbar {
    width: 6px;
  }
  
  .achievements-scroll::-webkit-scrollbar-track {
    background: transparent;
  }
  
  .achievements-scroll::-webkit-scrollbar-thumb {
    background-color: rgba(115, 213, 255, 0.5);
    border-radius: 3px;
  }
  
  .achievements-scroll::-webkit-scrollbar-thumb:hover {
    background-color: rgba(115, 213, 255, 0.7);
  }
  
  @media (max-width: 599px) {
    .card-responsive {
      grid-template-columns: 1fr;
      width: 90%;
      margin: 0 auto;
      padding: 0.5rem;
    }
    
    .card-responsive .card {
      width: 100%;
      min-height: 180px;
    }
    
    /* Reorder cards on mobile: About Me (card-4) becomes 3rd, Achievements (card-3) becomes 4th, Projects stays last */
    .card-responsive .card:nth-child(1) {
      order: 1;
    }
    
    .card-responsive .card:nth-child(2) {
      order: 2;
    }
    
    .card-responsive .card:nth-child(3) {
      order: 4;
    }
    
    .card-responsive .card:nth-child(4) {
      order: 3;
    }
    
    .card-responsive .card:nth-child(5) {
      order: 5;
    }
  }
`;
