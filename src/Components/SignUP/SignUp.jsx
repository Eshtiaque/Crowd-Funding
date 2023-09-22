// import React from 'react';
import { useContext } from "react";
// import img  from "../../assets/images/login/login.svg"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form"

const SignUp = () => {

  const { createUser , updateUserProfile } = useContext(AuthContext);
  // const handleSignUP = event => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const email = form.email.value;

  //   const password = form.password.value;
  //   // const photo=form.photo.value;
  //   console.log(name, password, email);
  //   createUser(email, password)
  //     .then(result => {
  //       const user = result.user;
  //       console.log(user);
  //     Swal.fire({
  //       position: 'top-center',
  //       icon: 'success',
  //       iconColor:'#F99F24',
  //       color:'#F99F24',
  //       background:'black',
  //       title: 'SignUp Successful',
  //       showConfirmButton: false,
  //       timer: 1500
  //       })
  //       form.reset();
  //       navigate(from, { replace: true });
  //     })
  //     .catch(error => console.log(error));
  // }
   
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = (data) =>{
    createUser(data.email, data.password)
    .then(result => {

        const loggedUser = result.user;
        console.log(loggedUser);

         updateUserProfile(data.name, data.photoURL)
            .then(() => {
                const saveUser = { name: data.name, email: data.email , role:"user" }
                fetch('https://crowdfunding-gamma.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            // reset();
                            Swal.fire({
                                    position: 'top-center',
                                    icon: 'success',
                                    iconColor:'#F99F24',
                                    color:'#F99F24',
                                    background:'black',
                                    title: 'SignUp Successful',
                                    showConfirmButton: false,
                                    timer: 1500
                                    })
                                    navigate(from, { replace: true });
                        }
                    })

                 

            })
            .catch(error => console.log(error))
    })
};
     //private route
     const navigate = useNavigate();
     const location = useLocation();
     console.log(location);
     const from = location.state?.from?.pathname || "/";
 

  return (
    <div className="hero max-w-7xl  h-screen   mx-auto   ">
       
      <div className="hero-content p-0 flex-none lg:flex-row ">
        
        <div className="card flex-shrink-0 max-w-sm shadow-2xl">
        
          <div className="card lg:m-0 md:m-0 m-5 ps-4 pe-4">

            <h1 className="text-2xl text-center font-bold bg-[#F99F24] rounded-lg p-1 text-white lg:mt-7 ">Sign Up</h1>
            <form onSubmit={handleSubmit(onSubmit)}  >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl lg:text-white md:text-white text-black">Name</span>
                </label>
                <input type="text" name="name" {...register("name")} placeholder="name" className="input bg-transparent border-2 border-orange-300 lg:text-white md:text-white text-black" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl lg:text-white md:text-white text-black">Photo_URL</span>
                </label>
                <input type="text" name="photoURL" {...register("photoURL")} placeholder="enter PhotoURL" className="input bg-transparent border-2 border-orange-300 lg:text-white md:text-white text-black" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl lg:text-white md:text-white text-black">Email</span>
                </label>
                <input type="email" name="email"  {...register("email",{required:true})} placeholder="enter email" className="input bg-transparent border-2 border-orange-300 lg:text-white md:text-white text-black" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl lg:text-white md:text-white text-black"> Password</span>
                </label>
                <input type="password" name="password" 
                 {...register("password",{required:true})} 
                placeholder="password" className="input bg-transparent border-2 border-orange-300 lg:text-white md:text-white text-black" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                </label>
              </div>



              <div className="form-control mt-1">
                <input className="btn bg-transparent border-2 border-orange-300 lg:text-white md:text-white text-black  hover:bg-[#F99F24] hover:border-none hover:text-black lg:font-semibold md:font-semibold font-extrabold  lg:text-base md:text-base text-lg" type='submit' value="Sign Up"/>
              </div>

            </form>
            <p className='my-4 text-center lg:text-white md:text-white text-black'>Already Have an Account ? : <Link className="font-bold   text-[#F99F24]" to="/login">Login</Link></p>
          </div>
        </div>
        <div className="text-center text-white font-black lg:text-left w-1/2 mr-12 lg:block md:hidden hidden ps-5">
                    <h1 className="font-black text-3xl"><span className="text-[#F99F24] text-4xl">CrowdFunding</span> - All You Need To Know</h1>
                    <br></br><br />
                    <p className="">It sounds simple, but exactly how does crowdfunding look in practice? Well, sometimes crowdfunding campaigns seek financing in the form of donations or investments, but that’s not always the case.
                    <br /><br />
                    Crowdfunding is the practice of collecting money from multiple individuals or sources in order to finance a new project. Often, CrowdFounders turn to social media to share their platform or idea with the purpose of inspiring others to contribute to the crowdfunding campaign. 
                    </p>
                </div>
      </div>
    </div>
  );
};

export default SignUp;