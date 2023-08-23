import { Link } from "react-router-dom";
import { AiOutlineFall } from 'react-icons/ai';
//[#F99F24]
const Card = ({ item }) => {
    const { image,
        title,
        description,
        publish_date,
        publisher_name,
        publisher_image } = item;
    return (
        <div className="card w-96 mb-5 text-white  shadow-none ">
           
           <div className="">
           <figure><img className="w-100% h-64 rounded-bl-full " src={image} alt="" /></figure>
          
           <AiOutlineFall className="absolute -mt-16 w-16 bg-transparent bg-rounded-full  text-[#F99F24] h-16"></AiOutlineFall>
           
           </div>
            <div className="card-body ">
                <h2 className="card-title">
                    {title}
                </h2>
                <p className="p-2">{description}</p>
                <hr className="h-px bg-[#F99F24] border-0 dark:bg-gray-700"/>

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
                    
                    <Link to="/about">
                        <button className="btn-xs rounded-bl-full ps-3 rounded-tr-full bg-[#F99F24]  text-black">Read More</button>
                    </Link>
                </div>

            </div>
        </div>

  
    );
};


export default Card;