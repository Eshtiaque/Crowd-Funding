import { Link, useLoaderData } from "react-router-dom";
import { BiTimeFive } from 'react-icons/bi';
import { FcBusinessman } from 'react-icons/fc';
import {FiEdit} from 'react-icons/fi';
import {RiDeleteBin6Line} from 'react-icons/ri';
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";




const Details = () => {
    const {user } = useContext(AuthContext)
    const singleDetails = useLoaderData();
    const { name, title, photo ,date,blog } = singleDetails;

    return (
        <div className="max-w-7xl mx-auto bg-slate-100">
            <img className="rounded-lg h-96 lg:mt-2 mx-auto" src={photo} alt="" />
            <div className="flex justify-between items-center m-5">
                <div>
                <h1 className="font-black lg:text-7xl md:text-5xl text-3xl my-3">{title}</h1>
                </div>
               
                <div className="">
               <Link><button className="btn mr-3 text-xl bg-green-300 hover:text-white hover:bg-black"><FiEdit/></button></Link>
               <Link><button className="btn text-white text-xl bg-[#fd092a] hover:text-red-400 hover:bg-black "><RiDeleteBin6Line/></button> </Link>
                </div>
            </div>
            <div className="lg:text-xl md:text:lg text:lg ps-3">
              <div className="flex items-center gap-2 mb-3">
              <FcBusinessman className="text-3xl rounded-full "/>
                <h3>Author Name: <span className="font-black text-xl pb-3">{name}</span></h3>
              </div>
                <div className="flex items-center gap-2">
                <BiTimeFive className="text-2xl bg-green-400 rounded-full"/> 
                <h3 className=""> Date: <span className="font-black text-xl pb-3 items-center">{date}</span></h3>
                </div>
            </div>
<hr className="m-5" />
           <div className="p-3">
           {blog}
           </div>
        </div>
    );
};

export default Details;