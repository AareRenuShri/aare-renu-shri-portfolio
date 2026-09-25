import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-x-clip px-4 pb-20 pt-28 sm:px-6 lg:pt-24">
      <div className="w-full max-w-[1500px]">
        {/* Giant display word spanning ~90% of the viewport width */}
        <h1 className="font-display select-none text-center text-[14.5vw] leading-[0.82] tracking-[-0.015em] text-neutral-900">
          PORTFOLIO
        </h1>

        {/* Handwritten signature overlapping the bottom of the display word,
            centered, with a background-colour halo so the ascender tips of
            "A" and "S" stay visible where they graze the heading */}
        <p className="font-script script-outline mx-auto -mt-[0.22em] w-fit text-[8vw] leading-none text-neutral-900">
          Aare Renu Shri
        </p>
      </div>

      {/* Subtle scroll cue */}
      <a
        href="#about"
        aria-label="Scroll down"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 p-1 text-neutral-400 transition-colors duration-200 hover:text-neutral-900"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" strokeWidth={1.5} />
      </a>
    </section>
  );
}
