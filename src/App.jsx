import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

import "./index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

      <div
        className={`
          min-h-screen
          transition-all duration-700
          ${isLoaded ? "opacity-100" : "opacity-0"}
          text-gray-100
          bg-black
          bg-gradient-to-b from-black via-[#111111] to-black
        `}
      >
        {/* Navbar */}
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Mobile Menu */}
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        {/* Sections */}
        <main className="flex flex-col gap-40">
          <Home />
          <About />
          <Projects />
          <Contact />
        </main>
      </div>
    </>
  );
}

export default App;
