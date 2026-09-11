import { MdMail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import Mobilemenu from "./Mobilemenu";
import profile from "../assets/images/simran5.png";

const Navbar = ({ scrollRef }) => {
    const [isMenuOpen, setIsmenuOpen] = useState(false)
    const scrollToSection = (id) => {
        const target = document.getElementById(id);

        if (!target) return;

        scrollRef.current?.scrollTo(target);
    };

    return (
        <>
            <header className="fixed inset-x-0 top-0 z-90 px-3 py-4">
                <div className="mx-auto flex w-full max-w-4xl items-center justify-between gap-3">
                    <div className="flex items-center text-white gap-2 rounded-full border border-white/10 bg-white/10 md:px-3 px-2 md:py-2 py-1 backdrop-blur-md">
                        <div className="magnetic-button hidden items-center gap-2 sm:flex">
                            <SlLocationPin
                                aria-hidden="true"
                                className="text-sm"
                            />
                            <span className="font-[stars] text-sm uppercase">
                                India, DL
                            </span>
                        </div>
                        <button
                            type="button"
                            aria-label="Open navigation menu"
                            className="block sm:hidden"
                            onClick={() => setIsmenuOpen(true)}
                        >
                            <IoMenu
                                aria-hidden="true"
                                className="text-2xl text-white"
                            />
                        </button>
                    </div>
                    <div className="flex justify-center">
                        <nav
                            aria-label="Main navigation"
                            className="flex items-center justify-between gap-3 rounded-full px-2 py-1.5 shadow-black/10 md:border md:border-white/30 md:bg-white/30 md:backdrop-blur-xl md:shadow-lg">
                            <a
                                href="#"
                                aria-label="Go to home page" >
                                <img
                                    src={profile}
                                    alt="Simran Koli"
                                    className="image hidden h-12 w-12 rounded-full object-cover sm:block"
                                />
                            </a>
                            <div className="flex items-center gap-3 ">
                                <div className="hidden items-center gap-3 sm:flex">
                                    <a
                                        onClick={() => scrollToSection("about")}
                                        className="magnetic-button rounded-2xl px-2 py-0.5 font-[stars] text-sm transition-all duration-200 hover:ring hover:ring-white text-white sm:text-base"
                                    >
                                        About
                                    </a>
                                    <a
                                        onClick={() => scrollToSection("work")}
                                        className="magnetic-button rounded-2xl px-2 py-0.5 font-[stars] text-sm transition-all duration-200 hover:ring hover:ring-white text-white sm:text-base"
                                    >
                                        Work
                                    </a>
                                    <a
                                        onClick={() => scrollToSection("skills")}
                                        className="magnetic-button rounded-2xl px-2 py-0.5 font-[stars] text-sm transition-all duration-200 hover:ring hover:ring-white text-white sm:text-base"
                                    >
                                        Skills
                                    </a>
                                </div>
                                {/* Hire Me */}
                                <a
                                    onClick={() => scrollToSection("contact")}
                                    className="magnetic-button inline-flex items-center gap-2 rounded-full bg-black px-3 py-1.5 font-[stars] text-white transition-all duration-200 hover:bg-white hover:text-black"
                                >
                                    <MdMail
                                        aria-hidden="true"
                                        className="text-lg"
                                    />
                                    <span className="text-sm sm:text-base">
                                        Hire me
                                    </span>
                                </a>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
            <Mobilemenu
            scrollRef={scrollRef}
                isOpen={isMenuOpen}
                onClose={() => setIsmenuOpen(false)}
            />
        </>
    );
}
export default Navbar;