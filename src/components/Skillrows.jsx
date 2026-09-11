import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { blogImg, desktop, portfolio, weatherImg } from "../index";

gsap.registerPlugin(ScrollTrigger);

const skills = [
    {
        id: "01",
        category: "Frontend",
        title: "Build Beautiful\nInterfaces",
        description:
            "I create responsive, accessible and performance-driven web applications.",
        technologies: ["React", "JavaScript", "HTML", "CSS", "Tailwind", "Vite"],
        image: weatherImg,
    },
    {
        id: "02",
        category: "Animation",
        title: "Bring Ideas\nTo Life",
        description:
            "I add motion, depth and interaction to make digital experiences feel alive.",
        technologies: ["GSAP", "ScrollTrigger", "Lenis", "Locomotive js"],
        image: portfolio,
    },
    {
        id: "03",
        category: "Backend",
        title: "Build The\nLogic",
        description:
            "I work with modern backend technologies to build functional web applications.",
        technologies: ["Node.js", "Express", "MongoDB", "Appwrite"],
        image: blogImg,
    },
    {
        id: "04",
        category: "Tools",
        title: "Power\nProductivity",
        description:
            "I use modern tools to build, iterate and ship faster.",
        technologies: ["Git", "GitHub", "Figma", "Postman"],
        image: desktop,
    },
];
const SkillRows = () => {
    const sectionRef = useRef(null);
    useGSAP(() => {
        const headingTl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 77%",
                end: "top 30%",
                scrub: 1,
            },
        });
        headingTl
            .from(".subheading", {
                y: 40,
                opacity: 0,
                ease: "power3.out",
            })
            .from(
                ".h2",
                {
                    y: 80,
                    opacity: 0,
                    ease: "power3.out",
                },
                "-=0.5"
            );
        const rows = gsap.utils.toArray(".skill-row");
        rows.forEach((row) => {
            const image = row.querySelector(".skill-image");
            const content = row.querySelector(".skill-content");
            const number = row.querySelector(".skill-number");
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: row,
                    start: "top 85%",
                    end: "top 45%",
                    scrub: 1,
                },
            });
            tl.fromTo(row, {
                opacity: 0,
                y: 80,
            }, {
                opacity: 1,
                y: 0,
                ease: "none",
            }
            );
            tl.fromTo(
                number,
                {
                    scale: 0,
                    opacity: 0,
                },
                {
                    scale: 1,
                    opacity: 1,
                    ease: "back.out",
                },
                0
            );
            tl.fromTo(content, { x: -40, opacity: 0, },
                {
                    x: 0,
                    opacity: 1,
                    ease: "none",
                },
                0
            );
            tl.fromTo(
                image,
                {
                    clipPath: "inset(100% 0% 0% 0%)",
                    scale: 1.15,
                },
                {
                    clipPath: "inset(0% 0% 0% 0%)",
                    scale: 1,
                    ease: "none",
                },
                0
            );
        });
    },
        { scope: sectionRef }
    );

    return (
        <section
            ref={sectionRef}
            className="relative bg-black text-white px-5 md:px-12 lg:px-20 py-24 overflow-hidden">
            <div className="absolute inset-0" />
            <div className="relative mb-16 md:mb-24">
                <p className="subheading font-[comet] inline overflow-hidden text-xs tracking-[0.35em] uppercase text-white/40">
                    <span>Expertise</span>
                </p>
                <h2 className="h2 overflow-hidden leading-none mt-3 font-[stars] text-4xl md:text-6xl lg:text-7xl font-light">
                    <span>What I Build</span>
                </h2>
            </div>
            <div className="relative">
                <div className="absolute pointer-events-none left-3.25 md:left-2.25 top-0 bottom-0 w-px bg-white/20" />
                <div className="flex flex-col gap-5 pl-3">
                    {skills.map((skill) => (
                        <article
                            key={skill.id}
                            className="skill-row relative min-h-105 md:min-h-70 lg:min-h-80 flex flex-col lg:flex-row gap-8 lg:gap-10 pl-12 md:pl-20 p-5 md:p-7 rounded-2xl border  border-white/10  bg-white/10 backdrop-blur-3xl overflow-hidden">
                            <div
                                className="skill-number absolute left-0 top-8 w-7 h-7 md:w-12 md:h-12 rounded-full border border-white/30 bg-black flex items-center justify-center font-[galaxy] text-xs md:text-sm z-10">
                                {skill.id}
                            </div>
                            <div className="skill-content w-full lg:w-[48%] flex flex-col justify-center">
                                <span className="font-[comet] text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/40">
                                    {skill.category}
                                </span>
                                <h3 className="whitespace-pre-line mt-3 font-[stars] text-3xl md:text-4xl lg:text-5xl font-light leading-[0.95]">
                                    {skill.title}
                                </h3>
                                <p className="mt-6 max-w-md text-sm md:text-base font-[stars] font-extralight leading-relaxed text-white/50">
                                    {skill.description}
                                </p>
                            </div>
                            <div className="hidden md:flex lg:w-[20%] items-center">
                                <div className="border-l border-white/10 pl-7">
                                    <div className="flex flex-col gap-3">
                                        {skill.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="font-[galaxy] text-[10px] uppercase tracking-[0.15em] text-white/50 transition-colors duration-300 hover:text-white" >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="skill-image relative w-full lg:flex-1 h-55 lg:h-auto rounded-xl overflow-hidden">
                                <img
                                    src={skill.image}
                                    alt={skill.category}
                                    className="cursor-image absolute inset-0 w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
                                <span
                                    className="absolute top-4 right-4 px-3 py-1 rounded-full border border-white/20 bg-black/30 backdrop-blur-md font-[galaxy] text-[9px] uppercase tracking-widest" >
                                    {skill.category}
                                </span>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <div className="mt-16 flex items-center gap-5">
                <div className="h-px w-16 bg-white/30" />
                <p className="font-[comet] text-[10px] uppercase tracking-[0.3em] text-white/30">
                    Better tools / Better ideas / Better experiences
                </p>
            </div>
        </section>
    );
};
export default SkillRows;