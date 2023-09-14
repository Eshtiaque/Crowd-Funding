import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"



const SharedBanner = (props) => {
    const { title, titleHead, titleDes, background } = props
    
    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])



    return (
        <div ref={ref}>
            <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.4)), url(${background})` }}>
                <motion.div className="max-w-7xl mx-auto py-7 md:py-[60px] ps-6"
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.9, delay: 0.60 }}

>
                    <h3 className="text-[#F99F24] text-xl font-semibold mt-10">{title}</h3>
                    <h3 className="text-white text-3xl font-bold mt-4">{titleHead}</h3>
                    <p className="text-white mt-4">{titleDes}</p>
                </motion.div>
            </div>
        </div>
    );
};

export default SharedBanner;
