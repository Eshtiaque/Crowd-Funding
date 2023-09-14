import axios from "axios";
import { useState, useEffect } from "react";
import { FaUndoAlt } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AEvent = () => {
    const [data, setData] = useState(useLoaderData());
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = () => {
        setIsLoading(true);
        axios
            .get("https://crowdfunding-gamma.vercel.app/blogsSearch")
            .then((result) => {
                setData(result.data);
                setIsLoading(false);
                toast.success("Data refreshed");
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setIsLoading(false);
            });
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const search = e.target.search.value;
        axios
            .get(`https://crowdfunding-gamma.vercel.app/blogsSearch/${search}`)
            .then((result) => setData(result.data));
    };

    const handleRefresh = () => {
        fetchData();
    };

    return (
        <div className="bg-black px-10 w-full h-full mt-28 text-white min-h-[80vh]">
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mt-5">
                <h1 className="text-2xl md:text-4xl text-orange-300 normal-case font-semibold">
                    All Events ({data?.data?.length})
                </h1>
                <div className="form-control mt-1 text-black">
                    <div>
                        <form onSubmit={handleSearch} className="input-group">
                            <input
                                name="search"
                                type="text"
                                placeholder="Search…"
                                className="input input-bordered border border-black rounded-full text-black placeholder-black bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%"
                            />
                            <button className="btn border border-black rounded-full text-black placeholder-black bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%">
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
            <div className="flex items-end justify-end my-4">
                <p
                    className="flex items-center justify-center gap-2 cursor-pointer hover:scale-95 hover:duration-300 duration-300"
                    onClick={handleRefresh}
                >
                    <FaUndoAlt></FaUndoAlt>Refresh
                </p>
            </div>

            <div className="overflow-x-auto">
                {isLoading ? (
                    <div className="text-center text-gray-500 text-lg my-8">
                        Refreshing...
                    </div>
                ) : (
                    <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-5 mt-10 mx-6'>
                        {data?.data?.map((item) => (
                            <div className="card w-full glass" key={item._id}>
                                <figure><img className='h-44 w-full' src={item.image} alt="" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-base">{item.title.slice(0,19)}..</h2>
                                    <p className='text-xs'>{item.description.slice(0, 55)}..</p>
                                    <div className="mt-6">
                                        <hr />
                                        <div className="flex items-center justify-between">
                                            <div className="mt-4 flex items-center justify-center gap-4">
                                                <img src={item.publisher_image} alt="" className="w-8 h-8 rounded-full" />
                                                {/* <h2 className="text-xs">{item.publisher_name}</h2> */}
                                            </div>
                                            <div className="card-actions justify-end mt-2">
                                                <Link to={`/dashboard/event/${item._id}`} className="btn btn-sm bg-[#F99F24]">Details!</Link>
                                            </div>
                                        </div>
                                   </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default AEvent;
