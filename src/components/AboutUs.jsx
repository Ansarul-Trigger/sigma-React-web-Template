import React, { useRef } from "react";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

// Import local images
import ceoImg from "../assets/ceo.jpg";
import sebastianImg from "../assets/testimonials/sebastian.jpg";
import miaImg from "../assets/testimonials/mia.jpg";
import yangImg from "../assets/testimonials/yang.jpg";
import yousufImg from "../assets/testimonials/yousuf.jpg";

const AboutUs = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const testimonials = [
    {
      name: "Sebastian",
      role: "Senior Quantitative Researcher",
      img: sebastianImg,
      text: `G-Research makes a lot of effort to have a very open culture. 
      You can reach out to anyone, even if they are very senior.`,
    },
    {
      name: "Mia",
      role: "Software Engineer",
      img: miaImg,
      text: `What I appreciate most about working in G-Research is 
      the freedom to experiment and push technical boundaries.`,
    },
    {
      name: "Yang",
      role: "Quantitative Researcher",
      img: yangImg,
      text: `What I like the most about my job is it’s super open. 
      You can discuss ideas with anyone, and everyone is supportive.`,
    },
    {
      name: "Yousuf",
      role: "Machine Learning Engineer",
      img: yousufImg,
      text: `My intern experience was really rewarding. 
      Now as a full-time engineer, I enjoy building impactful ML systems.`,
    },
  ];

  return (
    <section id="about-us" className="relative bg-[#1A1A1A] py-20 px-6 md:px-12">
      <div className="mx-auto max-w-[1280px]">
        {/* Heading */}
        <div className="text-center md:text-left mb-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-[#1FA5AE] tracking-tight text-center">
            About Us
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-3xl mx-auto md:mx-0">
            Sanostro’s mission is to provide innovative investment solutions
            using advanced technology and data-driven strategies, enabling
            investors and financial intermediaries to achieve their financial
            goals. We prioritize transparency, trust, and contributing to the
            development of a better financial services infrastructure.
          </p>
        </div>

        {/* CEO Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-20">
          <img
            src={ceoImg}
            alt="CEO"
            className="w-48 h-48 object-cover rounded-2xl shadow-lg"
          />
          <blockquote className="bg-[#262626] rounded-2xl shadow-md p-6 md:p-10 relative">
            <span className="absolute top-2 left-4 text-6xl text-[#1FA5AE] opacity-30 font-serif select-none">
              “
            </span>
            <p className="text-gray-200 italic text-lg md:text-xl leading-relaxed relative z-10">
              Our vision is to empower investors & financial intermediaries
              through data-driven investment solutions that drive transparency
              and contribute to the development of a better financial services
              infrastructure.
            </p>
            <footer className="mt-6 text-[#1FA5AE] font-semibold text-sm">
              — John Krehbiel, CEO
            </footer>
          </blockquote>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center mb-20">
          {[ 
            { value: 14, suffix: "+", label: "Years in operation" },
            { value: 10, label: "Active hedge funds & quant partners" },
            { value: 10000, suffix: "+", label: "Financial instruments" },
            { value: 65000, suffix: "+", label: "Signals received daily" },
            { value: 200, suffix: "M+", label: "Blockchain audited signals" },
          ].map((stat, i) => (
            <div
              key={i}
              className="bg-[#262626] rounded-2xl shadow hover:shadow-lg transition duration-300 p-6"
            >
              <h3 className="text-2xl md:text-3xl font-extrabold text-[#1FA5AE]">
                <CountUp
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  suffix={stat.suffix || ""}
                />
              </h3>
              <p className="text-gray-400 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <div className="mb-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              What our people say
            </h2>

            <div className="flex items-center gap-4">
              <button
                ref={prevRef}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white text-lg hover:bg-white hover:text-black transition"
                aria-label="Previous"
              >
                ←
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white text-white text-lg hover:bg-white hover:text-black transition"
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>

          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {testimonials.map((t, idx) => (
              <SwiperSlide key={idx}>
                <div className="flex flex-col h-full border border-gray-700 rounded-lg overflow-hidden bg-[#262626] shadow-sm hover:shadow-md transition">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-semibold text-lg text-white">
                      {t.name}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{t.role}</p>
                    <p className="text-gray-300 text-sm flex-grow leading-relaxed">
                      "{t.text}"
                    </p>
                    <a
                      href="#"
                      className="mt-4 text-[#1FA5AE] font-semibold text-sm underline"
                    >
                      Find out more
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
