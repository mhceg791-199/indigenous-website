import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const cards = [
  {
    title: "Strategic Acquisitions",
    text: "Targeting iconic or underdeveloped properties with high potential for repositioning or co-development.",
  },
  {
    title: "Design-Led Development",
    text: "Powered by MHC’s architecture and engineering subsidiaries for seamless concept-to-completion execution.",
  },
  {
    title: "Collaborative Partnerships",
    text: "Working alongside visionary developers to transform land and assets into long-term, value-driven destinations.",
  },
  {
    title: "Sustainability",
    text: "Integrating smart technologies, energy-efficient systems, and adaptive reuse to enhance both ROI and environmental performance.",
  },
  {
    title: "Experiential Branding",
    text: "Turning real estate into experiences — from art installations and events to immersive digital storytelling that elevates property perception.",
  },
];

export default function CardsSlider() {
  return (
    <div className="mt-10">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        pagination={false} // 🔥 من غير Dots
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((card, i) => (
          <SwiperSlide key={i}>
            <div className="h-full md:h-[25vh]">
              <div className="crack-card p-6 bg-white/10 rounded-lg backdrop-blur-sm h-full flex flex-col">
                <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-300 text-base">{card.text}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
