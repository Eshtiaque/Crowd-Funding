import { Outlet } from "react-router-dom";
import TopBar from "./TopBar/TopBar";
import SocialFooter from "./SocialFooter/SocialFooter";

const SocialSite = () => {
    return (
        <div>
            <TopBar></TopBar>
            <Outlet/>
            <SocialFooter></SocialFooter>
        </div>
    );
};

export default SocialSite;