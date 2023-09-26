import { useLoaderData } from 'react-router-dom';

const UserEventDetails = () => {
    const data = useLoaderData();


    return (
        <div className='px-4 md:px-10 w-full h-full mt-28 md:mt-36 mb-8 text-black'>
            <h1 className='mt-4 text-center text-black text-xl md:text-2xl font-black bg-[#c7cac9] py-2 md:py-1 rounded-xl '>Events Details</h1>

            <div className="card md:card-side mx-auto w-11/12 shadow-xl bg-base-300 mt-8 text-black">
                <div>
                <figure><img className='md:w-72 lg:w-96 h-64 rounded-lg' src={data.image} alt="Movie" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold text-4xl">{data.title}</h2>
                    <p>Email: {data.email}</p>
                    <div className='grid grid-cols-2 gap-12'>
                        <div className='hidden lg:block md:hidden'></div>
                        <progress className="progress w-56"></progress>
                        <progress className="progress w-56 hidden lg:block md:hidden"></progress>
                        <div className=''></div>
                    </div>
                    <div className='flex justify-between'>
                        <div>
                        <p>Date: {data.publish_date}</p>
                        <p>Status: <span className='text-red-500'>{data.status}</span></p>
                        </div>
                        <div className='flex text-center items-center gap-5'>
                        <p className='font-bold'> {data.publisher_name}</p>
                        <img className='w-12 h-12 rounded-full' src={data.publisher_image} alt="" />
                        </div>
                    </div>
                </div>
                
            </div>
            <div className='card md:card-side mx-auto w-11/12 shadow-xl bg-base-300 mt-8 text-black p-12'>
                <p><span className='text-xl font-bold'>Description:</span> {data.description}</p>
            </div>
        </div>
    );
};

export default UserEventDetails;