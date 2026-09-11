import Herotext from "../components/Herotext";
import simranImage from "../assets/images/simran3.png";

const Home = () => {
  return (
    <header
      className=" w-full
           h-screen
        overflow-hidden
        cursor-none
      "
    >
      <img
        src={simranImage}
        alt="Simran Koli"
        className="pointer-events-none absolute bottom-0  z-1 w-full h-full object-cover
        "
      />
      <div
        className="
          absolute inset-0
          z-10
        "
      >
        <Herotext />
      </div>

      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          bottom-0
          z-20
          h-28
          bg-linear-to-t
          from-[#020406]/70
          to-transparent
          sm:h-32
          md:h-36
        "
      />
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-2
          bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.12)_100%)]
        "
      />
    </header>
  );
};

export default Home;