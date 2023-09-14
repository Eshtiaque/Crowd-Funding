import  { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';

const UserPayment = () => {
    const [payments, setPayments] = useState(useLoaderData());
    useEffect(() => {
        setPayments(payments.filter(payment => payment.transaction !== null && payment.transaction !== undefined));
    }, [])

    let count = 1;

    const handleSearch = (e) => {
        e.preventDefault();
        const name=e.target.search.value;
        // console.log(name)
        axios.get(`https://crowdfunding-gamma.vercel.app/paymentHistory/${name}`)
        .then(result=>{
            setPayments(result.data.filter(payment => payment.transaction !== null && payment.transaction !== undefined));
        })
    }
    const totalAmount = payments.reduce((accumulator, currentPayment) => {
        return accumulator + parseFloat(currentPayment.price);
    }, 0);
    // console.log(payments)

    return (
        <div className="bg-black px-10 min-h-[83vh] w-full h-full mt-28 text-white">

            <div className="flex flex-col md:flex-row gap-6 md:items-center justify-between mt-5">
                <h1 className="text-2xl md:text-4xl text-orange-300 normal-case font-semibold">
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

            <div className="overflow-x-auto mt-12">
                <table className="table text-white">
                    {/* head */}
                    <thead>
                        <tr className="text-orange-300 text-xl text-center">
                            <th>Serial No</th>
                            <th>Name</th>
                            <th>Mobile No</th>
                            <th>Address</th>
                            <th>transaction Id</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments?.map(data => <tr key={data._id}>
                                <th>{count++}</th>
                                <td>{data?.name}</td>
                                <td>{data?.number}</td>
                                <td>{data.address}</td>
                                <td>{data.transaction}</td>
                                <td>{data?.price} $</td>
                            </tr>)
                        }
                        <tr>
                            <td>Total Amount =</td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>{totalAmount} $</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserPayment;