import Container from "../../../components/Container";
import img1 from '../../../assets/images/about-1.png';
import img2 from '../../../assets/images/about-2.png';

const About = () => {
  return (
    <Container>
      <div className="text-center mt-8">
        <h2 className="text-3xl font-bold">About Us</h2>
        <hr className="border-b-[3px] w-[106px] mt-1 border-[#F99F24] mx-auto" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-16  mb-28">
        <div className="relative flex text-center justify-center">

          <div>
            <img src={img1} alt="" className="w-80" />
            <img src={img2} alt="" className="w-72 absolute -bottom-14 right-12 border hidden md:block" />
            <div className="w-[70px] h-[60px] bg-[#F99F24] absolute top-20 right-28 hidden md:block"></div>
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
          <h2 className="text-2xl font-bold md:text-left text-center">We do things together.</h2>
          <div className="mt-6 space-y-2 md:space-y-3">
            <p>We are the dreamers who dream to make the world a better home.</p>
            <p>We are the dreamers who dream to make the world a better home.</p>
            <p>We are the dreamers who dream to make the world a better home.</p>
          </div>
          <button className="mt-4 px-4 py-2 bg-[#F99F24] text-white font-semibold shadow-2xl hover:bg-[#fd9400]">See More</button>
        </div>
      </div>
    </Container>
  );
};

export default About;