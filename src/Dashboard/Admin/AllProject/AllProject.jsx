import axios from "axios";
import { useState, useEffect } from "react";
import { FaUndoAlt } from "react-icons/fa";
import { useLoaderData } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AllProject = () => {
  let count = 1;
  const [data, setData] = useState(useLoaderData());
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    setIsLoading(true);
    axios
      .get("https://crowdfunding-gamma.vercel.app/blogsSearch")
      .then((result) => {
        setData(result.data);
        setIsLoading(false);
        toast.success("Data refreshed");
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        setIsLoading(false);
      });
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const name = e.target.search.value;
    axios
      .get(`https://crowdfunding-gamma.vercel.app/blogsSearch/${name}`)
      .then((result) => setData(result.data));
  };

  const handleRefresh = () => {
    fetchData();
  };

  return (
    <div className="px-10 w-full h-full mt-28 mb-8">
      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mt-5">
        <h1 className="text-xl md:text-3xl text-[#130F49] font-semibold">
          Project Requests: ({data?.data?.length})
        </h1>
        <div className="form-control mt-1">
          <div >
            <form className="input-group" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                placeholder="Search…"
                className="input input-bordered border border-gray-600 rounded-full text-black placeholder-gray-500
                bg-gradient-to-r from-[#E3F9E0] from-10% to-white to-90%"
              />
              <button className="btn border border-gray-600 rounded-full text-gray-600 placeholder-black
                bg-gradient-to-r from-[#E3F9E0] from-10% to-white to-90%">
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
            </form>
          </div>
        </div>
      </div>
      <div className="flex items-end justify-end my-4">
        <p
          className="flex items-center justify-center gap-2 cursor-pointer hover:scale-95 hover:duration-300 duration-300"
          onClick={handleRefresh}
        >
          <FaUndoAlt></FaUndoAlt>Refresh
        </p>
      </div>

      <div className="overflow-x-auto mt-12">
        {isLoading ? (
          <div className="text-center text-gray-500 text-lg my-8">
            Refreshing...
          </div>
        ) : (
          <table className="table p-4 bg-base-300">
            <thead>
              <tr className="text-[#130F49] text-center text-xl">
                <th>#</th>
                <th>Name</th>
                <th>E-mail</th>
                <th>Mobile</th>
                <th>Value</th>
                <th>status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data?.map((item) => (
                <tr key={item._id}>
                  <th className="py-4 text-center">{count++}</th>
                  <td className="py-4 text-center">{item?.name}</td>
                  <td className="py-4 text-center">{item?.email}</td>
                  <td className="py-4 text-center">{item?.phone}</td>
                  <td className="py-4 text-center">$ {item?.money}</td>
                  <td className="py-4 text-center">{item?.status === 'approved' ? 'Approved' : 'Pending' || 'Pending'}</td>
                  <Link
                    to={`/dashboard/description/${item?._id}`}
                    className="py-2 px-4 border rounded-lg bg-[#98c292] font-semibold hover:bg-[#74df66]"
                  >
                    <td>Details</td>
                  </Link>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllProject;
