// import "./Animation.css";

import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"
import { FaBullhorn, FaHandHoldingUsd, FaDonate, FaShoppingBag, FaArrowRight, FaArrowDown } from "react-icons/fa";
import MainTitle from '../../SharedComponents/MainTitle';


const Animation = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])




    return (
        <div ref={ref} className="my-5 pt-10 py-10">
            <motion.div className="text-center"
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.9, delay: 0.60 }}
            >

                {/* <h2 className="text-3xl font-bold">How we Work</h2>
                <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto" /> */}
                <MainTitle heading="How we Work"></MainTitle>
            </motion.div>
            <motion.div className='text-white my-10 text-center'
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.9, delay: 1 }}

            >


                <div className="md:flex md:justify-between items-center px-10 mx-auto">

                    <motion.div
                        whileHover={{
                            textShadow: "0px 0px 10px #fff",
                            boxShadow: "0px 0px 10px #fff"
                        }}
                        className="bg-gradient-to-br mt-5 from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 w-56 mx-auto flex py-3 rounded flex-col justify-center items-center text-3xl">
                        <FaBullhorn className=' text-5xl' />
                        <h1>Launch</h1>
                        <span className='circle' />
                    </motion.div>

                    <FaArrowRight className="text-gradient-to-br from-blue-600 to-purple-600 text-2xl hidden md:block"></FaArrowRight>
                    <FaArrowDown className="text-gradient-to-br from-blue-600 to-purple-600 text-2xl block mt-5 mb-5 mx-auto md:hidden"></FaArrowDown>

                    <motion.div
                        whileHover={{
                            textShadow: "0px 0px 10px #fff",
                            boxShadow: "0px 0px 10px #fff"
                        }}
                        className="bg-gradient-to-br mt-5 from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 w-56 mx-auto flex py-3 rounded flex-col justify-center items-center text-3xl">
                        <FaHandHoldingUsd className=' text-5xl' />
                        <h1>Collect</h1>
                        <span className='circle' />
                    </motion.div>
                    <FaArrowRight className="text-gradient-to-br from-blue-600 to-purple-600 text-2xl hidden md:block"></FaArrowRight>
                    <FaArrowDown className="text-gradient-to-br from-blue-600 to-purple-600 text-2xl block mt-5 mb-5 mx-auto md:hidden"></FaArrowDown>


                    <motion.div
                        whileHover={{
                            textShadow: "0px 0px 10px #fff",
                            boxShadow: "0px 0px 10px #fff"
                        }}
                        className="bg-gradient-to-br mt-5 from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 w-56 mx-auto flex py-3 rounded flex-col justify-center items-center text-3xl">
                        <FaDonate className=' text-5xl' />
                        <h1>Asses</h1>
                        <span className='circle' />
                    </motion.div>
                    <FaArrowRight className="text-gradient-to-br from-blue-600 to-purple-600 text-2xl hidden md:block"></FaArrowRight>
                    <FaArrowDown className="text-gradient-to-br from-blue-600 to-purple-600 text-2xl block mt-5 mb-5 mx-auto md:hidden"></FaArrowDown>


                    <motion.div
                        whileHover={{
                            textShadow: "0px 0px 10px #fff",
                            boxShadow: "0px 0px 10px #fff"
                        }}
                        className="bg-gradient-to-br mt-5 from-blue-600 to-purple-600 hover:from-purple-600 hover:to-blue-600 w-56 mx-auto flex py-3 rounded flex-col justify-center items-center text-3xl">
                        <FaShoppingBag className=' text-5xl' />
                        <h1>Distribute</h1>
                        <span className='circle' />
                    </motion.div>

                </div>
            </motion.div>
        </div>
    );
};

export default Animation;