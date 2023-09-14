// import axios from 'axios';
import { useState } from 'react';
import { useLoaderData } from 'react-router';
import { toast } from 'react-toastify';

const EventDetails = () => {
  const [data,] = useState(useLoaderData());

  const handleAction = (id) => {
    const updatedStatus = data.status === 'pending' ? 'approved' : 'approved';
    const updatedData = { ...data, status: updatedStatus };

    fetch(`https://crowdfunding-gamma.vercel.app/event/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('set-token-for-user')}`
      },
      body: JSON.stringify(updatedData)
    })
      .then(res => res.json())
      .then(result => {
        if (result.modifiedCount > 0) {
          toast.success("modified successfully");
        }
      })
      .catch(error => console.log(error));
  };


  return (
    <div className='text-white min-h-screen lg:min-h-fit mt-36 '>
      <h1 className='-mt-4 text-center text-2xl font-bold'>{data.publisher_name}'s Event Details</h1>

      <p className='text-yellow-700 text-lg font-semibold text-center my-2 uppercase'>{data.status}</p>
      <hr className='md:w-8/12 mx-auto mt-4 mb-8' />

      <div className='flex flex-col items-center gap-6 mx-10 md:my-5 mt-10'>
        <div className='flex items-center justify-around gap-4'>
          <img src={data.publisher_image} alt="" className='w-14 h-14 rounded-full border' />
          <p className='text-yellow-700 text-lg font-semibold'>Publisher: <span className='text-gray-300'>{data.publisher_name}</span></p>
          <p className='text-yellow-700 text-lg font-semibold'>Email: <span className='text-gray-300'>{data.email ? data.email : 'N/A'}</span></p>
        </div>

        <hr className='my-3 w-full' />
        <div className='space-y-6 mt-10 md:mt-0 flex flex-col items-center'>
          <img src={data.image} alt="" className='w-80 rounded-xl' />
          <div>
            <p className='text-justify text-gray-300'>
              <small className='font-bold text-xl text-yellow-700'>Event Title: </small>
              {data.title}
            </p>

            <p className='text-justify text-gray-300 my-2'>
              <small className='font-bold text-xl text-yellow-700'>Description: </small>
              {data.description}
            </p>

            <p className='text-gray-300 text-lg'>
              <small className='font-semibold text-yellow-700'>Publish date: </small>
              {data.publish_date}
            </p>

            <div className='flex justify-end'>
              <button onClick={() => handleAction(data._id)} disabled={data.status === "approved"} className="btn btn-warning text-white">{data.status === "approved" ? 'Approved' : 'Approve'}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;