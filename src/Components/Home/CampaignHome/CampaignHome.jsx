import { Link } from "react-router-dom";
import image from "../../../assets/img/others img/mohammed-ibrahim-jrcvHflmKvg-unsplash.jpg";



const CampaignHome = () => {
    return (
        <div className="bg-[#EEF7FF] p-6">
            <h1 className="text-center text-3xl font-bold pt-5 mb-3">Feature Campaigns</h1>
            <hr className="w-32 border-2 rounded border-orange-400 mx-auto mt-1" />
            <div className="grid lg:grid-cols-2 grid-cols-1 mt-7 gap-16">
                <div className="grid lg:grid-cols-1 grid-cols-1">
                    <div>
                        <h2 className="text-2xl font-bold">Donate  on our ongoing projects today.</h2>
                        <p className="text-lg mt-4">Your small contribution can bring smile and happiness to a family. Donate for Palestinian people in this war period against the Israeli Military Force. </p>
                        <p className="text-lg mt-4">Donate today and spread love and joy to the people.</p>
                        <p className="text-lg mt-4">We are the dreamers who dream to make the world a better home.</p>
                    </div>
                </div>
                <div className="grid lg:grid-cols-2 grid-cols-1 bg-[#EEEEEE] p-5">
                    <div>
                        <h1 className="text-2xl font-bold">Emergency support for Palestinian crisis.</h1>
                        <p className="text-lg">Donate for Palestinian people in this war period against the Israeli Military Force. </p>
                        <progress className="progress progress-warning w-56 mt-6" value="50" max="100"></progress>
                        <p className="text-lg">50% Raised</p>
                        <p className="text-lg mt-3 mb-4">Goal: $5000</p>
                    </div>
                    <div className="">
                        <div className="carousel ">
                            <div id="slide1" className="carousel-item relative w-full">
                                <img src={image} className="w-80 h-48" />
                                <div className="absolute transform left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn glass">❮</a> 
                                <a href="#slide2" className="btn glass">❯</a>
                                </div>
                            </div> 
                            <div id="slide2" className="carousel-item relative w-full">
                                <img src={image} className="w-80 h-48" />
                                <div className="absolute transform  left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn glass">❮</a> 
                                <a href="#slide3" className="btn glass">❯</a>
                                </div>
                            </div> 
                            <div id="slide3" className="carousel-item relative w-full">
                                <img src={image} className="w-80 h-48" />
                                <div className="absolute transform left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn glass">❮</a> 
                                <a href="#slide4" className="btn glass">❯</a>
                                </div>
                            </div> 
                            <div id="slide4" className="carousel-item relative w-full">
                                <img src={image} className="w-80 h-48" />
                                <div className="absolute transform left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn glass">❮</a> 
                                <a href="#slide1" className="btn glass">❯</a>
                                </div>
                            </div>
                        </div>
                        <Link to="/donate">
                        <button className="btn bg-[#F99F24] text-white mt-1">Donate Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CampaignHome;