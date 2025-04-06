import { GoDotFill } from "react-icons/go";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import user1 from "../assets/user1.jpg"
import user2 from "../assets/user2.jpg"
import user3 from "../assets/user3.jpg"
const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonialsData = [
    {
      img: user1,
      review:
       "A seamless, interactive website with intuitive design and smooth performance—perfect for an engaging experience!",
      name: "Mike taylor",
      company: "Australia",
    },
    {
      img: user2,
      review:
       "Absolutely amazing! Exceeded my expectations with instant results. Highly recommended!",
      name: "Chris Thomas",
      company: "Newyork",
    },
    {
      img: user3,
      review:
        "Outstanding support! Quick responses and super helpful—made everything effortless!",
      name: "John Smith",
      company: "Canada",
    },
  ];

  const handleArrowUpClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleArrowDownClick = () => {
    if (currentIndex < testimonialsData.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <main className="px-[5%] py-24 grid grid-cols-1 md:grid-cols-2 gap-6">
      <section className="grid gap-4">
        <p
          className="text-[18px] text-gray-400 font-semibold text-center md:text-left"
          data-aos="fade-down"
        >
          Testimonials
        </p>
        <h1
          className="text-3xl md:text-5xl font-extrabold w-full md:max-w-[70%] text-center md:text-left"
          data-aos="fade-down"
        >
          What People Say About Us.
        </h1>

        <div
          className="flex items-center gap-2 justify-center md:justify-start"
          data-aos="slide-right"
        >
          {testimonialsData.map((_, index) => (
            <GoDotFill
              key={index}
              className={`text-2xl ${
                currentIndex === index ? "text-gray-800" : "text-gray-400"
              } cursor-pointer`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
      </section>

      <section className="flex items-center justify-center gap-4 mt-10 md:mt-0">
        <div className="relative">
          {/* Current Testimonial */}
          <div
            className="p-4 rounded-xl shadow-lg bg-white w-[85%] md:w-[70%] grid gap-3 relative z-10"
            data-aos="fade-down"
          >
            <img
              src={testimonialsData[currentIndex].img}
              width={50}
              height={50}
              alt="img"
              className="absolute top-[-30px] left-[100px] md:left-[-20px]"
            />
            <p className="text-sm md:text-base text-gray-500">
              {testimonialsData[currentIndex].review}
            </p>

            <h1 className="text-base md:text-lg text-gray-600 font-semibold">
              {testimonialsData[currentIndex].name}
            </h1>
            <p className="text-xs md:text-sm text-gray-500">
              {testimonialsData[currentIndex].company}
            </p>
          </div>

          {/* Next Testimonial (for layered look) */}
          <div
            className="p-4 rounded-xl shadow-sm border border-gray-100 bg-white w-[85%] md:w-[70%] grid gap-3 absolute left-[50px] top-[70px]"
            data-aos="fade-down"
          >
            <img
              src={
                testimonialsData[(currentIndex + 1) % testimonialsData.length]
                  .img
              }
              width={50}
              height={50}
              alt="img"
              className="absolute top-[-30px] left-[100px] md:left-[-20px]"
            />
            <p className="text-sm md:text-base text-gray-500">
              {
                testimonialsData[(currentIndex + 1) % testimonialsData.length]
                  .review
              }
            </p>

            <h1 className="text-base md:text-lg text-gray-600 font-semibold">
              {
                testimonialsData[(currentIndex + 1) % testimonialsData.length]
                  .name
              }
            </h1>
            <p className="text-xs md:text-sm text-gray-500">
              {
                testimonialsData[(currentIndex + 1) % testimonialsData.length]
                  .company
              }
            </p>
          </div>
        </div>

        {/* Arrows */}
        <div className="flex flex-col gap-4" data-aos="slide-right">
          <IoIosArrowUp
            className={`text-2xl ${
              currentIndex === 0 ? "text-gray-300" : "text-gray-700"
            } cursor-pointer`}
            onClick={handleArrowUpClick}
          />
          <IoIosArrowDown
            className={`text-2xl ${
              currentIndex === testimonialsData.length - 1
                ? "text-gray-300"
                : "text-gray-700"
            } cursor-pointer`}
            onClick={handleArrowDownClick}
          />
        </div>
      </section>
    </main>
  );
};

export default Testimonials;
