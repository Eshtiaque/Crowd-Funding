import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { BiTimeFive } from 'react-icons/bi';
import { FcBusinessman } from 'react-icons/fc';
import { FiEdit, FiMail } from 'react-icons/fi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FcLikePlaceholder } from 'react-icons/fc';
import { FaRegCommentAlt } from 'react-icons/fa';
import { BsShare } from 'react-icons/bs';
import Swal from "sweetalert2";
import SocialShare from "./SocialShare";



const Details = () => {
  const [like, setLike] = useState(450)
  const [isLike, setIsLike] = useState(false)

  const onclickButtonClick = () => {
    setLike(like + (isLike ? -1 : 1));
    setIsLike(!isLike);
  }

  const { user } = useContext(AuthContext)
  const [blogs, setBlogs] = useState([]);

  const navigate = useNavigate()

  const singleDetails = useLoaderData();
  const { _id, title, email, photo, date, blog, name } = singleDetails;


  const [, setPost] = useState([]);
  useEffect(() => {
    fetch(`https://crowdfunding-gamma.vercel.app/mySocialPost/${user?.email}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setPost(data);
      })
  }, [user.email])
  console.log(user.email);
  console.log(email);
  const id = _id
  console.log(id);

  const handleDelete = _id => {
    console.log(_id);
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to recover it!",
      textColor: '#0000',
      icon: 'warning',
      iconColor: 'red',
      background: 'black',
      Color: '#545454',
      showCancelButton: true,
      confirmButtonColor: '#F40D0D',
      cancelButtonColor: '#gray',
      // cancelButtonAriaLabel:'white',
      confirmButtonText: 'Delete ',
      confirmButtonTextColor: 'black'

    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`https://crowdfunding-gamma.vercel.app/myPost/${id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                'Deleted!',
                'Your Blog has been deleted.',
                'success'
              )
              navigate('/socialBlog')
              const remaining = blogs.filter(blog => blog._id !== _id)
              setBlogs(remaining);
            }
          })
      }
    })
  }

  return (
    <div className="max-w-7xl mx-auto ">
      <img className="rounded-lg h-96  mx-auto" src={photo} alt="" />
      <div className="flex justify-between items-center m-5">
        <div>
          <h1 className="font-black lg:text-7xl md:text-5xl text-3xl my-3">{title}</h1>
        </div>
        {
          user.email === email &&
          <>
            <div className="">
              <Link to={`/socialBlog/editPost/${_id}`}><button className="btn mr-3 text-xl bg-green-300 hover:text-white hover:bg-black"><FiEdit /></button></Link>
              <Link><button onClick={() => handleDelete(blog._id)} className="btn text-white text-xl bg-[#fd092a] hover:text-red-400 hover:bg-black "><RiDeleteBin6Line /></button> </Link>
            </div>
          </>
        }



      </div>
      <div className="lg:text-xl md:text:lg text:lg ps-3">
        <div className="flex items-center gap-2 mb-3">
          <FcBusinessman className="text-3xl rounded-full " />
          <h3>Author Name: <span className="font-black text-xl pb-3">
            {name}</span></h3>
        </div>
        <div className="flex items-center gap-2 mb-3">
          <FiMail className="text-2xl text-red-500 rounded-full " />
          <h3> Email: <span className="font-black text-xl pb-3">{email}</span></h3>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <BiTimeFive className="text-2xl bg-green-400 rounded-full" />
            <h3 className=""> Date: <span className="font-black text-xl pb-3 items-center">{date}</span></h3>
          </div>

          <div className='flex gap-7 mr-9 items-center justify-end '>
            <p className="font-black">{like}</p>
            <FcLikePlaceholder onClick={onclickButtonClick} className='text-3xl ' />
            <FaRegCommentAlt className="text-cyan-400  text-3xl p-1" />

            <button className="" onClick={() => document.getElementById('my_modal_2').showModal()}><BsShare className=" bg-yellow-300 text-black rounded p-1 text-2xl" /></button>
            <dialog id="my_modal_2" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-black italic">Share Your Blog ...</h3>
                <p className="mt-3"><SocialShare ></SocialShare></p>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>

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