import SharedBanner from "../Contact/SharedBanner";
import campaignPhoto from "../../assets/img/Final/10.jpg";
import campaignPhoto1 from "../../assets/img/Final/05.jpg";
import { Link } from "react-router-dom";

const Project = () => {
    return (
        <>
            <SharedBanner
                background={campaignPhoto}
                title="Projects"
                titleHead="Start your project"
                titleDes={
                    <>
                        We will help you to start a new project or to collect funds for disasters.
                    </>
                } />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-28 py-14 w-11/12 md:w-full mx-auto">
                {/* //two big card */}
                <div className="w-full mx-auto flex flex-col items-end">
                    <div>
                        <h2 className="text-center uppercase font-semibold">Start your project</h2>

                        <Link to="/form" className="card md:w-96 bg-base-100 shadow-xl mt-6 group cursor-pointer" title="Click me">
                            <figure><img src={campaignPhoto} alt="Shoes" className="group-hover:scale-105 duration-500 hover:duration-500" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Be an entrepreneur
                                </h2>
                                <p>Share your ideas and thoughts with us!</p>
                                <div className="card-actions justify-end mt-2">
                                    <div className="badge badge-outline">Ideas</div>
                                    <div className="badge badge-outline">Skills</div>
                                    <div className="badge badge-outline">Responsibility</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="w-full mx-auto flex flex-col items-start">
                    <div>
                        <h2 className="text-center uppercase font-semibold">Get help now</h2>

                        <Link to="/form" className="card md:w-96 bg-base-100 shadow-xl mt-6 group cursor-pointer" title="Click me">
                            <figure><img src={campaignPhoto1} alt="Shoes" className="group-hover:scale-105 duration-500 hover:duration-500" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Help disaster victims
                                </h2>
                                <p>Share detail and let us help the mankind!</p>
                                <div className="card-actions justify-end mt-2">
                                    <div className="badge badge-outline">Disaster</div>
                                    <div className="badge badge-outline">Help</div>
                                    <div className="badge badge-outline">Mankind</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;