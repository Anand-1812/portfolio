import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { Contact } from "@/components/sections/Contact";

/**
 * Home Page: The primary container for the portfolio.
 * The 'relative' class allows the ThemeChrome to pin to the container edges.
 */
export default function Home() {
  return (
    <div className="min-h-screen text-[var(--foreground)]">
      {/* - 'relative' allows absolute positioning of ThemeChrome inside.
        - 'border-x' creates the solid outer vertical lines.
        - 'px-6 sm:px-16' provides room for the patterned strips + spacing.
      */}
      <div className="relative mx-auto flex min-h-screen max-w-4xl flex-col border-x theme-rail pt-0 pb-10 px-6 sm:px-16 sm:w-[calc(100%-120px)]">
        <Hero />
        <About />
        <GithubActivity />
        <Contact />
      </div>
    </div>
  );
}