import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
import { FaBootstrap, FaGithub, FaHtml5, FaNodeJs, FaReact,} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiGsap, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import Skillrows from "../components/Skillrows";
import circleVideo from "../assets/videos/circle.mp4";

const Skills = () => {
  const sectionRef = useRef(null);
  const circleRef = useRef(null);
  const orbitRef = useRef(null);

  useGSAP(() => {
      gsap.to(circleRef.current, {
        rotation: 360,
        duration: 40,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
      gsap.to(orbitRef.current, {
        rotation: -360,
        duration: 60,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
      gsap.to(".skill-item", {
        y: -10,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
      gsap.to(".skills-center", {
        scale: 1.04,
        opacity: 0.9,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    },
    { scope: sectionRef }
  );

  return (
    <section className="min-h-screen w-full bg-black py-10 sm:py-16 md:py-20">
      <div
        ref={sectionRef}
        className="relative min-h-[80vh] sm:min-h-screen w-full overflow-hidden bg-black text-white">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,60,180,0.18),rgba(0,0,0,1)_65%)]"/>
        <div
          ref={circleRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[75vw] h-[75vw] max-w-175 max-h-175 rounded-full blur-3xl opacity-40 bg-[radial-gradient(circle,rgba(150,80,255,0.5),rgba(50,20,100,0.15)_45%,transparent_70%)]"/>
        <video
          src={circleVideo} autoPlay  muted loop playsInline
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[68vw] h-[68vw] max-w-162.5 max-h-162.5 object-cover rounded-full opacity-60 mix-blend-screen pointer-events-none"/>
        <svg
          ref={orbitRef}
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[82vw] h-[82vw] max-w-180 max-h-180 pointer-events-none opacity-65"
          viewBox="0 0 720 720">
          <ellipse cx="360"
            cy="360"
            rx="330"
            ry="180"
            fill="none"
            stroke="white"
            strokeOpacity="0.15"
            strokeWidth="1"
          />
          <ellipse
            cx="360"
            cy="360"
            rx="270"
            ry="130"
            fill="none"
            stroke="white"
            strokeOpacity="0.18"
            strokeWidth="1"
          />
          <ellipse
            cx="360"
            cy="360"
            rx="190"
            ry="90"
            fill="none"
            stroke="white"
            strokeOpacity="0.12"
            strokeWidth="1"
          />
          <circle cx="60" cy="360" r="2" fill="white" />
          <circle cx="660" cy="360" r="2" fill="white" />
          <circle cx="360" cy="35" r="2" fill="white" />
          <circle cx="360" cy="685" r="2" fill="white" />
          <circle cx="120" cy="150" r="1.5" fill="white" />
          <circle cx="600" cy="170" r="1.5" fill="white" />
        </svg>
        <div
          className="skills-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 text-center w-full px-4">
          <span
            className="block mb-1 sm:mb-2 font-[comet] text-[9px] sm:text-xs uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/50">
            Tools &
          </span>
          <h1
            className="font-[galaxy] text-2xl sm:text-3xl md:text-4xl font-light uppercase tracking-widest sm:tracking-[0.15em]">
            Technologies
          </h1>
          <span
            className="block mt-1 sm:mt-2 font-[comet] text-[6px] sm:text-[7px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/50">
            I work with
          </span>
          <div className="mx-auto mt-3 sm:mt-5 h-px w-10 sm:w-16 bg-white/30" />
        </div>
        <div className="absolute inset-0 z-30 pointer-events-none">
          <div
            className="skill-item magnetic-button absolute left-[8%] sm:left-[15%] md:left-[20%] top-[24%] sm:top-[20%] p-1.5 sm:p-2 text-2xl sm:text-4xl md:text-5xl rounded-full bg-white/5 border text-[#58C4DC] border-[#58C4DC] pointer-events-auto" >
            <FaReact />
          </div>
          <div
            className="skill-item magnetic-button absolute right-[35%] top-[6%] sm:top-[2%] p-1.5 sm:p-2 text-2xl sm:text-4xl md:text-5xl rounded-full bg-white/5 border text-[#DD4B25] border-[#DD4B25] pointer-events-auto">
            <FaHtml5 />
          </div>
          <div
            className="skill-item magnetic-button absolute right-[7%] sm:right-[15%] md:right-[19%] top-[29%] p-1.5 sm:p-2 text-2xl sm:text-4xl md:text-5xl rounded-full bg-white/5 border text-[#F6F65B] border-[#F6F65B] pointer-events-auto">
            <IoLogoJavascript />
          </div>
          <div
            className="skill-item magnetic-button absolute left-[8%] sm:left-[15%] md:left-[20%] bottom-[35%] sm:bottom-[40%] p-1.5 sm:p-2 text-2xl sm:text-4xl md:text-5xl rounded-full bg-white/5 border text-[#24E851] border-[#24E851] pointer-events-auto">
            <SiGsap />
          </div>
          <div
            className="skill-item magnetic-button absolute right-[7%] sm:right-[15%] md:right-[19%] bottom-[24%] sm:bottom-[27%] p-1.5 sm:p-2 text-2xl sm:text-4xl md:text-5xl rounded-full bg-white/5 border text-[#00BCFF] border-[#00BCFF] pointer-events-auto">
            <RiTailwindCssFill />
          </div>
          <div
            className="skill-item magnetic-button absolute left-[30%] sm:left-[35%] top-[5%] p-1.5 sm:p-2 text-2xl sm:text-4xl md:text-5xl rounded-full bg-white/5 border text-[#59A946] border-[#59A946] pointer-events-auto">
            <FaNodeJs />
          </div>
          <div
            className="skill-item magnetic-button absolute right-[30%] sm:right-[35%] bottom-[4%] sm:bottom-[1%] p-1.5 sm:p-2 text-2xl sm:text-4xl md:text-5xl rounded-full bg-white/5 border text-[#00684A] border-[#00684A] pointer-events-auto">
            <SiMongodb />
          </div>
          <div
            className="skill-item magnetic-button absolute left-[38%] sm:left-[40%] bottom-[4%] sm:bottom-[1%] p-1.5 sm:p-2 text-2xl sm:text-4xl md:text-5xl rounded-full bg-white/5 border text-[#7952B3] border-[#7952B3]
              pointer-events-auto">
            <FaBootstrap />
          </div>
          <div
            className="skill-item magnetic-button absolute left-[17%] sm:left-[25%] bottom-[11%] sm:bottom-[9%] p-1.5 sm:p-2 text-2xl sm:text-4xl md:text-5xl rounded-full bg-white/5 border text-white border-white/50 pointer-events-auto">
            <FaGithub />
          </div>
        </div>
        <div
          className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle,transparent_35%,rgba(0,0,0,0.8)_100%)] z-40"/>
      </div>
      <Skillrows />
    </section>
  );
};
export default Skills;