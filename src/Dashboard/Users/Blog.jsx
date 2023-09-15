import Swal from 'sweetalert2'
import { Link } from 'react-router-dom';
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';


const Blogs = () => {
 
    const { user } = useContext(AuthContext);
    const [Toys, setToys] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetch(`https://crowdfunding-gamma.vercel.app/individualBLogs/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setToys(data);
                document.title = "My Blogs";
            })
    }, [user])

    const handleSearch = () => {
        fetch(`https://crowdfunding-gamma.vercel.app/individualBLogs/searchText/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setToys(data);
          });
      };

const handleDelete =_id =>{
    console.log(_id);
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to recover it!",
        textColor:'#0000',
        icon: 'warning',
        iconColor:'red',
        background:'black',
        Color:'#545454',
        showCancelButton: true,
        confirmButtonColor: '#F40D0D',
        cancelButtonColor: '#gray',
        // cancelButtonAriaLabel:'white',
        confirmButtonText: 'Yes, delete it!',
        confirmButtonTextColor:'black'
        
      }).then((result) => {
        if (result.isConfirmed) {
       
        fetch(`https://crowdfunding-gamma.vercel.app/individualBLogs//${_id}`,{
            method:'DELETE'
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.deletedCount>0){
                Swal.fire(
                        'Deleted!',
                        'Your blog has been deleted.',
                        'success'
                      )
        const remaining =Toys.filter(toy=>toy._id!==_id)
        setToys(remaining);
            }
        })
        }
      })
}

    return (


        <div className="my-jobs-container">
            <h1 className="text-center m-2 bg-black text-red-400 p-4 font-black text-4xl rounded-full">My Blog{"'"}s</h1>
            <div className="search-box  text-center">
                <input
               
                        onChange={(e) => setSearchText(e.target.value)}
                    type="text"
                    className="p-1 rounded-lg bg-pink-200 text-black"
                placeholder="Blog Name "
                    />{" "}
                <button onClick={handleSearch} className="btn btn-sm bg-orange-500 m-4">Search</button>
               
                <table className="table w-full">
                    {/* head */}
                    <thead className="">
                        <tr >
                            <th className="bg-black border rounded text-center text-white">#</th>
                            <th className="bg-black border rounded text-center text-white">Blog Name</th>
                            <th className="bg-black border rounded text-center text-white">User Name</th>
                            <th className="bg-black border rounded text-center text-white">Sub-category </th>
                            {/* <th className="bg-black border rounded text-center text-white">Price</th> */}
                            {/* <th className="bg-black border rounded text-center text-white" >Quantity</th> */}
                            <th className="bg-black border rounded text-center text-white">Edit</th>
                            <th className="bg-black border rounded text-center text-white">Delete</th>

                        </tr>
                    </thead>
                    <tbody className="text-black text-center bg-black">
                        {
                            Toys.map((toy, index) => <tr key={toy}>
                                <td className="text-center border-black text-black bg-red-200">{index + 1}</td>
                                <td className="text-center border-black text-black bg-red-300 font-bold">{toy.name}</td>
                                <td className="text-center border-black text-black bg-red-200">{toy.sellerName}</td>
                                <td className="text-center border-black text-black bg-red-300">{toy.category}</td>
                                {/* <td className="text-center border-black text-black bg-red-200">{toy.price}</td>
                                <td className="text-center border-black text-black bg-red-300">{toy.quantity}</td> */}
                                <td className="text-center border-black text-black bg-red-200">
                                    <Link to={`/editToy/${toy._id}`}>
                                    <button className="btn rounded-full bg-gradient-to-r from-[#ff0844] via-[#ffb199] to-orange-400 text-black " >Edit</button>
                                    </Link>
                                    
                                </td>
                                <td className="text-center border-black text-black bg-red-300">
                                    {" "}
                                    <button onClick={()=>handleDelete(toy._id)} className="btn bg-gradient-to-r from-orange-400 via-[#ffb199] to-[#ff0844] text-black">Delete
                                    </button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    )
};

export default Blogs;