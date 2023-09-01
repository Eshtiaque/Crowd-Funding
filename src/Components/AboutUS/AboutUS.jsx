import SharedBanner from "../Contact/SharedBanner";
import Partners from "../Home/Partners/Partners";
import background from "../../assets/img/section-banner/about-section.jpg";
import sectionImage from "../../assets/img/section-banner/contact-banner.jpg"
import ocg from "../../assets/img/others img/ocg-saving-the-ocean-uXfYLTmF6fo-unsplash.jpg";
import sajid from "../../../src/assets/img/OurTeam/sajid.jpg";
import sakib from "../../../src/assets/img/OurTeam/sakib.jpg";
import mahdi from "../../../src/assets/img/OurTeam/mahdi.jpg";
import shahadat from "../../../src/assets/img/OurTeam/shahadat.jpg";
import saroar from "../../../src/assets/img/OurTeam/saroar.jpg";
import rasel from "../../../src/assets/img/OurTeam/rasel.jpg";
import { useRef, useEffect, useState } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const AboutUs = () => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])

    const [counterOn, setCounterOn] = useState(false)

    return (
        <div ref={ref}>
            <div className="max-w-7xl mx-auto">
                <SharedBanner
                    background={background}
                    title="About Us"
                    titleHead="Who We Are"
                    titleDes={
                        <>
                            We are a worldwide ministry in which millions of children reap the benefits of one man’s clear
                        </>
                    }
                ></SharedBanner>

                <section className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${sectionImage})` }}>

                    <motion.div className="grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 p-3 lg:text-left md:text-left text-center pt-7"
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.9, delay: 1.5 }}

                    >
                        <motion.div className="lg:pe-4 pe-0">
                            <img src={ocg} alt="" />
                        </motion.div>
                        <div>
                            <h1 className="font-black text-3xl pb-5 mt-3">We are a global leader within a worldwide movement dedicated to ending poverty</h1>

                            <p className="text-lg lg:p-0 p-1">We believe that we can only bring about lasting solutions to the injustice of poverty by joining our efforts and expertise with others. For that reason, we work together with more than 4,100 partner organizations, as well as allies and communities in 90 countries.
                                <br />
                                Collectively, we reached more than 25 million people worldwide last year through our long-term development, advocacy and emergency programs, 54% of whom were women and girls.</p>
                        </div>
                    </motion.div>
                    <motion.div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-8 "
                        variants={{
                            hidden: { opacity: 0, y: 75 },
                            visible: { opacity: 1, y: 0 }
                        }}
                        initial="hidden"
                        animate={mainControls}
                        transition={{ duration: 0.9, delay: 1.5 }}

                    >

                        <div className="text-center mt-8">
                            <h2 className="text-2xl font-bold">Our Mission</h2>
                            <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto" />
                            <p className="card card-body text-lg"> We are committed to fostering innovation, creativity, and social impact by offering a space where creators can share their stories, connect with supporters, and receive the financial backing they need to turn their visions into tangible outcomes. </p>
                        </div>
                        <div className="text-center mt-8">
                            <h2 className="text-2xl font-bold"> Our Vision</h2>
                            <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto" />
                            <p className="card card-body text-lg">Our vision is to create a global platform for positive change through crowdfunding. We envision a world where innovative ideas, creative projects, and meaningful causes are empowered by a community of individuals who believe in the power of collective action.</p>
                        </div>
                        <div className="text-center mt-8">
                            <h2 className="text-2xl font-bold">Our Gain</h2>
                            <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto" />
                            <p className="card card-body text-lg">The platforms focus on innovation is a driving force for progress.The broad spectrum of projects we support ensures that both societal challenges and entrepreneurial endeavors receive the attention and resources they deserve.Transparency is woven into the fabric of our platform & accountability. </p>
                        </div>

                    </motion.div>
                </section>

                <motion.section className="bg-sup bg-gray-900 text-white"
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.9, delay: 1.5 }}

                >
                    <div className="lg:flex md:flex grid grid-cols-3 place-items-baseline justify-between lg:h-[300px] md:h-[300px] h-[500px] items-center ps-3 pe-3">
                        <div></div>
                        <div className="text-center">
                            <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                {
                                    counterOn && <CountUp className="text-6xl font-bold " start={0} end={10} duration={2} delay={0}></CountUp>
                                }
                            </ScrollTrigger>
                            <p className="text-2xl font-bold text-orange-400">Years of <br />Experience</p>
                        </div>
                        <div className="lg:hidden md:hidden"></div>
                        <div className="text-center"><ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                {
                                    counterOn && <CountUp className="text-6xl font-bold " start={0} end={25} duration={2} delay={0}></CountUp>
                                }
                            </ScrollTrigger>
                            <p className="text-2xl font-bold text-orange-400">Country</p>
                        </div>
                        <div className="lg:hidden md:hidden"></div>
                        <div className="text-center">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                {
                                    counterOn && <CountUp className="text-6xl font-bold " start={0} end={1500} duration={2} delay={0}></CountUp>
                                }
                            </ScrollTrigger>
                            <p className="text-2xl font-bold text-orange-400">Volunteer</p>
                        </div>
                        <div className="lg:hidden md:hidden"></div>
                        <div className="text-center">
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
                                {
                                    counterOn && <CountUp className="text-6xl font-bold " start={0} end={25} duration={2} delay={0}></CountUp>
                                }
                            </ScrollTrigger>
                            <p className="text-2xl font-bold text-orange-400">Companies</p>
                        </div>
                        <div></div>
                    </div>
                </motion.section>
                <motion.section className="mt-9"
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.9, delay: 1.5 }}

                >
                    <h1 className="text-center text-3xl font-bold pt-5 mb-3">Meet Our Team</h1>
                    <hr className="w-32 border-2 rounded border-orange-400 mx-auto mt-1" />
                    <div className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-1 gap-7 mt-7">
                        <div className="md:hidden lg:block"></div>
                        <div className=" bg-gray-300">
                            <img className="" src={sajid} alt="" />
                            <h2 className="text-xl font-bold text-center">Estiaque Ahmed</h2>
                            <p className="text-md text-center">Developer</p>
                        </div>
                        <div className=" bg-gray-300">
                            <img src={sakib} alt="" />
                            <img src="" alt="" />
                            <h2 className="text-xl font-bold text-center">Md. Sakib Mia</h2>
                            <p className="text-md text-center">Developer</p>
                        </div>
                        <div className=" bg-gray-300">
                            <img src={mahdi} alt="" />
                            <img src="" alt="" />
                            <h2 className="text-xl font-bold text-center">Mahdi Mortuza</h2>
                            <p className="text-md text-center">Developer</p>
                        </div>
                        <div className=" bg-gray-300">
                            <img src={shahadat} alt="" />
                            <img src="" alt="" />
                            <h2 className="text-xl font-bold text-center">Shahadat Hosan</h2>
                            <p className="text-md text-center">Developer</p>
                        </div>
                        <div className="hidden lg:block md:hidden"></div>
                        <div className="hidden lg:block md:hidden"></div>
                        <div className="hidden lg:block md:hidden"></div>
                        <div className=" bg-gray-300">
                            <img src={saroar} alt="" />
                            <img src="" alt="" />
                            <h2 className="text-xl font-bold text-center">Saroar Jahan</h2>
                            <p className="text-md text-center">Developer</p>
                        </div>
                        <div className=" bg-gray-300">
                            <img src={rasel} alt="" />
                            <img src="" alt="" />
                            <h2 className="text-xl font-bold text-center">Md. Rasel Islam</h2>
                            <p className="text-md text-center">Developer</p>
                        </div>
                    </div>
                </motion.section>
                <Partners></Partners>
            </div>
        </div>
    );
};

export default AboutUs;