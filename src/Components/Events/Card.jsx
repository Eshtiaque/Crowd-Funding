import { motion } from "framer-motion"

import { Link } from "react-router-dom";
import { AiOutlineFall } from 'react-icons/ai';
//[#F99F24]
const Card = ({ item }) => {
    const { image,
        title,
       _id,
        publish_date,
        publisher_name,
        publisher_image } = item;
    return (
        <div className=" bg-black rounded-full mb-5 text-white  shadow-none ">
           
           <div className="">
           <figure><img className="w-full h-64 rounded-tl-lg rounded-tr-lg " src={image} alt="" /></figure>
          
           <AiOutlineFall className="absolute -mt-16 w-16 bg-transparent bg-rounded-full  text-primary h-16"></AiOutlineFall>
           
           </div>
            <div className="card-body ">
                <h2 className="card-title">
                    {title}
                </h2>
                {/* <p className="p-2">{description}</p> */}
                <hr className="h-px bg-primary border-0 dark:bg-gray-700"/>

                <div className="card-actions justify-between">
                    <div className="flex gap-3">
                        <div>
                            <img className="rounded-full w-12 h-12" src={publisher_image} alt="" />
                        </div>
                       <div>
                       {publish_date}
                        <br />
                        {publisher_name}
                       </div>
                    </div>
                    
                    <Link to={`/dashboard/userAllEvent/${_id}`}>
                        <motion.button
                        whileHover={{
                            scale: 1.1,
                            textShadow: "0px 0px 8px #fff",
                            boxShadow: "0px 0px 8px #fff"
                        }}
                         className="btn-xs rounded-bl-full ps-3 rounded-tr-full bg-gradient-to-br from-blue-600 to-purple-600 px-4 py-1 hover:from-purple-600 hover:to-blue-600  text-white  ">Read More</motion.button>
                    </Link>
                    {/* bg-gradient-to-br from-blue-600 to-purple-600 px-4 py-1 hover:from-purple-600 hover:to-blue-600 */}
                </div>

            </div>
        </div>

  
    );
};


export default Card;