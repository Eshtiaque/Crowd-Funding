import { Link } from 'react-router-dom';
import img1 from '../../../assets/images/about-1.png';
import img2 from '../../../assets/images/about-2.png';
// import { useContext } from 'react';
// import { AuthContext } from '../../../Providers/AuthProvider';

const About = () => {
  // const {logOut}=useContext(AuthContext);
  // const handleLogout = () => {
  //   logOut()
  //     .then(res => res.json())
  //     .catch(error => {
  //       localStorage.removeItem('set-token-for-user');
  //       alert("Logout Successfully")
  //     })

  // }
  return (
    <div>
      {/* <Link to="/login"><button className='btn btn-success'>Login</button></Link>
      <button className='mx-10 btn btn-success' onClick={handleLogout}>logUot</button> */}
      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold">About Us</h2>
        <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-16  mb-28 p-5">
        <div className="relative flex text-center justify-center">

          <div>
            <img src={img1} alt="" className="w-80" />
            <img src={img2} alt="" className="w-72 absolute -bottom-14 right-4 border hidden md:block" />
            <div className="w-[70px] h-[60px] bg-[#F99F24] absolute top-20 right-16 hidden md:block"></div>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <h2 className="text-2xl font-bold md:text-left text-center">We do things together.</h2>
          <div className="mt-6 space-y-2 md:space-y-3">
            <p>We are the dreamers who dream to make the world a better home.</p>
            <p>We are the dreamers who dream to make the world a better home.</p>
            <p>We are the dreamers who dream to make the world a better home.</p>
          </div>
          <Link to="/about">
            <button className="mt-4 px-4 py-2 bg-[#F99F24] text-white font-semibold shadow-2xl hover:bg-[#fd9400] rounded">See More</button>
          </Link>
        </div>
      </div>

    </div>
  );
};

export default About;