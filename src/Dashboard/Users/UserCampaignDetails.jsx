import { useLoaderData } from 'react-router-dom';

const UserCampaignDetails = () => {
    const data = useLoaderData();


    return (
        <div className='px-4 md:px-10 w-full h-full mt-28 md:mt-36 mb-8 text-black'>
            <h1 className='mt-4 text-center text-black text-xl md:text-2xl font-black bg-[#c7cac9] py-2 md:py-1 rounded-xl '>Campaigns Details</h1>

            <div className="card md:card-side mx-auto w-9/12 shadow-xl bg-base-300 mt-8 text-black">
                <div>
                <figure><img className='md:w-96 h-64 rounded-lg' src={data.img} alt="Movie" /></figure>
                </div>
                <div className="card-body">
                    <h2 className="card-title font-bold text-4xl">{data.itemHeader}</h2>
                    <p>Email: {data.email}</p>
                    
                    <p>Location: {data.location}</p>
                    <p>Date: {data.date}</p>
                    <progress className="progress progress-primary bg-white w-56 h-3" value={data.progress} max="100" label="Completed"></progress>
                                <p>Progress: <span className='font-bold'>{data.progress}%</span> Completed!</p>
                    

                </div>
                
            </div>
            <div className='card md:card-side mx-auto w-9/12 shadow-xl bg-base-300 mt-8 text-black p-12'>
                <p><span className='text-xl font-bold'>Description:</span> {data.desc}</p>
            </div>
        </div>
    );
};

export default UserCampaignDetails;