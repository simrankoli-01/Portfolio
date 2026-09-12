import { useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'
import { FaGithub } from 'react-icons/fa'
import weatherImg from '../assets/images/forecast.webp'
import blogImg from '../assets/images/blog.webp'
import currencyImg from '../assets/images/currency.webp'
gsap.registerPlugin(ScrollTrigger)

const Work = () => {
  const [hoveredId, setHoveredId] = useState(null)
  const containerRef = useRef(null)
  const projects = [
    {
      id: 1,
      title: 'Weatherly',
      description: 'Real-time weather, made simple.',
      image: weatherImg,
      url: 'https://weatherlywithus.netlify.ap',
      github_url: 'https://github.com/simrankoli-01/Weather'
    },
    {
      id: 2,
      title: 'Inkspace',
      description: 'A modern blogging experience.',
      image: blogImg,
      url: 'https://graceful-blogs.netlify.app/',
      github_url: 'https://github.com/simrankoli-01/Blogs-app-'
    },
    {
      id: 3,
      title: 'Convert',
      description: 'Simple currency conversion.',
      image: currencyImg,
      url: 'https://exchangecurrencywith.netlify.app/',
      github_url: 'https://github.com/simrankoli-01/weather-app'
    }
  ]
  useGSAP(() => {
    const headingTl = gsap.timeline({
      scrollTrigger: {
        trigger: '.box',
        start: 'top 70%',
        end: 'top 40%',
        scrub: 1,
      }
    })

    headingTl
      .from('.h2', {
        y: 100,
        opacity: 0,
        ease: 'power3.out',
      })
      .from('.featured-box', {
        y: 100,
        opacity: 0,
        ease: 'power3.out',
      })

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.project-row',
        start: 'top 75%',
        end: 'top -150%',
        scrub: true,
      },
    })

    tl.from(
      '.project-item',
      {
        height: '120px',
        stagger: 0.2,
      },
      0
    )

    tl.from(
      '.content-box',
      {
        scale: 0.1,
        opacity: 0,
        stagger: 0.2,
      },
      0
    )
  }, { scope: containerRef })
  return (
    <section
      ref={containerRef}
      className="bg-black text-white min-h-[300vh] px-5 sm:px-8 md:px-12 lg:px-20 pt-24 sm:pt-28 md:pt-30 pb-10">
      <header className="box overflow-hidden">
        <div className="overflow-hidden">
          <h2
            className="h2 text-xs sm:text-sm font-[comet] leading-none font-extralight uppercase tracking-widest">
            From Concept to Interface
          </h2>
        </div>
        <div className="featured-box overflow-hidden mt-3 sm:mt-4">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight capitalize font-[stars] leading-[0.9]">
            Featured Work
          </h1>
        </div>
      </header>
      <figure className="mt-12 sm:mt-16 md:mt-20">
        <div className="project-row flex flex-col gap-16 sm:gap-20 md:gap-10 w-full">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-item w-full min-h-100 sm:min-h-162.5 md:h-[50vh] md:min-h-0 flex flex-col md:flex-row gap-2 md:gap-5">
              <div
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="card cursor-image relative w-full md:w-2/3 h-[45vh] sm:h-[50vh] md:h-full overflow-hidden rounded-xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`w-full h-full object-cover transition-all duration-300 ${ hoveredId === project.id ? 'blur-xs scale-[1.02]' : 'blur-0 scale-100'}`}/>
                {hoveredId === project.id && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center bg-black/20">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                      className="backdrop-blur-lg font-[space] font-extralight tracking-widest hover:bg-white hover:text-black transition-colors duration-200 border border-white/50 py-2 px-8 sm:px-10 rounded-2xl text-base sm:text-l">
                      View ↗
                    </a>
                  </div>
                )}
              </div>
              <div
                className="content-box overflow-hidden flex-1 flex flex-col md:justify-start justify-between">
                <div>
                  <span
                    className="font-[galaxy] font-bold text-2xl sm:text-3xl text-pink-200">
                    {'0' + project.id + '.'}
                  </span>
                  <h1
                    className="text-2xl sm:text-3xl font-[stars] font-light capitalize mt-1">
                    {project.title}
                  </h1>
                  <p
                    className="font-extralight font-[stars] text-sm sm:text-base text-white/75 mt-1">
                    {project.description}
                  </p>
                </div>
                <div
                  className="flex flex-wrap gap-3 mt-8 md:mt-20">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="magnetic-button border border-white/55 hover:bg-white hover:text-black duration-200 transition-colors py-1.5 px-4 rounded-2xl bg-white/10 backdrop-blur-xl font-[galaxy] text-sm sm:text-base text-white/90">
                    View ↗
                  </a>
                  <a
                    href={project.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="magnetic-button border border-white/55 py-1.5 px-4 hover:bg-white hover:text-black duration-200 transition-colors rounded-2xl bg-white/10 font-[galaxy] text-sm sm:text-base text-white/90">
                    Github{' '}
                    <FaGithub className="inline-block text-base sm:text-lg" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </figure>
    </section>
  )
}
export default Work