import axios from "axios";
import { useState } from "react";
import { useLoaderData } from "react-router";
import { toast } from "react-toastify";

const AllUsers = () => {
  let count = 1;
  const [data, setData] = useState(useLoaderData());

  const handleSearch = (e) => {
    e.preventDefault();
    const search = e.target.search.value;
    axios.get(`https://crowdfunding-gamma.vercel.app/users/${search}`)
      .then(result => setData(result));
  }

  const handleAction = (id, data) => {
    const saveUser = {
    }
    if (data.role == 'admin') {
      saveUser.role = 'user';
    }
    else {
      saveUser.role = 'admin';
    }

    fetch(`https://crowdfunding-gamma.vercel.app/userAction/${id}`, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${localStorage.getItem('set-token-for-user')}`
      },
      body: JSON.stringify(saveUser)
    })
      .then(res => res.json())
      .then(result => {
        console.log(result)
        if (result.modifiedCount > 0) {
          toast.success("modified successfully");
          axios.get('https://crowdfunding-gamma.vercel.app/users')
            .then(result => setData(result));
        }
      })
  }

  return (
    <div className="px-10 mt w-full h-full mt-28 mb-8">
      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mt-5">
        <h1 className="md:text-3xl text-xl text-[#130F49] font-semibold">
          Total Users ({data?.data?.length})
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

      <div className="overflow-x-auto mt-12">
        <table className="table p-4 bg-base-300">
          {/* head */}
          <thead>
            <tr className="text-[#130F49] text-center text-xl">
              <th>#</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.data.map(data => <tr key={data._id}>
                <th className="text-center">{count++}</th>
                <td className="text-center">{data.name}</td>
                <td className="text-center">{data.email}</td>
                <td className="text-center">{data?.role === 'admin'? 'Admin' : 'User' || "User"}</td>
                <td className="text-center">
                  <button onClick={() => handleAction(data._id, data)} className="py-2 px-4 border rounded-lg bg-[#98c292] font-semibold hover:bg-[#74df66]">Change Role</button>
                </td>
              </tr>)
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;