import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../Home/Home";
import AboutUs from "../AboutUS/AboutUS";

import Contact from "../Contact/Contact";

import Donate from "../Payment/Donate";
import Payment from "../Payment/Payment";
import Campaigns from "../Campaigns/Campaigns";
import Login from "../Login/Login";
import SignUp from "../SignUP/SignUp";
import Events from "../Events/Events";
import Project from "../Project/Project";
import Form from "../Project/Form";

const Router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/about',
          element: <AboutUs></AboutUs>
        },
        {

          path: '/contact',
          element: <Contact></Contact>
        },
        {
          path:"/donatePayment/:id",
          element:<Payment/>,
          loader:({params})=>fetch(`https://crowdfunding-gamma.vercel.app/saveAddress/${params.id}`),
        },
        {
          path:"/donate",
          element:<Donate/>
        },
        {
          path: "/campaigns",
          element: <Campaigns/>
        },
        {
          path: "/event",
          element: <Events></Events>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signUp",
          element: <SignUp></SignUp>
        },
        {
          path: "/Project",
          element: <Project></Project>
        },
        {
          path: "/form",
          element: <Form></Form>
        }
      ]
    },
  ]);
  export default Router;