import bg from "../../assets/img/section-banner/contact-banner.jpg";
import background from "../../assets/img/section-banner/about.jpg";
import { FaPhoneAlt, FaEnvelope, FaLocationArrow } from 'react-icons/fa';
import SharedBanner from "./SharedBanner";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const Contact = () => {
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log('clicked')
    }
    return (
        <div className="max-w-7xl mx-auto">
            <div>
                 <SharedBanner
                    background={background}
                    title="Contact Us"
                    titleHead="Get connected now"
                    titleDes={
                        <>
                        We are a worldwide ministry in which  <br/>millions of children reap the benefits  <br/>of one man’s clear


                        </>
                    }
                ></SharedBanner> 

                <div className="bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bg})` }}>
                    <div className="md:flex justify-center gap-4 mx-auto pb-8 pt-8">
                        <div className="text-neutral">
                            <h1 className="text-3xl text-[#F99F24]">Address</h1>
                            <div className="flex items-center gap-3 mt-5">
                                <FaPhoneAlt />
                                <p>+88 00 000 000</p>
                            </div>
                            <div className="flex items-center gap-3 mt-2">
                                <FaEnvelope />
                                <p>+88 00 000 000</p>


                                <p>abcd@gmail.com</p>
                            </div>
                            <div className="flex items-center gap-3 mt-2">
                                <FaLocationArrow />
                                <p>712, Free school street, London</p>
                            </div>
                            <div className='flex gap-5 text-neutral text-3xl mt-10 cursor-pointer'>
                                <FaFacebook />
                                <FaInstagram />
                                <FaTwitter />
                                <FaYoutube />
                            </div>
                        </div>




                        <div className="text-black">
                            <h1 className="text-3xl text-[#F99F24]">Get in touch</h1>
                            <form onSubmit={handleSubmit} className="mt-5 w-[360px] flex flex-col gap-2">
                                <input className="border-2 border-black rounded w-[230px] px-2" type="text" name="name" placeholder="Your name"></input>
                                <input className="border-2 border-black rounded w-[230px] px-2" type="email" name="email" placeholder="Your email"></input>
                                <textarea className="border-2 border-black rounded w-[230px] px-2" type="area" name="name" placeholder="Write message"></textarea>
                                <input className="btn btn-warning w-28 text-white" type="submit" />
                            </form>
                        </div>
                    </div>
                </div> 




             <div className="mapouter relative text-right w-full h-[400px] mt-8">
                    <div className="gmap_canvas">
                        <iframe
                            title="Google Map"
                            className="gmap_iframe w-full h-full"
                            src="https://maps.google.com/maps?width=600&height=400&hl=en&q=shahbagh&t=&z=15&ie=UTF8&iwloc=B&output=embed"
                        ></iframe>
                        <a href="https://connectionsgame.org/">Connections Game</a>
                    </div>
                    <style>
                        {`
          .mapouter {
            position: relative;
            width: 100%;
            height: 400px;
          }
          .gmap_canvas {
            overflow: hidden;
            background: none !important;
            width: 100%;
            height: 400px;
          }
          .gmap_iframe {
            width: 100% !important;
            height: 400px !important;
          }
        `}
                    </style>
                </div>
            </div>
        </div>
    );
};

export default Contact;
