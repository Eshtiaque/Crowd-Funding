import { motion } from "framer-motion"


const MainButton = (props) => {
    const { text } = props
    return (
        <div>
            <motion.button
                whileHover={{
                    scale: 1.1,
                    textShadow: "0px 0px 8px #fff",
                    boxShadow: "0px 0px 8px #fff"
                }}
                className='text-base text-white bg-gradient-to-br from-blue-600 to-purple-600 border-tl-15 border-tr-15 rounded-3xl px-4 py-1 hover:from-purple-600 hover:to-blue-600'>{text}</motion.button>
        </div>
    );
};

export default MainButton;


// bg-[#0a102b] 