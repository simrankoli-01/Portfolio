import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineMail, MdOutlinePerson } from "react-icons/md";
const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT;

const Contact = () => {
  const sectionRef = useRef(null);

  const [status, setStatus] = useState("idle")
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        end: "top top",
        scrub: 1,
      },
    });
    tl.from(".contact-left", {
      x: -80,
      opacity: 0,
      ease: "power3.out",
    })
      .from(
        ".contact-form",
        {
          x: 80,
          opacity: 0,
          ease: "power3.out",
        },
        "<"
      )
      .from(
        ".contact-footer",
        {
          y: 30,
          opacity: 0,
          ease: "power3.out",
        },
        "-=0.2"
      );
  },
    { scope: sectionRef }
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    const data = new FormData(form);
    try {
      const response = await fetch(
        FORMSPREE_ENDPOINT,
        {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        }
      );

      if (response.ok) {
        setStatus("success");
        form.reset();

        setTimeout(() => {
          setStatus("idle");
        }, 4000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="min-h-screen w-full overflow-hidden border-t border-white/20 bg-black px-5 pt-20 pb-1.5 text-white md:px-12 lg:px-20">
      <div className="mt-10 flex flex-col justify-between gap-20 lg:flex-row lg:gap-10">
        <div className="contact-left w-full lg:w-1/2">
          <p className="font-[stars] text-xs uppercase tracking-[0.25em] text-white/40 md:text-sm">
            Have a project in mind?
          </p>
          <h1 className="mt-6 font-[comet] uppercase leading-[0.85] tracking-wide">
            <span className="block text-5xl text-white/90 md:text-7xl">
              Let's
            </span>
            <span className="block text-5xl text-white/90 md:text-7xl">
              Create
            </span>
            <span className="block text-5xl text-white/90 md:text-7xl">
              Something.
            </span>
          </h1>
          <p className="mt-8 font-[stars] text-sm font-extralight leading-relaxed text-white/45 md:text-base">
            I'm currently available for
            <br />
            opportunities and freelance
            <br />
            projects.
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="contact-form flex w-full flex-col gap-8 lg:w-[45%]"
        >
          <div className="group flex items-center gap-3 border-b border-white/30 pb-3 transition-colors duration-300 focus-within:border-white">
            <MdOutlinePerson className="text-xl text-white/40 transition-colors group-focus-within:text-white" />
            <input
              type="text"
              name="name"
              placeholder="YOUR NAME"
              required
              className="w-full bg-transparent font-[comet] text-sm font-extralight tracking-wide outline-none placeholder:text-white/35"
            />
          </div>
          <div className="group flex items-center gap-3 border-b border-white/30 pb-3 transition-colors duration-300 focus-within:border-white">
            <MdOutlineMail className="text-xl text-white/40 transition-colors group-focus-within:text-white" />
            <input
              type="email"
              name="email"
              placeholder="YOUR EMAIL"
              required
              className="w-full bg-transparent font-[comet] text-sm font-extralight tracking-wide outline-none placeholder:text-white/35"
            />
          </div>

          <div className="group flex items-start gap-3 rounded-2xl border border-white/20 p-4 transition-colors duration-300 focus-within:border-white/50">
            <MdOutlineMail className="mt-1 text-xl text-white/40" />

            <textarea
              name="message"
              rows="5"
              placeholder="TELL ME ABOUT YOUR PROJECT"
              required
              className="w-full resize-none bg-transparent font-[comet] text-sm font-extralight tracking-wide outline-none placeholder:text-white/35"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="self-start rounded-full border border-white/40 bg-white/5 px-7 py-3 font-[galaxy] text-sm uppercase tracking-wider backdrop-blur-xl transition-all duration-300 hover:bg-white hover:text-black disabled:cursor-not-allowed disabled:opacity-50"
          >
            {status === "sending"
              ? "Sending..."
              : status === "success"
                ? "Message Sent ✔"
                : "Send Message ↗"}
          </button>

          {status === "success" && (
            <p className="font-[stars] text-xs uppercase tracking-wider text-white/50">
              Thanks! I'll get back to you soon.
            </p>
          )}
          {status === "error" && (
            <p className="font-[stars] text-xs uppercase tracking-wider text-red-400">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      </div>
      <address className="contact-footer mt-20 flex flex-col items-start justify-between gap-6 border-t border-white/10 pt-6 not-italic md:flex-row md:items-center">
        <a
          href="simmi27167461@gmail.com"
          className="group flex items-center gap-3 text-white/50 transition-colors duration-300 hover:text-white"
        >
          <MdOutlineMail className="text-2xl" />

          <span className="font-[stars] text-sm font-extralight">
            Email ↗
          </span>
        </a>

        <a
          href="https://github.com/simrankoli-01"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 text-white/50 transition-colors duration-300 hover:text-white"
        >
          <FaGithub className="text-2xl" />

          <span className="font-[stars] text-sm font-extralight uppercase">
            Github ↗
          </span>
        </a>

        <a
          href="https://www.linkedin.com/in/simrankoli"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-3 text-white/50 transition-colors duration-300 hover:text-white"
        >
          <FaLinkedinIn className="text-2xl" />

          <span className="font-[stars] text-sm font-extralight uppercase">
            LinkedIn ↗
          </span>
        </a>
      </address>
    </section>
  );
};

export default Contact;