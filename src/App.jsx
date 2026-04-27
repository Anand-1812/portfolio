import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Home } from "./components/sections/Home";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const stripeStyle = {
    backgroundImage:
      "repeating-linear-gradient(-45deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 8px)",
  };

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`
          min-h-screen
          transition-all duration-700
          ${isLoaded ? "opacity-100" : "opacity-0"}
          text-gray-100
          bg-[#1b1b1f]
        `}
      >
        <main className="relative mx-auto max-w-[860px] px-4 pb-24 pt-4 sm:px-6 sm:pt-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-[3.2rem] hidden w-[2.8rem] opacity-50 lg:block"
            style={stripeStyle}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -right-[3.2rem] hidden w-[2.8rem] opacity-50 lg:block"
            style={stripeStyle}
          />

          <div className="overflow-hidden rounded-[8px] border border-white/8 bg-[#1d1d21] shadow-[0_40px_120px_-60px_rgba(0,0,0,0.85)]">
          <Home />
          <Projects />
          <Contact />
          </div>
        </main>
      </div>
    </>
  );
}

export default App;
