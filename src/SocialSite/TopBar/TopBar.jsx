import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";
import { getAuth } from "firebase/auth";
import { app } from "../../Firebase/firebaseConfig";

const TopBar = () => {
  const { user, logOut } = useContext(AuthContext);

  const auth = getAuth(app);
  const handleLogOut = () => {
    logOut(auth)
      .then(result => {
        localStorage.removeItem('set-token-for-user');
        result;
      })
      .catch(error => {
        console.log(error);
      });
  };
    return (
        <div className="max-w-7xl mx-auto  navbar bg-[#5c771e] text-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-black bg-base-100 rounded-box w-52">
            <li><Link to="/socialBlog" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/socialBlog/addPost" >Write</Link></li>
          <li><Link to="/contact" >Contact</Link></li>
          
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-2xl">UNIAID</Link>
        </div>
        <div className="navbar-center text-black hidden lg:flex">
          <ul tabIndex={0} className="menu menu-horizontal px-1 text-white text-lg">
          <li><Link to="/socialBlog" >Home</Link></li>
          <li><Link to="/about" >About</Link></li>
          <li><Link to="/socialBlog/addPost" >Write</Link></li>
          <li><Link to="/contact" >Contact</Link></li>
          
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar w-16">
       
      </label>
          {/* <a className="btn btn-md  btn-outline text-white">Logout</a> */}
          {
            user ?
              <span className="flex items-center gap-3">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <img src={user.photoURL} alt="" />
                  </div>
                </div>
                <Link><button className='btn btn-md  btn-outline text-white  hover:bg-black hover:text-[#5c771e] ' onClick={handleLogOut}>LogOut</button></Link>
              </span>
              :
              <Link to="/login">
                <button
                  type="button" 
                  className="btn btn-md  btn-outline text-white  hover:bg-black hover:text-[#5c771e]"
                >
                  Login
                </button>
              </Link>
          }
        
        </div>
      </div>
    );
};

export default TopBar;