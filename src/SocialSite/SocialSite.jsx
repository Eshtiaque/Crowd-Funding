import { Outlet } from "react-router-dom";
import SocialFooter from "./SocialFooter/SocialFooter";
import Navbar from "../Components/NavBar/Navbar";

const SocialSite = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet/>
            <SocialFooter></SocialFooter>
        </div>
    );
};

export default SocialSite;