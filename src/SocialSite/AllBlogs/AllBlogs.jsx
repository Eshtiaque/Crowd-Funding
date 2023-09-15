import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";
import { Link } from "react-router-dom";

const AllBlogs = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("https://crowdfunding-gamma.vercel.app/allSocialPost")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
    }, [])


    return (
        <div className=" mt-3 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:p-12 md:p-12">
           
           {
                    items?.map(item => <>
                    <Link to={`/socialBlog/details/${item?._id}`}>
                    <SingleBlog
                        key={item._id}
                        item={item}
                    ></SingleBlog>
                    </Link>
                    </>

                    )
                }
           
           
        

        </div>
    );
};

export default AllBlogs;