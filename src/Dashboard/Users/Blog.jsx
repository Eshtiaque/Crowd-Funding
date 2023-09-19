import Swal from 'sweetalert2';
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Blogs = () => {
    let count = 1;
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useContext(AuthContext);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://crowdfunding-gamma.vercel.app/individualBLogs/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setProjects(data);
                document.title = "My Blogs";
                setIsLoading(false);
            });
    }, [user]);

    const handleSearch = (e) => {
        e.preventDefault();
        const name = e.target.search.value;
        axios
            .get(`https://crowdfunding-gamma.vercel.app//blogsSearch/${name}`)
            .then((result) => setProjects(result.data));
    };

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to recover it!",
            textColor: '#0000',
            icon: 'warning',
            iconColor: 'red',
            background: 'white',
            Color: '#545454',
            showCancelButton: true,
            confirmButtonColor: '#F40D0D',
            cancelButtonColor: '#gray',
            confirmButtonText: 'Yes, delete it!',
            confirmButtonTextColor: 'black'

        }).then((result) => {
            if (result.isConfirmed) {
                setIsLoading(true);
                fetch(`https://crowdfunding-gamma.vercel.app/individualBLog/delete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your blog has been deleted.',
                                'success'
                            );
                            const remaining = projects.filter(project => project._id !== _id);
                            setProjects(remaining);
                            setIsLoading(false);
                        }
                    });
            }
        });
    };

    return (
        <div className="px-10 w-full h-full mt-28 mb-8">
            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mt-5">
                <h1 className="text-xl md:text-3xl text-[#130F49] font-semibold">
                    Project Requests: ({projects.length})
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
                            {projects?.map((item) => (
                                <tr key={item._id}>
                                    <th className="py-4 text-center">{count++}</th>
                                    <td className="py-4 text-center">{item?.name}</td>
                                    <td className="py-4 text-center">{item?.email}</td>
                                    <td className="py-4 text-center">{item?.phone}</td>
                                    <td className="py-4 text-center">$ {item?.money}</td>
                                    <td className="py-4 text-center">{item?.status === 'approved' ? 'Approved' : 'Pending' || 'Pending'}</td>
                                    <td onClick={() => handleDelete(item._id)} className='text-center cursor-pointer'>
                                        <span className="py-2 px-4 border rounded-lg bg-red-500 font-semibold hover:bg-red-600 text-white">Delete</span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    );
};

export default Blogs;