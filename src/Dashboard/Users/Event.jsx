
import { AuthContext } from '../../Providers/AuthProvider';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
// import { FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Event = () => {
    // const [campaigns] = useState(useLoaderData());
    const { user } = useContext(AuthContext)
    const [events,setEvents] = useState([]);
    const [loading, setLoading] = useState(true)
    console.log(loading);

    useEffect( () => {
        setLoading(true)
        fetch(`https://crowdfunding-gamma.vercel.app/individualEvent/${user?.email}`)
        .then(result => result.json())
        .then(data=>{
            setEvents(data)
            setLoading(false)
        })
    },[user])

    console.log(events);
  

    useEffect ( () => {
        document.title = "All Event's";
    },[])

    return (
        <div className='bg-black px-10 w-full h-full mt-28 text-white min-h-[80vh]'>
           
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mt-5">
                <h1 className="md:text-4xl text-2xl text-orange-300 normal-case font-semibold">
                    All Events ({ events.length }) 
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
                <div className="flex flex-row hover:bg-orange-400">
                    {/* <FaBriefcase></FaBriefcase> */}
                    <Link className="btn border-2 border-orange-300 hover:bg-orange-300 hover:text-black bg-black text-orange-300 font-bold w-full rounded-none m-0" to="/dashboard/userAddEvent"> Add Event</Link>
                </div>
            </div>

            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-5 mt-16 mx-6'>
                {
                    events?.map(event => <div className="card w-60 glass" key={event.email}>
                        <figure><img className='h-44 w-full' src={event.eventPhotoURL} alt="" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-base">{event.eventTile}</h2>
                            <p className='text-sm'>Date: {event.publishedDate}</p>
                            <p className='text-sm'>{event.details}</p>
                            <div className='flex gap-3'>
                            <h2 className="card-title text-base">Publisher: {event.eventPublisherName}</h2>
                            <img className='rounded-full w-12 h-12' src={event.userPhotoURL} alt="" />
                            </div>
                            {/* <div className="card-actions justify-end mt-2">
                                <Link to={`/individualCampaign/${event._id}`} className="btn btn-sm bg-[#F99F24]">Details!</Link>
                            </div> */}
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Event;