import Container from "../../../components/Container";
import { FaSchool } from "react-icons/fa";
import { FaCloudBolt, FaHouseMedical, FaPersonDress, FaPersonRifle } from "react-icons/fa6";

const Category = () => {
  return (
    <Container>
      <div className="text-center md:pt-20">
        <h2 className="text-3xl font-bold">View by Category</h2>
        <hr className="border-b-[3px] w-[106px] mt-3 border-[#F99F24] mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:flex justify-center items-center gap-4 md:gap-16 mt-16 mb-20">
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tl from-[#03387B] to-[#048F87] flex items-center justify-center"><FaSchool className="text-4xl text-white" /></div>
          <p className="text-lg font-semibold">Education</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tl from-[#03387B] to-[#048F87] flex items-center justify-center"><FaPersonRifle className="text-4xl text-white" /></div>
          <p className="text-lg font-semibold">Crisis</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tl from-[#03387B] to-[#048F87] flex items-center justify-center"><FaCloudBolt className="text-4xl text-white" /></div>
          <p className="text-lg font-semibold">Disaster</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tl from-[#03387B] to-[#048F87] flex items-center justify-center"><FaHouseMedical className="text-4xl text-white" /></div>
          <p className="text-lg font-semibold">Medical</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full bg-gradient-to-tl from-[#03387B] to-[#048F87] flex items-center justify-center"><FaPersonDress className="text-4xl text-white" /></div>
          <p className="text-lg font-semibold">Children</p>
        </div>
      </div>
    </Container>
  );
};

export default Category;