import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../Providers/AuthProvider";
import video from "../../assets/Video/348855346_6387300347996886_8348118468822906576_n.mp4"
const Login = () => {
    const auth = getAuth();
    const { signIn } = useContext(AuthContext);
    const [success, setSuccess] = useState('');
    const [user, setUser] = useState('');
    const googleProvider = new GoogleAuthProvider;
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(password, email);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                setSuccess('Login Successfully')
                console.log(user);
                form.reset();
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }
    //private route
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/";



    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setSuccess('Google Successfully');
                console.log(user);
                setUser(loggedInUser);
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    useEffect(() => {
        document.title = "Login";
    }, [])

    return (
        <div>
            <div className="hero bg-base-200 text-white ">

                <video className='videoTag  lg:mx-auto w-auto lg:block md:block hidden ' autoPlay loop muted>
                    <source src={video} type='video/mp4' />
                </video>

                <div className="hero-content p-0 flex-none lg:flex-row">
                    <div className="text-center text-white font-black lg:text-left w-1/2 mr-12 lg:block md:hidden hidden">
                        <h1 className="font-black text-3xl"><span className="text-[#F99F24] text-4xl">CrowdFunding</span> - All You Need To Know</h1>
                        <br></br><br />
                        <p className="">It sounds simple, but exactly how does crowdfunding look in practice? Well, sometimes crowdfunding campaigns seek financing in the form of donations or investments, but that’s not always the case.
                            <br /><br />
                            Crowdfunding is the practice of collecting money from multiple individuals or sources in order to finance a new project. Often, CrowdFounders turn to social media to share their platform or idea with the purpose of inspiring others to contribute to the crowdfunding campaign.
                        </p>
                    </div>

                    <div className="card rounded-none flex-shrink-0 max-w-sm shadow-2xl pt-3">
                        <video className='videoTag lg:mx-auto w-auto lg:hidden md:hidden block' autoPlay loop muted>
                            <source src={video} type='video/mp4' />
                        </video>
                        <div className="card lg:m-0 md:m-0 m-5">

                            <h1 className="text-3xl text-center font-bold bg-[#F99F24] rounded-lg p-1 text-black">Login</h1>
                            <form onSubmit={handleLogin} >

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl lg:text-white md:text-white text-black">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input bg-transparent border-2 border-orange-300 text-black" />
                                </div>
                                <div className="form-control text-white">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl lg:text-white md:text-white text-black">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="password" className="input bg-transparent border-2 border-orange-300 text-black" />
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover text-[#F99F24]">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-transparent border-2 border-orange-300 lg:text-white md:text-white text-black  hover:bg-[#F99F24] hover:border-none hover:text-black" type='submit' value="Login">Login</button>
                                </div>
                                <div className="form-control mt-6">
                                    <button onClick={handleGoogleSignIn} className="btn bg-transparent border-2 border-orange-300 lg:text-white md:text-white text-black hover:bg-[#F99F24] hover:border-none hover:text-black" type='submit' value="Login"><span className="mr-2 bg-white rounded-full p-1"><FcGoogle /></span> Google</button>
                                </div>
                            </form>

                            <p className='my-4 text-center lg:text-white md:text-white text-black'>New Member ?  ::  <Link className="font-bold   text-[#F99F24]" to="/signUp">Sign Up</Link></p>

                            <p className="text-success">{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;