import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Loader = ({ onComplete }) => {
  const counterRef = useRef(null);

  useGSAP(() => {
    const counter = { value: 0 };

    const tl = gsap.timeline({
      onComplete,
    });

    tl.to(counter, {
      value: 100,
      duration: 2,
      ease: "power2.inOut",

      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = `${Math.round(counter.value)}%`;
        }
      },
    })
      .to(".loader-text", {
        opacity: 1,
        duration: 0.4,
      })
      .to(".loader-text", {
        opacity: 0,
        duration: 1,
        delay: 0.3,
      })
      .to(".loader", {
        yPercent: -100,
        duration: 1,
        ease: "power4.inOut",
      });
  });

  return (
    <div className="loader fixed inset-0 z-99999 flex flex-col items-center justify-center bg-[#020617] text-white">

      {/* Counter */}
      <span
        ref={counterRef}
        className="font-[comet] text-5xl tracking-tight sm:text-6xl md:text-7xl"
      >
        0%
      </span>

      {/* Loading */}
      <span className="mt-3 font-[space] md:text-6xl sm:text-5xl uppercase tracking-[0.35em] text-white/70">
        Loading
      </span>

      {/* Name */}
      <span className="loader-text text-center mt-4 font-[space] md:text-6xl sm:text-4xl uppercase tracking-[0.2em] text-white opacity-0">
        Welcome to my space
      </span>

    </div>
  );
};

export default Loader;