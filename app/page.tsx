import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { GithubActivity } from "@/components/sections/GithubActivity";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="min-h-screen text-[var(--foreground)]">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col border-x theme-rail pt-0 pb-10 sm:w-[calc(100%-120px)]">
        <Hero />
        <About />
        <GithubActivity />
        <Contact />
      </div>
    </div>
  );
}
