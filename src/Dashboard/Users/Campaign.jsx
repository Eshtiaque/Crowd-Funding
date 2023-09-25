import { AuthContext } from '../../Providers/AuthProvider';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
// import { FaBriefcase } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import MainButton from '../../Components/SharedComponents/MainButton';


const Campaign = () => {
    // const [campaigns] = useState(useLoaderData());
    const { user } = useContext(AuthContext)
    const [campaigns, setCampaigns] = useState([]);
    const [loading, setLoading] = useState(true);
    console.log(loading);

    const [searchText, setSearchText] = useState("");
    const [items, setItems] = useState([]);

    useEffect( () => {
        setLoading(true)
        fetch(`https://crowdfunding-gamma.vercel.app/individualCampaign/${user?.email}`)
        .then(result => result.json())
        .then(data=>{
            setCampaigns(data)
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

    console.log(campaigns);
  

    useEffect ( () => {
        document.title = "All Campaign's";
    },[])

    return (
        <div className='text-black px-10 w-full h-full mt-28 min-h-[80vh]'>
           
            <div className="flex flex-col md:flex-row gap-6 items-center justify-between mt-5">
                <h1 className="md:text-4xl text-2xl font-bold">
                    My Campaigns ({ campaigns.length }) 
                </h1>
                <div className="form-control mt-1 text-black ">
                <div className="search-box  text-center">
                <input
                    onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="ps-3 p-1 mt-5 rounded-lg bg-gray-300 text-black"
                    placeholder="Search Campaign "
                />{" "}
                <button onClick={handleSearch} className="btn btn-sm items-center  bg-gradient-to-br from-blue-600 to-purple-600 text-white m-4 hover:from-purple-600 hover:to-blue-600">Search</button>
            </div>
                </div>
                <div className="flex flex-row">
                    {/* <FaBriefcase></FaBriefcase> */}
                    <Link to="/dashboard/userAddCampaign"><MainButton text="Add Campaign"> </MainButton></Link>
                </div>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-5 mx-6 mt-12'>
                    {
                        campaigns?.map(campaign => <div className="card w-72 bg-gray-300" key={campaign._id}>
                            <figure><img className='h-44 w-full' src={campaign.img} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title text-black font-bold">{campaign.itemHeader}</h2>
                                <p className='text-sm'>Location: {campaign.location}</p>
                                <p className='text-sm'>Date: {campaign.date}</p>
                                <progress className="progress progress-primary bg-white w-56 h-3" value={campaign.progress} max="100" label="Completed"></progress>
                                <p>Progress: <span className='font-bold'>{campaign.progress}%</span> Completed!</p>
                                <div className="card-actions justify-end mt-2">
                                    <Link to={`/dashboard/userAllCampaign/${campaign?._id}`} >
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

export default Campaign;