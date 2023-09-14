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
        <div className="m-2 max-w-5xl mx-auto">
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