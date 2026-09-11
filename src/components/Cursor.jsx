import gsap from "gsap";
import { useEffect, useRef } from "react";

const Cursor = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const mouseHandler = (e) => {
      if(!cursorRef.current) return

      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: 'power3.out'
      })
    }
    window.addEventListener("mousemove", mouseHandler)

     const magneticTargets = document.querySelectorAll(".magnetic-button")
     magneticTargets.forEach((target) => {
       const onEnter = () => { 
        gsap.to(cursorRef.current, { scale: 0.5, duration: 0.3, ease: 'power2.out' })
      }
       
      const onMove = (e) => {
        const rect = target.getBoundingClientRect()
        const centerX = rect.left + rect.width / 2
        const centerY = rect.top + rect.height / 2

        const distanceofX = e.clientX - centerX
        const distanceofy = e.clientY - centerY
        gsap.to(target, { x: distanceofX * 0.35, y: distanceofy * 0.35, duration: 0.3, ease: 'power2.out'})
      }

      const onLeave = () => {
        gsap.to(cursorRef.current, { scale: 1, duration: 0.3, ease: "power2.out"})
        gsap.to(target, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)"})
      }
      target.addEventListener("mouseenter", onEnter)
      target.addEventListener("mousemove", onMove)
      target.addEventListener("mouseleave", onLeave)
    })

    const imageTargets = document.querySelectorAll(".cursor-image")
    imageTargets.forEach((image) => {
      const onEnter = () => {
        gsap.to(cursorRef.current, { scale: 2, duration: 0.3, ease: "power2.out" })
        gsap.to(".cursor-text", { opacity: 1, duration: 0.3, ease: "power2.out"})
      }
      const onLeave = () => { 
        gsap.to(cursorRef.current, {scale: 1, duration: 0.3, ease: "power2.out"})
        gsap.to(".cursor-text", { opacity: 0, duration: 0.5, ease: "power2.out"})
      }
      image.addEventListener("mouseenter", onEnter)
      image.addEventListener("mouseleave", onLeave)
    })
  },[])
  

  return (
    <div
      ref={cursorRef}
      className="
        hidden sm:flex
        pointer-events-none
        fixed left-0 top-0
        z-9999
        h-8 w-8
        -translate-x-1/2
        -translate-y-1/2
        items-center justify-center
        rounded-full
        bg-pink-300
        text-black
      "
    >
      <span
        className="
          cursor-text
          opacity-0
          font-[comet]
          text-[6.5px]
          font-medium
          uppercase
          tracking-wider
          whitespace-nowrap
        "
      >
        View
      </span>
    </div>
  );
};

export default Cursor;