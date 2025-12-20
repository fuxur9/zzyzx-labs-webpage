"use client";
import ShinyText from "../components/ShinyText";

export default function Home() {
  return (
    <div className='flex items-center justify-center w-full min-h-screen'>
      <ShinyText
        text='Coming Soon'
        className='text-6xl md:text-8xl font-light'
      />
    </div>
  );
}
