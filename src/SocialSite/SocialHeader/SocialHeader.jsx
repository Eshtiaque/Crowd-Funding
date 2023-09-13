import { Link } from "react-router-dom";
import photo from "../../assets/SocialBLog/Brown Green Minimalist Furniture Sale Blog Banner (2).png"
import TheData from "../TheData/TheData";
import { BsPlus } from 'react-icons/bs';

const SocialHeader = () => {
    return (
        <div className="max-w-7xl mx-auto  ">
            
            <img className="" src={photo} alt="" />
            {/* <button className="rounded-full  bg-green-800 sticky r-0 mb-0 "> LInk</button> */}
           
            <TheData></TheData>
            <Link to="/socialBlog/addPost"
             style={{
                position: "fixed",
                bottom: "40px",
                right: "440px",
                zIndex: "999",
            }}
            
            className="rounded-full w-16   h-16   "
            > <BsPlus className="text-5xl rounded-full text-white bg-[#5c771e]  "/>
            
            </Link>

         <Link to="/socialBlog/addPost"
             style={{
                position: "fixed",
                bottom: "40px",
                right: "300px",
                zIndex: "999",
            }}
            
            className="rounded-full w-16 h-16 p-5 block md:hidden lg:hidden bg-[#5c771e]  "
            ><BsPlus className="text-5xl rounded-full text-white bg-[#5c771e]  "/> </Link>
           
        </div>
    );
};

export default SocialHeader