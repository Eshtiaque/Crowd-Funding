import { BiTimeFive } from 'react-icons/bi';
import { FcBusinessman } from 'react-icons/fc';
import {FcLikePlaceholder} from 'react-icons/fc';
import {FaRegCommentAlt} from 'react-icons/fa';
import {BsShare} from 'react-icons/bs';
import { Link } from 'react-router-dom';

const SingleBlog = ({ item }) => {
    const { name, title, photo ,date } = item;
    return (
        <div className='+'>
            {/* rounded-tr-full rounded-br-full rounded-tl-full */}
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img className='h-56 w-full' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">
                        Title: {title}
                        
                    </h2>
                    <p className='flex gap-1 items-center'><FcBusinessman className='text-xl  '/>Author Name: {name}</p>
                    <div className="flex items-center gap-1 "><BiTimeFive className='text-xl font-black'/>Date:  {date}</div>
                    <hr className='mt-2'/>
                    <div className="card-actions justify-between">
                        <div className='flex gap-5 mt-3 items-center '>
                            <FcLikePlaceholder className='text-xl '/>
                            <FaRegCommentAlt/>
                            <BsShare/>Share
                        </div>
                        {/* <Link to="/socialBlog/details"> */}
                       <Link to={`/socialBlog/details/${item?._id}`}>
                       <div className="badge bg-[#5c771e]  text-white mt-3 py-3">Read Blogs</div>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;