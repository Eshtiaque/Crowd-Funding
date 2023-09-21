import SharedBanner from "../Contact/SharedBanner";
import img from "../../assets/images/blogsNews.webp"
import img5 from "../../assets/img/others img/jeremias-ybanez-fqFm_YJGHZk-unsplash.jpg"
import img6 from "../../assets/img/others img/jordy-meow-Osd4ngHD4kM-unsplash.jpg"
import img7 from "../../assets/img/others img/josh-appel-NeTPASr-bmQ-unsplash.jpg"
import Comments from "./Comments/Comments";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import { FcLike } from 'react-icons/fc';
import { AiFillDelete } from 'react-icons/ai';
import { FaShare } from 'react-icons/fa';

const AllNews = () => {

    const { user } = useContext(AuthContext);
    const [comment, setComment] = useState([]);
    // const [, setLoading] = useState(true)
    useEffect(() => {
       
        fetch("http:localhost:5000/allComments")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setComment(data);
                
            })
    }, [user])
    return (

        <div className="max-w-7xl mx-auto">
            <div className="max-w-7xl mx-auto  ">
                <div className="">
                    <SharedBanner
                        background={img}
                        title="Our Blogs"
                        titleHead="Creating blog with daily News"
                        titleDes={
                            <>
                                We Create blog for World-Wide Problem and its solution. and trying to create a helping hand.
                            </>
                        }
                    ></SharedBanner>
                </div>
                <div>
                    <h1 className="text-lg p-8"><span className="text-[#F99F24] text-3xl font-black">Crowdfunding</span> has revolutionized the way individuals, startups, and organizations raise funds for their projects and initiatives. A plethora of dedicated blogs provide valuable insights and guidance to navigate the intricacies of this dynamic fundraising landscape. For instance, the Kickstarter Blog offers campaign success stories and valuable campaign strategies, while the Indiegogo Blog delves into crowdfunding trends and showcases diverse projects. Crowdfund Insider serves as a hub for news and analysis across the crowdfunding and fintech sectors.
                    <hr className="border  w-100% h-1  p-4 bg-gradient-to-t from-[#F99F24] from-50%  to-black to-90% flex flex-col" /> BackerKit Blog specializes in post-campaign management, aiding creators in fulfillment processes. Crowdfunding Insider covers both sides of the crowdfunding equation, serving campaign creators and investors alike. Seedrs Blog focuses on equity crowdfunding and startup investment, while Crowdfund Talks provides a wealth of strategies and case studies. Meanwhile, platforms like Fundable and Crowdfunding Heroes offer tailored advice and inspirational stories, making these blogs essential resources for anyone navigating the crowdfunding landscape.</h1>
                </div>


                <div className="text-center mt-8">
                    <h2 className="text-3xl font-bold "> All Blogs</h2>
                    <hr className="border-b-[3px] w-[164px] mt-1 mb-5 border-[#F99F24] mx-auto" />
                </div>
            </div>
            <div className="max-w-7xl mx-auto 
            grid lg:grid-flow-col md:grid-flow-col grid-flow-col-none grid-cols-1 gap-3">
                <div className="col-span-5 text-center mt-8">
                    {/* News section */}

                    <h2 className="text-xl font-bold ">World-wide Blogs</h2>
                    <hr className=" border-b-[3px] w-[164px] mt-1 mb-5 border-[#F99F24] mx-auto" />
                    <div className="grid-cols-1 p-3 justify-between ">

                        <div className="flex gap-2 my-1   ">
                            <div>
                                <img className="rounded-lg lg:w-40 w-72" src={img5} alt="" />
                            </div>
                            <div>
                                <p className="text-slate-400">News , 26 july 2023</p>
                                <h2>Meet people and life-changing teachers<br /> in need of your support.please help them.</h2>
                            </div>
                        </div>
                        <div className="flex gap-2 my-5">
                            <div>
                                <img className="rounded-lg lg:w-40 w-72" src={img6} alt="" />
                            </div>
                            <div>
                                <p className="text-slate-400">News , 26 july 2023</p>
                                <h2>Donate to help children fight hunger<br /> and malnutrition. Sponsor a Food kit today.</h2>
                            </div>
                        </div>
                        <div className="flex gap-2 my-5 ">
                            <div>
                                <img className="rounded-lg lg:w-40 w-72" src={img7} alt="" />
                            </div>
                            <div>
                                <p className="text-slate-400">News , 26 july 2023</p>
                                <h2>create your own fund for helping people.<br />give them food and beautiful future</h2>

                            </div>
                        </div>
                        <div className="flex gap-2 my-5">
                            <div>
                                <img className="rounded-lg lg:w-40 w-72" src={img6} alt="" />
                            </div>
                            <div>
                                <p className="text-slate-400">News , 26 july 2023</p>
                                <h2>Donate to help children fight hunger<br /> and malnutrition. Sponsor a Food kit today.</h2>
                            </div>
                        </div>
                        <div className="flex gap-2 my-1   ">
                            <div>
                                <img className="rounded-lg lg:w-40 w-72" src={img5} alt="" />
                            </div>
                            <div>
                                <p className="text-slate-400">News , 26 july 2023</p>
                                <h2>Meet people and life-changing teachers<br /> in need of your support.please help them.</h2>
                            </div>
                        </div>
                        <div className="flex gap-2 my-5 ">
                            <div>
                                <img className="rounded-lg lg:w-40 w-72" src={img7} alt="" />
                            </div>
                            <div>
                                <p className="text-slate-400">News , 26 july 2023</p>
                                <h2>create your own fund for helping people.<br />give them food and beautiful future</h2>

                            </div>
                        </div>

                    </div>
                </div>
               
                <div className="lg:col-span-2 col-span-1  ">
                    {/* comment section */}
                    {/* <hr  className="border h-96 w-0"/> */}
                    <div className="text-center mt-8 ">
                        <h2 className="text-xl font-bold ">Comments</h2>
                        <hr className=" border-b-[3px] w-[164px] mt-1 mb-5 border-[#F99F24] mx-auto" />
                        {/* comment UI */}
                        <Comments></Comments>

                    </div>
                    {/* user comments */}
                    <div className="bg-white mt-5 mb-5 text-black lg:text-left text-center ">
                        { user &&
                            comment.map(com =>
                             <div key={com} >
                                <div className="grid grid-cols-2 ">
                                    <div className="flex gap-3">
                                        <div className=" text-neutral-content  w-12">
                                            <img className="rounded-full w-12 h-12"
                                                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png" alt="" />
                                        </div>
                                        <p className="my-2 text-lg">{user.displayName}</p>
                                    </div>
                                    <div className="flex gap-3 my-2 justify-end">

                                        <button className=" text-xl">
                                            <FcLike /></button>
                                        <button className="text-xl text-cyan-500"><FaShare /></button>
                                        <button className="text-xl text-red-800 mr-3"><AiFillDelete /></button>

                                    </div>
                                </div>


                                <p className="bg-slate-400 p-3 rounded-lg mb-3 mt-3 ms-14">{com.text}</p>


                            </div>)
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllNews;
{/* <hr  className="border h-96 w-1 bg-gradient-to-t from-[#F99F24] from-50%  to-black to-90% flex flex-col"/> */ }