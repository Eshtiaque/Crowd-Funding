import { Link } from "react-router-dom";

import photo from "../../assets/SocialBLog/Green Minimalist Blog Post Linkedin Article Cover.png"
import { BsPlus } from 'react-icons/bs';
import AllBlogs from "../AllBlogs/AllBlogs";


const SocialHeader = () => {

   

    
    return (
        <div className="max-w-7xl mx-auto pt-16 ">
            
            <img className="" src={photo} alt="" />
            {/* <button className="rounded-full  bg-green-800 sticky r-0 mb-0 "> LInk</button> */}
           
            <AllBlogs></AllBlogs>
            <Link to="/socialBlog/addPost"
             style={{
                position: "fixed",
                bottom: "40px",
                right: "440px",
                zIndex: "999",
            }}
            
            className="rounded-full w-16   h-16   "
            > <BsPlus className="text-5xl  rounded-full  bg-gradient-to-br from-blue-600 to-purple-600  "/>
            
            </Link>

         <Link to="/socialBlog/addPost"
             style={{
                position: "fixed",
                bottom: "40px",
                right: "300px",
                zIndex: "999",
            }}
            
            className="rounded-full w-16 h-16 p-5 block md:hidden lg:hidden   "
            ><BsPlus className="text-5xl rounded-full text-white bg-gradient-to-br from-blue-600 to-purple-600  "/> </Link>
           
        </div>
    );
};

export default SocialHeader