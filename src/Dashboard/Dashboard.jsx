import { FaBars, FaBell, FaHouseDamage } from "react-icons/fa";
import logo from "../assets/img/logo-main/logo.webp";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";

import {
    FaAddressCard,
    FaAngular,
    FaArtstation,
    FaBriefcase,
    FaDollarSign,
    FaExternalLinkAlt,
    FaLock,
    FaQrcode,
    FaRegClone
} from "react-icons/fa";
import { toast } from "react-toastify";
import useAdmin from './../hooks/useAdmin';
import useNotification from './../hooks/useNotification';

function Dashboard() {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [notification] = useNotification();
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {
                toast.success('Logout Successful!');
                navigate('/');
            })
            .catch(error => toast.error(error.message));
    };

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content bg-black  flex flex-col items-center justify-center">
                {/* lg navbar */}

                <Outlet className="h-screen overflow-y-scroll"></Outlet>

                <div className="h-20 lg:hidden bg-black opacity-50%  top-0 left-0 right-0 absolute border-b-[1px] border-gray-700"></div>
                <div className="h-20 md:h-24 flex items-center  gap-5 justify-center invisible lg:visible bg-gradient-to-r from-black via-black to-[#F99F24] top-0 left-0 right-0 absolute">
                    <div className="flex items-center gap-7 justify-center absolute right-5">
                        <Link to="/"><FaHouseDamage className="text-center text-3xl text-white" /></Link>
                        <Link to="/dashboard/notifications">
                            <button className="flex">
                                <FaBell className="text-center text-3xl text-white" />
                                <div className="badge">+{notification?.length || 0}</div>
                            </button>
                        </Link>
                        <div className="avatar">
                            <div className="w-12 cursor-pointer rounded-full" title={user?.displayName}>
                                <img src={user?.photoURL} />
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="md:w-64 w-40 absolute z-30 top-5 md:top-2 md:left-5 left-4 lg:hidden block">
                        <Link to="/"><img src={logo} alt="" /></Link>
                    </div>

                    <label
                        htmlFor="my-drawer-2"
                        className="btn border-[#f99F24] bg-black rounded-lg text-white absolute right-5 top-5 drawer-button lg:hidden"
                    >
                        <FaBars />
                    </label>
                </div>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="bg-gradient-to-r from-black via-black to-[#F99F24] text-white overflow-y-scroll menu p-4 w-80 h-full mt-20 lg:mt-0">
                    {/* Sidebar content here */}
                    <Link to="/" className="hidden lg:block">
                        <img src={logo} className="w-52 ml-8" alt="" />
                    </Link>

                    {/* Sidebar content here */}

                    <div className="mt-10 ml-5 text-xl flex flex-col gap-2 flex-grow active">
                        <NavLink
                            to="/dashboard"
                            className="flex flex-row items-center hover:bg-gray-400 hover:rounded-lg hover:text-black rounded-none p-3 nav"
                        >
                            <FaQrcode />
                            <span className="ml-2">Dashboard</span>
                        </NavLink>

                        {isAdmin ?
                            <>
                                <NavLink
                                    to="/dashboard/revenue"
                                    className="flex flex-row items-center hover:bg-gray-400 hover:text-black hover:rounded-lg rounded-none p-3 nav"
                                >
                                    <FaDollarSign className="border rounded-full" />
                                    <span className="ml-2">Revenue</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/allProject"
                                    className="flex flex-row items-center hover:bg-gray-400 hover:text-black hover:rounded-lg rounded-none p-3 nav"
                                >
                                    <FaArtstation />
                                    <span className="ml-2">All Projects</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/allUser"
                                    className="flex flex-row items-center hover:bg-gray-400 hover:text-black hover:rounded-lg rounded-none p-3 nav"
                                >
                                    <FaAddressCard />
                                    <span className="ml-2">All Users</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/UserPayment"
                                    className="flex flex-row items-center hover:bg-gray-400 hover:text-black hover:rounded-lg rounded-none p-3 nav"
                                >
                                    <FaRegClone />
                                    <span className="ml-2">Payment</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/aCampaign"
                                    className="flex flex-row items-center hover:bg-gray-400 hover:text-black hover:rounded-lg rounded-none p-3 nav"
                                >
                                    <FaBriefcase />
                                    <span className="ml-2">Campaign</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/aEvent"
                                    className="flex flex-row items-center hover:bg-gray-400 hover:text-black hover:rounded-lg rounded-none p-3 nav"
                                >
                                    <FaLock />
                                    <span className="ml-2">Event</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/blog"
                                    className="flex flex-row items-center hover:bg-gray-400 hover:text-black hover:rounded-lg rounded-none p-3 nav"
                                >
                                    <FaAngular />
                                    <span className="ml-2">Blog</span>
                                </NavLink>
                            </> :
                            <>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaBriefcase></FaBriefcase>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/userAddBlogs">
                                            Add Blog
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaBriefcase></FaBriefcase>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/userBlog">
                                            My Blogs
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaBriefcase></FaBriefcase>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/UserAddCampaign">
                                            All Campaign
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaBriefcase></FaBriefcase>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/AddEvent">
                                            All Event
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaBriefcase></FaBriefcase>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/payment">
                                            Payment History
                                        </Link>
                                    </div>
                                </li>
                            </>}

                        <div className="flex flex-col items-center rounded-none mt-auto">
                            <p className="text-gray-400 text-sm">{user?.email}</p>
                            <NavLink
                                onClick={handleLogout}
                                className="flex items-center justify-center mt-3 py-2 px-4 hover:bg-gray-400 hover:text-black hover:rounded-lg">
                                <FaExternalLinkAlt />
                                <span className="ml-2">Log Out</span>
                            </NavLink>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    );
}

export default Dashboard;