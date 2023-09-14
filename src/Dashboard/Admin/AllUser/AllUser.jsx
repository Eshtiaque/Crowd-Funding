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
        if (result.modifiedCount > 0) {
          toast.success("modified successfully");
          axios.get('https://crowdfunding-gamma.vercel.app/users')
            .then(result => setData(result));
        }
      })
  }

  return (
    <div className="bg-black px-10 mt w-full h-full mt-28 text-white">
      <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mt-5">
        <h1 className="md:text-4xl text-2xl text-orange-300 normal-case font-semibold">
          All Users ({data?.data?.length})
        </h1>
        <div className="form-control mt-1 text-black">
          <div >
            <form className="input-group" onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                placeholder="Search…"
                className=" input input-bordered border border-black rounded-full text-black placeholder-black
                bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%"
              />
              <button className="btn  border border-black rounded-full text-black placeholder-black
                bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%">
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
        <table className="table text-white">
          {/* head */}
          <thead>
            <tr className="text-orange-300 text-xl">
              <th>Serial No</th>
              <th>Name</th>
              <th>E-mail</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.data.map(data => <tr key={data._id}>
                <th >{count++}</th>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data?.role || "User"}</td>
                <td>
                  <button onClick={() => handleAction(data._id, data)} className="py-2 px-4 border border-white rounded-bl-full rounded-tr-full bg-transparent text-[#F99F24] hover:text-black hover:bg-[#F99F24]">change role</button>
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