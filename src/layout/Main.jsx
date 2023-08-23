import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Components/Home/Footer/Footer";
import Navbar from "../Components/NavBar/Navbar";




const Main = () => {
    return (
        <div className="">
            <Navbar></Navbar>
            <ScrollRestoration />

            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;