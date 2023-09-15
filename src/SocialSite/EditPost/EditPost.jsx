import {  useLoaderData, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const EdiPost = () => {
    const navigate =useNavigate()
  const data = useLoaderData();
  const id = data?._id
  console.log(id);
  const handleUpdate =event =>{
    event.preventDefault();
    const form =event.target;
    const date = form.date.value;
    const title = form.title.value;
    const name = form.name.value;
    const email = form.email.value;
    const blog = form.blog.value;
    console.log(date,email,blog,title ,name);
    form.reset();
    console.log(data.name);
    const update ={date , email,blog ,title ,name};
    fetch(`https://crowdfunding-gamma.vercel.app/allPost/${data?._id}`,{
      method:"PATCH",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify(update)
    })
    .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.modifiedCount>0){
                  Swal.fire({
                    background:'black',
                    position: 'center',
                    icon: 'success',
                    title: 'Your Blog has been updated',
                    showConfirmButton: false,
                    timer: 1500
                  })
                  navigate(`/socialBlog/details/${id}`)
                  
                }
            })
            
  }

  return (
    <div>
      <h1 className="text-center m-2   p-4 font-black text-4xl text-[#5c771e]  rounded-full">Update Blogs</h1>
      {/* <h1 className="text-center text-black font-black text-xl m-2">Name :
      {data?.name}</h1> */}
      <form onSubmit={handleUpdate} className=" max-w-7xl mx-auto grid  w-full lg:ps-1 md:ps-2 p-4">
      <h2 className="font-bold text-4xl mt-3  mb-5 ps-3">Title :</h2>
        <input type="text" name="title" defaultValue={data?.title} placeholder="Type here" className="p-2  w-full text-black " />
        <hr className="border border-gray-400 mb-3" />
        <h2 className="text-black font-bold text-xl mt-5">Author Name :</h2>
        <input type="text" name="name" defaultValue={data?.name}  placeholder="Type here" className="p-3  w-2/4 text-black border rounded-3xl" />
        <br />
        <h2 className="text-black font-bold text-xl mt-5">Email :</h2>
        <input type="text" name="email" defaultValue={data?.email}  placeholder="Type here" className="p-3  w-2/4 text-black border rounded-3xl" />
        <br />
        <h2 className="text-black font-bold text-xl ">Date :</h2>
        <input type="date" name="date" defaultValue={data?.date} placeholder="Type here" className="p-3   w-2/4 text-black border rounded-3xl" />
        <br />
       
        <h2 className="text-black font-bold text-xl">Blog</h2>
        <input type="text" name="blog" defaultValue={data?.blog}  placeholder="Type here" className=" mt-3 w-full items-start pb-48 text-black p-2   border rounded-lg " />
        <input className="btn bg-[#5c771e] text-white
                       hover:text-black   w-full mt-3 mb-3 " type="submit" />


      </form>
      
    </div>
  );
};
export default EdiPost;