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
import Info from "../Project/Info";
import Dashboard from "../../Dashboard/Dashboard";
import Admin from "../../Dashboard/Admin/Admin";
import AllUsers from "../../Dashboard/Admin/AllUser/AllUser";
import AllProject from "../../Dashboard/Admin/AllProject/AllProject";
import axios from "axios";
import ProjectDescription from "../../Dashboard/Admin/AllProject/ProjectDescription";
import ACampaign from "../../Dashboard/Admin/ACampaign/ACampaign";
import UserPayment from "../../Dashboard/Admin/UserPayment/UserPayment";
import AEvent from "../../Dashboard/Admin/AEvent/AEvent";
import BlogNews from "../../Dashboard/Admin/BlogNews/BlogNews";
import AllNews from "../AllNews/AllNews";
import CampaignDetails from "../../Dashboard/Admin/ACampaign/CampaignDetails";
import PrivateRoute from "./PrivateRoute";
import Revenue from "../../Dashboard/Admin/Revenue/Revenue";
import AdminRoute from './AdminRoute';
import EventDetails from "../../Dashboard/Admin/AEvent/EventDetails";
import BlogDetails from "../../Dashboard/Admin/BlogNews/BlogDetail";
import SocialHeader from "../../SocialSite/SocialHeader/SocialHeader";
import AddPost from "../../SocialSite/AddPost/AddPost";
import SocialSite from "../../SocialSite/SocialSite";
import Notifications from "../../Dashboard/Admin/Notifications/Notifications";
import AddBlog from "../../Dashboard/Users/AddBlog";
import Blog from "../../Dashboard/Users/Blog";
import Campaign from "../../Dashboard/Users/Campaign";
import Event from "../../Dashboard/Users/Event";
import UserPaymentHistory from "../../Dashboard/Users/UserPaymentHistory";
import Details from "../../SocialSite/AllBlogs/Details";
import EditPost from "../../SocialSite/EditPost/EditPost";

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
          path: "/allNews",
          element: <AllNews></AllNews>

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
          element: <Info></Info>
        }
      ]
    },
    {
      path: "/socialBlog",
      element: <PrivateRoute><SocialSite></SocialSite></PrivateRoute>,
      children: [
        {
          path: "addPost",
          element: <AddPost></AddPost>
        },
        {
          path: "/socialBlog",
          element:<SocialHeader></SocialHeader>
        },
        {
          path: "editPost/:id",
          element:<EditPost></EditPost>,
          loader: ({ params }) => fetch(`https://crowdfunding-gamma.vercel.app/editPost/${params.id}`)
        },
        {
          path: "details/:id",
          element:<Details></Details>,
          loader: ({ params }) => fetch(`https://crowdfunding-gamma.vercel.app/allSocialPost/${params.id}`)
        }
        ]
    },
    {
      path: "/dashboard",
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:"/dashboard",
          element:<Admin></Admin>
        },
        {
          path: "notifications",
          element: <Notifications></Notifications>
        },
        {
          path:"allProject",
          element: <AdminRoute><AllProject></AllProject></AdminRoute>,
          loader:()=>axios.get("https://crowdfunding-gamma.vercel.app/blogs"),
        },
        {
          path:"allUser",
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
          loader:()=>axios.get("https://crowdfunding-gamma.vercel.app/users"),
        },
        {
          path:"description/:id",
          element: <AdminRoute><ProjectDescription /></AdminRoute>,
          loader:({params})=>fetch(`https://crowdfunding-gamma.vercel.app/blogs/${params.id}`)
        },
        {
          path:"aCampaign",
          element: <AdminRoute><ACampaign></ACampaign></AdminRoute>,
          loader:()=>fetch('https://crowdfunding-gamma.vercel.app/aCampaign'),
        },
        {
          path:"aCampaign/:id",
          element: <AdminRoute><CampaignDetails /></AdminRoute>,
          loader:({params})=>fetch(`https://crowdfunding-gamma.vercel.app/campaigns/${params.id}`),
        },
        {
          path:"description/:id",
          element: <AdminRoute><ProjectDescription /></AdminRoute>,
          loader:({params})=>fetch(`https://crowdfunding-gamma.vercel.app/blogs/${params.id}`)
        },
        {
          path:"UserPayment",
          element: <AdminRoute><UserPayment></UserPayment></AdminRoute>,
          loader:()=>fetch("https://crowdfunding-gamma.vercel.app/paymentHistory"),
          
        },
        {
          path:"aEvent",
          element: <AdminRoute><AEvent></AEvent></AdminRoute>,
          loader: () => axios.get("https://crowdfunding-gamma.vercel.app/event")
          
        },
        {
          path: "event/:id",
          element: <AdminRoute><EventDetails /></AdminRoute>,
          loader: ({ params }) => fetch(`https://crowdfunding-gamma.vercel.app/event/${params.id}`)
        },
        {
          path:"blog",
          element: <AdminRoute><BlogNews></BlogNews> </AdminRoute>,
          loader: () => axios.get("https://crowdfunding-gamma.vercel.app/blogs")
        },
        {
          path: "blog/:id",
          element: <AdminRoute><BlogDetails /></AdminRoute>,
          loader: ({ params }) => fetch(`https://crowdfunding-gamma.vercel.app/blogs/${params.id}`)
        },
        {
          path:"revenue",
          element: <AdminRoute><Revenue />  </AdminRoute>       
        },

        {
          path:"userAddBlogs",
          element: <AddBlog></AddBlog>
        },
        {
          path:"userBlog",
          element: <Blog></Blog>
        },
        {
          path:"userAddCampaign",
          element: <Campaign></Campaign>
        },
        {
          path:"AddEvent",
          element: <Event></Event>
        },
        {
          path:"payment",
          element: <UserPaymentHistory></UserPaymentHistory>
        },
      ]
    }
  ]);
  export default Router;