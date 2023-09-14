// import axios from 'axios';
import  { useState } from 'react';
import { useLoaderData } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const ProjectDescription = () => {
  const [data, ] = useState(useLoaderData());
  const navigate = useNavigate();
 
  const handleAction = (id) => {

    const saveUser = {
      status: "approved",
    }
    fetch(`https://crowdfunding-gamma.vercel.app/blogsUpdate/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('set-token-for-user')}`
      },
      body: JSON.stringify(saveUser)
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount > 0) {
          toast.success("modified successfully");
          navigate("/dashboard/allProject");
        }
      })
      .catch(error => console.log(error))
  }
 
  return (
    <div className=' text-white min-h-screen lg:min-h-fit mt-36 lg:mt-0'>
      <h1 className='-mt-4 text-center text-2xl font-bold'>{data.name} project description idea</h1>
      <hr  className='md:w-8/12 mx-auto mt-4 mb-8'/>
      <div className='md:flex flex-row mx-10 md:my-5 mt-10'>
        <div className='basis-1/2 space-y-3'>
          <h1 className='my-2'>Name: {data.name}</h1>
          <p className='my-2'>Phone: {data.phone}</p>
          <p className='my-2'>Email: {data.email}</p>
          <p className='my-2'>Address: {data.address}</p>
          <p className='my-2'>Country: {data.country}</p>
          <p className='my-2'>Status: {data.status}</p>
        </div>
        <div className='md:basis-1/2 space-y-6 mt-10 md:mt-0'>
          <p className='my-2'><small className='font-bold text-2xl'>Project Idea: </small>{data.ideas}</p>
          <p className='my-2'><small className='font-bold text-2xl'>Project Money: </small>{data.money}</p>
          <button onClick={() => handleAction(data._id)} disabled={data.status === "approved"} className="btn btn-warning text-white my-5">{data.status === "approved"? 'Approved': 'Approve'}</button>
        </div>      
      </div>
    </div>
  );
};

export default ProjectDescription;