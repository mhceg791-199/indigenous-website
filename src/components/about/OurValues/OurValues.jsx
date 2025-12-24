
import value from "../../../assets/shared/value.webp";
import values from "../../../data/values";
import SectionHeader from "../../shared/SectionHeaders/SectionHeader";

export default function OurValues() {
  

  return (
    <section
  className="relative text-white py-12 md:py-20 px-6 overflow-hidden md:min-h-[90vh] flex items-center justify-center"
>

      <img
        src={value}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="mb-4">
        <SectionHeader firstWord="OUR ETHOS"  />

        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {values.map(({ title, text, icon }, index) => (
            <div
              key={index}
              className="group relative p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg transition-all duration-500 hover:scale-[1.05] hover:bg-white/20"
            >
              <div className="text-mainGold text-4xl mb-4 flex justify-center group-hover:rotate-12 transition-transform duration-500">
                {icon}
              </div>
              <h3 className="text-2xl text-lightColor font-medium mb-2">{title}</h3>
              <p className="text-gray-300 paragraph">{text}</p>

              <span className="absolute inset-0 rounded-2xl border-2 border-mainGold opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}