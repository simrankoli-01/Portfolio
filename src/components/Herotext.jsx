import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useState } from "react";

const Herotext = () => {
  const [time, setTime] = useState("");
  const name = `Simran Koli`

  const scrollTonext = () => {
    document.getElementById("intro-page")?.scrollIntoView({ behavior: "smooth" })
  }

  useGSAP(() => {
    const tl = gsap.timeline()
    gsap.to(".scroll-arrow", {
      y: 5,
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    tl.from(".hire", { y: 50, opacity: 0 })
    tl.from(".name-char", { y: 50, opacity: 0, stagger: 0.15 })
    tl.from(".frontend", { opacity: 0, y: 50 })
    tl.from(".developer", { opacity: 0, y: 50 })
    tl.from(".para-line", { opacity: 0, y: 50, stagger: 0.15 })
  })
  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <main className="w-full text-white">
      <div
        className="mx-auto flex min-h-screen w-full max-w-350 flex-col items-start px-5 pt-50 sm:px-8 md:px-12 md:pt-30 lg:px-20 lg:pt-25 xl:px-24">
        <div className="hire px-1 flex items-center gap-2 sm:gap-3">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#E8E2D8]" />
          </span>
          <span
            className="font-[space] text-[8px] uppercase tracking-[0.22em] text-[#D6D2CA] sm:text-[9px] sm:tracking-[0.28em] md:text-[10px]  md:tracking-[0.32em]
  "
          >
            Available for opportunities
          </span>
        </div>
        <h1
          className="mt-5 max-w-full font-[comet] text-[clamp(3.4rem,12vw,9.5rem)] font-bold leading-[0.8] tracking-[-0.055em] sm:mt-6 md:text-[clamp(5rem,10vw,9.5rem)]
          "> {name.split("").map((char, index) => (
            <span
              key={index}
              className="name-char inline-block text-pink-300">
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
          <span className="text-[#e4dfd8]">.</span>
        </h1>
        
        <div
          className="mt-10 w-full max-w-85 sm:mt-12 sm:max-w-95 md:mt-14 md:max-w-105">
          <div
            className="h2 font-[galaxy] text-[clamp(1.8rem,6vw,3.2rem)] leading-[0.9] tracking-tighter md:text-[clamp(2.2rem,3vw,3.2rem)]
            ">
            <span className="frontend block text-pink-200">
              Frontend
            </span>
            <span className="developer block text-[#bab7b0]">
              Developer
            </span>
          </div>
          <p className="mt-3 max-w-75 overflow-hidden font-[stars] text-[11px] md:leading-normal sm:leading-[1.85] text-[#c0bdb4] sm:max-w-85 sm:text-xs md:max-w-92.5 md:text-[15px]">
            <span className="para-line block">I build modern, interactive and responsive digital</span>
            <span className="para-line block">experiences with React, GSAP and thoughtful</span>
            <span className="para-line block">frontend design</span>
          </p>

          <div className="mt-4 gap-4 sm:mt-5">
            <a
              href="/simran.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="magnetic-button cursor-button rounded-full border px-5 py-2 font-[space] text-[9px] uppercase tracking-[0.22em] transition-all duration-300 hover:bg-white hover:text-black"
            >
              View CV
            </a>
          </div>
        </div>
        <div
          className="mt-auto flex w-full items-end justify-between gap-4 pb-5 pt-8 sm:pb-6">
          <span className="font-[space] text-[9px] tracking-[0.15em]  text-white sm:text-xs sm:tracking- [0.2em] ">
            {time}
          </span>
          <div onClick={scrollTonext} className="flex py-1 items-center gap-1 sm:gap-1 text-white">
            <span
              className="hidden font-[space] text-[8px] uppercase tracking-[0.2em] sm:block sm:text-[9px] sm:tracking-[0.25em] md:text-[10px] md:tracking-[0.3em]">
              Scroll to explore
            </span>
            <span className="scroll-arrow text-lg">
              ↓
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Herotext;