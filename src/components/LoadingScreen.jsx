import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const fullText = "<Welcome />";

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);

        setTimeout(() => {
          onComplete();
        }, 600);
      }
    }, 80);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-[#0f0f16] flex flex-col items-center justify-center text-[#c0caf5]">

      {/* Typing Text */}
      <div className="text-4xl font-mono font-bold tracking-wide flex items-center">
        {text}
        <span className="ml-1 h-8 w-[2px] bg-[#7aa2f7] animate-pulse"></span>
      </div>

      {/* Loader Bar */}
      <div className="mt-6 w-56 h-[3px] bg-[#1a1b26] rounded overflow-hidden">
        <div className="h-full bg-[#7aa2f7] animate-loadingPulse"></div>
      </div>
    </div>
  );
};

