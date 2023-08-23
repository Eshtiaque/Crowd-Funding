import SharedBanner from "../Contact/SharedBanner";
import campaignPhoto from "../../assets/img/Final/10.jpg";
import project from "../../assets/img/Final/10.jpg";
import help from "../../assets/img/Final/05.jpg";
import { Link } from "react-router-dom";

const Project = () => {
    return (
        <>
            <SharedBanner
                background={campaignPhoto}
                title="Projects"
                titleHead="Choose your project"
                titleDes={
                    <>
                        We will help you to start a new project or to collect funds for disasters.
                    </>
                } />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 my-16">
                {/* //two big card */}
                <div className="flex flex-col items-end">
                    <div>
                        <h2 className="uppercase font-semibold text-xl my-6 text-center">Start Your Project</h2>
                        <Link to="/form" className="card w-11/12 mx-auto md:w-96 bg-base-100 shadow-xl group">
                            <figure><img src={project} alt="Shoes" className="group-hover:scale-105 hover:duration-500 duration-500" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Be an entrepreneur
                                </h2>
                                <p>Share your ideas and thought with us!</p>
                                <div className="card-actions justify-end mt-4">
                                    <div className="badge badge-outline">Ideas</div>
                                    <div className="badge badge-outline">Skills</div>
                                    <div className="badge badge-outline">Responsibility</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col items-start">
                    <div>
                        <h2 className="uppercase font-semibold text-xl my-6 text-center">Get help now</h2>
                        <Link to="/form" className="card w-11/12 mx-auto md:w-96 bg-base-100 shadow-xl group">
                            <figure><img src={help} alt="Shoes" className="group-hover:scale-105 hover:duration-500 duration-500" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">
                                    Help disaster victims
                                </h2>
                                <p>Share details and let us help the mankind!</p>
                                <div className="card-actions justify-end mt-4">
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