
export default function HeroDetails({img , name , industry}) {
  return <div className="relative h-[70vh] w-full">
        <img src={img} alt={name} className="w-full h-full object-cover" />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Title + Info */}
        <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-20">
          <h1 className="text-3xl md:text-6xl font-bold text-mainGold drop-shadow-lg">
            {name}
          </h1>
          <p className="text-lightColor text-xl mt-4">{industry}</p>
        </div>
      </div>;
}
