import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import vid from "../../../assets/home.webm";

gsap.registerPlugin(ScrollTrigger);

export default function FeatherVideo() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const text3Ref = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2200",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      /* ================= FEATHER MASK ================= */
      tl.fromTo(
        videoRef.current,
        {
          WebkitMaskSize: "1000px",
          maskSize: "1000px",
        },
        {
          WebkitMaskSize: "5000px",
          maskSize: "5000px",
          ease: "none",
        }
      )
        /* اختفاء الريشة بعد ما تثبت */
        .to(
          videoRef.current,
          {
            WebkitMaskImage: "none",
            maskImage: "none",
            duration: 0.01,
          },
          ">"
        );

      /* ================= SLIDER 1 ================= */
      tl.fromTo(
        text1Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.4 },
        0
      ).to(text1Ref.current, { opacity: 0, y: -40, duration: 0.4 }, 0.6);

      /* ================= SLIDER 2 ================= */
      tl.fromTo(
        text2Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.4 },
        0.8
      ).to(text2Ref.current, { opacity: 0, y: -40, duration: 0.4 }, 1.4);

      /* ================= SLIDER 3 ================= */
      tl.fromTo(
        text3Ref.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.6 },
        1.6
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      {/* ================= VIDEO ================= */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        src={vid}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          WebkitMaskImage: "url(/feather.png)",
          WebkitMaskRepeat: "no-repeat",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "1000px",

          maskImage: "url(/feather.png)",
          maskRepeat: "no-repeat",
          maskPosition: "center",
          maskSize: "1000px",
        }}
      />

      {/* ================= TEXT LAYER ================= */}
      {/* <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none"> */}
        <div className="absolute inset-0 z-10 flex items-start justify-center pointer-events-none pt-80 md:pt-80">

        <div className="relative w-full max-w-[760px] text-center px-6">

          {/* ===== SLIDER 1 ===== */}
          <div ref={text1Ref} className="absolute inset-0">
            <h1 className="text-mainGold text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              WHERE HERITAGE
              <br />
              SHAPES INNOVATION
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              A new model of architecture and engineering, rooted in Indigenous
              knowledge and built for the future.
            </p>
          </div>

          {/* ===== SLIDER 2 ===== */}
          <div ref={text2Ref} className="absolute inset-0">
            <h1 className="text-mainGold text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              DESIGNING FUTURES
              <br />
              WITH PURPOSE
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Blending cultural intelligence, advanced engineering, and
              sustainable systems to create places that last.
            </p>
          </div>

          {/* ===== SLIDER 3 ===== */}
          <div ref={text3Ref} className="absolute inset-0">
            <h1 className="text-mainGold text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              BUILT ON LAND.
              <br />
              DRIVEN BY VISION.
            </h1>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              World-class A&amp;E and EPCM solutions shaped by stewardship,
              community, and global ambition.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
