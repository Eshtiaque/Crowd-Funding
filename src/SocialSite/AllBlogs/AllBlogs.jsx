import { useEffect, useState } from "react";
import SingleBlog from "./SingleBlog";

const AllBlogs = () => {

    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/allSocialPost")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setItems(data);
            })
    }, [])


    return (
        <div className="m-2 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
           {
                    items?.map(item => <SingleBlog
                        key={item._id}
                        item={item}
                    ></SingleBlog>

                    )
                }
           
           
        

        </div>
    );
};

export default AllBlogs;