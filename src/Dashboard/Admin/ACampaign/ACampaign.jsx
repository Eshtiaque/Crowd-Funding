import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const ACampaign = () => {
    const [campaigns] = useState(useLoaderData());

    return (
        <div className="px-10 mt w-full h-full mt-28 mb-8">
            <div className="text-center mt-5">
                <h1 className="md:text-3xl text-xl text-[#130F49] font-semibold">
                    All Campaigns ({campaigns.length})
                </h1>
            </div>
            <div className='bg-base-300 py-6 rounded-xl mt-12'>
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mx-6'>
                    {
                        campaigns?.map(campaign => <div className="card w-60 glass" key={campaign._id}>
                            <figure><img className='h-44 w-full' src={campaign.image} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-base">{campaign.header}</h2>
                                <p className='text-sm'>{campaign.location}</p>
                                <div className="card-actions justify-end mt-2">
                                    <Link to={`/dashboard/aCampaign/${campaign._id}`} className="py-2 px-4 border rounded-lg bg-[#98c292] font-semibold hover:bg-[#74df66]">Details!</Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ACampaign;