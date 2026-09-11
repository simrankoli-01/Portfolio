import { IoClose } from "react-icons/io5";

const Mobilemenu = ({ isOpen, onClose, scrollRef }) => {
  const links = [
    { number: "01.", label: "Home", id: "home" },
    { number: "02.", label: "About", id: "about" },
    { number: "03.", label: "Work", id: "work" },
    { number: "04.", label: "Skills", id: "skills" },
    { number: "05.", label: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    const target = document.getElementById(id);

    if (!target) return;

    scrollRef.current?.scrollTo(target);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 z-100 sm:hidden text-white transition-all duration-500
        ${
          isOpen
            ? "pointer-events-auto visible"
            : "pointer-events-none invisible"
        }`}
    >
      <div
        className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500
          ${isOpen ? "opacity-100" : "opacity-0"}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <aside
        className={`absolute left-0 top-0 h-full w-full border-r border-white/10 bg-black px-6 py-5 transition-transform duration-500 ease-[cubic-bezier(0.76,0,0.24,1)]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between">
          <span className="font-[stars] text-sm uppercase tracking-[0.2em] text-white/60">
            Navigation
          </span>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close navigation menu"
            className="rounded-full border border-white/10 bg-white/5 p-2.5 transition-all duration-300 hover:bg-white/10"
          >
            <IoClose className="text-2xl" />
          </button>
        </div>

        <nav
          aria-label="Mobile navigation"
          className="mt-20 flex flex-col"
        >
          {links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => scrollToSection(link.id)}
              className="group flex items-center border-b border-white/10 py-5 text-left font-[stars] text-3xl transition-all duration-300 hover:pl-3"
            >
              <span className="mr-3 font-[galaxy] text-xs text-white/30 transition-colors duration-300 group-hover:text-white/70">
                {link.number}
              </span>

              <span className="transition-colors duration-300 group-hover:text-white/60">
                {link.label}
              </span>
            </button>
          ))}
        </nav>

        <div className="absolute bottom-8 left-6 right-6 flex items-center justify-between">
          <span className="font-[comet] text-[9px] uppercase tracking-[0.3em] text-white/30">
            Simran Koli
          </span>

          <span className="font-[comet] text-[9px] uppercase tracking-[0.3em] text-white/30">
            India, DL
          </span>
        </div>
      </aside>
    </div>
  );
};

export default Mobilemenu;