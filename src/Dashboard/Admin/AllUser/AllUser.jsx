import  { useState } from "react";
import {
  FaBars,
  FaDownload,
  FaGripLinesVertical,
  FaUndoAlt,
} from "react-icons/fa";


const AllUsers = () => {
    const [trHeight, setTrHeight] = useState("h-10");
  return (
    <div className="bg-gradient-to-r from-black via-black to-black px-10 mt w-full h-full mt-28 text-white">
    <div className="flex items-center justify-between mt-5">
      <h1 className="text-5xl text-orange-300 normal-case font-semibold">
       All Users
      </h1>
      <div className="form-control mt-1 text-black">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered"
          />
          <button className="btn btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div className="flex justify-between items-center mt-10 ml-1 uppercase text-lg tracking-wide">
      <div className="flex items-center justify-center gap-5">
        {/* <p className='flex dropdown mb-32 items-center justify-center gap-2'><FaGripLinesVertical />Column</p> */}
        <details className="dropdown flex items-center justify-center gap-2">
          <summary className="m-1 btn bg-[#083149] hover:bg-slate-500 hover:px-2 hover:rounded text-white border-none p-2 text-lg font-normal rounded-full">
            <FaGripLinesVertical />
            Column
          </summary>
          <ul className="p-2 pt-0 flex flex-col -ml-1 mt-32 shadow-xl rounded w-80 bg-neutral text-neutral-content dropdown-content z-[1]">
            <small className="text-[8px]">Find Column</small>

            <input
              type="text"
              placeholder="Column Title"
              className="input input-bordered bg-neutral border-b-2 border-b-neutral-500 rounded-none"
            />

            <input type="checkbox" className="toggle" checked />
          </ul>
        </details>
        {/* <p className={`flex items-center justify-center gap-2`}><FaBars></FaBars>Density</p> */}
        <details className="dropdown">
          <summary className="m-1 ml-0 btn border-none hover:bg-[#083149] text-white text-lg uppercase font-normal bg-black">
            <FaBars></FaBars>Density
          </summary>
          <form className="p-2 shadow  menu dropdown-content z-[1] bg-slate-800  w-52">
            <option
              onClick={() => setTrHeight("h-10")}
              className="hover:bg-slate-600 p-2"
            >
              <FaBars></FaBars> Compact
            </option>
            <option
              onClick={() => setTrHeight("h-16")}
              className="hover:bg-slate-600 p-2"
            >
              <FaBars></FaBars> Standard
            </option>
            <option
              onClick={() => setTrHeight("h-20")}
              className="hover:bg-slate-600 p-2"
            >
              <FaBars></FaBars> Comfortable
            </option>
          </form>
        </details>
        <p className="flex items-center justify-center gap-2">
          <FaDownload></FaDownload>Export
        </p>
      </div>
      <div>
        <p className="flex items-center justify-center gap-2 ">
          <FaUndoAlt></FaUndoAlt>Refresh
        </p>
      </div>
    </div>
    <div className="overflow-x-auto">
      <table className="table border-0 mt-10 h-[full] bg-black rounded-sm">
        {/* head */}
        <thead className="text-black bg-[#F99F24]">
          <tr className={`border-0 grid grid-cols-5 ${trHeight}`}>
            <th className={`flex items-center`}>Date</th>
            <th className="flex items-center">
              <span className="justify-start border-l-2 border-[#777474] pl-2">
                Title
              </span>
            </th>
            <th className=" flex items-center">
              <span className="justify-start border-l-2 border-[#777474] pl-2">
                Email
              </span>
            </th>
            <th className=" flex items-center">
              <span className="justify-start border-l-2 border-[#777474] pl-2">
                Status
              </span>
            </th>
            <th className=" flex items-center">
              <span className="justify-start border-l-2 border-[#777474] pl-2">
                Action
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="h-[50vh] overflow-scroll"></tbody>
      </table>
    </div>
  </div>
  );
};

export default AllUsers;