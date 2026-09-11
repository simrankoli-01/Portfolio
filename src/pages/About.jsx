import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { simranImg } from "../index"

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const articleRef = useRef(null);
  const quoteRef = useRef(null);

  const mouseMoveHandler = (e) => {
    if (!articleRef.current || !quoteRef.current) return;

    const article = articleRef.current;
    const quote = quoteRef.current;

    const rect = article.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    quote.style.setProperty("--x", `${x + 30}px`);
    quote.style.setProperty("--y", `${y + 30}px`);
  };
  const handleMouseEnter = () => {
    if (!quoteRef.current) return;

    quoteRef.current.style.opacity = "1";
    quoteRef.current.style.transform =
      "translate(var(--x), var(--y)) scale(1)";
  };
  const handleMouseLeave = () => {
    if (!quoteRef.current) return;
    quoteRef.current.style.opacity = "0";
  };
  useGSAP(
  () => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 86%",
          end: "bottom bottom",
          scrub: 1,
        },
      });

      tl.from(".about-h2", {
        opacity: 0,
        yPercent: 100,
      })
        .from(
          ".about-h1",
          {
            opacity: 0,
            yPercent: 100,
          },
          "-=0.2"
        )
        .from(".about-line", {
          opacity: 0,
          xPercent: -100,
        })
        .from(".description-line", {
          opacity: 0,
          yPercent: 100,
          stagger: 0.05,
        });
    });

    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          end: "top 35%",
          scrub: 0.3,
        },
      });

      tl.from(".about-h2", {
        opacity: 0,
        yPercent: 100,
      })
        .from(
          ".about-h1",
          {
            opacity: 0,
            yPercent: 100,
          },
          "-=0.2"
        )
        .from(".about-line", {
          opacity: 0,
          xPercent: -100,
        })
        .from(".description-line", {
          opacity: 0,
          yPercent: 100,
          stagger: 0.01,
          duration: 0.2,
        });
    });

    gsap.set(".quote-card", {
      opacity: 0,
    });

    return () => mm.revert();
  },
  { scope: containerRef }
);
  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-black px-5 py-20 text-white sm:py-24 md:px-12 md:py-28 lg:px-20 lg:py-30">
      <div className="flex flex-col items-start gap-14 lg:flex-row lg:justify-between lg:gap-10">
        <article
          ref={articleRef}
          onMouseEnter={handleMouseEnter}
          onMouseMove={mouseMoveHandler}
          onMouseLeave={handleMouseLeave}
          className="relative w-full lg:w-auto">
          <div className="mb-3 inline-block overflow-hidden">
            <h2
              className="about-h2 font-[comet] text-sm font-extralight uppercase leading-none tracking-widest sm:text-sm md:text-base">
              more than the brief
            </h2>
          </div>
          <div className="mb-8 overflow-hidden">
            <h1 className="about-h1 text-[#F5E8EC] relative inline-block pb-3 font-[stars] text-5xl font-bold capitalize leading-none tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              About me
              <span
                className="about-line absolute bottom-0 left-0 block h-0.5 w-full bg-pink-300" />
            </h1>
          </div>
          <div className="flex max-w-lg flex-col gap-6 font-[comet] text-base font-extralight leading-relaxed text-white/70 sm:text-lg">
            <p className="flex flex-col gap-1">
              <span className="block overflow-hidden">
                <span className="description-line block">
                  I’m Simran, a frontend developer who found my way into the
                  web
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="description-line block">
                  through curiosity — wondering how ideas become something
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="description-line block">
                  people can actually see, use, and experience.
                </span>
              </span>
            </p>
            <p className="flex flex-col gap-1">
              <span className="block overflow-hidden">
                <span className="description-line block">
                  I started with the fundamentals: HTML, CSS, and JavaScript.
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="description-line block">
                  Since then, I’ve been exploring React, Tailwind, GSAP, and
                  the
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="description-line block">
                  endless possibilities of interaction and motion. I learn by
                  building,
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="description-line block">
                  experimenting, breaking things, and rebuilding them better.
                </span>
              </span>
            </p>
            <p className="flex flex-col gap-1">
              <span className="block overflow-hidden">
                <span className="description-line block">
                  I’m drawn to the details that make a digital experience feel
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="description-line block">
                  different. The movement of an element. The way typography
                  sits
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="description-line block">
                  on a page. A transition that feels effortless. A layout that
                  works
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="description-line block">
                  just as beautifully on a phone as it does on a large screen.
                </span>
              </span>
            </p>
            <p className="flex flex-col gap-1">
              <span className="block overflow-hidden">
                <span className="description-line block">
                  I don’t want to simply write code that works. I want to
                  create
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="description-line block">
                  interfaces that feel thoughtful, responsive, and alive.
                </span>
              </span>
            </p>
            <p className="flex flex-col gap-1">
              <span className="block overflow-hidden">
                <span className="description-line block">
                  I’m still learning, still experimenting, and still building —
                  one
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="description-line block">
                  experience at a time.
                </span>
              </span>
            </p>
          </div>
        </article>
       <figure
  className="w-full max-w-70 sm:max-w-sm lg:w-90 lg:max-w-none lg:sticky lg:top-24 shrink-0 overflow-hidden rounded-lg self-center lg:self-start ">
  <img
    src={simranImg}
    alt="Simran Portrait" className="cursor-image block aspect-3/4 w-full object-cover grayscale-60 transition-all duration-500 hover:grayscale-0"/>
</figure>
      </div>
      <div
        ref={quoteRef}
        className="quote-card pointer-events-none absolute left-0 top-0 z-20 hidden w-50 rounded-2xl border  border-pink-400/20  bg-white/10 p-6 text-center backdrop-blur-md transition-opacity duration-300 md:block"
        style={{ transform: "translate(var(--x), var(--y))", }}
      >
        <p
          className="m-0 font-[space] text-xs font-extralight leading-5 tracking-widest text-pink-400/65 sm:text-sm lg:text-[1vw]">
          “ Built with curiosity.
        </p>
        <p
          className="m-0 mt-2 font-[space] text-xs font-extralight leading-5 tracking-widest text-pink-400/65 sm:text-sm lg:text-[1vw]">
          Shaped by creativity.
        </p>
        <p
          className="m-0 mt-2 font-[space] text-xs font-extralight leading-5 tracking-widest text-pink-400/65 sm:text-sm lg:text-[1vw]">
          Driven by Code. ”
        </p>
      </div>
    </section>
  );
};
export default About;