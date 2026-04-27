import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen text-neutral-300">
      {/* Architectural container — max-width + vertical border rails */}
      <div className="max-w-4xl mx-auto border-x border-neutral-900 min-h-screen flex flex-col pt-20 pb-6">
        <Hero />
        <About />
        <GithubActivity />
        <Contact />
      </div>
    </div>
  );
}
