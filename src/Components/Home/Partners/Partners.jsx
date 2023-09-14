import brand1 from '../../../assets/img/partner-logos/brand-1.png'
import brand2 from '../../../assets/img/partner-logos/brand-2.png'
// import brand3 from '../../../assets/img/partner-logos/brand-3.png'
import brand4 from '../../../assets/img/partner-logos/brand-4.png'
import brand11 from '../../../assets/img/partner-logos/brand-11.png'
import brand12 from '../../../assets/img/partner-logos/brand-12.png'
import Marquee from "react-fast-marquee";
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"



const Partners = () => {

    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])




    return (
        <div ref={ref} className='max-w-7xl mx-auto'>
            <motion.div className="text-center mt-16"
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.9, delay: 0.60 }}

            >
                <h2 className="text-3xl font-bold">Who Work With Us</h2>
                <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto" />
            </motion.div>
            <motion.div className='mt-8 md:mt-5 p-5 gap-5'
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.9, delay: 1 }}

            >
                <Marquee pauseOnHover>
                    <img src={brand1}></img>
                    <img src={brand2}></img>
                    <img src={brand4}></img>
                    <img src={brand11}></img>
                    <img src={brand12}></img>
                    <img src={brand1}></img>
                    <img src={brand2}></img>
                    <img src={brand4}></img>
                    <img src={brand11}></img>
                    <img src={brand12}></img>
                </Marquee>
            </motion.div>
        </div>
    );
};

export default Partners;