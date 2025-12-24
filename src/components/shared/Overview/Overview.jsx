import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import feather from "/feather-icon.svg";

gsap.registerPlugin(ScrollTrigger);

export default function OverviewSection() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const itemsRef = useRef([]);
  const bgRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Text animation
      gsap.fromTo(
        textRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
          },
        }
      );

      // Items animation
      gsap.fromTo(
        itemsRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 0.6,
          ease: "power1.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 65%",
          },
        }
      );
    }, sectionRef);

    // ===== Smooth Mouse Reveal =====
    const section = sectionRef.current;
    const bg = bgRef.current;

    const MAX_RADIUS = 220;
    const FOLLOW_EASE = 0.12; // حركة الدائرة ورا الماوس
    const RADIUS_EASE = 0.15; // نعومة الظهور والاختفاء

    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    let targetRadius = 0;
    let currentRadius = 0;

    const onMouseMove = (e) => {
      const rect = section.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
    };

    const onMouseEnter = () => {
      targetRadius = MAX_RADIUS;
    };

    const onMouseLeave = () => {
      targetRadius = 0;
    };

    const update = () => {
      // position smoothing
      currentX += (targetX - currentX) * FOLLOW_EASE;
      currentY += (targetY - currentY) * FOLLOW_EASE;

      // radius smoothing (show / hide)
      currentRadius += (targetRadius - currentRadius) * RADIUS_EASE;

      bg.style.maskImage = `radial-gradient(
        circle ${currentRadius}px at ${currentX}px ${currentY}px,
        black 0%,
        transparent 70%
      )`;

      bg.style.webkitMaskImage = bg.style.maskImage;
    };

    section.addEventListener("mousemove", onMouseMove);
    section.addEventListener("mouseenter", onMouseEnter);
    section.addEventListener("mouseleave", onMouseLeave);
    gsap.ticker.add(update);

    return () => {
      section.removeEventListener("mousemove", onMouseMove);
      section.removeEventListener("mouseenter", onMouseEnter);
      section.removeEventListener("mouseleave", onMouseLeave);
      gsap.ticker.remove(update);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-8 md:py-24 px-6 text-center bg-[#F5F2ED]"
    >
      {/* Background Image Reveal */}
      <div
        ref={bgRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "url(/home/overveiw.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage:
            "radial-gradient(circle 0px at 50% 50%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(circle 0px at 50% 50%, black 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div ref={textRef} className="max-w-4xl mx-auto text-center">
          <span className="uppercase tracking-widest text-sm text-mainGold">
            Overview
          </span>

          <p className="mt-6 paragraph font-medium text-gray-500">
            Born from the Partnership between Chiniki Group of Companies (First
            Nation) and Mosaic Holding Corporation
          </p>

          <p className="mt-6 text-mainColor paragraph leading-relaxed">
            Indigenous Mosaic Company is a Canada-based Architecture,
            Engineering, and EPCM firm redefining how Indigenous heritage and
            modern design converge to build sustainable communities across North
            America and beyond.
          </p>

          <div className="mt-10">
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3 border border-mainGold text-mainGold rounded-full hover:bg-mainGold hover:text-white transition-all duration-300"
            >
              Learn More
            </a>
          </div>
        </div>

        {/* <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { title: "Nature", desc: "Inspired by the land." },
            { title: "Spirit", desc: "Guided by intention." },
            { title: "Craft", desc: "Created with care." },
          ].map((item, i) => (
            <div
              key={i}
              ref={(el) => (itemsRef.current[i] = el)}
              className="text-center"
            >
              <div className="flex justify-center my-12">
                <img src={feather} alt="feather" className="w-10 opacity-80" />
              </div>
              <h3 className="text-xl font-semibold text-greenColor mb-3">
                {item.title}
              </h3>
              <p className="text-[#2B2B2B] text-sm">{item.desc}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
