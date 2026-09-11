import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

const Intro = () => {
    const containerRef = useRef(null)
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(() => {
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 60%',
                end: "bottom bottom",
                scrub: 1,
            }
        })

        tl.from('.heading', {
            yPercent: 100,
            opacity: 0,
        })
        tl.from(".heading-line", {
            opacity: 0,
            xPercent: -100,
        })
        tl.from(".span", {
            opacity: 0,
            yPercent: 100,
            stagger: 0.15
        })
    })
    return (
        <div id="intro-page" ref={containerRef} className="bg-black h-screen flex w-full flex-col items-center justify-center px-5 py-16 sm:px-8 md:px-12 lg:px-16">
            <div className="text-center overflow-hidden">
                <h1
                    className="heading text-[#F8EDEF] relative inline-block pb-3 font-[galaxy] text-4xl font-bold capitalize sm:text-5xl md:text-6xl lg:text-7xl" >
                    My Expertise
                    <span
                        className="heading-line absolute bottom-0 left-0 h-0.5 w-full bg-[#d76190]
              "/>
                </h1>
            </div>

            <div
                className="mt-5 overflow-hidden max-w-3xl text-center sm:mt-1 md:mt-12"
            >
                <p className="font-[stars] text-base font-light leading-relaxed tracking-wide text-white/65 sm:text-lg md:text-xl lg:text-2xl">

                    <span className="span block">
                        My journey started with curiosity about how the web works
                    </span>
                    <span className="span block">
                        and grew into a passion for creating digital experiences.
                    </span>
                    <span className="span block">
                        From learning{" "}
                        <span className="text-white/90">
                            HTML, CSS, and JavaScript
                        </span>{" "}
                        to working with
                    </span>

                    <span className="span block">
                        {" "}
                        <span className="text-white/90">
                            React, Tailwind, and GSAP
                        </span>
                        ,
                        I’ve grown by building, 
                    </span>

                    <span className="span block">
                       experimenting, and constantly learning. Today, I turn ideas into
                    </span>
                    <span className="span block">{" "}
                        <span className="text-[#d76190]">
                            interactive, responsive, and engaging experiences
                        </span></span>

                    <span className="span block">
                        — one line of code at a time.
                    </span>

                </p>
            </div>

            <div className="mt-10 flex items-center gap-3 opacity-70">
                <span className="h-px w-20 bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-[#d76190]" />
                <span className="h-px w-20 bg-white/30" />
            </div>

        </div>
    )
}

export default Intro