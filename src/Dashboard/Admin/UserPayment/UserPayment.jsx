import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
    FaBars,
    FaDownload,
    FaGripLinesVertical,
    FaUndoAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from 'axios';

const UserPayment = () => {
    const [payments, setPayments] = useState(useLoaderData());
    useEffect(() => {
        setPayments(payments.filter(payment => payment.transaction !== null && payment.transaction !== undefined));
    }, [])
    let count = 1;
    console.log(payments);

    const handleSearch = (e) => {
        e.preventDefault();
        const name=e.target.search.value;
        console.log(name)
        axios.get(`http://localhost:5000/paymentHistory/${name}`)
        .then(result=>{
            setPayments(result.data.filter(payment => payment.transaction !== null && payment.transaction !== undefined));
        })
    }
    const totalAmount = payments.reduce((accumulator, currentPayment) => {
        return accumulator + parseFloat(currentPayment.price);
    }, 0);
    return (
        <div className="bg-black px-10 mt w-full h-full mt-28 text-white">

            <div className="flex items-center justify-between mt-5">
                <h1 className="text-5xl text-orange-300 normal-case font-semibold">
                    All Payments
                </h1>
                <div className="form-control mt-1 text-black">
                    <div >
                        {/* className="w-full px-4 py-2 mt-3  border border-black rounded-full text-black placeholder-black
                    bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%" */}
                        <form onSubmit={handleSearch} className="input-group">
                            <input
                                name="search"
                                type="text"
                                placeholder="Search…"
                                className="input input-bordered border border-black rounded-full text-black placeholder-black
                bg-gradient-to-r from-[#F99F24] from-10% to-white to-90%"
                            />
                            <button className="btn border border-black rounded-full text-black placeholder-black
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
            <div className="flex justify-between items-center mt-10 ml-1 uppercase text-lg tracking-wide">
                <div className="flex items-center justify-center gap-5">
                    {/* <p className='flex dropdown mb-32 items-center justify-center gap-2'><FaGripLinesVertical />Column</p> */}
                    <details className="dropdown flex items-center justify-center gap-2">
                        <summary className="m-1 btn bg-[#083149] hover:bg-slate-500 hover:px-2 hover:rounded text-white border-none p-0 text-lg font-normal rounded-none">
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
                        <summary className="m-1 ml-0 btn border-none hover:bg-[#083149] text-white text-lg uppercase font-normal bg-[#083149]">
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
                    <p className="flex items-center justify-center gap-2">
                        <FaUndoAlt></FaUndoAlt>Refresh
                    </p>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="table text-white">
                    {/* head */}
                    <thead>
                        <tr className="text-orange-300 text-xl">
                            <th>Serial No</th>
                            <th>Name</th>
                            <th>Mobile No</th>
                            {/* <th>Address</th> */}
                            <th>transaction Id</th>
                            <th>Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map(data => <tr key={data._id}>
                                <th>{count++}</th>
                                <td>{data?.name}</td>
                                <td>{data?.number}</td>
                                {/* <td>{data.address}</td> */}
                                <td>{data.transaction}</td>
                                <td>{data?.price}/=</td>
                                <Link to={`/dashboard/description/${data?._id}`} className="btn rounded-bl-full rounded-tr-full  bg-transparent text-[#F99F24] hover:text-black hover:bg-[#F99F24] my-2 ">  <td>Details</td> </Link>
                            </tr>)
                        }
                        <tr>
                            <td>Total Amount</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{totalAmount}/=</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserPayment;