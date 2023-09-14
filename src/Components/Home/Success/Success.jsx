import img1 from "../../../../src/assets/img/others img/joel-muniz-3k3l2brxmwQ-unsplash.jpg"
import img2 from "../../../../src/assets/img/others img/joel-muniz-A4Ax1ApccfA-unsplash.jpg"
import img3 from "../../../../src/assets/img/others img/joel-muniz-y3ZY6qFln_g-unsplash.jpg"
import { useRef, useEffect } from 'react'
import { motion, useInView, useAnimation } from "framer-motion"



const Success = () => {
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
            <motion.div className="text-center mt-8 mb-14"
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.9, delay: 0.60 }}

            >
                <h2 className="text-3xl font-bold ">Success Stories</h2>
                <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto" />
            </motion.div>
            <motion.div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 lg:m-2 md:m-2 m-8"
                variants={{
                    hidden: { opacity: 0, y: 75 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.9, delay: 1 }}

            >
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={img1} alt="Shoes" />
                        <h4 className="absolute top-0 right-0 rounded-2xl bg-cyan-300 p-2 mr-2 mt-2 font-black ">On going</h4>
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title text-2xl">
                            African water crisis</h2>
                        <div className="flex justify-around gap-2">
                            <div>
                                <p>$1000</p>
                                <p className="font-bold">Target</p>
                            </div>
                            <hr className="border-2 border-black h-12" />
                            <div>
                                <p>$5000</p>
                                <p className="font-bold"> Collected</p>
                            </div>
                            <hr className="border-2 border-black h-12" />
                            <div>
                                <p>50%</p>
                                <p className="font-bold">Progress</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={img2} alt="Shoes" />
                        <h4 className="absolute top-0 right-0 rounded-2xl bg-green-400 p-2  mr-2 mt-2 font-black "> Successful</h4>
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title text-2xl">
                            African water crisis</h2>

                        <div className="flex justify-around gap-2">
                            <div>
                                <p>$1000</p>
                                <p className="font-bold">Target</p>
                            </div>
                            <hr className="border-2 border-black h-12" />
                            <div>
                                <p>$5000</p>
                                <p className="font-bold"> Collected</p>
                            </div>
                            <hr className="border-2 border-black h-12" />
                            <div>
                                <p>50%</p>
                                <p className="font-bold">Progress</p>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="card  bg-base-100 shadow-xl">
                    <figure><img src={img3} alt="Shoes" />
                        <h4 className="absolute top-0 right-0 rounded-2xl bg-red-400 p-2 mr-2 mt-2 font-black "> Unsuccessful</h4>
                    </figure>

                    <div className="card-body">
                        <h2 className="card-title text-2xl">
                            Nigeria war crisis</h2>

                        <div className="flex justify-around gap-2">
                            <div>
                                <p>$1000</p>
                                <p className="font-bold">Target</p>
                            </div>
                            <hr className="border-2 border-black h-12" />
                            <div>
                                <p>$5000</p>
                                <p className="font-bold"> Collected</p>
                            </div>
                            <hr className="border-2 border-black h-12" />
                            <div>
                                <p>50%</p>
                                <p className="font-bold">Progress</p>
                            </div>
                        </div>

                    </div>
                </div>
            </motion.div>

        </div>
    );
};

export default Success;