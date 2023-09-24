/*eslint no-unused-vars: "error"*/
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { FcGoogle } from 'react-icons/fc';
import { AuthContext } from "../../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
    const auth = getAuth();
    const { signIn, user } = useContext(AuthContext);
    const [success, setSuccess] = useState('');

    const googleProvider = new GoogleAuthProvider;

    const navigate = useNavigate();
    const location = useLocation();
    console.log(location);
    const from = location.state?.from?.pathname || "/";


    //show password
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    //end password

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const loggedInUser = result.user;
                setSuccess('Google Successfully');
                console.log(loggedInUser);
                // setUser(loggedInUser);
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email, role: "user" }
                // ---------------------------jwt add for google signIn----------------------
                fetch('https://crowdfunding-gamma.vercel.app/users', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(result => {
                        // console.log(result);

                        fetch('https://crowdfunding-gamma.vercel.app/jwt', {
                            method: "POST",
                            headers: {
                                'Content-Type': 'application/json'
                            },
                            body: JSON.stringify(loggedInUser)
                        })
                            .then(res => res.json())
                            .then(result => {
                                // console.log(result);
                                localStorage.setItem('set-token-for-user', result.token)
                            })
                    })
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log('error', error.message);
            })
    }
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => {

        console.log(data.password, data.email);
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                setSuccess('Login Successfully')
                console.log(user);
                // form.reset();
                fetch('https://crowdfunding-gamma.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(result => {
                        // console.log(result);
                        localStorage.setItem('set-token-for-user', result.token)
                    })
                navigate(from, { replace: true });
            })
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="hero lg:p-48 pt-12 md:pt-40 md:pb-40 bg-login  text-white "
            >

                <div className="hero-content p-0 flex-none lg:flex-row">


                    <div className="card w-96 rounded-lg flex-shrink-0 max-w-sm  shadow-2xl  
                    lg:backdrop-blur-lg lg:p-8 lg:bg-transparent
                    md:bg-black md:bg-opacity-70  md:p-8
                    bg-black bg-opacity-60 
                    
                    ">

                        <div className="card lg:m-0 md:m-0 m-5 ps-4 pe-4 relative">

                            <h1 className="text-4xl text-center font-bold  text-cyan-300 rounded-lg p-1 bg-gradient-to-r from-cyan-600 via-sky-300 to-purple-500 bg-clip-text text-transparent mt-5 ">Login</h1>
                            <hr className="opacity-25" />
                            <form onSubmit={handleSubmit(onSubmit)} >

                                <div className="form-control ">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl lg:text-white md:text-white text-white">Email</span>
                                    </label>
                                    <input type="email"
                                        {...register("email", { required: true })} name="email" placeholder="Email" className="input bg-transparent border-1 border-cyan-600  lg:text-white md:text-white text-white" />
                                </div>
                                <div className="form-control text-white">
                                    <label className="label">
                                        <span className="label-text font-bold text-xl lg:text-white md:text-white text-white">Password</span>

                                    </label>
                                    <input type={showPassword ? 'text' : 'password'}
                                        {...register("password", { required: true })} name="password"
                                        placeholder="password" className="input bg-transparent border-1 border-cyan-600 lg:text-white md:text-white text-black" />
                                    <button
                                        type="button"
                                        onClick={togglePasswordVisibility}
                                        className="text-white hover:text-white  pr-4 text-lg  focus:outline-none absolute ms-64 mt-16"
                                    >
                                        {showPassword ? <FaEyeSlash /> : <FaEye />} 
                                    </button>
                                    <label className="label">
                                        <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-transparent  border-3 
                                    border-cyan-300 text-cyan-300
                                    
                                    hover:bg-gradient-to-r from-blue-600  to-purple-600 hover:text-white hover:border-none
                                    " type='submit' value="Login" />

                                </div>
                                <div className="form-control mt-6">
                                    <button onClick={handleGoogleSignIn} className="btn bg-transparent  border-1 border-cyan-600 text-cyan-300
                                    
                                    hover:bg-gradient-to-r from-blue-600  to-purple-600 hover:text-white hover:border-none" type='submit' value="Login"><span className="mr-2 bg-white rounded-full"><FcGoogle /></span> Google</button>
                                </div>
                            </form>

                            <p className='my-4 text-center lg:text-white md:text-white text-white'>New Member ?  ::  <Link className="font-bold   text-[#87c2f8]" to="/signUp">Sign Up</Link></p>

                            <p className="text-success">{success}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;