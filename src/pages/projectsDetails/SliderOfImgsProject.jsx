import Slider from "react-slick";

function SliderOfImgsProject({ imgs }) {
  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 50, // Set the autoplay speed to 1 second (1000 ms)
    fade: true, // Enable fade effect
  };
  return (
    <>
      <div className="slider-container bg-mainColor p-7 rounded-xl">
        <Slider {...settings}>
          {imgs.map((img, index) => (
            <div key={index}>
              <img className="w-full h-[30vh] md:h-[50vh] object-cover rounded-xl" src={img} alt="Gallery" />
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SliderOfImgsProject;
