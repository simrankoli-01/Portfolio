import { useEffect, useRef, useState } from "react";
import LocomotiveScroll from "locomotive-scroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { About, Contact, Cursor, Home, Intro, Loader, Navbar,  Skills,  Work,} from "./index";
gsap.registerPlugin(ScrollTrigger)

const App = () => {
  const containerRef = useRef(null)
  const scrollRef = useRef(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll({
      lenisOptions: {
        wrapper: window,
        content: document.documentElement,
        lerp: 0.1,
        duration: 1.2,
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      },
    });

    const pages = gsap.utils.toArray(".stack-page");
    pages.forEach((page, index) => {
      if (index === pages.length - 1) return;
      ScrollTrigger.create({
        trigger: page,
        start: "bottom bottom",
        end: "bottom top",
        pin: true,
        pinSpacing: false,
        invalidateOnRefresh: true,
      });
    });

    scrollRef.current = locomotiveScroll;
    return () => {
      locomotiveScroll.destroy();
      scrollRef.current = null;
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {loading && <Loader onComplete={() => setLoading(false)} />}
      <main
        className={`relative transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"
          }`}
        ref={containerRef} >
        <Cursor />
        <Navbar scrollRef={scrollRef} />
        <div className="w-full relative">
          <div className="stack-page relative z-1 w-full min-h-screen">
            <Home />
          </div>
          <div id="intro" className="stack-page relative z-2 w-full min-h-screen">
            <Intro />
          </div>
          <div id="about" className="stack-page relative z-3 w-full min-h-screen">
            <About />
          </div>
          <div id="work" className="stack-page relative z-4 w-full min-h-screen">
            <Work />
          </div>
          <div id="skills" className="stack-page relative z-5 w-full min-h-screen">
            <Skills />
          </div>
          <div id="contact" className="w-full min-h-screen">
            <Contact />
          </div>
        </div>
      </main>
    </>
  );
};

export default App;