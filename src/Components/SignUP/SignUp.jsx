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
    <div className="hero  pt-16 md:pt-40 md:pb-40 bg-login  mx-auto   ">
       
      <div className="hero-content p-0 flex-none lg:flex-row ">
        
        <div className="card w-96 rounded-lg flex-shrink-0 max-w-sm  shadow-2xl  
                    lg:backdrop-blur-lg lg:p-8 lg:bg-transparent
                    md:bg-black md:bg-opacity-70  md:p-8
                    bg-black bg-opacity-60  ">
        
          <div className="card lg:m-0 md:m-0 m-5 ps-4 pe-4">

          <h1 className="text-4xl text-center font-bold  text-cyan-300 rounded-lg p-1 bg-gradient-to-r from-cyan-600 via-sky-300 to-purple-500 bg-clip-text text-transparent mt-5 ">SignUp</h1>
                            <hr  className="opacity-25"/>
            <form onSubmit={handleSubmit(onSubmit)}  >
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl lg:text-white md:text-white text-white">Name</span>
                </label>
                <input type="text" name="name" {...register("name")} placeholder="name" className="input bg-transparent border-1 border-cyan-300 lg:text-white md:text-white text-white" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl lg:text-white md:text-white text-white">Photo_URL</span>
                </label>
                <input type="text" name="photoURL" {...register("photoURL")} placeholder="enter PhotoURL" className="input bg-transparent border-1 border-cyan-300  lg:text-white md:text-white text-black" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl lg:text-white md:text-white text-white">Email</span>
                </label>
                <input type="email" name="email"  {...register("email",{required:true})} placeholder="enter email" className="input bg-transparent border-1 border-cyan-300  lg:text-white md:text-white text-white" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-bold text-xl lg:text-white md:text-white text-white"> Password</span>
                </label>
                <input type="password" name="password" 
                 {...register("password",{required:true})} 
                placeholder="password" className="input bg-transparent border-1 border-cyan-300 lg:text-white md:text-white text-white" />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover text-white">Forgot password?</a>
                </label>
              </div>



              <div className="form-control mt-1">
                <input className="btn bg-transparent  border-3 
                                    border-cyan-300 text-cyan-300
                                    
                                    hover:bg-gradient-to-r from-blue-600  to-purple-600 hover:text-white hover:border-none" type='submit' value="Sign Up"/>
              </div>

            </form>
            <p className='my-4 text-center lg:text-white md:text-white text-white'>Already Have an Account ? : <Link className="font-bold text-[#87c2f8]" to="/login">Login</Link></p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default SignUp;