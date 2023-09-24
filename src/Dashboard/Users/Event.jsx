import { AuthContext } from '../../Providers/AuthProvider';
import { Link } from 'react-router-dom';
import MainButton from '../../Components/SharedComponents/MainButton';
import { useContext, useEffect, useState } from 'react';


const Event = () => {
    // const [events] = useState(useLoaderData());
    const { user } = useContext(AuthContext)
    const [events, setevents] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(loading);

    const [searchText, setSearchText] = useState("");
    const [items, setItems] = useState([]);

    useEffect( () => {
        setLoading(true)
        fetch(`https://crowdfunding-gamma.vercel.app/individualEvent/${user?.email}`)
        .then(result => result.json())
        .then(data=>{
            setevents(data)
            setLoading(false)
        })
    },[user])

    const handleSearch = () => {
        fetch(`https://crowdfunding-gamma.vercel.app/searchText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setItems(data);
            });
    };

    console.log(events);
  

    useEffect ( () => {
        document.title = "All Event's";
    },[])

    return (
        <div className='text-black px-10 w-full h-full mt-28 min-h-[80vh]'>
           
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mt-5">
                <h1 className="md:text-4xl text-2xl font-bold">
                    My events ({ events.length }) 
                </h1>
                <div className="form-control mt-1 text-black ">
                <div className="search-box  text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="ps-3 p-1 mt-5 rounded-lg bg-gray-300 text-black"
                    placeholder="Search event "
                />{" "}
                <button onClick={handleSearch} className="btn btn-sm items-center  bg-gradient-to-br from-blue-600 to-purple-600 text-white m-4 hover:from-purple-600 hover:to-blue-600">Search</button>
            </div>
                </div>
                <div className="flex flex-row">
                    {/* <FaBriefcase></FaBriefcase> */}
                    <Link to="/dashboard/userAddEvent"><MainButton text="Add event"> </MainButton></Link>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 mx-6 mt-12'>
                    {
                        events?.map(event => <div className="card w-72 bg-gray-300" key={event._id}>
                            <figure><img className='h-44 w-full' src={event.image} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-black font-bold">{event.title}</h2>
                                <p className='text-sm'>Publisher Name: {event.publisher_name}</p>
                                <p className='text-sm'>Date: {event.publish_date}</p>
                                <p>Status: {event.status}</p>
                                <div className="card-actions justify-end mt-2">
                                    <Link to={`/dashboard/userAllEvent/${event?._id}`} >
                                        <MainButton text="Details!" > </MainButton>
                                    </Link>
                                </div>
                            </div>
                        </div>)
                    }
                </div>
        </div>
    );
};

export default Event;