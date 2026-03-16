import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gold from "../../../assets/about/gold.png";

gsap.registerPlugin(ScrollTrigger);

export default function VisionMissionSection() {
  const sectionRef = useRef(null);
  const visionRef = useRef(null);
  const missionRef = useRef(null);
  const featherRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      /* ===== Scroll entrance ===== */
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 40%",
          scrub: 1.5,
        },
      });

      tl.fromTo(
        featherRef.current,
        {
          y: 80,
          opacity: 0,
          scale: 0.85,
          rotate: -6,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          rotate: 0,
          duration: 2,
          ease: "power1.out",
        },
      );

      tl.fromTo(
        visionRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power1.out" },
        "<0.2",
      );

      tl.fromTo(
        missionRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power1.out" },
        "<",
      );

      /* ===== Idle floating (continuous) ===== */
      gsap.to(featherRef.current, {
        y: -10,
        rotate: 2,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5, // بعد ما توصل لمكانها
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-32 bg-[#F5F2ED] overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-6 items-center">
        {/* Vision */}
        <div ref={visionRef} className="text-center md:text-right">
          <h3 className="text-3xl font-semibold text-mainGold mb-4">Vision</h3>
          <p className="text-gray-800 leading-relaxed">
            To redefine how complex projects are guided and realized — blending
            heritage, creativity, and innovation into every initiative we lead.
            We envision a future where modern progress and Indigenous identity
            move forward in balance.
          </p>
        </div>

        {/* Feather */}
        <div className="relative flex justify-center items-center">
          <img
            ref={featherRef}
            src={gold}
            alt="Gold Feather"
            className="w-28 md:w-32 drop-shadow-[0_0_30px_rgba(212,175,55,0.35)]"
          />

          {/* Glow */}
          <div className="absolute w-32 h-32 rounded-full bg-mainGold/20 blur-3xl" />
        </div>

        {/* Mission */}
        <div ref={missionRef} className="text-center md:text-left">
          <h3 className="text-3xl font-semibold text-mainGold mb-4">Mission</h3>
          <p className="text-gray-800 leading-relaxed">
            To lead and coordinate projects that honour the land, empower
            communities, and create lasting value — aligning cultural integrity
            with global expertise and purposeful project management.
          </p>
        </div>
      </div>
    </section>
  );
}
