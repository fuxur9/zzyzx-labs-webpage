"use client";
import MagicBento, { BentoCardProps } from "./MagicBento";
import React from "react";

// Social Media Icons
const GitHubIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='w-6 h-6'
  >
    <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
  </svg>
);

const LinkedInIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='w-6 h-6'
  >
    <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
  </svg>
);

const TelegramIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='w-6 h-6'
  >
    <path d='M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z' />
  </svg>
);

const MediumIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='w-6 h-6'
  >
    <path d='M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z' />
  </svg>
);

const XIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='24'
    height='24'
    viewBox='0 0 24 24'
    fill='currentColor'
    className='w-6 h-6'
  >
    <path d='M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z' />
  </svg>
);

// Social Buttons Component (merged inline)
const SocialButtons = () => {
  const buttons = [
    {
      url: "https://github.com/fuxur9",
      icon: <GitHubIcon />,
    },
    {
      url: "https://www.linkedin.com/in/fuchun-hsieh",
      icon: <LinkedInIcon />,
    },
    {
      url: "https://t.me/fuXur9",
      icon: <TelegramIcon />,
    },
    {
      url: "https://medium.com/@fuXur9",
      icon: <MediumIcon />,
    },
    {
      url: "https://x.com/fuXur9",
      icon: <XIcon />,
    },
    { url: "" },
  ];

  const handleClick = (url: string) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className='flex flex-col justify-center items-center h-full relative z-10'>
      <div className='grid grid-cols-2 gap-3 w-[100%]'>
        {buttons.map((button, index) => (
          <button
            key={index}
            onClick={() => handleClick(button.url)}
            className='w-full h-12 rounded-full text-sm font-medium transition-all duration-200 bg-transparent border-2 border-[#73d5ff] text-white hover:bg-[#73d5ff] hover:text-black flex items-center justify-center'
          >
            {button.icon && (
              <div className='flex items-center justify-center'>
                {button.icon}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

export default function FredericPage() {
  const cards: BentoCardProps[] = [
    {
      id: "card-1",
      color: "#060010",
      backgroundImage: "/my_picture.JPG",
      enableTilt: true,
      enableMagnetism: false,
      children: (
        <>
          <div className='absolute bottom-0 left-0 right-0 z-10 backdrop-blur-none bg-blue/15  shadow-2xl rounded-t-2xl'>
            <div className='flex items-center justify-center px-4 py-2 sm:py-2.5 md:py-3'>
              <h2 className='text-white font-bold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-tight whitespace-nowrap'>
                Frederic Hsieh
              </h2>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "card-2",
      color: "#060010",
      children: <SocialButtons />,
    },
    {
      id: "card-3",
      color: "#060010",
      enableTilt: true,
      children: (
        <>
          <h3 className='text-xl font-normal mb-4'>Achievements</h3>
          <div className='flex flex-col h-full relative z-10 text-white px-5 pt-2 pb-5 overflow-y-auto achievements-scroll'>
            <div className='flex flex-col gap-4'>
              {/* Venture Build */}
              <a
                href='https://techexplorationlab.wisc.edu/2025/12/04/building-whats-next-highlights-from-the-tech-exploration-lab-student-demo-night/'
                target='_blank'
                rel='noopener noreferrer'
                className='border-l-2 border-[#73d5ff] pl-3 hover:border-[#73d5ff]/70 transition-colors cursor-pointer'
              >
                <div className='font-medium text-sm'>
                  Venture Build 2nd Place
                </div>
                <div className='text-xs opacity-75 mt-1'>
                  University of Wisconsin-Madison
                </div>
              </a>

              {/* ETHGlobal New York */}
              <a
                href='https://ethglobal.com/showcase/mediearn-74een'
                target='_blank'
                rel='noopener noreferrer'
                className='border-l-2 border-[#73d5ff] pl-3 hover:border-[#73d5ff]/70 transition-colors cursor-pointer'
              >
                <div className='font-medium text-sm'>
                  Best app using Walrus for Storage
                </div>
                <div className='text-xs opacity-75 mt-1'>
                  ETHGlobal New York
                </div>
              </a>

              {/* Sui Overflow */}
              <a
                href='https://blog.sui.io/2025-sui-overflow-hackathon-winners/#payments-and-wallets'
                target='_blank'
                rel='noopener noreferrer'
                className='border-l-2 border-[#73d5ff] pl-3 hover:border-[#73d5ff]/70 transition-colors cursor-pointer'
              >
                <div className='font-medium text-sm'>
                  Payments and Wallets Track 3rd place
                </div>
                <div className='text-xs opacity-75 mt-1'>Sui Overflow 2025</div>
              </a>

              {/* ETHGlobal Prague */}
              <a
                href='https://ethglobal.com/showcase/czechout-bzi3a'
                target='_blank'
                rel='noopener noreferrer'
                className='border-l-2 border-[#73d5ff] pl-3 hover:border-[#73d5ff]/70 transition-colors cursor-pointer'
              >
                <div className='font-medium text-sm'>
                  Best Use of ERC-7824 and Nitro Protocol
                </div>
                <div className='text-xs opacity-75 mt-1'>ETHGlobal Prague</div>
              </a>

              {/* ETHGlobal Taipei */}
              <a
                href='https://ethglobal.com/showcase/realove-siv7w'
                target='_blank'
                rel='noopener noreferrer'
                className='border-l-2 border-[#73d5ff] pl-3 hover:border-[#73d5ff]/70 transition-colors cursor-pointer'
              >
                <div className='font-medium text-sm'>Best Mini App (World)</div>
                <div className='text-xs opacity-75 mt-1'>ETHGlobal Taipei</div>
              </a>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "card-4",
      color: "#060010",
      children: (
        <>
          <h3 className='text-xl font-normal'>About Me</h3>
          <div className='flex flex-col justify-start h-full relative z-10 text-white'>
            <div className='flex flex-col gap-2 text-sm leading-relaxed'>
              <p>
                I'm a Web3 enthusiast, founder, also a senior CS student at{" "}
                <span className='text-[#73d5ff]'>UW-Madison</span>.
              </p>
              <p>
                I co-founded{" "}
                <span className='text-[#73d5ff]'>
                  <a
                    href='https://zzyzxlabs.xyz'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-[#73d5ff] hover:underline'
                  >
                    ZzyzxLabs
                  </a>
                </span>
                ,{" "}
                <a
                  href='https://discord.gg/ncpj8DcsH6'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='text-[#73d5ff] hover:underline'
                >
                  BermuDAO
                </a>{" "}
                (Mandarin web3 builder community).
              </p>
              <p>
                I'm passionate in payment and wallet. I'm building wallet for
                business to process and accept crypto payment, and accelerate
                the adoption of crypto currencies.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "card-5",
      color: "#060010",
      children: (
        <>
          <div className='flex flex-col justify-between h-full relative z-10 text-white'>
            <div>
              <h3 className='text-xl font-normal mb-2'>Projects</h3>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className='flex items-center justify-center w-full min-h-screen md:h-screen md:overflow-hidden'>
      <MagicBento
        cards={cards}
        enableStars={true}
        enableSpotlight={true}
        enableBorderGlow={true}
        enableMagnetism={false}
        glowColor='115, 225, 255'
      />
    </div>
  );
}
