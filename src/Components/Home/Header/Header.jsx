import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import slide1 from "../../../assets/img/banner/alain-bonnardeaux-pKfnCx_Zdpo-unsplash-removebg-preview.png";
// import slide2 from "../../../assets/img/banner/jakub-kriz-oZn9nTbECnc-unsplash-removebg-preview.png";
// import slide3 from "../../../assets/img/banner/qasim-sadiq-MUlE4pw78Ec-unsplash-removebg-preview.png";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
// import logo from "../../../assets/img/logo-main/Orange_Black_Hummingbird_Tech_Digital_Bird_Logo__1_-removebg-preview.png";

// import slide4 from "../../../assets/img/Main Banner/slide1.jpg";
// import slide5 from "../../../assets/img/Final/business-colleagues-using-laptop-dark-office.jpg";
import slide6 from "../../../assets/img/Final/business-people-talking-meeting-table.jpg";
// import slide7 from "../../../assets/img/Final/group-young-businesspeople-working-together-project-office.jpg";
import slide10 from "../../../assets/img/Final/10.jpg";
// import slide15 from "../../../assets/img/Final/15.jpg";
import slide20 from "../../../assets/img/Final/20.jpg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" h-screen ">

      
      <div className="bg-gradient-to-r w-full from-[#03387B] to-[#048F87]">
        {/* <nav className="max-w-7xl fixed  mt-5 mx-auto px-48 w-full z-20 top-0  bg-gradient-to-r from-[#03387B] to-[#048F87]">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="/" className="flex items-center">
              <img src={logo} className="h-8 mr-3" alt="Flowbite Logo" />
            </a>
            <div className="flex md:order-2">
              <Link to="/donate"
                type="button"
                className="text-white font-[700] text-xl h-12 w-40 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Donate Now
              </Link>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-lg text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-sticky"
            >
              <ul className="flex text-white flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-5 md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li className=" pl-0 lg:my-0 " data-te-nav-item-ref>
                  <a
                    className=" transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
                    aria-current="page"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Home
                  </a>
                </li>
                <li className=" pl-0 lg:my-0 " data-te-nav-item-ref>
                  <a
                    className=" transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
                    aria-current="page"
                    href="#"
                    data-te-nav-link-ref
                  >
                    Events
                  </a>
                </li>
                <li className=" pl-0 lg:my-0 " data-te-nav-item-ref>
                  <Link
                    className=" transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
                    aria-current="page"
                    to="/campaigns"
                    data-te-nav-link-ref
                  >
                    Campaigns
                  </Link>
                </li>
                <li className=" pl-0 lg:my-0 " data-te-nav-item-ref>
                  <a
                    className=" transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
                    aria-current="page"
                    href="/about"
                    data-te-nav-link-ref
                  >
                    About US
                  </a>
                </li>
                <li className=" pl-0 lg:my-0 " data-te-nav-item-ref>
                  <a
                    className=" transition duration-200 hover:text-neutral-200 hover:ease-in-out focus:text-neutral-200 disabled:text-black/30 motion-reduce:transition-none lg:mx-1 pb-2 [&.active]:text-black/90 [&.active]:text-neutral-200 [&.active]:border-b-2 [&.active]:border-[#F99F24] hover:border-b-[3px] hover:border-[#F99F24]"
                    aria-current="page"
                    href="/contact"
                    data-te-nav-link-ref
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
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
            className="text-white hero bg-cover bg-no-repeat h-full w-full"
          >
            <div className=" pt-40  md:pt-32 hero-overlay bg-opacity-60 flex space-x-5 justify-between">
              <div className="mx-auto text-center mt-12">
                <h1 className="first-slide-subtitle mt-8 uppercase font-sans tracking-widest mb-8 lg:text-xl md:text-xl sm:text-sm font-[300]">
                  Raising money is Easy Now
                </h1>
                <h1 className="title-left-margin first-slide-title text-7xl mb-3 opacity-90  font-sans tracking-[0.09em] drop-shadow-2xl font-[700]">
                  Join The Journey <br /> From Idea To Market
                </h1>
                <div className=" md:mt-0 lg:mt-0">
                  <Link to="/project">
                  <button
                    type="button"
                    className="text-white mt-8 font-semibold text-xl h-14 w-48 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded"
                  >
                    Start a Project
                  </button>
                  </Link>
                  <Link to="/donate">
                  <button
                    type="button"
                    className="button-sm ml-5 mt-8  text-xl font-semibold h-14 w-48 bg-white text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center rounded mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Donate Now
                  </button>
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
                <h1 className="example second-slid-subtitle  second-slid-margin uppercase font-sans tracking-widest mb-8 lg:text-xl md:text-xl sm:text-sm font-[300]">
                  Raising money is Easy Now
                </h1>
                <h1 className="title-left-margin second-slid-title lg:text-7xl md:text-6xl sm:text-4xl uppercase mb-3 opacity-90  font-sans tracking-[0.09em] drop-shadow-2xl font-[700]">
                  CrowdFunding
                  <br /> Platforms
                </h1>
                {/* <p className="mt-4 drop-shadow-lg font-sans tracking-wider font-[400] text-lg">
                We work for the people <br /> To provide them happiness & joy
              </p> */}
                <div className=" md:mt-0 lg:mt-0">
                  <Link to="/project">
                    <button
                      type="button"
                      className="text-white mt-8 font-semibold text-xl h-14 w-48 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded"
                    >
                      Start a Project
                    </button>
                  </Link>
                  <Link to="/donate">
                    <button
                      type="button"
                      className="button-sm ml-5 mt-8  text-xl font-semibold h-14 w-48 bg-white text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center rounded mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Donate Now
                    </button>
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
                <h1 className="example second-slid-subtitle  second-slid-margin uppercase font-sans tracking-widest mb-8 lg:text-xl md:text-xl sm:text-sm font-[300]">
                  Raising money is Easy Now
                </h1>
                <h1 className="title-left-margin second-slid-title lg:text-7xl md:text-6xl sm:text-4xl uppercase mb-3 opacity-90  font-sans tracking-[0.09em] drop-shadow-2xl font-[700]">
                  funded
                  <br /> To Empower <br />
                  Innovation
                </h1>
                <div className=" md:mt-0 lg:mt-0">
                  <Link to="/project">
                    <button
                      type="button"
                      className="text-white mt-8 font-semibold text-xl h-14 w-48 bg-[#F99F24] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 rounded"
                    >
                      Start a Project
                    </button>
                  </Link>
                  <Link to="/donate">
                    <button
                      type="button"
                      className="button-sm ml-5 mt-8  text-xl font-semibold h-14 w-48 bg-white text-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 px-4 tracking-wider text-center rounded mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Donate Now
                    </button>
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
