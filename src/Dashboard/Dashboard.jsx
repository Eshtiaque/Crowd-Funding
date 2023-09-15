import { FaBars, FaBell, FaHouseDamage } from "react-icons/fa";
import logo from "../assets/img/logo-main/logo.png";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import {
    FaAddressCard,
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
import MessengerCustomerChat from 'react-messenger-customer-chat';
import videoCall from "../../src/assets/call.png";
import { BiLogoBlogger, BiSolidDonateHeart } from "react-icons/bi";
import { MdPayment } from "react-icons/md";

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
            <div className="drawer-content bg-[#EFFBF8] flex flex-col items-center justify-center">
                {/* lg navbar */}

                <Outlet className="h-screen overflow-y-scroll"></Outlet>

                <div className="h-20 lg:hidden bg-gray-600 top-0 left-0 right-0 absolute border-b-[1px] border-gray-400"></div>
                <div className="h-20 md:h-24 flex items-center  gap-5 justify-center invisible lg:visible bg-gray-500 border-b-[1px] shadow-lg top-0 left-0 right-0 absolute">
                    <div className="flex items-center gap-7 justify-center absolute right-5">
                        <Link to="/"><FaHouseDamage className="text-center text-3xl text-white" /></Link>
                        {isAdmin &&
                            <Link to="/dashboard/notifications">
                                <button className="flex">
                                    <FaBell className="text-center text-3xl text-white" />
                                    <div className="badge font-semibold">+{notification?.length || 0}</div>
                                </button>
                            </Link>
                        }
                        <div className="avatar">
                            <div className="w-14 cursor-pointer rounded-full border-2 border-[#A5A6FF]" title={user?.displayName}>
                                <img src={user?.photoURL} className="" />
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
                        className="btn text-2xl bg-gray-600 border-none rounded-lg text-white absolute right-5 top-5 drawer-button lg:hidden"
                    >
                        <FaBars />
                    </label>
                </div>
            </div>

            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

                <ul className="bg-gray-600 text-white overflow-hidden menu p-4 w-80 h-full mt-20 lg:mt-0">
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
                                    to="/dashboard/allUser"
                                    className="flex flex-row items-center hover:bg-gray-400 hover:text-black hover:rounded-lg rounded-none p-3 nav"
                                >
                                    <FaAddressCard />
                                    <span className="ml-2">All Users</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/allProject"
                                    className="flex flex-row items-center hover:bg-gray-400 hover:text-black hover:rounded-lg rounded-none p-3 nav"
                                >
                                    <FaArtstation />
                                    <span className="ml-2">Applications</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/aCampaign"
                                    className="flex flex-row items-center hover:bg-gray-400 hover:text-black hover:rounded-lg rounded-none p-3 nav"
                                >
                                    <FaBriefcase />
                                    <span className="ml-2">Campaigns</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/UserPayment"
                                    className="flex flex-row items-center hover:bg-gray-400 hover:text-black hover:rounded-lg rounded-none p-3 nav"
                                >
                                    <FaRegClone />
                                    <span className="ml-2">Payments</span>
                                </NavLink>

                                <NavLink
                                    to="/dashboard/aEvent"
                                    className="flex flex-row items-center hover:bg-gray-400 hover:text-black hover:rounded-lg rounded-none p-3 nav"
                                >
                                    <FaLock />
                                    <span className="ml-2">Events</span>
                                </NavLink>
                                {/* 
                                <NavLink
                                    to="/dashboard/blog"
                                    className="flex flex-row items-center hover:bg-gray-400 hover:text-black hover:rounded-lg rounded-none p-3 nav"
                                >
                                    <FaAngular />
                                    <span className="ml-2">Blogs</span>
                                </NavLink> */}
                            </> :
                            <>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaBriefcase></FaBriefcase>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/userAddBlogs">
                                            Add Project
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <BiLogoBlogger className='text-2xl' />
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/userBlog">
                                            My Projects
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <BiSolidDonateHeart className='text-2xl' />
                                        <Link className=" w-full rounded-none m-0" to="/donate">
                                            Donate Here
                                        </Link>
                                    </div>
                                </li>
                                {/* <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <FaBriefcase></FaBriefcase>
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/AddEvent">
                                            All Event
                                        </Link>
                                    </div>
                                </li> */}
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <MdPayment className='text-2xl' />
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/payment">
                                            My Donations
                                        </Link>
                                    </div>
                                </li>
                                <li className="mt-3">
                                    <div className="flex flex-row hover:bg-gray-400">
                                        <img src={videoCall} className="w-6 h-6" alt="" />
                                        <Link className=" w-full rounded-none m-0" to="/dashboard/videoCall">
                                            Meeting
                                        </Link>
                                    </div>
                                </li>
                            </>}

                        <div className="flex flex-col items-center rounded-none mt-auto">
                            <p className="text-gray-400 text-sm">{user?.email}</p>
                            <NavLink
                                onClick={handleLogout}
                                className="flex items-center justify-center mt-2 py-2 px-4 hover:bg-gray-400 hover:text-black hover:rounded-lg">
                                <FaExternalLinkAlt />
                                <span className="ml-2">Log Out</span>
                            </NavLink>
                        </div>
                    </div>
                </ul>
            </div>
            {
                !isAdmin &&
                <div>
                    <MessengerCustomerChat
                        pageId="129135300280678"
                        appId="643817741223173"
                    />
                </div>
            }
        </div>
    );
}

export default Dashboard;