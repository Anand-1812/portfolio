"use client";

export const ThemeChrome = () => {
  return (
    <>
      <div
        aria-hidden
        className="theme-rail theme-rail-pattern pointer-events-none fixed inset-y-0 left-0 hidden w-[60px] border-r md:block"
      />
      <div
        aria-hidden
        className="theme-rail theme-rail-pattern pointer-events-none fixed inset-y-0 right-0 hidden w-[60px] border-l md:block"
      />
    </>
  );
};
