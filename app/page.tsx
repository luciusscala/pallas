import { Playfair_Display } from "next/font/google";

const playfair = Playfair_Display({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className={`${playfair.className} relative flex flex-col items-center justify-center min-h-screen bg-[#2a0000] text-white p-8`}>
      {/* Centered Form (Scaled Down by 30%) */}
      <div className="absolute flex items-center gap-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 scale-75">
        <input
          className="w-44 h-8 bg-red-700 border-none rounded-full focus:outline-none"
          type="text"
        />
        <button className="w-9 h-9 bg-red-700 rounded-full"></button>
      </div>

      {/* Large Centered PALLAS Text */}
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-7xl sm:text-9xl font-bold text-red-700 tracking-wide">
        PALLAS
      </h1>

      {/* Scattered Small Letters */}
      <div className="absolute w-full h-full">
        <span className="absolute text-xl left-[10%] top-[40%]">W</span>
        <span className="absolute text-xl left-[18%] top-[55%]">H</span>
        <span className="absolute text-xl left-[48%] top-[25%]">A</span>
        <span className="absolute text-xl left-[58%] top-[35%]">T</span>
        <span className="absolute text-xl left-[65%] top-[70%]">I</span>
        <span className="absolute text-xl right-[10%] bottom-[30%]">S</span>
      </div>

      {/* Footer Links */}
      <footer className="absolute bottom-6 flex gap-6">
        <a className="hover:underline" href="#" target="_blank" rel="noopener noreferrer">
          Learn
        </a>
        <a className="hover:underline" href="#" target="_blank" rel="noopener noreferrer">
          Examples
        </a>
        <a className="hover:underline" href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
