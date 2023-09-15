import { useState  } from "react";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";

const AEvent = () => {
    const [data] = useState(useLoaderData());

    return (
        <div className="px-10 mt w-full h-full mt-28 mb-8">
            <div className="text-center mt-5">
                <h1 className="md:text-3xl text-xl text-[#130F49] font-semibold">
                    All Events ({data?.data?.length})
                </h1>
            </div>

            <div className="bg-base-300 py-6 rounded-xl mt-12">
                <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mx-6'>
                    {data?.data?.map((item) => (
                        <div className="card w-full bg-[#E9F9FF]" key={item._id}>
                            <figure><img className='h-44 w-full' src={item.image} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-base">{item.title}</h2>
                                <p className='text-xs'>{item.description}..</p>
                                <div className="mt-6">
                                    <hr />
                                    <div className="flex items-center justify-between">
                                        <div className="mt-4 flex items-center justify-center gap-4">
                                            <img src={item.publisher_image} alt="" className="w-8 h-8 rounded-full" />
                                        </div>
                                        <div className="card-actions justify-end mt-2">
                                            <Link to={`/dashboard/event/${item._id}`} className="py-2 px-4 border rounded-lg bg-[#98c292] font-semibold hover:bg-[#74df66]">Details!</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AEvent;