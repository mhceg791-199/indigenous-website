import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import feather from "/home/feather-image.png";

gsap.registerPlugin(ScrollTrigger);

export default function FeatherFlyBanner() {
  const sectionRef = useRef(null);
  const mainFeatherRef = useRef(null);
  const feathersGroupRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* =========================
         INITIAL STATE
      ========================== */
      gsap.set(mainFeatherRef.current, {
        opacity: 0,
        y: 300,
        scale: 0.95,
      });

      gsap.set(feathersGroupRef.current, {
        opacity: 0,
        y: 300,
        x: 0,
        rotation: 0,
      });

      /* =========================
         SCROLL TIMELINE
      ========================== */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=700",
          scrub: 0.5,
          pin: true,
        },
      });

      tl.to(
        [mainFeatherRef.current, ...feathersGroupRef.current],
        {
          opacity: (i) => (i === 0 ? 1 : 0.75),
          y: (i) => (i === 0 ? -220 : -120 - (i - 1) * 25),
          x: (i) =>
            i === 0
              ? 0
              : ((i - 1) % 2 === 0 ? -1 : 1) * (60 + (i - 1) * 20),
          rotation: (i) =>
            i === 0
              ? 0
              : ((i - 1) % 2 === 0 ? -1 : 1) * (10 + (i - 1) * 6),
          scale: (i) => (i === 0 ? 1.15 : 1),
          ease: "power1.out",
          duration: 1.2,
        },
        0
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="
        relative min-h-screen
        flex flex-col lg:flex-row
        items-center justify-center lg:justify-between
        gap-16 lg:gap-0
        px-6 md:px-10 lg:px-16
        overflow-hidden
        bg-white
      "
    >
      {/* ================= LEFT CONTENT ================= */}
      <div
        className="
          w-full lg:w-1/3
          text-center lg:text-left
          pointer-events-none select-none
          order-1
        "
      >
        <span className="uppercase tracking-widest text-sm text-mainGold">
          Our Promise
        </span>

        <h2 className="mt-4 heading font-bold text-greenColor leading-tight">
          Designed with People.
          <br />
          Built for the Land.
        </h2>

        <p className="mt-6 max-w-md mx-auto lg:mx-0 text-mainColor text-base leading-relaxed">
          To every client, partner, and community we serve — we promise projects
          that are thoughtful, responsible, and built to endure.
        </p>
      </div>

      {/* ================= CENTER FEATHERS ================= */}
      <div
        className="
          relative
          w-48 h-48 md:w-56 md:h-56
          flex items-center justify-center
          pointer-events-none
          order-2
        "
      >
        {/* Main Feather */}
        <img
          ref={mainFeatherRef}
          src={feather}
          alt="Main Feather"
          className="w-40 md:w-44"
        />

        {/* Small Feathers */}
        {[...Array(6)].map((_, i) => (
          <img
            key={i}
            ref={(el) => (feathersGroupRef.current[i] = el)}
            src={feather}
            alt=""
            className="absolute w-20 md:w-24"
          />
        ))}
      </div>

      {/* ================= RIGHT CONTENT ================= */}
      <div
        className="
          w-full lg:w-1/3
          text-center lg:text-right
          pointer-events-none select-none
          space-y-6 md:space-y-8
          order-3
        "
      >
        <div>
          <h4 className="text-mainGold font-semibold">
            Human by Design
          </h4>
          <p className="mt-1 text-mainColor text-sm">
            Grounded in empathy, inspired by culture.
          </p>
        </div>

        <div>
          <h4 className="text-mainGold font-semibold">
            Smart by Nature
          </h4>
          <p className="mt-1 text-mainColor text-sm">
            Engineered with precision, guided by environmental intelligence.
          </p>
        </div>

        <div>
          <h4 className="text-mainGold font-semibold">
            Agile by Structure
          </h4>
          <p className="mt-1 text-mainColor text-sm">
            Fast-moving, adaptive, and built for change.
          </p>
        </div>

        <div>
          <h4 className="text-mainGold font-semibold">
            Sustainable by Default
          </h4>
          <p className="mt-1 text-mainColor text-sm">
            Because every line we draw respects the land it stands on.
          </p>
        </div>
      </div>
    </section>
  );
}
