// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "NASA Mission Control",
          technology: "JavaScript, React, Docker, AWS EC2, MongoDB, Node.js, Express.js",
          path: "/thumb1.jpg",
        },
        {
          title: "PromptGPT",
          technology: "HTML, CSS, JavaScript, React, Next.js, MongoDB, Node.js",
          path: "/thumb2.jpg",
        },
        {
          title: "NFT Marketplace",
          technology: "HTML, CSS, JavaScript, React",
          path: "/thumb3.jpg",
        },
        {
          title: "Library E-commerce",
          technology: "HTML, CSS, JavaScript, React",
          path: "/thumb4.jpg",
        },
      ],
    },
    // {
    //   images: [
    //     {
    //       title: "Movie Clone",
    //       path: "/thumb4.jpg",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb1.jpg",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb2.jpg",
    //     },
    //     {
    //       title: "title",
    //       path: "/thumb3.jpg",
    //     },
    //   ],
    // },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next image
import Image from "next/image";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="xl:h-[600px] lg:h-[580px] sm:h-[500px] h-[350px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex flex-col items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <div className="delay-100">{image.title}</div>
                          {/* icon and technology paragraph */}
                          <div className="flex items-center gap-x-2">
                            <p className="max-w-xs text-center">{image.technology}</p>
                          </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                              <BsArrowRight />
                            </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
