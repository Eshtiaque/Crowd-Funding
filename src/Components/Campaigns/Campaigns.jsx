import { useEffect } from "react";
import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsSearch } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useRef } from "react";
import Pagination from './Pagination';
import FetchData from "./FetchData";
import SharedBanner from "../Contact/SharedBanner";
import campaignPhoto from "../../assets/img/section-banner/melanie-lim-SkMBbB9gjQc-unsplash.jpg";
import { BarLoader } from "react-spinners";
import bg from "../../assets/Video/wallpaperflarecom_wallpaper.jpg"
import { motion, useInView, useAnimation } from "framer-motion"
import MainButton from "../SharedComponents/MainButton";
import MainTitle from "../SharedComponents/MainTitle";



const Campaigns = () => {
    const campaignsRef = useRef();
    const totalData = 3;
    const { pages, setCurrentPage } = FetchData();
    const [searchText, setSearchText] = useState('');
    const [filteredCampaigns, setFilteredCampaigns] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const filtered = pages.filter(campaign => {
            const searchTerm = searchText.toLowerCase();
            const headerMatch = campaign.header.toLowerCase().includes(searchTerm);
            const locationMatch = campaign.location.toLowerCase().includes(searchTerm);
            return headerMatch || locationMatch;
        });

        setTimeout(() => {
            setFilteredCampaigns(filtered);
            setIsLoading(false);
        }, 1000);
    }, [searchText, pages]);
    //className="bg-cover bg-center bg-no-repeat  max-w-7xl mx-auto " style={{ backgroundImage: `url(${bg})` }}

    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        }
    }, [isInView])




    return (
        <div ref={ref}>
            {/* <div className="max-w-7xl mx-auto bg-cover bg-center bg-no-repeat " ref={campaignsRef} style={{ backgroundImage: `url(${bg})` }}> */}
            <div className="max-w-7xl mx-auto " ref={campaignsRef}>
                <SharedBanner
                    background={campaignPhoto}
                    title="Campaigns "
                    titleHead="Our on going campaigns"
                    titleDes={
                        <>
                            We have launched several event to help the refugee people from Lebanon and Syria.
                        </>
                    }
                ></SharedBanner>
                <motion.div className="text-center mt-8"
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 }
                    }}
                    initial="hidden"
                    animate={mainControls}
                    transition={{ duration: 0.9, delay: 1 }}

                >
                    {/* <h2 className="text-3xl text-white font-bold p-2">Our All Country Campaigns</h2>
                    <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto " /> */}
                <MainTitle heading="Our All Country Campaigns"></MainTitle>
                </motion.div>
                <div className="mt-4 mb-4 relative w-10/12 mx-auto md:w-[20%] ">
                    <input
                        type="text"
                        placeholder="Type Here..."
                        value={searchText}
                        onChange={e => setSearchText(e.target.value)}
                        className="w-full px-4 py-2 mt-3  border border-black rounded-full text-black placeholder-black
                    bg-gradient-to-r from-[#c6c6c6] from-10% to-white to-90%"
                    />
                    <BsSearch className="absolute top-[46%] right-6 text-black" />
                </div>
                {isLoading ? (
                    <div className="w-full flex items-center justify-center">
                        <BarLoader />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:p-12 md:p-12">
                        {filteredCampaigns
                            .filter(campaign => campaign.status === 'approved') // Filter by status
                            .map(({ _id, image, location, header, desc, date, progress }) => {
                                return (
                                    <div key={_id} className="card card-compact md:w-96 w-11/12 mx-auto bg-[#0a102b] shadow-xl group">
                                        <figure>
                                            <img src={image} alt="image" className="w-full h-60 group-hover:scale-105 duration-500 hover:duration-500" />
                                            <span className="absolute text-white left-2 bottom-[58%] md:bottom-[52%] text-sm bg-black bg-opacity-50 rounded font-semibold flex items-center gap-2 px-1"><FaLocationDot /> {location}</span>
                                        </figure>
                                        <div className="card-body">
                                            <div className="flex items-center justify-between">
                                                <progress className="progress progress-warning w-56" value={progress} max="100"></progress>
                                                <span className="text-gray-600">{date}</span>
                                            </div>
                                            <h2 className="card-title pt-2">{header}</h2>
                                            <p>{desc}</p>
                                            <div className="card-actions justify-end">
                                                <Link to="/donate">
                                                    {/* <button className="px-3 py-2 bg-[#F99F24] text-white font-semibold shadow-2xl hover:bg-[#fd9400] rounded text-md">Donate Now</button> */}
                                                    <MainButton text="Donate Now"></MainButton>

                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                    </div>
                )}
                <Pagination totalData={totalData} setCurrentPage={setCurrentPage} />

            </div>
        </div>
    );
};

export default Campaigns;