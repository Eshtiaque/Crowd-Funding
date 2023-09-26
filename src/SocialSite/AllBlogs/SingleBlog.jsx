import { BiTimeFive } from 'react-icons/bi';
import { FcBusinessman } from 'react-icons/fc';
import { FiAlertCircle } from 'react-icons/fi';
import { BiSolidDownload } from 'react-icons/bi';
import { BsShare } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import SocialShare from './SocialShare';
import MainButton from '../../Components/SharedComponents/MainButton';


const SingleBlog = ({ item }) => {
    // const { user} =useContext(AuthContext)
    const { title, photo, date, name } = item;
    return (
        <div className='+'>
            {/* rounded-tr-full rounded-br-full rounded-tl-full */}
            <div className="card w-full p-4 shadow-xl">
                <figure><img className='h-56 w-full rounded-br-full ' src={photo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl">
                        Title: {title}

                    </h2>
                    <p className='flex gap-1 items-center'><FcBusinessman className='text-xl  ' />Author Name: {name}</p>
                    <div className="flex items-center gap-1 "><BiTimeFive className='text-xl font-black' />Date:  {date}</div>
                    <hr className='mt-2' />
                    <div className="card-actions justify-between items-center">
                        <div className='flex gap-5 mt-1 items-center '>
                            <button className="" onClick={() => document.getElementById('my_modal_4').showModal()}><FiAlertCircle className=" text-red-500 rounded p-1 text-3xl" /></button>
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box bg-[#050816]">
                                    <h3 className="font-bold text-lg  italic text-red-500">Important</h3>
                                    <p className="mt-3 text-red-300 ">Copyright in Canada
                                        As of 2023, copyright in Canada applies to your work automatically and lasts the author’s lifetime plus 70 years past their death.

                                        Previously, the protection only lasted for 50 years past the author’s death. </p>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                            <BiSolidDownload className="text-cyan-400  text-3xl p-1" />
                            {/* <BsShare/>Share */}
                            <button className="" onClick={() => document.getElementById('my_modal_2').showModal()}><BsShare className=" text-yellow-300  rounded p-1 text-2xl" /></button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box bg-[#050816]">
                                    <h3 className="font-bold text-lg  italic">Share Your Blog ...</h3>
                                    <p className="mt-3 "><SocialShare ></SocialShare></p>
                                </div>
                                <form method="dialog" className="modal-backdrop">
                                    <button>close</button>
                                </form>
                            </dialog>
                        </div>
                        {/* <Link to="/socialBlog/details"> */}
                        <Link to={`/socialBlog/details/${item?._id}`}>
                            <MainButton text="Read Blogs" > </MainButton>
                            {/* <div className="badge bg-[#5c771e]  text-white mt-3 py-3">Read Blogs</div> */}
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBlog;