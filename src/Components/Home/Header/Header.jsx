import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion"


import slide6 from "../../../assets/img/Final/business-people-talking-meeting-table.jpg";
import slide10 from "../../../assets/img/Final/10.jpg";
import slide20 from "../../../assets/img/Final/20.jpg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" h-screen ">


      <div className="bg-gradient-to-r w-full">
        <Swiper
          style={{
            "--swiper-pagination-color": "#D9D9D9",
            "--swiper-pagination-bullet-inactive-color": "#D9D9D9",
            "--swiper-pagination-bullet-inactive-opacity": "1",
            "--swiper-pagination-bullet-size": "22px",
            "--swiper-pagination-bullet-horizontal-gap": "8px",
          }}
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwiper text-white w-full h-full"
        >
          <SwiperSlide
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage: `linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 10%),linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 20%),linear-gradient(90deg, #000000 0%, rgba(0, 0, 0, 0) 20%),linear-gradient(270deg, #000000 0%, rgba(0, 0, 0, 0) 10%), url(${slide6})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="text-white text-center hero bg-cover bg-no-repeat h-full w-full"
          >
            <div className=" pt-40  md:pt-32 hero-overlay bg-opacity-60 flex space-x-5 justify-between">
              <div className="mx-auto text-center mt-12">
                <motion.h1 className="first-slide-subtitle font-bold text-[#FD9400] mt-8 uppercase font-sans tracking-widest mb-8 lg:text-xl md:text-xl sm:text-sm"
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  Raising money is Easy Now
                </motion.h1>
                <motion.h1 className="title-left-margin first-slide-title text-7xl mb-3 opacity-90  font-sans tracking-[0.09em] drop-shadow-2xl font-[700]"
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.9, delay: 0.60 }}
                >
                  Join The Journey <br /> From Idea To Market
                </motion.h1>
                <div className=" md:mt-0 lg:mt-0">
                  <Link to="/project">
                    <motion.button
                      type="button"
                      className="text-white mt-8 font-semibold text-xl h-14 w-48 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded"

                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.9, delay: 1 }}
                    >
                      Start a Project
                    </motion.button>
                  </Link>
                  <Link to="/donate">
                    <motion.button
                      type="button"
                      className="button-sm ml-5 mt-8  text-xl font-semibold h-14 w-48 bg-white text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center rounded mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.9, delay: 1 }}
                    >
                      Donate Now
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage: ` url(${slide10})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="text-white hero bg-cover bg-no-repeat h-full w-full"
          >
            <div className="pt-40 second-slide-padding-top hero-overlay bg-opacity-70 flex space-x-5 justify-between">
              <div className="mx-auto text-center mt-12">
                <motion.h1 className="example font-bold text-[#FD9400] second-slid-subtitle  second-slid-margin uppercase font-sans tracking-widest mb-8 lg:text-xl md:text-xl sm:text-sm"
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  Raising money is Easy Now
                </motion.h1>
                <motion.h1 className="title-left-margin second-slid-title lg:text-7xl md:text-6xl sm:text-4xl uppercase mb-3 opacity-90  font-sans tracking-[0.09em] drop-shadow-2xl font-[700]"
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.9, delay: 0.60 }}
                >
                  CrowdFunding
                  <br /> Platforms
                </motion.h1>
                {/* <p className="mt-4 drop-shadow-lg font-sans tracking-wider font-[400] text-lg">
                We work for the people <br /> To provide them happiness & joy
              </p> */}
                <div className=" md:mt-0 lg:mt-0">
                  <Link to="/project">
                    <motion.button
                      type="button"
                      className="text-white mt-8 font-semibold text-xl h-14 w-48 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded"

                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.9, delay: 1 }}
                    >
                      Start a Project
                    </motion.button>
                  </Link>
                  <Link to="/donate">
                    <motion.button
                      type="button"
                      className="button-sm ml-5 mt-8  text-xl font-semibold h-14 w-48 bg-white text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center rounded mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.9, delay: 1 }}
                    >
                      Donate Now
                    </motion.button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide
            style={{
              width: "100%",
              height: "100vh",
              backgroundImage: `linear-gradient(180deg, #000000 0%, rgba(0, 0, 0, 0) 10%), url(${slide20})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="text-white hero bg-cover bg-no-repeat h-full w-full"
          >
            <div className="pt-40 second-slide-padding-top hero-overlay bg-opacity-70 flex space-x-5 justify-between">
              <div className="mx-auto text-center mt-12">
                <motion.h1 className="example font-bold text-[#FD9400] second-slid-subtitle  second-slid-margin uppercase font-sans tracking-widest mb-8 lg:text-xl md:text-xl sm:text-sm"
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.5, delay: 0.25 }}
                >
                  Raising money is Easy Now
                </motion.h1>
                <motion.h1 className="title-left-margin second-slid-title lg:text-7xl md:text-6xl sm:text-4xl uppercase mb-3 opacity-90  font-sans tracking-[0.09em] drop-shadow-2xl font-[700]"
                  variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  initial="hidden"
                  animate="visible"
                  transition={{ duration: 0.9, delay: 0.60 }}
                >
                  funded
                  <br /> To Empower <br />
                  Innovation
                </motion.h1>
                <div className=" md:mt-0 lg:mt-0">
                  <Link to="/project">
                    <motion.button
                      type="button"
                      className="text-white mt-8 font-semibold text-xl h-14 w-48 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded"

                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.9, delay: 1 }}
                    >
                      Start a Project
                    </motion.button>
                  </Link>
                  
                  <Link to="/donate">
                    <motion.button
                      type="button"
                      className="button-sm ml-5 mt-8  text-xl font-semibold h-14 w-48 bg-white text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center rounded mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"

                      variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                      }}
                      initial="hidden"
                      animate="visible"
                      transition={{ duration: 0.9, delay: 1 }}
                    >
                      Donate Now
                    </motion.button>
                  </Link>
                  
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Header;