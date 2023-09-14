import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ACampaign = () => {
    const [campaigns] = useState(useLoaderData());

    return (
        <div className='bg-black px-10 w-full h-full mt-28 text-white min-h-[80vh]'>
           
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mt-5">
                <h1 className="md:text-4xl text-2xl text-orange-300 normal-case font-semibold">
                    All Campaigns ({ campaigns.length})
                </h1>
                <div className="form-control mt-1 text-black">
                    <div >
                        <form className="input-group" onSubmit="">
                            <input
                                type="text"
                                name="search"
                                placeholder="Search…"
                                className=" input input-bordered border border-black rounded-full text-black placeholder-black
                bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%"
                            />
                            <button className="btn  border border-black rounded-full text-black placeholder-black
                bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                    />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-16 mx-6'>
                {
                    campaigns?.map(campaign => <div className="card w-60 glass" key={campaign._id}>
                        <figure><img className='h-44 w-full' src={campaign.image} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-base">{campaign.header}</h2>
                            <p className='text-sm'>{campaign.location}</p>
                            <div className="card-actions justify-end mt-2">
                                <Link to={`/dashboard/aCampaign/${campaign._id}`} className="btn btn-sm bg-[#F99F24]">Details!</Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ACampaign;