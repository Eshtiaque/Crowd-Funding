import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "../Components/Home/Footer/Footer";
import Navbar from "../Components/NavBar/Navbar";
// import MessengerCustomerChat from 'react-messenger-customer-chat';

const Main = () => {
    return (
        <div>
            <Navbar />
            <ScrollRestoration />
            <Outlet />
            <Footer />
            <div>
                {/* <MessengerCustomerChat
                    pageId="129135300280678"
                    appId="643817741223173"
                /> */}
            </div>
        </div>
    );
};

export default Main;